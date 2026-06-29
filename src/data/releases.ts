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
  appleMusicUrl?: string;
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
    spotifyUrl: 'https://open.spotify.com/album/6GK8IRLchCPdqj195Rw4Tn?si=LLdsCEq9TwGqcKt9Iqn8Ow',
    appleMusicUrl: 'https://music.apple.com/br/album/before-i-became-this-single/6766311606',
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
    spotifyUrl: 'https://open.spotify.com/album/0Cn5IEebWpyPhqwUwWR9Dq?si=w79O1LVkSwCgqwgb5Hx5AA',
    appleMusicUrl: 'https://music.apple.com/br/album/strong-all-day-single/1890747740',
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
    spotifyUrl: 'https://open.spotify.com/album/42YhyLVwBcmLQRbBq49mqB?si=dM7ukt7sTZ-3zP4BmO7ghg',
    appleMusicUrl: 'https://music.apple.com/br/album/under-the-rain-single/1888916150',
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
    spotifyUrl: 'https://open.spotify.com/album/6eN0b03KWVmrX0p9bLrUJj?si=jciP6P6IQA62EO1EC5NMcA',
    appleMusicUrl: 'https://music.apple.com/br/album/the-weight-i-hide-single/1868294125',
    cover: {
      src: '/images/releases/album-cover/the-weight-i-hide',
      alt: 'The Weight I Hide — Adolxsense Single Cover',
    },
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
    spotifyUrl: 'https://open.spotify.com/album/6MWGHk3WLtFiJoezXVyB7p?si=9ghufF0eRWOxNaxwPXGwug',
    appleMusicUrl: 'https://music.apple.com/br/album/after-the-rain-single/1857830814',
    description: 'A cinematic ballad. The damp silence after the collapse.',
    cover: {
      src: '/images/releases/album-cover/after-the-rain',
      alt: 'After the Rain — Adolxsense Single Cover',
    },
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
    spotifyUrl: 'https://open.spotify.com/album/1v5jetcKmPXviVY1uGVaOy?si=OVGJc46uS1-7JwEcPtJHlw',
    appleMusicUrl: 'https://music.apple.com/br/album/where-light-begins-single/1857319405',
    cover: {
      src: '/images/releases/album-cover/where-light-begins',
      alt: 'Where Light Begins — Adolxsense Single Cover',
    },
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
    spotifyUrl: 'https://open.spotify.com/album/6tZZaajBtLlib8BrVe16aQ?si=x9h57QzSSiyn2xCwx0SS0g',
    appleMusicUrl: 'https://music.apple.com/br/album/ashes-in-the-rain-single/1854605069',
    cover: {
      src: '/images/releases/album-cover/ashes-in-the-rain',
      alt: 'Ashes in the Rain — Adolxsense Single Cover',
    },
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
    spotifyUrl: 'https://open.spotify.com/album/0xAhTyBPPFUwQaqANo9PoG?si=-MSNHsSiTDS-vGVC1He4Lw',
    appleMusicUrl: 'https://music.apple.com/br/album/unheard/1850765731',
    cover: {
      src: '/images/releases/album-cover/unheard',
      alt: 'Unheard — Adolxsense LP Cover',
    },
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
    spotifyUrl: 'https://open.spotify.com/album/4nyDKnhPzhuBLXjYvObfF3?si=Thjyi2RwTKaWE8M2VibGOw',
    appleMusicUrl: 'https://music.apple.com/br/album/still-reaching-ep/1849932897',
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
    spotifyUrl: 'https://open.spotify.com/album/23wg9GB6q7DZS8pJQYH2gu?si=7dmGEYN9QJu00kTGo5bf7Q',
    appleMusicUrl: 'https://music.apple.com/br/album/maybe-tomorrow-single/1850117103',
    cover: {
      src: '/images/releases/album-cover/maybe-tomorrow',
      alt: 'Maybe Tomorrow — Adolxsense Single Cover',
    },
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
    appleMusicUrl: 'https://music.apple.com/br/album/memories-of-unplayed-songs/1849422593',
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
