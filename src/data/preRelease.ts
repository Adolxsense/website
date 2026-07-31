export interface PreReleaseTrack {
  title: string;
}

export interface PreRelease {
  /**
   * Master switch. When false, the /pre-release page redirects to /releases and
   * the homepage hides the hero promo slide + highlight section.
   * Set to true (and update the fields below) when announcing the next release.
   */
  active: boolean;
  slug: string;
  title: string;
  type: 'Single' | 'Album' | 'EP' | 'LP';
  /** Human-readable release date, e.g. 'July 31, 2026' */
  releaseDate: string;
  /** ISO date used by the live countdown. Include the timezone offset. */
  releaseDateISO: string;
  label?: string;
  upc?: string;
  genre: string;
  /** Full description. Paragraphs separated by a blank line (\n\n). */
  description: string;
  /** Cover art base path (without extension). WebP sizes: 300w / 600w / 1200w. */
  cover: {
    src: string;
    alt: string;
  };
  /** Wide banner base path (without extension) for the hero promo slide. WebP sizes: 480w/768w/1280w/1920w. */
  heroBanner?: string;
  /** Spotify album URL — used for the pre-save button and the embedded player */
  spotifyUrl?: string;
  /** Short audio preview (MP3) played by the on-page mini player */
  previewUrl?: string;
  tracks: PreReleaseTrack[];
}

/**
 * Kept as a template for the next announcement — "Before the Hurt" was released
 * on July 31, 2026 and now lives in releases.ts.
 */
export const preRelease: PreRelease = {
  active: false,
  slug: 'before-the-hurt',
  title: 'Before the Hurt',
  type: 'Single',
  releaseDate: 'July 31, 2026',
  releaseDateISO: '2026-07-31T00:00:00-03:00',
  label: 'TS Music Records',
  upc: '882100256392',
  genre: 'Alternative Rock',
  description: `There's a version of you that got left behind — and it still stares back every time you catch your reflection.

Before the Hurt is the most personal confession in the Adolxsense universe to date: a letter to the boy who used to run toward open doors, before he learned to count the cracks in the floor. Christie turns every verse into a search — not for a cure, but for the memory of who she was before the pain rewrote her shape.

Built as a cinematic ballad that slowly unravels into an explosion, the song saves its most intense moment for the end — a bridge made entirely of the questions no one dares to ask out loud, followed by a final chorus that no longer begs to go back in time, only to survive what's left.

"I'm still alive, but I've come undone." That line is Adolxsense in six words: the pain doesn't disappear — the voice keeps going.`,
  cover: {
    src: '/images/releases/album-cover/before-the-hurt',
    alt: 'Before the Hurt — Adolxsense Single Cover',
  },
  heroBanner: '/images/banner/before-the-hurt-banner',
  spotifyUrl: 'https://open.spotify.com/album/0ZzKFztVKAP2AwtDmbolDh',
  previewUrl: '/images/releases/preview/before-the-hurt-pre-release.mp3',
  tracks: [
    { title: 'Before the Hurt' },
  ],
};
