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
  /**
   * MusicBrainz release group MBID.
   *
   * Cited from the release page's JSON-LD so the page points back at the
   * MusicBrainz entry that already points at this site — the reciprocal link
   * is what corroborates the entity rather than merely asserting it.
   */
  musicbrainzId?: string;
  promotionUrl?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  description?: string;
  cover?: ReleaseCover;
  /**
   * Promote this release with an "Out Now" slide in the homepage hero.
   * Only one release should be featured at a time.
   */
  featured?: boolean;
  /** Wide banner base path (no extension) for the hero slide. WebP: 480/768/1280/1920w. */
  heroBanner?: string;
  /** Short punchy line shown under the title on the hero slide. */
  tagline?: string;
  tracks: ReleaseTrack[];
}

/** Sorted by release date DESC (latest first) */
export const releases: Release[] = [
  {
    slug: 'before-the-hurt',
    title: 'Before the Hurt',
    type: 'Single',
    year: 2026,
    releaseDate: 'July 31, 2026',
    label: 'TS Music Records',
    upc: '882100256392',
    musicbrainzId: '1f057d53-09df-4c53-b5d9-cc0af71df991',
    spotifyUrl: 'https://open.spotify.com/album/0ZzKFztVKAP2AwtDmbolDh',
    appleMusicUrl: 'https://music.apple.com/br/album/before-the-hurt-single/6791437129',
    description: "There's a version of you that got left behind — and it still stares back every time you catch your reflection. A cinematic ballad that slowly unravels into an explosion.",
    cover: {
      src: '/images/releases/album-cover/before-the-hurt',
      alt: 'Before the Hurt — Adolxsense Single Cover',
    },
    featured: true,
    heroBanner: '/images/banner/before-the-hurt-banner',
    tagline: "I'm still alive, but I've come undone.",
    tracks: [
      { title: 'Before the Hurt', songSlug: 'before-the-hurt' },
    ],
  },
  {
    slug: 'before-i-became-this',
    title: 'Before I Became This',
    type: 'Single',
    year: 2026,
    releaseDate: 'May 22, 2026',
    label: 'TS Music Records',
    upc: '825324105237',
    musicbrainzId: '84d0dedf-af7b-4b83-9bc4-c71700f09d93',
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
    musicbrainzId: '39c11a0e-97c0-4f93-aa30-384afa8da430',
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
      { title: 'Strong All Day (Acoustic Version)', songSlug: 'strong-all-day' },
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
    musicbrainzId: '8fed8025-0404-4537-9ebd-3a83918b6495',
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
      { title: 'Under the Rain (Unplugged Version)', songSlug: 'under-the-rain' },
      { title: 'Under the Rain (Acoustic Version)', songSlug: 'under-the-rain' },
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
    musicbrainzId: 'b5003e55-cbad-4420-aacd-24a73c029557',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/the-weight-i-hide-2',
    spotifyUrl: 'https://open.spotify.com/album/6eN0b03KWVmrX0p9bLrUJj?si=jciP6P6IQA62EO1EC5NMcA',
    appleMusicUrl: 'https://music.apple.com/br/album/the-weight-i-hide-single/1868294125',
    cover: {
      src: '/images/releases/album-cover/the-weight-i-hide',
      alt: 'The Weight I Hide — Adolxsense Single Cover',
    },
    tracks: [
      { title: 'The Weight I Hide', songSlug: 'the-weight-i-hide' },
      { title: 'The Weight I Hide (Acoustic Version)', songSlug: 'the-weight-i-hide' },
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
    musicbrainzId: '0b99e81b-b2a7-4ca1-b2f4-dcf96ac3e1a7',
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
      { title: 'After the Rain (Acoustic Version)', songSlug: 'after-the-rain' },
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
    musicbrainzId: 'b8307283-c9bb-45ab-b897-fb5d136d33a6',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/where-light-begins',
    spotifyUrl: 'https://open.spotify.com/album/1v5jetcKmPXviVY1uGVaOy?si=OVGJc46uS1-7JwEcPtJHlw',
    appleMusicUrl: 'https://music.apple.com/br/album/where-light-begins-single/1857319405',
    cover: {
      src: '/images/releases/album-cover/where-light-begins',
      alt: 'Where Light Begins — Adolxsense Single Cover',
    },
    tracks: [
      { title: 'Where Light Begins', songSlug: 'where-light-begins' },
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
    musicbrainzId: 'a3fa24d6-5487-43e1-9b8e-28758d5f71ae',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/ashes-in-the-rain',
    spotifyUrl: 'https://open.spotify.com/album/6tZZaajBtLlib8BrVe16aQ?si=x9h57QzSSiyn2xCwx0SS0g',
    appleMusicUrl: 'https://music.apple.com/br/album/ashes-in-the-rain-single/1854605069',
    cover: {
      src: '/images/releases/album-cover/ashes-in-the-rain',
      alt: 'Ashes in the Rain — Adolxsense Single Cover',
    },
    tracks: [
      { title: 'Ashes in the Rain', songSlug: 'ashes-in-the-rain' },
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
    musicbrainzId: '1da86c08-d036-4f59-a0bf-0f73173173a4',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/unheard',
    spotifyUrl: 'https://open.spotify.com/album/0xAhTyBPPFUwQaqANo9PoG?si=-MSNHsSiTDS-vGVC1He4Lw',
    appleMusicUrl: 'https://music.apple.com/br/album/unheard/1850765731',
    cover: {
      src: '/images/releases/album-cover/unheard',
      alt: 'Unheard — Adolxsense LP Cover',
    },
    tracks: [
      { title: 'Inside My Skin', songSlug: 'inside-my-skin' },
      { title: 'Shadows in the Room', songSlug: 'shadows-in-the-room' },
      { title: 'Silent Hallways', songSlug: 'silent-hallways' },
      { title: 'Break the Echo', songSlug: 'break-the-echo' },
      { title: "She Doesn't Feel the Rain", songSlug: 'she-doesn-t-feel-the-rain' },
      { title: 'Where the Light Still Goes', songSlug: 'where-the-light-still-goes' },
      { title: 'Fading Echoes', songSlug: 'fading-echoes' },
      { title: 'Fading Echoes (Acoustic Version)', songSlug: 'fading-echoes' },
      { title: 'Fragments of Enough', songSlug: 'fragments-of-enough' },
      { title: 'Fragments of Enough (Hip-Hop Version)', songSlug: 'fragments-of-enough' },
      { title: 'Fragments of Enough (Acoustic Version)', songSlug: 'fragments-of-enough' },
      { title: 'Inside the Maze', songSlug: 'inside-the-maze' },
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
    musicbrainzId: '882aa454-d90a-4a66-9740-6d12005ec768',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/still-reaching',
    spotifyUrl: 'https://open.spotify.com/album/4nyDKnhPzhuBLXjYvObfF3?si=Thjyi2RwTKaWE8M2VibGOw',
    appleMusicUrl: 'https://music.apple.com/br/album/still-reaching-ep/1849932897',
    cover: {
      src: '/images/releases/album-cover/still-reaching',
      alt: 'Still Reaching — Adolxsense EP Cover',
    },
    tracks: [
      { title: 'Still Reaching', songSlug: 'still-reaching' },
      { title: 'Still Reaching (Heavy Version)', songSlug: 'still-reaching' },
      { title: 'Still Reaching (Acoustic Version)', songSlug: 'still-reaching' },
      { title: 'Still Reaching (Acoustic Fingerstyle Version)', songSlug: 'still-reaching' },
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
    musicbrainzId: 'e21ac635-4cb4-4e03-92f9-29ccde0dcb4a',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/maybe-tomorrow',
    spotifyUrl: 'https://open.spotify.com/album/23wg9GB6q7DZS8pJQYH2gu?si=7dmGEYN9QJu00kTGo5bf7Q',
    appleMusicUrl: 'https://music.apple.com/br/album/maybe-tomorrow-single/1850117103',
    cover: {
      src: '/images/releases/album-cover/maybe-tomorrow',
      alt: 'Maybe Tomorrow — Adolxsense Single Cover',
    },
    tracks: [
      { title: 'Maybe Tomorrow', songSlug: 'maybe-tomorrow' },
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
    musicbrainzId: 'e9e11000-9d1d-43b8-9f64-799a8c56380f',
    promotionUrl: 'https://distrokid.com/hyperfollow/adolxsense1/memories-of-unplayed-songs-2',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/3i95acUgbBHYosdTu9Cglw?si=AZvSjk_OTwOuyiCQAc1j7w',
    appleMusicUrl: 'https://music.apple.com/br/album/memories-of-unplayed-songs/1849422593',
    cover: {
      src: '/images/releases/album-cover/memories-of-unplayed-songs',
      alt: 'Memories of Unplayed Songs — Adolxsense LP Cover',
    },
    tracks: [
      { title: 'Whiskey Roads', songSlug: 'whiskey-roads' },
      { title: 'Shadows in the Hallway', songSlug: 'shadows-in-the-hallway' },
      { title: 'Shattered Silence', songSlug: 'shattered-silence' },
      { title: 'Shatterproof', songSlug: 'shatterproof' },
      { title: 'Shattered Crown', songSlug: 'shattered-crown' },
      { title: 'Screams of Pain', songSlug: 'screams-of-pain' },
      { title: 'Rise From Ruin', songSlug: 'rise-from-ruin' },
      { title: 'Shattered Horizon', songSlug: 'shattered-horizon' },
      { title: 'Shattered Stillness (Acoustic Version)', songSlug: 'shattered-stillness' },
      { title: 'Shattered Stillness (Melancholic Version)', songSlug: 'shattered-stillness' },
      { title: "You'll Never Know My Name", songSlug: 'you-ll-never-know-my-name' },
      { title: "You're Still Here", songSlug: 'you-re-still-here' },
      { title: 'Words Never Confessed', songSlug: 'words-never-confessed' },
      { title: 'Another Life', songSlug: 'another-life' },
      { title: 'Eternal Flame', songSlug: 'eternal-flame' },
      { title: 'Eternal Flame (Acoustic Version)', songSlug: 'eternal-flame' },
      { title: 'No One Leaves the Desert Unapproved', songSlug: 'no-one-leaves-the-desert-unapproved' },
    ],
  },
];

export function getReleaseBySlug(slug: string): Release | undefined {
  return releases.find((r) => r.slug === slug);
}
