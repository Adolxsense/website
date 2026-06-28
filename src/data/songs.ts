export interface Song {
  slug: string;
  title: string;
  album: string;
  year: number;
  releaseDate?: string;
  label?: string;
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
    description: 'A dense emotional post-grunge track about fractured identity and looking back at who you used to be.',
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
    album: 'Single',
    year: 2026,
    releaseDate: 'May 1, 2026',
    label: 'TS Music Records',
    bpm: 144,
    genre: 'Nu Metal',
    youtubeId: null, // Replace with actual YouTube video ID
    description: 'Heavy Nu Metal about the mask paradox — being strong all day and falling apart alone at night.',
    translation: `[Verso 1]
Mancha de café na manga
Risada falsa no elevador
Todo "tudo bem?" desviado
Com um sorriso torto "tô bem"

Lista longa
Dia longo
Suspiro longo
Você segura as costas como armadura
Carrega as tempestades dos outros
Até o seu próprio céu ficar cinza

[Refrão]
Você fica forte o dia todo
Até a porta da frente clicar
E a máscara escorregar do seu rosto
Deixa a chuva entrar
Enquanto você afunda no escuro da sua mente
Forte o dia todo
Silencioso à noite
Quebrando no silêncio
Onde ninguém consegue encontrar
O quanto é pesado só sobreviver

[Verso 2]
As chaves caem no chão da cozinha
O eco soa como trovão
Chuveiro ligado
Luzes apagadas
As lágrimas se misturam com a água

Você olha para as suas mãos tremendo
Como se fosse o problema de um estranho
Sussurra para o quarto vazio "Consigo continuar?"

[Refrão]
Você fica forte o dia todo
Até a porta da frente clicar
E a máscara escorregar do seu rosto
Deixa a chuva entrar
Enquanto você afunda no escuro da sua mente
Forte o dia todo
Silencioso à noite
Quebrando no silêncio
Onde ninguém consegue encontrar
O quanto é pesado só sobreviver

[Ponte]
Mas tem uma chama no corredor
Uma lamparina que não apaga
Você está cansado
Você está sofrendo
Você é mais do que toda essa dúvida

Um fôlego
Depois outro
Tremendo
Mas você ainda se levanta
Talvez a força esteja no colapso
Deixar a ternura tocar os seus olhos (oh)

[Refrão Final]
Você fica forte o dia todo
Até a porta da frente clicar
E a máscara escorregar do seu rosto
Deixa a chuva entrar
Lavar as cinzas dos cantos da sua mente
Forte o dia todo
Suave à noite
Chorando no silêncio
E de algum jeito tá tudo bem
Tem uma pequena
Chama teimosa
Ainda viva dentro do escuro`,
    lyrics: `[Verse 1]
Coffee stain on your sleeve
Fake laugh in the elevator
Every "how are you?" dodged
With a tilted smile "I'm fine"

Long list
Long day
Long sigh
You hold your back like armor
Carry other people's storms
Till your own sky turns gray

[Chorus]
You stay strong all day
Till the front door clicks
And the mask slides off your face
Let the rain roll in
As you sink into the dark in your mind
Strong all day
Silent at night
Breaking in the quiet
Where nobody can find
How heavy it is just to survive

[Verse 2]
Keys drop on the kitchen floor
Echo sounds like thunder
Shower running
Lights off
Tears blend with the water

You stare at your shaking hands
Like they're some stranger's problem
Whisper to the empty room "Can I keep holding on?"

[Chorus]
You stay strong all day
Till the front door clicks
And the mask slides off your face
Let the rain roll in
As you sink into the dark in your mind
Strong all day
Silent at night
Breaking in the quiet
Where nobody can find
How heavy it is just to survive

[Bridge]
But there's a flicker in the hallway
Little lamp that won't burn out
You are tired
You are hurting
You are more than all this doubt

One breath
Then another
Shaking
But you still rise
Maybe strength is in the shatter
Letting softness touch your eyes (oh)

[Final Chorus]
You stay strong all day
Till the front door clicks
And the mask slides off your face
Let the rain roll in
Wash the ashes from the corners of your mind
Strong all day
Soft in the night
Crying in the quiet
And somehow that's alright
There's a small
Stubborn spark
Still alive inside the dark`,
  },
  {
    slug: 'under-the-rain',
    title: 'Under the Rain',
    album: 'Under the Rain',
    year: 2024,
    bpm: 123,
    genre: 'Rock Anthem',
    youtubeId: null, // Replace with actual YouTube video ID
    description: 'A cinematic mid-tempo rock anthem. The band\'s signature track.',
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
    description: 'A cinematic ballad. The damp silence after the collapse.',
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
