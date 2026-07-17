export interface PreReleaseTrack {
  title: string;
}

export interface PreRelease {
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
  description: string;
  /** Cover art base path (without extension). WebP sizes: 300w / 600w / 1200w. */
  cover: {
    src: string;
    alt: string;
  };
  /** Spotify album URL — used for the pre-save button and the embedded player */
  spotifyUrl?: string;
  /** Short audio preview (MP3) played by the on-page mini player */
  previewUrl?: string;
  tracks: PreReleaseTrack[];
}

export const preRelease: PreRelease = {
  slug: 'before-the-hurt',
  title: 'Before the Hurt',
  type: 'Single',
  releaseDate: 'July 31, 2026',
  releaseDateISO: '2026-07-31T00:00:00-03:00',
  label: 'TS Music Records',
  upc: '882100256392',
  genre: 'Alternative Rock',
  description:
    "Some songs live in the last quiet moment before everything breaks. 'Before the Hurt' is exactly that — a haunting look into the version of you that still believed, still trusted, still hadn't learned to flinch. It's about the ache of remembering who you were before the damage taught you to guard your heart. The new single from Adolxsense arrives July 31 — pre-save it now and meet yourself before the hurt.",
  cover: {
    src: '/images/releases/album-cover/before-the-hurt',
    alt: 'Before the Hurt — Adolxsense Single Cover',
  },
  spotifyUrl: 'https://open.spotify.com/album/0ZzKFztVKAP2AwtDmbolDh',
  previewUrl: '/images/releases/preview/before-the-hurt-pre-release.mp3',
  tracks: [
    { title: 'Before the Hurt' },
  ],
};
