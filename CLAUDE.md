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
- **Icons:** Font Awesome 6 via CDN (`all.min.css`) — use `<i class="fa-brands fa-spotify"></i>` etc.
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
    Layout.astro   ← shared layout: nav, footer, Google Analytics, social icons
  pages/
    index.astro    ← homepage: hero slideshow, about, latest releases, latest lyrics, videos
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
    logo.svg               ← band logo (vector, used in nav/about/footer)
    logo.png               ← original logo source
    logo-800w.webp         ← raster copy at 800px wide
    logo-400w.webp         ← raster copy at 400px wide
    banner/                ← hero slideshow images (WebP only — see banner rules)
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

Add it to `src/data/releases.ts`. Releases are sorted by release date DESC (latest first):

```ts
{
  slug: 'release-slug',
  title: 'Release Title',
  type: 'Single',          // 'Single' | 'Album' | 'EP' | 'LP'
  year: 2026,
  releaseDate: 'May 1, 2026',
  label: 'TS Music Records',
  upc: '000000000000',     // optional
  promotionUrl: 'https://distrokid.com/...',
  spotifyUrl: 'https://open.spotify.com/album/...',
  appleMusicUrl: 'https://music.apple.com/...',
  description: 'Short English description.',
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

### Spotify embed

The release detail page automatically embeds the Spotify player when `spotifyUrl` is set. The embed URL is derived from the Spotify URL — no extra field needed.

### Where release covers appear automatically

- `/releases` index — 300w thumbnail in the card grid
- `/releases/[slug]` — 600w in the detail sidebar
- `/lyrics/[slug]` — 600w above the video embed, if the song belongs to a release with a cover
- Homepage "Latest Releases" section — 600w/300w responsive

## Images

### Logo

- **Source of truth:** `public/images/logo.svg` (edited manually by the user)
- **Usage:** `<img src="/images/logo.svg" />` in nav (64px tall), about section (responsive), footer
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

### Hero banner images

**Location:** `public/images/banner/`

**Rule:** Original PNG/JPG files are excluded from the repo via `.gitignore`. Only commit the WebP versions.

**Naming convention:** `banner-1`, `banner-2`, `banner-3`, `banner-4` etc.

**When adding a new banner image**, generate four WebP sizes:

```bash
python3 -c "
from PIL import Image
src = 'public/images/banner/source.png'  # original file
base = 'public/images/banner/banner-N'   # output base name
img = Image.open(src).convert('RGB')
for suffix, w in [('1920', 1920), ('1280', 1280), ('768', 768), ('480', 480)]:
    c = img.copy(); c.thumbnail((w, 9999), Image.LANCZOS)
    c.save(f'{base}-{suffix}w.webp', 'WEBP', quality=85)
"
```

Then add a new `<div class="banner-slide">` in `src/pages/index.astro` and a new dot button in `.hero__dots`.

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

Then add the `cover` field to the release in `src/data/releases.ts` pointing to the base path (without extension).

### General image rules

- Always use WebP for optimized versions; keep the original JPG/PNG as source
- Original high-res PNGs/JPGs for banners are excluded from the repo — add to `.gitignore`
- Always add `width` and `height` attributes to `<img>` tags
- Use `loading="lazy"` on all images below the fold; use `fetchpriority="high"` on the first hero image
- Store all public assets under `public/images/`

## Homepage Structure

Sections in order (top to bottom):

1. **Hero** — full-screen image slideshow (4 rotating banners, 6s interval, dot navigation, vignette overlay)
2. **Listen Strip** — Spotify + Apple Music artist page links and "This is Adolxsense" playlist links
3. **About** — band bio with logo, centered text, influences, closing statement
4. **Latest Releases** — 3 most recent releases with cover, streaming buttons, release link
5. **Latest Lyrics** — 4 most recent songs with cover art, linking to lyrics pages
6. **Latest Videos** — 3 video embeds (YouTube)
7. **Footer** — logo, social icons, nav links, contact email, copyright

## Social Media & Streaming

Social links are defined in `src/layouts/Layout.astro` in the `socials` array and render in the nav and footer automatically.

| Platform | Handle/URL |
|---|---|
| TikTok | https://www.tiktok.com/@adolxsense |
| YouTube | https://www.youtube.com/@adolxsenseofficial |
| Instagram | https://www.instagram.com/adolxsense |
| Facebook | https://www.facebook.com/adolxsense |
| X | https://x.com/adolxsense |
| Spotify (artist) | https://open.spotify.com/artist/0E2Sa4BxDqWcleazYE7lUT |
| Apple Music (artist) | https://music.apple.com/br/artist/adolxsense/1848634461 |

## Contact

- **Email:** hey@adolxsense.com (shown in footer)

## Streaming Button Style

Streaming buttons (Spotify, Apple Music) use a **bordered style with no background**:
- Spotify: green border + green text (`#1DB954`)
- Apple Music: red border + red text (`#fc3c44`)
- Icons via Font Awesome: `fa-brands fa-spotify`, `fa-brands fa-apple`

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
