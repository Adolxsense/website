#!/usr/bin/env node
/**
 * Generates a local page of pre-filled MusicBrainz "Add Release" forms.
 *
 * MusicBrainz has no API for creating releases — only tags, ratings, barcodes
 * and ISRCs can be submitted programmatically. What it does support is
 * "release editor seeding": a form POST to /release/add that opens the normal
 * Add Release editor with every field already populated.
 *
 * Each submission is still reviewed and confirmed by hand in the browser, so
 * these stay human edits rather than bot edits (MusicBrainz requires prior
 * community approval for bot accounts).
 *
 * Docs: https://musicbrainz.org/doc/Development/Release_Editor_Seeding
 *
 * Usage:
 *   node var/musicbrainz/generate-seed.mjs
 *   open var/musicbrainz/seed.html
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { releases } from '../../src/data/releases.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, 'seed.html');
const MBIDS = resolve(HERE, 'mbids.json');

/**
 * Anything already present upstream (per the last fetch-mbids.mjs run) is
 * rendered as a link rather than a submit button.
 *
 * Duplicate release groups are a genuine problem on MusicBrainz — undoing one
 * needs a merge request voted through by other editors — so the safest design
 * is to make re-submitting an existing release impossible from this page.
 */
const known = existsSync(MBIDS)
  ? JSON.parse(readFileSync(MBIDS, 'utf8'))
  : { artistMbid: '', releases: [] };

const knownBySlug = new Map(
  (known.releases ?? []).filter((r) => r.mbid).map((r) => [r.slug, r.mbid])
);

const ARTIST_NAME = 'Adolxsense';
const SEED_ENDPOINT = 'https://musicbrainz.org/release/add';

/**
 * Release country, matching the artist entry's own area (United States).
 *
 * MusicBrainz also allows XW ("Worldwide") for digital-only releases; US is
 * used here for consistency with the artist entity.
 */
const RELEASE_COUNTRY = 'US';

/**
 * MusicBrainz release-group primary types.
 *
 * Note "LP" is not one of them — in MusicBrainz an LP is a *medium format*,
 * not a release-group type, so both LPs map to "Album".
 */
const RELEASE_GROUP_TYPE = {
  Single: 'Single',
  EP: 'EP',
  Album: 'Album',
  LP: 'Album',
};

/**
 * Known MusicBrainz label entities, keyed by the label string used in
 * releases.ts. Seeding by MBID binds the release to the existing entity;
 * seeding by name only pre-fills a text box the editor still has to match,
 * which risks a duplicate label being created by accident.
 */
const LABEL_MBIDS = {
  'TS Music Records': 'a124057d-a1d5-4a5a-8b6f-bc0eb6a0da7c',
};

const MONTHS = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
};

/** Parses "July 31, 2026" into discrete date parts for the seeding params. */
function parseReleaseDate(text) {
  const match = /^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/.exec(text.trim());
  if (!match) throw new Error(`Unrecognised release date: "${text}"`);

  const [, monthName, day, year] = match;
  const month = MONTHS[monthName.toLowerCase()];
  if (!month) throw new Error(`Unrecognised month: "${monthName}"`);

  return { year: Number(year), month, day: Number(day) };
}

/**
 * Strips tracking params and locale segments from streaming URLs.
 *
 * MusicBrainz expects canonical links — "?si=..." share tokens and "/intl-pt/"
 * locale prefixes are noise that editors would otherwise have to clean up.
 */
function canonicalStreamingUrl(url) {
  if (!url) return null;
  return url
    .split('?')[0]
    .replace('/intl-pt/', '/')
    .replace(/\/$/, '');
}

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const hidden = (name, value) =>
  `        <input type="hidden" name="${escapeHtml(name)}" value="${escapeHtml(value)}">`;

/**
 * Builds the hidden-input payload for one release.
 *
 * The artist MBID is deliberately left blank here — it does not exist until the
 * artist entry is created by hand. The page fills it into every form at runtime
 * from a single input at the top.
 */
