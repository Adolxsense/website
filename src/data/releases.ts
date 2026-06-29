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
  releaseDate: string;
  label?: string;
  upc?: string;
  promotionUrl?: string;
  spotifyUrl?: string;
  description?: string;
  cover?: ReleaseCover;
  tracks: ReleaseTrack[];
}

/** Sorted by release date DESC (latest first) */
export const releases: Release[] = [
  {
    slug: 'before-i-became-this',
    title: 'Before I Became This',
    type: 'Single',
    year: 2026,
    releaseDate: 'May 22, 2026',
    label: 'TS Music Records',
    upc: '825324105237',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/before-i-became-this',
    description: 'A dense emotional post-grunge track about fractured identity and looking back at who you used to be.',
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
    releaseDate: 'May 1, 2026',
    label: 'TS Music Records',
    upc: '825583810989',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/strong-all-day',
    description: 'Heavy Nu Metal about the mask paradox — being strong all day and falling apart alone at night.',
    cover: {
      src: '/images/releases/album-cover/strong-all-day-ep',
      alt: 'Strong All Day — Adolxsense Single Cover',
    },
    tracks: [
      { title: 'Strong All Day', songSlug: 'strong-all-day' },
      { title: 'Strong All Day (Acoustic Version)' },
    ],
  },
  {
    slug: 'under-the-rain',
    title: 'Under the Rain',
    type: 'Single',
    year: 2026,
    releaseDate: 'April 17, 2026',
    label: 'TS Music Records',
    upc: '825642014594',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/under-the-rain',
    description: 'A cinematic mid-tempo rock anthem. The band\'s signature track.',
    cover: {
      src: '/images/releases/album-cover/under-the-rain',
      alt: 'Under the Rain — Adolxsense Single Cover',
    },
    tracks: [
      { title: 'Under the Rain', songSlug: 'under-the-rain' },
      { title: 'Under the Rain (Unplugged Version)' },
      { title: 'Under the Rain (Acoustic Version)' },
    ],
  },
  {
    slug: 'the-weight-i-hide',
    title: 'The Weight I Hide',
    type: 'Single',
    year: 2026,
    releaseDate: 'February 20, 2026',
    label: 'TS Music Records',
    upc: '821530844007',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/the-weight-i-hide-2',
    tracks: [
      { title: 'The Weight I Hide' },
      { title: 'The Weight I Hide (Acoustic Version)' },
    ],
  },
  {
    slug: 'after-the-rain',
    title: 'After the Rain',
    type: 'Single',
    year: 2026,
    releaseDate: 'January 9, 2026',
    label: 'TS Music Records',
    upc: '199947443800',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/after-the-rain',
    description: 'A cinematic ballad. The damp silence after the collapse.',
    tracks: [
      { title: 'After the Rain', songSlug: 'after-the-rain' },
      { title: 'After the Rain (Acoustic Version)' },
    ],
  },
  {
    slug: 'where-light-begins',
    title: 'Where Light Begins',
    type: 'Single',
    year: 2025,
    releaseDate: 'December 12, 2025',
    label: 'TS Music Records',
    upc: '199948578884',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/where-light-begins',
    tracks: [
      { title: 'Where Light Begins' },
    ],
  },
  {
    slug: 'ashes-in-the-rain',
    title: 'Ashes in the Rain',
    type: 'Single',
    year: 2025,
    releaseDate: 'December 5, 2025',
    label: 'TS Music Records',
    upc: '199953688516',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/ashes-in-the-rain',
    tracks: [
      { title: 'Ashes in the Rain' },
    ],
  },
  {
    slug: 'unheard',
    title: 'Unheard',
    type: 'LP',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    upc: '199750366068',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/unheard',
    tracks: [
      { title: 'Inside My Skin' },
      { title: 'Shadows in the Room' },
      { title: 'Silent Hallways' },
      { title: 'Break the Echo' },
      { title: "She Doesn't Feel the Rain" },
      { title: 'Where the Light Still Goes' },
      { title: 'Fading Echoes' },
      { title: 'Fading Echoes (Acoustic Version)' },
      { title: 'Fragments of Enough' },
      { title: 'Fragments of Enough (Hip-Hop Version)' },
      { title: 'Fragments of Enough (Acoustic Version)' },
      { title: 'Inside the Maze' },
    ],
  },
  {
    slug: 'still-reaching',
    title: 'Still Reaching',
    type: 'EP',
    year: 2025,
    releaseDate: 'November 14, 2025',
    label: 'TS Music Records',
    upc: '199749036460',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/still-reaching',
    cover: {
      src: '/images/releases/album-cover/still-reaching',
      alt: 'Still Reaching — Adolxsense EP Cover',
    },
    tracks: [
      { title: 'Still Reaching' },
      { title: 'Still Reaching (Heavy Version)' },
      { title: 'Still Reaching (Acoustic Version)' },
      { title: 'Still Reaching (Acoustic Fingerstyle Version)' },
    ],
  },
  {
    slug: 'maybe-tomorrow',
    title: 'Maybe Tomorrow',
    type: 'Single',
    year: 2025,
    releaseDate: 'November 7, 2025',
    label: 'TS Music Records',
    upc: '199749051296',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/maybe-tomorrow',
    tracks: [
      { title: 'Maybe Tomorrow' },
    ],
  },
  {
    slug: 'memories-of-unplayed-songs',
    title: 'Memories of Unplayed Songs',
    type: 'LP',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    upc: '199749826085',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/memories-of-unplayed-songs-2',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/3i95acUgbBHYosdTu9Cglw?si=AZvSjk_OTwOuyiCQAc1j7w',
    cover: {
      src: '/images/releases/album-cover/memories-of-unplayed-songs',
      alt: 'Memories of Unplayed Songs — Adolxsense LP Cover',
    },
    tracks: [
      { title: 'Whiskey Roads' },
      { title: 'Shadows in the Hallway' },
      { title: 'Shattered Silence' },
      { title: 'Shatterproof' },
      { title: 'Shattered Crown' },
      { title: 'Screams of Pain' },
      { title: 'Rise From Ruin' },
      { title: 'Shattered Horizon' },
      { title: 'Shattered Stillness (Acoustic Version)' },
      { title: 'Shattered Stillness (Melancholic Version)' },
      { title: "You'll Never Know My Name" },
      { title: "You're Still Here" },
      { title: 'Words Never Confessed' },
      { title: 'Another Life' },
      { title: 'Eternal Flame' },
      { title: 'Eternal Flame (Acoustic Version)' },
      { title: 'No One Leaves the Desert Unapproved' },
    ],
  },
];

export function getReleaseBySlug(slug: string): Release | undefined {
  return releases.find((r) => r.slug === slug);
}
