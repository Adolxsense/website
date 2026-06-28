# Adolxsense Website — Project Rules

## Development

When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

To clear the Vite/Astro cache when assets appear stale:

```bash
rm -rf node_modules/.vite .astro
```

## Tech Stack

- **Framework:** Astro (static output, deployed to GitHub Pages)
- **Styling:** Plain CSS via `src/styles/global.css` — no Tailwind, no component libraries
- **Fonts:** Bebas Neue (display), Space Grotesk (headings), Inter (body) — loaded from Google Fonts
- **Language:** TypeScript for all data files
- **Deploy:** GitHub Actions → GitHub Pages via `.github/workflows/deploy.yml`
- **Domain:** adolxsense.com (DNS on Cloudflare, proxy disabled for GitHub Pages HTTPS)
- **Node:** >=22.12.0 (required by Astro 7)

## Project Structure

```
src/
  data/
    songs.ts       ← song data: lyrics, translations, metadata
    releases.ts    ← releases: albums, singles, EPs, LPs with tracklists
  layouts/
    Layout.astro   ← shared layout: nav, footer, Google Analytics
  pages/
    index.astro
    lyrics/
      index.astro
      [slug].astro
    releases/
      index.astro
      [slug].astro
    videos.astro
  styles/
    global.css     ← all styles, single file
public/
  images/
    logo.svg               ← band logo (vector, used in nav/hero/footer)
    logo.png               ← original logo source
    logo-800w.webp         ← raster copy at 800px wide
    logo-400w.webp         ← raster copy at 400px wide
    releases/
      album-cover/         ← release cover art (see image rules below)
```

## Language

**All content must be in English US** — page copy, descriptions, UI labels, nav, metadata.

The only exception is the `translation` field in `src/data/songs.ts`, which contains Portuguese (Brazil) lyrics translations. Those must remain in PT-BR.

## Lyrics Rules

### Adding a new song

Add it to `src/data/songs.ts` following the `Song` interface:

```ts
{
  slug: 'song-title-kebab-case',
  title: 'Song Title',
  album: 'Album Name',   // or 'Single'
  year: 2026,
  releaseDate: 'Month D, YYYY',  // optional, shown in Track Info
  label: 'Label Name',           // optional, shown in Track Info
  bpm: 143,
  genre: 'Nu Metal',
  youtubeId: null,   // or 'YouTubeVideoID'
  description: 'Short English description of the track.',
  translation: `...`,  // PT-BR translation (see translation rules)
  lyrics: `...`,
}
```

### Lyrics format

Use section labels in square brackets on their own line:

```
[Verse 1]
Line one
Line two

[Pre-Chorus]
...

[Chorus]
...

[Bridge]
...

[Final Chorus]
...

[Outro]
...
```

### Translation rule (mandatory)

**Every time lyrics are added, always include the Portuguese Brazil translation in the `translation` field — without being asked.** Use the same section structure but translated labels (`[Verso 1]`, `[Refrão]`, `[Ponte]`, etc.). Maintain the emotional weight and singability of the original.

### Side-by-side display

When a song has a `translation` field, the lyrics page automatically renders English and Portuguese side by side. No code changes needed — it's handled by `[slug].astro`.

## Releases Rules

### Adding a new release

Add it to `src/data/releases.ts`:

```ts
{
  slug: 'release-slug',
  title: 'Release Title',
  type: 'Single',   // 'Single' | 'Album' | 'EP' | 'LP'
  year: 2026,
  label: 'Label Name',   // optional
  description: 'Short English description.',  // optional
  cover: {
    src: '/images/releases/album-cover/release-slug',
    alt: 'Release Title — Adolxsense Cover',
  },
  tracks: [
    { title: 'Track Name', songSlug: 'song-slug' },  // songSlug shows Lyrics button
    { title: 'Track Without Lyrics' },                // no songSlug = shows —
  ],
}
```

Releases are grouped by type in this order: Singles → Albums → LPs → EPs.

## Images

### Logo

- **Source of truth:** `public/images/logo.svg` (edited manually by the user)
- **Usage:** `<img src="/images/logo.svg" />` in nav (32px tall), hero (responsive), footer (28px tall)
- **Raster copies:** `logo-800w.webp` and `logo-400w.webp` — regenerate whenever the SVG changes:

```bash
rsvg-convert public/images/logo.svg -w 1600 -o /tmp/logo-1600.png
python3 -c "
from PIL import Image
img = Image.open('/tmp/logo-1600.png').convert('RGBA')
for suffix, w in [('800', 800), ('400', 400)]:
    c = img.copy(); c.thumbnail((w, 9999), Image.LANCZOS)
    c.save(f'public/images/logo-{suffix}w.webp', 'WEBP', quality=90)
"
```

### Release cover art

**Location:** `public/images/releases/album-cover/`

**Naming convention:** `{release-slug}.jpg` (original) + optimized WebP versions.

**When adding a new cover**, always generate three WebP sizes:

```bash
python3 -c "
from PIL import Image
src = 'public/images/releases/album-cover/RELEASE-SLUG.jpg'
base = 'public/images/releases/album-cover/RELEASE-SLUG'
img = Image.open(src).convert('RGB')
for suffix, w in [('1200', 1200), ('600', 600), ('300', 300)]:
    c = img.copy(); c.thumbnail((w, w), Image.LANCZOS)
    c.save(f'{base}-{suffix}w.webp', 'WEBP', quality=88)
"
```

Then add the `cover` field to the release in `src/data/releases.ts` pointing to the base path (without extension). The `<picture>` element with `srcset` is handled automatically by the release and lyrics page templates.

**Where covers appear automatically:**
- `/releases` index — 300w thumbnail in the card grid
- `/releases/[slug]` — 600w in the detail sidebar
- `/lyrics/[slug]` — 600w above the video embed, if the song belongs to a release with a cover

### General image rules

- Always use WebP for optimized versions; keep the original JPG/PNG as source
- Always add `width` and `height` attributes to `<img>` tags
- Use `loading="lazy"` on all images below the fold
- Store all public assets under `public/images/`

## Analytics

Google Analytics tag (G-M5SM5WTL9H) is in `src/layouts/Layout.astro` and loads on every page.

## Navigation

Pages in the nav (in order): Home · Releases · Lyrics · Videos · About

`About` is an anchor link (`/#about`) to the homepage section — it is not a separate page.

Active state uses `pathname.startsWith('/section')` to handle trailing slashes from Astro's static output.

## Deployment

Push to `main` → GitHub Actions builds with Node 22 → deploys to GitHub Pages automatically.

The `public/CNAME` file contains `adolxsense.com` and must not be removed.
The `public/.nojekyll` file disables Jekyll so `_astro/` assets are served correctly.

## Astro Dev Toolbar

Disabled via:

```bash
npx astro preferences disable devToolbar
```

## Documentation

Full Astro docs: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
