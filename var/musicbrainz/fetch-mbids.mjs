#!/usr/bin/env node
/**
 * Pulls MusicBrainz IDs back down once the entries exist, and reports which of
 * the local releases have been matched.
 *
 * This closes the citation loop: MusicBrainz points at adolxsense.com via its
 * "official homepage" relationship, and the site points back at MusicBrainz via
 * schema.org sameAs. Reciprocal links are what turn a self-asserted identity
 * into a corroborated entity — and what makes the Wikidata notability review
 * straightforward later.
 *
 * The MusicBrainz API is read-only for this purpose (only tags, ratings,
 * barcodes and ISRCs can be submitted), so this script never writes anything
 * upstream. It also never edits source files — it prints a snippet to paste.
 *
 * Docs: https://musicbrainz.org/doc/MusicBrainz_API
 *
 * Usage:
 *   node var/musicbrainz/fetch-mbids.mjs                 # search by artist name
 *   node var/musicbrainz/fetch-mbids.mjs <artist-mbid>   # skip the search
 */

import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { releases } from '../../src/data/releases.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, 'mbids.json');

const ARTIST_NAME = 'Adolxsense';
const API = 'https://musicbrainz.org/ws/2';

/**
 * MusicBrainz requires a meaningful User-Agent identifying the application and
 * a contact address. Requests using a generic or default agent are rejected.
 */
const USER_AGENT = 'AdolxsenseSite/1.0 ( hey@adolxsense.com )';

/** The API allows at most one request per second; exceeding it risks an IP block. */
const RATE_LIMIT_MS = 1100;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let lastRequest = 0;

async function api(path) {
  const wait = RATE_LIMIT_MS - (Date.now() - lastRequest);
  if (wait > 0) await sleep(wait);
  lastRequest = Date.now();

  const url = `${API}${path}${path.includes('?') ? '&' : '?'}fmt=json`;
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });

  if (!res.ok) {
    throw new Error(`MusicBrainz ${res.status} ${res.statusText} for ${url}`);
  }
  return res.json();
}

/** Normalises a title for comparison — case, punctuation and spacing vary between sources. */
const normalize = (title) =>
  title
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

async function resolveArtistMbid(argv) {
  const supplied = argv[2];
  if (supplied) {
    console.log(`Using supplied artist MBID: ${supplied}\n`);
    return supplied;
  }

  console.log(`Searching for artist "${ARTIST_NAME}"...`);
  const data = await api(`/artist?query=${encodeURIComponent(`artist:"${ARTIST_NAME}"`)}&limit=5`);
  const matches = data.artists ?? [];

  if (matches.length === 0) {
    console.error(`\nNo artist named "${ARTIST_NAME}" found.`);
    console.error('Create the artist entry first, then re-run — or pass the MBID directly:');
    console.error('  node var/musicbrainz/fetch-mbids.mjs <artist-mbid>');
    process.exit(1);
  }

  matches.forEach((a, i) => {
    const detail = [a.disambiguation, a.country].filter(Boolean).join(', ');
    console.log(`  ${i === 0 ? '→' : ' '} ${a.name}${detail ? ` (${detail})` : ''} — ${a.id} [score ${a.score}]`);
  });

  console.log(`\nUsing the top match. Pass an MBID explicitly if that is wrong.\n`);
  return matches[0].id;
}

async function main() {
  const artistMbid = await resolveArtistMbid(process.argv);

  console.log('Fetching release groups...');
  const data = await api(`/release-group?artist=${artistMbid}&limit=100`);
  const remote = data['release-groups'] ?? [];
  console.log(`Found ${remote.length} release group${remote.length === 1 ? '' : 's'} upstream.\n`);

  const byTitle = new Map(remote.map((rg) => [normalize(rg.title), rg]));

  const rows = releases.map((release) => {
    const match = byTitle.get(normalize(release.title));
    return {
      slug: release.slug,
      title: release.title,
      type: release.type,
      mbid: match?.id ?? null,
      primaryType: match?.['primary-type'] ?? null,
    };
  });

  const width = Math.max(...rows.map((r) => r.title.length));
  console.log('Local release'.padEnd(width) + '  MusicBrainz release group');
  console.log('-'.repeat(width) + '  ' + '-'.repeat(38));
  for (const row of rows) {
    console.log(row.title.padEnd(width) + '  ' + (row.mbid ?? '— not found'));
  }

  const matched = rows.filter((r) => r.mbid);
  console.log(`\n${matched.length}/${rows.length} matched.`);

  const unmatchedRemote = remote.filter(
    (rg) => !releases.some((r) => normalize(r.title) === normalize(rg.title))
  );
  if (unmatchedRemote.length) {
    console.log(`\nUpstream entries with no local counterpart (check for typos):`);
    unmatchedRemote.forEach((rg) => console.log(`  ${rg.title} — ${rg.id}`));
  }

  writeFileSync(OUT, JSON.stringify({ artistMbid, releases: rows }, null, 2) + '\n', 'utf8');
  console.log(`\nWrote ${OUT}`);

  console.log(`
─── Paste into the sameAs array in src/pages/index.astro ───

    'https://musicbrainz.org/artist/${artistMbid}',
`);

  if (matched.length) {
    console.log(`─── Per-release MBIDs for src/data/releases.ts ───\n`);
    matched.forEach((r) => console.log(`  ${r.slug}: musicbrainzId: '${r.mbid}',`));
    console.log();
  }
}

main().catch((err) => {
  console.error(`\n${err.message}`);
  process.exit(1);
});
