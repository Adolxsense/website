export type ReleaseType = 'Single' | 'Album' | 'EP' | 'LP';

export interface ReleaseTrack {
  title: string;
  /** Slug from songs.ts — if set, shows a link to the lyrics page */
  songSlug?: string;
}

export interface ReleaseCover {
  /** Base path without extension, e.g. /images/releases/album-cover/before-i-became-this-single */
  src: string;
  alt: string;
}

export interface Release {
  slug: string;
  title: string;
  type: ReleaseType;
  year: number;
  label?: string;
  description?: string;
  cover?: ReleaseCover;
  tracks: ReleaseTrack[];
}

export const releases: Release[] = [
  // ── Singles ────────────────────────────────────────
  {
    slug: 'before-i-became-this',
    title: 'Before I Became This',
    type: 'Single',
    year: 2026,
    description: 'Post-grunge emocional denso sobre identidade fragmentada e o olhar para trás.',
    cover: {
      src: '/images/releases/album-cover/before-i-became-this-single',
      alt: 'Before I Became This — Adolxsense Single Cover',
    },
    tracks: [
      { title: 'Before I Became This', songSlug: 'before-i-became-this' },
    ],
  },
  {
    slug: 'strong-all-day',
    title: 'Strong All Day',
    type: 'Single',
    year: 2026,
    label: 'TS Music Records',
    description: 'Nu Metal pesado sobre o paradoxo da máscara — ser forte o dia todo e desmoronar sozinho.',
    tracks: [
      { title: 'Strong All Day', songSlug: 'strong-all-day' },
    ],
  },

  // ── Albums / EPs / LPs ─────────────────────────────
  {
    slug: 'after-the-rain',
    title: 'After the Rain',
    type: 'Album',
    year: 2024,
    tracks: [
      { title: 'After the Rain', songSlug: 'after-the-rain' },
      { title: 'Before I Became This', songSlug: 'before-i-became-this' },
    ],
  },
  {
    slug: 'the-weight-i-hide',
    title: 'The Weight I Hide',
    type: 'Album',
    year: 2024,
    tracks: [
      { title: 'The Weight I Hide' },
      { title: 'Strong All Day', songSlug: 'strong-all-day' },
      { title: 'Inside My Skin' },
      { title: 'Words Never Confessed' },
    ],
  },
  {
    slug: 'under-the-rain',
    title: 'Under the Rain',
    type: 'Album',
    year: 2024,
    tracks: [
      { title: 'Under the Rain', songSlug: 'under-the-rain' },
      { title: 'She Doesn\'t Feel the Rain' },
      { title: 'Break the Echo' },
      { title: 'Fading Echoes' },
    ],
  },
  {
    slug: 'where-light-begins',
    title: 'Where Light Begins',
    type: 'Album',
    year: 2024,
    tracks: [
      { title: 'Where Light Begins' },
      { title: 'Where the Light Still Goes' },
      { title: 'Fragments of Enough' },
      { title: 'You\'ll Never Know My Name' },
    ],
  },
  {
    slug: 'ashes-in-the-rain',
    title: 'Ashes in the Rain',
    type: 'Album',
    year: 2024,
    tracks: [
      { title: 'Ashes in the Rain' },
      { title: 'Rise From Ruin' },
      { title: 'Shadows in the Hallway' },
      { title: 'Screams of Pain' },
    ],
  },
  {
    slug: 'unheard',
    title: 'Unheard',
    type: 'Album',
    year: 2024,
    tracks: [
      { title: 'Shattered Silence' },
      { title: 'Silent Hallways' },
      { title: 'Shatterproof' },
      { title: 'You\'re Still Here' },
    ],
  },
  {
    slug: 'still-reaching',
    title: 'Still Reaching',
    type: 'EP',
    year: 2024,
    tracks: [
      { title: 'Still Reaching' },
      { title: 'Another Life' },
      { title: 'Whiskey Roads' },
    ],
  },
  {
    slug: 'maybe-tomorrow',
    title: 'Maybe Tomorrow',
    type: 'EP',
    year: 2024,
    tracks: [
      { title: 'Maybe Tomorrow' },
      { title: 'Inside the Maze' },
      { title: 'No One Leaves the Desert Unapproved' },
    ],
  },
  {
    slug: 'memories-of-unplayed-songs',
    title: 'Memories of Unplayed Songs',
    type: 'LP',
    year: 2024,
    tracks: [
      { title: 'Eternal Flame' },
      { title: 'Shattered Crown' },
      { title: 'Shattered Horizon' },
      { title: 'Shattered Stillness' },
      { title: 'Shadows in the Room' },
    ],
  },
];

export const releaseTypeOrder: ReleaseType[] = ['Single', 'Album', 'LP', 'EP'];

export function getReleaseBySlug(slug: string): Release | undefined {
  return releases.find((r) => r.slug === slug);
}
