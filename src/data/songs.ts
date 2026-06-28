export interface Song {
  slug: string;
  title: string;
  album: string;
  year: number;
  bpm: number;
  genre: string;
  youtubeId: string | null;
  lyrics: string;
  description: string;
}

export const songs: Song[] = [
  {
    slug: 'before-i-became-this',
    title: 'Before I Became This',
    album: 'After the Rain',
    year: 2024,
    bpm: 96,
    genre: 'Post-Grunge',
    youtubeId: null, // Replace with actual YouTube video ID
    description: 'Post-grunge emocional denso sobre identidade fragmentada e o olhar para trás.',
    lyrics: `[Verse 1]
(Lyrics coming soon)

[Pre-Chorus]
(Lyrics coming soon)

[Chorus]
(Lyrics coming soon)

[Bridge]
(Lyrics coming soon)`,
  },
  {
    slug: 'strong-all-day',
    title: 'Strong All Day',
    album: 'The Weight I Hide',
    year: 2024,
    bpm: 144,
    genre: 'Nu Metal',
    youtubeId: null, // Replace with actual YouTube video ID
    description: 'Nu Metal pesado sobre o paradoxo da máscara — ser forte o dia todo e desmoronar sozinho.',
    lyrics: `[Verse 1]
(Lyrics coming soon)

[Pre-Chorus]
(Lyrics coming soon)

[Chorus]
(Lyrics coming soon)

[Bridge]
(Lyrics coming soon)`,
  },
  {
    slug: 'under-the-rain',
    title: 'Under the Rain',
    album: 'Under the Rain',
    year: 2024,
    bpm: 123,
    genre: 'Rock Anthem',
    youtubeId: null, // Replace with actual YouTube video ID
    description: 'Mid-tempo rock anthem cinematográfico. A faixa carro-chefe da banda.',
    lyrics: `[Verse 1]
(Lyrics coming soon)

[Pre-Chorus]
(Lyrics coming soon)

[Chorus]
I'm still under the rain
Waiting for the sky to break
I'm still under the rain
Chasing what I cannot take

[Bridge]
(Lyrics coming soon)`,
  },
  {
    slug: 'after-the-rain',
    title: 'After the Rain',
    album: 'After the Rain',
    year: 2024,
    bpm: 89,
    genre: 'Ballad',
    youtubeId: null, // Replace with actual YouTube video ID
    description: 'Balada cinematográfica. O silêncio úmido depois do colapso.',
    lyrics: `[Verse 1]
(Lyrics coming soon)

[Pre-Chorus]
(Lyrics coming soon)

[Chorus]
(Lyrics coming soon)

[Bridge]
(Lyrics coming soon)`,
  },
];

export function getSongBySlug(slug: string): Song | undefined {
  return songs.find((s) => s.slug === slug);
}