function seedFields(release) {
  const date = parseReleaseDate(release.releaseDate);
  const fields = [
    ['name', release.title],
    ['artist_credit.names.0.name', ARTIST_NAME],
    ['artist_credit.names.0.mbid', ''],
    ['type', RELEASE_GROUP_TYPE[release.type]],
    ['status', 'Official'],
    ['language', 'eng'],
    ['script', 'Latn'],
    ['packaging', 'None'],
    ['events.0.date.year', date.year],
    ['events.0.date.month', date.month],
    ['events.0.date.day', date.day],
    ['events.0.country', RELEASE_COUNTRY],
    // Note there is no "mediums.0.position" field — the index is the position.
    ['mediums.0.format', 'Digital Media'],
    ['edit_note', `Details from the artist's official site: https://adolxsense.com/releases/${release.slug}`],
  ];

  if (release.upc) fields.push(['barcode', release.upc]);

  if (release.label) {
    const labelMbid = LABEL_MBIDS[release.label];
    fields.push(labelMbid ? ['labels.0.mbid', labelMbid] : ['labels.0.name', release.label]);
  }

  release.tracks.forEach((track, i) => {
    fields.push([`mediums.0.track.${i}.name`, track.title]);
    fields.push([`mediums.0.track.${i}.number`, i + 1]);
  });

  // MusicBrainz auto-detects the relationship type for known streaming domains.
  const links = [canonicalStreamingUrl(release.spotifyUrl), canonicalStreamingUrl(release.appleMusicUrl)]
    .filter(Boolean);
  links.forEach((url, i) => fields.push([`urls.${i}.url`, url]));

  return fields;
}

function renderCard(release, index) {
  const mbType = RELEASE_GROUP_TYPE[release.type];
  const typeNote = release.type === 'LP' ? ` <span class="note">(LP &rarr; Album)</span>` : '';
  const existingMbid = knownBySlug.get(release.slug);

  const meta = `            <p class="card__meta">
              <span class="tag">${escapeHtml(mbType)}</span>${typeNote}
              <span>${escapeHtml(release.releaseDate)}</span>
              <span>${release.tracks.length} track${release.tracks.length === 1 ? '' : 's'}</span>
              ${release.upc ? `<span>UPC ${escapeHtml(release.upc)}</span>` : '<span class="warn">no UPC</span>'}
            </p>`;

  const tracks = `        <details class="card__tracks">
          <summary>Track list</summary>
          <ol>
${release.tracks.map((t) => `            <li>${escapeHtml(t.title)}</li>`).join('\n')}
          </ol>
        </details>`;

  // Already upstream — render as a read-only link so it cannot be submitted twice.
  if (existingMbid) {
    return `      <div class="card is-existing">
        <div class="card__head">
          <span class="done__num">${String(index + 1).padStart(2, '0')}</span>
          <div>
            <h2 class="card__title">${escapeHtml(release.title)} <span class="pill">already on MusicBrainz</span></h2>
${meta}
          </div>
          <a class="btn btn--ghost" href="https://musicbrainz.org/release-group/${escapeHtml(existingMbid)}" target="_blank" rel="noopener">View entry &rarr;</a>
        </div>
${tracks}
      </div>`;
  }

  const fields = seedFields(release);
  return `      <form class="card" method="post" action="${SEED_ENDPOINT}" target="_blank" data-slug="${escapeHtml(release.slug)}">
${fields.map(([name, value]) => hidden(name, value)).join('\n')}
        <div class="card__head">
          <label class="done">
            <input type="checkbox" class="done__box" data-slug="${escapeHtml(release.slug)}">
            <span class="done__num">${String(index + 1).padStart(2, '0')}</span>
          </label>
          <div>
            <h2 class="card__title">${escapeHtml(release.title)}</h2>
${meta}
          </div>
          <button type="submit" class="btn">Open in MusicBrainz &rarr;</button>
        </div>
${tracks}
      </form>`;
}

const cards = releases.map(renderCard).join('\n\n');
const totalTracks = releases.reduce((sum, r) => sum + r.tracks.length, 0);
const pending = releases.filter((r) => !knownBySlug.has(r.slug)).length;

