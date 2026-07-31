# MusicBrainz tooling

Lives under `var/` because that directory is gitignored — these are one-off
tools, not site source.

## Why this exists

MusicBrainz has no API for creating artists or releases. Only tags, ratings,
barcodes and ISRCs can be submitted programmatically, and automated editing
requires a community-approved bot account. What it does support is **release
editor seeding**: a form POST to `/release/add` that opens the normal Add
Release editor with every field pre-populated. You still review and submit each
one by hand, so these stay human edits.

## Current state

The artist entry already exists — someone (or an importer) created it, already
carrying the correct Spotify and Apple Music IDs, the socials, and the
`official homepage` relationship pointing at adolxsense.com.

```
artist      4ef16ee6-3ee9-4477-8b28-4f3b611b158d
releases    1 of 12 present (Before the Hurt)
```

## Scripts

### `generate-seed.mjs`

Reads `src/data/releases.ts` and writes `seed.html` — one pre-filled form per
release. Releases already present upstream (per `mbids.json`) render as links
instead of submit buttons, so they cannot be added twice. Duplicate release
groups need a voted-through merge request to undo, hence the guard.

```bash
node var/musicbrainz/generate-seed.mjs
open var/musicbrainz/seed.html
```

### `fetch-mbids.mjs`

Reads back what exists upstream and reports which local releases are matched.
Writes `mbids.json` and prints paste-ready snippets. Never edits source files.

```bash
node var/musicbrainz/fetch-mbids.mjs                 # search by artist name
node var/musicbrainz/fetch-mbids.mjs <artist-mbid>   # skip the search
```

Re-run this after a batch of submissions, then regenerate `seed.html` to fold
the new entries into the already-done list.

## API constraints

- **One request per second**, hard limit. Exceeding it risks an IP block.
- A **meaningful User-Agent** with a contact address is mandatory.
- Read endpoints take `?fmt=json`.

Both scripts respect these. Docs: <https://musicbrainz.org/doc/MusicBrainz_API>

## Notes on the data mapping

- MusicBrainz has no `LP` release-group type — LP is a medium format. Both LPs
  map to primary type `Album`.
- Release country is `US`, matching the artist entity's area, with medium format
  `Digital Media`. (`XW` / Worldwide is the other common choice for digital-only
  releases — change `RELEASE_COUNTRY` in `generate-seed.mjs` to switch.)
- Streaming URLs are stripped of `?si=` share tokens and `/intl-pt/` locale
  segments before seeding.
- Relationship types for the streaming links are left to MusicBrainz's own
  domain auto-detection rather than hardcoded numeric IDs.
