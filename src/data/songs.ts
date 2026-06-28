export interface Song {
  slug: string;
  title: string;
  album: string;
  year: number;
  bpm: number;
  genre: string;
  youtubeId: string | null;
  lyrics: string;
  translation?: string;
  description: string;
}

export const songs: Song[] = [
  {
    slug: 'before-i-became-this',
    title: 'Before I Became This',
    album: 'Single',
    year: 2026,
    bpm: 96,
    genre: 'Post-Grunge',
    youtubeId: null, // Replace with actual YouTube video ID
    description: 'Post-grunge emocional denso sobre identidade fragmentada e o olhar para trás.',
    translation: `[Verso 1]
Costumava rir de qualquer coisa
Derramava café, chamava de arte
Desenhava um sol em cada margem
Sem defesas, coração aberto

Agora traço o mesmo círculo de sempre
Na mesa, com o polegar
Olho através dos rostos, ouço as vozes
Todo sentimento ficou entorpecido

[Pré-Refrão]
Tem uma foto no corredor
Eu a evito como um fantasma
Me lembro de quem eu era ali
Me lembro mais dele (yeah)

[Refrão]
Sinto falta do eu antes do colapso
Antes da tempestade sob minha pele
Antes do espelho ficar tão pesado
Que mal conseguia me encarar
Sinto falta do eu que ainda não recuava
A cada sombra no quarto
Sou assombrado pela vida que desperdicei
Estou gritando, mas estou florescendo
(Ainda sangrando enquanto floresço)

[Verso 2]
Eu costumava confiar no silêncio
Agora o silêncio estremece as paredes
Toda noite, um pequeno apocalipse
Nos cantos destes corredores

Estou cansado desta armadura
Placas enferrujadas sobre o peito
A raiva dorme nas vigas do teto
E solta suas cinzas quando descanso

[Pré-Refrão]
Toda gentileza parece suspeita
Cada porta parece uma guerra
Continuo andando, continuo regredindo
Ao contorno do que fui antes (oh)

[Refrão]
Sinto falta do eu antes do colapso
Antes da tempestade sob minha pele
Antes do espelho ficar tão pesado
Que mal conseguia me encarar
Sinto falta do eu que ainda não recuava
A cada sombra no quarto
Sou assombrado pela vida que desperdicei
Estou gritando, mas estou florescendo
(Ainda sangrando enquanto floresço)

[Ponte]
Não quero ficar assim congelado
Estátua rachada sob a geada
Quero abraçar aquele estranho imprudente
E dizer a ele o que tudo isso custou

Se não consigo voltar à luz do dia
Vou roubar uma fagulha dessa noite toda
Que minhas cicatrizes desenhem halos tortos
Ao redor das bordas do que ainda enxergo (yeah)

[Refrão Final]
Sinto falta do eu antes do colapso
Mas ainda estou aqui dentro desta pele
Cada fratura, cada fratura
Deixa entrar um pouco de fogo
Sinto falta do eu que ainda não recuava
Mas não sou apenas o que perdi
Sou um cemitério e um jardim
Agridoce e destinado a custar

[Outro]
Ergo um copo à minha velha sombra
Que ela dance, que ela desapareça
Não sou quem era antes da dor
Mas sou mais do que ela fez de mim`,
    lyrics: `[Verse 1]
Used to laugh at nothing
Spill my coffee, call it art
Draw a sun in every margin
Never guarded, open heart

Now I trace the same old circle
On the table with my thumb
Stare through faces, hear them talking
Every feeling has gone numb

[Pre-Chorus]
There's a photo in the hallway
I avoid it like a ghost
I remember who I was there
I remember him the most (yeah)

[Chorus]
I miss the me before the breaking
Before the storm beneath my skin
Before the mirror grew so heavy
I could barely look within
I miss the me that didn't flinch yet
At every shadow in the room
I'm haunted by the life I wasted
I'm screaming, but I bloom
(Still bleeding as I bloom)

[Verse 2]
I used to trust the quiet
Now the silence shakes the walls
Every night a small apocalypse
In the corners of these halls

I am tired of this armor
Rusty plates around my chest
Anger sleeping in the rafters
Drops its ashes when I rest

[Pre-Chorus]
Every kindness feels suspicious
Every doorway feels like war
I keep walking, keep reverting
To the outline from before (oh)

[Chorus]
I miss the me before the breaking
Before the storm beneath my skin
Before the mirror grew so heavy
I could barely look within
I miss the me that didn't flinch yet
At every shadow in the room
I'm haunted by the life I wasted
I'm screaming, but I bloom
(Still bleeding as I bloom)

[Bridge]
I don't want to stay this frozen
Cracked statue in the frost
I want to hold that reckless stranger
And tell him what it costs

If I can't get back to daylight
I'll steal a spark from all this night
Let my scars draw crooked halos
Around the edges of my sight (yeah)

[Final Chorus]
I miss the me before the breaking
But I'm still here inside this skin
Every fracture, every fracture
Lets a little fire in
I miss the me that didn't flinch yet
But I'm not only what I've lost
I'm a graveyard and a garden
Bittersweet and wired to cost

[Outro]
Raise a glass to my old shadow
Let it flicker, let it fade
I'm not who I was before the pain
But I'm more than what it made`,
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