const artistStep = known.artistMbid
  ? `<li>The artist entry <strong>already exists</strong> — MBID is pre-filled below and applied to all forms.</li>`
  : `<li>Create the <strong>artist</strong> entry by hand at <code>musicbrainz.org/artist/create</code>, then paste its MBID below.</li>`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MusicBrainz seeding — ${ARTIST_NAME}</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 40px 24px 80px;
    background: #0b0b0d; color: #e8e8ea;
    font: 15px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .wrap { max-width: 900px; margin: 0 auto; }
  h1 { font-size: 1.6rem; margin: 0 0 6px; letter-spacing: -0.01em; }
  .sub { color: #8a8a94; margin: 0 0 28px; font-size: 0.9rem; }
  .panel {
    background: #141418; border: 1px solid #26262e; border-radius: 10px;
    padding: 18px 20px; margin-bottom: 14px;
  }
  .panel label { display: block; font-weight: 600; margin-bottom: 8px; font-size: 0.85rem; }
  .panel input[type=text] {
    width: 100%; padding: 10px 12px; border-radius: 7px;
    border: 1px solid #33333d; background: #0b0b0d; color: #e8e8ea;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.85rem;
  }
  .panel input[type=text]:focus { outline: 2px solid #d64b4b; outline-offset: -1px; }
  .hint { color: #8a8a94; font-size: 0.8rem; margin: 8px 0 0; }
  .status { font-size: 0.82rem; margin-top: 10px; }
  .status.ok { color: #4ec98a; }
  .status.bad { color: #e0a34a; }
  .steps { background: #141418; border: 1px solid #26262e; border-radius: 10px; padding: 18px 20px 18px 38px; margin-bottom: 26px; }
  .steps li { margin-bottom: 7px; color: #b9b9c2; font-size: 0.88rem; }
  .steps li:last-child { margin-bottom: 0; }
  .steps code { background: #0b0b0d; padding: 1px 6px; border-radius: 4px; font-size: 0.85em; }
  .card {
    background: #141418; border: 1px solid #26262e; border-radius: 10px;
    padding: 16px 18px; margin-bottom: 12px; transition: opacity .15s, border-color .15s;
  }
  .card.is-done { opacity: 0.45; border-color: #1d3d2c; }
  .card.is-existing { border-color: #1d3d2c; background: #101512; }
  .card.is-existing .done__num { padding-left: 25px; }
  .pill {
    background: #1d3d2c; color: #4ec98a; padding: 2px 9px; border-radius: 20px;
    font-size: 0.66rem; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.05em; vertical-align: middle; margin-left: 6px;
  }
  .card__head { display: flex; align-items: center; gap: 14px; }
  .card__head > div { flex: 1; min-width: 0; }
  .card__title { font-size: 1.02rem; margin: 0 0 5px; }
  .card__meta { margin: 0; color: #8a8a94; font-size: 0.8rem; display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  .tag { background: #2a2a33; color: #cfcfd8; padding: 1px 8px; border-radius: 20px; font-size: 0.75rem; }
  .note { color: #6e6e78; font-size: 0.75rem; }
  .warn { color: #e0a34a; }
  .done { display: flex; align-items: center; gap: 9px; cursor: pointer; user-select: none; }
  .done__box { width: 16px; height: 16px; accent-color: #4ec98a; cursor: pointer; }
  .done__num { font-family: ui-monospace, Menlo, monospace; color: #55555f; font-size: 0.85rem; }
  .btn {
    background: transparent; color: #d64b4b; border: 1px solid #d64b4b;
    padding: 8px 15px; border-radius: 7px; cursor: pointer;
    font-size: 0.82rem; font-weight: 600; white-space: nowrap;
  }
  .btn:hover { background: #d64b4b; color: #fff; }
  .btn:disabled { opacity: .35; cursor: not-allowed; border-color: #55555f; color: #55555f; background: transparent; }
  /* Declared after .btn — equal specificity, so source order decides the winner. */
  .btn--ghost { color: #4ec98a; border-color: #2c5a41; text-decoration: none; display: inline-block; }
  .btn--ghost:hover { background: #4ec98a; color: #0b0b0d; border-color: #4ec98a; }
  .card__tracks { margin-top: 12px; }
  .card__tracks summary { cursor: pointer; color: #8a8a94; font-size: 0.8rem; }
  .card__tracks ol { margin: 10px 0 0; padding-left: 22px; color: #b9b9c2; font-size: 0.83rem; }
  .card__tracks li { margin-bottom: 3px; }
  @media (max-width: 620px) {
    .card__head { flex-wrap: wrap; }
    .btn { width: 100%; }
  }
</style>
</head>
<body>
<div class="wrap">
  <h1>MusicBrainz seeding — ${ARTIST_NAME}</h1>
  <p class="sub">${releases.length} releases &middot; ${totalTracks} tracks &middot; <strong>${pending} still to add</strong> &middot; generated from <code>src/data/releases.ts</code></p>

  <ol class="steps">
    ${artistStep}
    <li>Click each release. The Add Release editor opens pre-filled in a new tab — <strong>review, then submit</strong>.</li>
    <li>Tick it off here to keep your place.</li>
    <li>Re-run <code>fetch-mbids.mjs</code> afterwards, then regenerate this page — anything already upstream turns into a link so it cannot be added twice.</li>
  </ol>

  <div class="panel">
    <label for="mbid">Artist MBID</label>
    <input type="text" id="mbid" value="${escapeHtml(known.artistMbid ?? '')}" placeholder="e.g. 5b11f4ce-a62d-471e-81fc-a69a8278c7da" autocomplete="off" spellcheck="false">
    <p class="hint">A 36-character UUID from the artist page URL.</p>
    <p class="status bad" id="status">Not set — buttons are disabled until a valid MBID is entered.</p>
  </div>

${cards}
</div>

<script>
// Wrapped in an IIFE: a top-level "var status" would assign to window.status,
// whose legacy setter coerces the value to a string and silently discards the
// element reference.
(function () {
  var UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  var input = document.getElementById('mbid');
  var statusEl = document.getElementById('status');
  var buttons = document.querySelectorAll('.btn');
  var mbidFields = document.querySelectorAll('input[name="artist_credit.names.0.mbid"]');

  /** Pushes the MBID into every form and locks submission until it is valid. */
  function apply(value) {
    var trimmed = value.trim();
    var valid = UUID.test(trimmed);
    for (var i = 0; i < mbidFields.length; i++) mbidFields[i].value = valid ? trimmed : '';
    for (var j = 0; j < buttons.length; j++) buttons[j].disabled = !valid;
    statusEl.textContent = valid
      ? 'MBID applied to all ' + mbidFields.length + ' forms.'
      : (trimmed ? 'That does not look like a valid MBID.' : 'Not set — buttons are disabled until a valid MBID is entered.');
    statusEl.className = 'status ' + (valid ? 'ok' : 'bad');
    if (valid) localStorage.setItem('mb.artistMbid', trimmed);
  }

  input.addEventListener('input', function () { apply(input.value); });
  var saved = localStorage.getItem('mb.artistMbid');
  if (saved) { input.value = saved; }
  apply(input.value);

  /** Per-release "done" ticks, so progress survives a page reload. */
  var boxes = document.querySelectorAll('.done__box');
  for (var k = 0; k < boxes.length; k++) {
    (function (box) {
      var key = 'mb.done.' + box.dataset.slug;
      var card = box.closest('.card');
      box.checked = localStorage.getItem(key) === '1';
      card.classList.toggle('is-done', box.checked);
      box.addEventListener('change', function () {
        localStorage.setItem(key, box.checked ? '1' : '0');
        card.classList.toggle('is-done', box.checked);
      });
    })(boxes[k]);
  }
})();
</script>
</body>
</html>
`;

writeFileSync(OUT, html, 'utf8');
console.log(`Wrote ${OUT}`);
console.log(
  `${releases.length} releases, ${totalTracks} tracks — ${pending} seeded, ` +
    `${releases.length - pending} already on MusicBrainz.`
);
