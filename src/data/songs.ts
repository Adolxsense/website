export interface Song {
  slug: string;
  title: string;
  /** Release this song belongs to (album, EP, LP or single title). */
  album: string;
  year: number;
  releaseDate?: string;
  label?: string;
  bpm?: number;
  genre?: string;
  youtubeId: string | null;
  lyrics: string;
  /** Portuguese (Brazil) translation. Renders side by side when present. */
  translation?: string;
  /** The meaning behind the song — paragraphs separated by a blank line. */
  story?: string;
  description: string;
}

export const songs: Song[] = [
  {
    slug: 'before-the-hurt',
    title: 'Before the Hurt',
    album: 'Before the Hurt',
    year: 2026,
    releaseDate: 'July 31, 2026',
    label: 'TS Music Records',
    genre: 'Alternative Rock',
    youtubeId: null,
    description: 'Lyrics to "Before the Hurt" by Adolxsense.',
    translation: `[Verso 1]
Encontrei tua sombra no vidro
Um menino que eu conhecia, mas não alcançava
Os olhos limpos, as mãos leves
Ele não temia a noite cair

Ele corria em direção às portas abertas
Agora eu conto as rachaduras pelo chão
Em algum lugar entre o amor e a perda
Virei alguém que eu nunca fui

[Pré-Refrão]
E eu sigo tateando através da fumaça
Por uma voz que um dia foi meu lar

[Refrão]
Sinto falta de quem eu era antes da dor
Antes do silêncio encharcar o meu mundo
Antes das cores desbotarem em cinza
Antes de eu aprender a afastar meu coração
Agora todo espelho mostra um fantasma
De alguém de quem eu ainda preciso tanto
Estou aqui de pé, mas ainda parece errado
Sentindo falta da alma que eu tive por tanto tempo

[Verso 2]
Estas paredes lembram cada som
Cada coisinha que me derrubou
O sorriso cansado, o olhar vazio
O jeito que aprendi a respirar desespero

Carrego minhas cicatrizes sob a pele
Como guerras caladas que eu não venci
E todos os pedaços que eu conhecia
Não cabem na forma em que me tornei

[Pré-Refrão]
Ainda estou chamando através do escuro
Tentando achar onde eu desmoronei

[Refrão]
Sinto falta de quem eu era antes da dor
Antes do silêncio encharcar o meu mundo
Antes das cores desbotarem em cinza
Antes de eu aprender a afastar meu coração
Agora todo espelho mostra um fantasma
De alguém de quem eu ainda preciso tanto
Estou aqui de pé, mas ainda parece errado
Sentindo falta da alma que eu tive por tanto tempo

[Ponte]
Se eu pudesse arrancar a dor das minhas veias
Eu lembraria como voltar a sentir?
Se eu pudesse desouvir cada último adeus
Aquela luz antiga ainda estaria viva?

Ou ele se apagou a cada ferida
Sumiu debaixo destes quartos quebrados?
Não quero perder o que sobrou de mim
Só quero encontrar quem eu costumava ser

[Refrão Final]
Sinto falta de quem eu era antes da dor
Antes do peso de tudo ficar pior
Antes das noites virarem um lugar pra afundar
Antes do medo virar meu único som
Agora todo espelho me segura parado
Como um estranho vestindo toda a minha culpa
Ainda estou vivo, mas me desfiz
Sentindo falta da pessoa que eu era antes da dor

[Outro]
Antes da dor
Antes do cinza
Antes de eu deixar levarem meu nome
Ainda estou em algum lugar
Sob as cicatrizes
Uma luz que se apaga
Um coração partido`,
    lyrics: `I found your shadow in the glass
A boy I knew, but couldn't grasp
His eyes were clear, his hands were light
He didn't dread the fall of night

He used to run toward open doors
Now I count cracks across the floor
Somewhere between the love and loss
I became someone I never was

And I keep reaching through the smoke
For a voice that used to feel like home

I miss who I was before the hurt
Before the silence soaked into my world
Before the colors faded into gray
Before I learned to push my heart away
Now every mirror shows a ghost
Of someone I still need the most
I'm standing here, but it still feels wrong
Missing the soul I had for so long

These walls remember every sound
Every little thing that broke me down
The tired smile, the empty stare
The way I learned to breathe despair

I wear my scars beneath my skin
Like quiet wars I couldn't win
And all the pieces I once knew
Don't fit the shape I've turned into

Still I'm calling through the dark
Trying to find where I fell apart

I miss who I was before the hurt
Before the silence soaked into my world
Before the colors faded into gray
Before I learned to push my heart away
Now every mirror shows a ghost
Of someone I still need the most
I'm standing here, but it still feels wrong
Missing the soul I had for so long

If I could pull the pain out of my veins
Would I remember how to feel again?
If I could unhear every last goodbye
Would that old light still be alive?

Or did he fade with every wound
Disappear beneath these broken rooms?
I don't wanna lose what's left of me
I just wanna find who I used to be

I miss who I was before the hurt
Before the weight of everything got worse
Before the nights became a place to drown
Before the fear became my only sound
Now every mirror holds me still
Like a stranger wearing all my guilt
I'm still alive, but I've come undone
Missing the person I was before the hurt

Before the hurt
Before the gray
Before I let it take my name
I'm still somewhere
Under the scars
A fading light
A broken heart`,
  },
  {
    slug: 'before-i-became-this',
    title: 'Before I Became This',
    album: 'Before I Became This',
    year: 2026,
    releaseDate: 'May 22, 2026',
    label: 'TS Music Records',
    bpm: 96,
    genre: 'Post-Grunge',
    youtubeId: null,
    description: 'Lyrics to "Before I Became This" by Adolxsense.',
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
    lyrics: `Used to laugh at nothing
Spill my coffee, call it art
Draw a sun in every margin
Never guarded, open heart

Now I trace the same old circle
On the table with my thumb
Stare through faces, hear them talking
Every feeling has gone numb

There's a photo in the hallway
I avoid it like a ghost
I remember who I was there
I remember him the most (yeah)

I miss the me before the breaking
Before the storm beneath my skin
Before the mirror grew so heavy
I could barely look within
I miss the me that didn't flinch yet
At every shadow in the room
I'm haunted by the life I wasted
I'm screaming, but I bloom
(Still bleeding as I bloom)

I used to trust the quiet
Now the silence shakes the walls
Every night a small apocalypse
In the corners of these halls

I am tired of this armor
Rusty plates around my chest
Anger sleeping in the rafters
Drops its ashes when I rest

Every kindness feels suspicious
Every doorway feels like war
I keep walking, keep reverting
To the outline from before (oh)

I miss the me before the breaking
Before the storm beneath my skin
Before the mirror grew so heavy
I could barely look within
I miss the me that didn't flinch yet
At every shadow in the room
I'm haunted by the life I wasted
I'm screaming, but I bloom
(Still bleeding as I bloom)

I don't want to stay this frozen
Cracked statue in the frost
I want to hold that reckless stranger
And tell him what it costs

If I can't get back to daylight
I'll steal a spark from all this night
Let my scars draw crooked halos
Around the edges of my sight (yeah)

I miss the me before the breaking
But I'm still here inside this skin
Every fracture, every fracture
Lets a little fire in
I miss the me that didn't flinch yet
But I'm not only what I've lost
I'm a graveyard and a garden
Bittersweet and wired to cost

Raise a glass to my old shadow
Let it flicker, let it fade
I'm not who I was before the pain
But I'm more than what it made`,
  },
  {
    slug: 'strong-all-day',
    title: 'Strong All Day',
    album: 'Strong All Day',
    year: 2026,
    releaseDate: 'May 1, 2026',
    label: 'TS Music Records',
    bpm: 144,
    genre: 'Nu Metal',
    youtubeId: null,
    description: 'Lyrics to "Strong All Day" by Adolxsense.',
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
    lyrics: `Coffee stain on your sleeve
Fake laugh in the elevator
Every"how are you?" dodged
With a tilted smile"I'm fine"

Long list
Long day
Long sigh
You hold your back like armor
Carry other people's storms
Till your own sky turns gray

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

Keys drop on the kitchen floor
Echo sounds like thunder
Shower running
Lights off
Tears blend with the water

You stare at your shaking hands
Like they're some stranger's problem
Whisper to the empty room"Can I keep holding on?"

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
    year: 2026,
    releaseDate: 'April 17, 2026',
    label: 'TS Music Records',
    bpm: 123,
    genre: 'Rock Anthem',
    youtubeId: null,
    description: 'Under the Rain is about the quiet loneliness of someone who learned how to look “okay” — even when they’re not. It tells the story of a girl who moves through life wearing…',
    story: `Under the Rain is about the quiet loneliness of someone who learned how to look “okay” — even when they’re not.
It tells the story of a girl who moves through life wearing carefully crafted versions of herself. She smiles when expected, edits her truth to fit what others can accept, and hides the parts of her that feel too heavy, too real, too much.
The rain becomes a symbol of exposure — the one place where the mask starts to slip. Under it, she can no longer pretend. Every step she takes feels like something she hoped would lead somewhere… but never did.
At its core, the song asks a deeply human question:
“When do I get to stop pretending and just be myself?”
Lines like “I wanna be known down to the scars I hide” reveal her real desire — not attention, not validation, but to be truly seen and accepted, without filters or performance.
There’s also a subtle tension throughout the song: the fear of being known versus the longing for it.
If someone reached out… would she even know how to respond?
Would honesty heal her — or break her even more?
As the story unfolds, something shifts.
In the final lines, the question changes. Instead of waiting for the world to give her a sign, she begins to turn inward:
“Maybe I’ll be happy if I start with mine.”
It’s not a resolution. It’s a beginning.
Under the Rain is about that fragile moment where someone stops waiting to be understood… and considers the possibility of finally understanding themselves.
A quiet realization that maybe healing doesn’t start when someone else sees you —
but when you stop hiding from yourself.`,
    lyrics: `Coat pulled tight
But the cold gets in
Street signs blur
As the clouds roll in
She counts the steps
Like they're promises
Every puddle
Another wish she missed

She laughs too loud
At the smallest things
Hoping someone hears
Hoping someone stays

Under the rain
She's asking the sky
When do I get
To stop being fine
I wanna be known
Down to the scars I hide
Under the rain
She's begging for a sign
When will I be happy
When will I be mine

Masks on shelves
By the front door hook
Smiles she wears
For the passing look
Tells them stories
Edited and trimmed
Keeps the truest parts
Locked deep within

She trades her truth
For a little praise
But the echoes fade
And the ache remains

Under the rain
She's asking the sky
When do I get
To stop being fine
I wanna be known
Down to the scars I hide
Under the rain
She's begging for a sign
When will I be happy
When will I be mine

If someone reached for her shaking hand
Would she let them in
Could she let them in
If she spoke the words she's never said
Would it break her
Or finally mend

Under the rain
She's asking the sky
When do I get
To stop being fine
I wanna be known
Down to the scars I hide
Under the rain
She whispers this time
Maybe I'll be happy
If I start with mine`,
  },
  {
    slug: 'the-weight-i-hide',
    title: 'The Weight I Hide',
    album: 'The Weight I Hide',
    year: 2026,
    releaseDate: 'February 20, 2026',
    label: 'TS Music Records',
    genre: 'Alternative Rock',
    youtubeId: null,
    description: 'The Weight I Hide tells the story of someone who became strong out of necessity — not choice.',
    story: `The Weight I Hide tells the story of someone who became strong out of necessity — not choice.

It’s about the silent burden of being “the one everyone relies on.” The person who holds everything together, absorbs the chaos, calms the storm… but slowly disappears in the process.

On the surface, they’re seen as stable, dependable, unbreakable. But underneath, there’s exhaustion, fear, and a quiet desperation to be seen — not as the strong one, but as someone who also needs saving.

The song explores the contradiction of strength: how it can become a prison. Every compliment becomes pressure. Every expectation becomes another layer of weight. And asking for help feels impossible — because if they break, everything else might too.

Lines like “If strength is all you see, then tell me—who’s here for me?” capture the core conflict: the need to be supported by the same people you’ve been protecting all along.

As the song unfolds, there’s a shift. The armor is acknowledged — chosen, even — but questioned. The protagonist begins to confront a terrifying truth:

What if being honest about their pain changes how people see them? What if vulnerability costs them the love they’ve been holding onto?

The repeated plea — “Say you’ll stay” — is the emotional climax. It’s not just about exhaustion anymore. It’s about fear of abandonment the moment the truth is revealed.

In the end, The Weight I Hide is a confession.

A breaking point.

A quiet cry from someone who was never allowed to fall — finally asking:

“Will you still be here… if I do?”`,
    translation: `[Verso 1]
Acordo cedo só pra manter tudo de pé
Costurando o silêncio no teu rosto cansado
Atendo o telefone quando o raio corta teu céu
Digo "eu tô aqui" enquanto morro por dentro
Carrego conversas como uma arma carregada
Um suspiro errado e tudo se desfaz
Então meço cada palavra, mantenho o tom leve
Enquanto meu peito aprende o medo toda noite

[Pré-Refrão]
Não peço ajuda, não faço um som
Porque se eu desabar, tudo vem ao chão
Mordo a língua até sangrar de novo
E chamo isso de força como se não fosse dor

[Refrão]
Cansei de ser o abrigo na tempestade
Segurando o teto enquanto me rasgo
Se força é tudo o que você vê
Então me diz — quem está aqui por mim?
Eu escolhi ser a chama que você toma emprestada
Mas não consigo te aquecer amanhã

[Verso 2]
Fico na porta quando o trovão vem
Levo o golpe por todo mundo, finjo estar dormente
Faço piada sob a pressão, mantenho a sala viva
Enquanto meu coração corre milhas só pra te ajudar a sobreviver
E cansei do elogio que parece corrente
"Olha como você é forte" enquanto engasgo de dor
Você ama a calma, você ama o controle
Mas nunca toca no tremor da minha alma

[Pré-Refrão]
Guardo minhas lágrimas num quarto trancado
Onde as luzes não funcionam e o ar tem gosto de fim
Prendo a respiração como se fosse assim que eu vivo
Mas estou ficando sem nada pra dar

[Refrão]
Cansei de ser o abrigo na tempestade
Segurando o teto enquanto me rasgo
Se força é tudo o que você vê
Então me diz — quem está aqui por mim?
Eu escolhi ser a chama que você toma emprestada
Mas não consigo te aquecer amanhã

[Ponte]
Eu escolhi esta armadura, eu admito
Mas armadura não quer dizer que eu não rache
Não sou uma parede, não sou o teu lar
Sou só um coração que aprendeu a se virar sozinho
E se eu te mostrar o que escondo
Você vai ficar aqui do meu lado?
Ou vai me amar menos
No instante em que eu confessar?

[Breakdown]
Me diz — quem está aqui…
Quem está aqui por mim?
Eu te segurei quando minhas mãos tremiam
Eu te mantive a salvo enquanto meu peito quebrava
Não me chame de "forte" como se fosse tudo que eu sou
Me diz — quem está aqui por mim?

[Refrão Final]
Cansei de ser o abrigo na tempestade
Segurando o teto enquanto me rasgo
Se força é tudo o que você vê
Então me diz — quem está aqui por mim?
Eu escolhi ser a chama que você toma emprestada
Mas não consigo te aquecer amanhã

[Outro]
O peso que eu escondo…
Está me matando em silêncio
O peso que eu escondo…
Diz que você fica —
Diz que você fica…

O peso que eu escondo…
Está me matando em silêncio
O peso que eu escondo…
Diz que você fica —
Diz que você fica…`,
    lyrics: `I wake up early just to hold it all in place
Stitching up the silence on your tired face
I take the phone when lightning hits your sky
Say "I got you" while I'm dying inside
I carry conversations like a loaded gun
One wrong breath and everything comes undone
So I measure every word, keep the tone light
While my chest learns fear every night

I don't ask for help, I don't make a sound
'Cause if I fall apart, the whole thing hits the ground
I bite my tongue until it bleeds again
And call it strength like it's not pain

I'm tired of being the shelter in the storm
Holding the ceiling while I'm torn
If strength is all you see
Then tell me—who's here for me?
I chose to be the flame you borrow
But I can't keep you warm tomorrow

I stand in the doorway when the thunder comes
Take the hit for everyone, pretend I'm numb
I joke through the pressure, keep the room alive
While my heart runs miles just to help you survive
And I'm sick of the praise that feels like a chain
"Look how strong you are" while I'm choking on pain
You love the calm, you love the control
But you never touch the shaking in my soul

I keep my tears in a locked back room
Where the lights don't work and the air tastes doomed
I hold my breath like it's how I live
But I'm running out of things to give

I'm tired of being the shelter in the storm
Holding the ceiling while I'm torn
If strength is all you see
Then tell me—who's here for me?
I chose to be the flame you borrow
But I can't keep you warm tomorrow

I chose this armor, I admit
But armor doesn't mean I don't split
I'm not a wall, I'm not your home
I'm just a heart that learned to cope alone
And if I show you what I hide
Will you stay here by my side?
Or will you love me less
The moment I confess?

Tell me—who's here…
Who's here for me?
I held you up when my hands were shaking
I kept you safe while my chest was breaking
Don't call me "strong" like it's all I'll be
Tell me—who's here for me?

I'm tired of being the shelter in the storm
Holding the ceiling while I'm torn
If strength is all you see
Then tell me—who's here for me?
I chose to be the flame you borrow
But I can't keep you warm tomorrow

The weight I hide…
Is killing me in silence
The weight I hide…
Say you'll stay—
Say you'll stay…

The weight I hide…
Is killing me in silence
The weight I hide…
Say you'll stay—
Say you'll stay…`,
  },
  {
    slug: 'after-the-rain',
    title: 'After the Rain',
    album: 'After the Rain',
    year: 2026,
    releaseDate: 'January 9, 2026',
    label: 'TS Music Records',
    bpm: 89,
    genre: 'Ballad',
    youtubeId: null,
    description: '“After the Rain” is a song about resilience that survives even when faith feels fractured. It captures the emotional journey of someone who has walked through long nights of…',
    story: `“After the Rain” is a song about resilience that survives even when faith feels fractured. It captures the emotional journey of someone who has walked through long nights of silence, unanswered prayers, and internal storms — yet refuses to surrender the belief that light still exists beyond the clouds.

The song opens in darkness and isolation: starless nights, scars that scream louder than words, a sky that falls without warning. This imagery reflects emotional exhaustion — the kind that comes from enduring pain quietly, carrying wounds no one else can see. The narrator isn’t dramatic or explosive; they’re tired, weathered, and deeply introspective.

The first turning point arrives gently, not triumphantly:
“But even when my hands let go / Something deep refused to fold.”

This line defines the soul of the song. Even when hope feels out of reach, something instinctual — a core will to survive — remains. It’s not optimism; it’s endurance.

The chorus becomes the emotional anchor of the track:
“After the rain, the sun will rise.”

This isn’t a denial of pain. It’s a declaration that pain is not the final chapter. The narrator acknowledges fear, loss, shattered faith, and tear-stained eyes — yet chooses movement over paralysis. Waiting for light doesn’t mean standing still; it means continuing to walk even when clarity hasn’t arrived yet.

The second verse dives deeper into spiritual silence:
Whispered prayers that hit broken walls.
No answers.
No reassurance.

But instead of portraying silence as abandonment, the song reframes it:
“Quiet isn’t always gone / It’s where the heart learns to be strong.”

Here, silence becomes a teacher. Strength is formed not in resolution, but in endurance — in learning to stand without immediate comfort.

As the song progresses, pain transforms into perspective:
“Maybe the pain was how I grew / Maybe the storm just pulled me through.”

This is the moment of emotional maturity — the realization that suffering didn’t erase the narrator, it shaped them. What once felt like destruction becomes the force that carved resilience, empathy, and depth.

The final chorus expands the message from personal to universal:
Even the lost can rise.
Even the wounded can breathe again.
Even broken hearts can find rest.

In the Adolxsense universe, “After the Rain” represents hope without illusion. It’s not about instant healing or perfect endings — it’s about trusting that darkness is temporary, even when it feels endless.

This song is for those who are still walking through the storm.
For those who haven’t seen the sun yet —
but believe, quietly and stubbornly,
that it will rise.

Because no matter how heavy the rain,
there is always a dawn waiting on the other side.`,
    lyrics: `I've walked through nights that had no stars
Through silence screaming in my scars
The sky would fall without a sound
And bury all I'd ever found

But even when my hands let go
Something deep refused to fold

After the rain, the sun will rise
Beyond the clouds, beyond the lies
Even when hope slips through the seams
I'm still holding onto dreams
Through shattered faith and burning skies
I'll keep on walking, tear-stained eyes
For in the dark, I still remain
Waiting for light
After the rain

I've whispered prayers to broken walls
Felt nothing answer when I called
But quiet isn't always gone
It's where the heart learns to be strong

And though the winds have torn me thin
There's still a fire deep within

After the rain, the sun will rise
Beyond the fear, beyond goodbyes
Even when hope begins to fade
The smallest light can still invade
Through storms that tear and years that drain
I will believe
After the rain

Maybe the pain was how I grew
Maybe the storm just pulled me through
What breaks us down might set us free
And write the soul in poetry

After the rain, the sun will rise
Even the lost can touch the skies
Even the wounded learn to breathe
And broken hearts still find reprieve
Through all the ache, through all the strain
There is a dawn
After the rain`,
  },
  {
    slug: 'where-light-begins',
    title: 'Where Light Begins',
    album: 'Where Light Begins',
    year: 2025,
    releaseDate: 'December 12, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Where Light Begins” is a song about spiritual awakening — not the loud, miraculous kind, but the gentle, quiet shift that happens when someone finally stops carrying the…',
    story: `“Where Light Begins” is a song about spiritual awakening — not the loud, miraculous kind, but the gentle, quiet shift that happens when someone finally stops carrying the weight of everything they’ve survived. It’s about letting go of the past, releasing the need for answers, and opening yourself to a love that heals from the inside out.
The song begins in a landscape of emotional fatigue:
“I walked alone through fields of doubt… a heavy heart I couldn’t speak out.”
This is someone who has spent years surviving in silence, holding their pain inward, afraid or unable to express it.
The gray sky and still wind symbolize stagnation — a life that hasn’t moved in a long time.
Then something subtle breaks through:
a whisper in the rain,
a quiet voice that says “You’re not the same.”
It’s the beginning of recognition — the moment the narrator lifts their head and allows light to touch the parts of them they’ve kept hidden.
The pre-chorus reveals that the transformation starts from within:
“The light that burns beneath the skin.”
Healing isn’t something received — it’s something awakened.
The chorus captures the heart of the song:
open hands, lifted skyward, no longer demanding answers.
The narrator isn’t trying to understand everything anymore.
They’re simply allowing love, growth, and truth to flow.
“I’m standing still, yet I begin”
is one of the most powerful lines in the song —
a reminder that sometimes the first step toward healing doesn’t involve movement,
but surrender.
The second verse deepens the theme of release:
Holding the past too tightly kept the narrator trapped.
But as the walls fall and the fight ends,
a calling appears — a gentle invitation to transformation.
The second pre-chorus brings humility and grace:
There is no perfection here.
No flawless faith.
Just raw honesty: acknowledging that they are becoming someone new.
The bridge introduces the spiritual anchor of the song:
“And if I fall, I’ll rise again — not on my own, but held within.”
This line reflects a higher love, a deeper strength — something beyond the narrator carrying them forward.
It’s the moment where vulnerability shifts into trust.
The final chorus brings the message full circle:
Love shines in every step,
growth blooms from stillness,
and the light enters exactly where the heart finally opens.
The outro — “Where light begins…” — is a whisper of rebirth, like the first breath after long-held silence.
In the Adolxsense universe, “Where Light Begins” stands out as one of the most luminous songs — a counterbalance to the pain, conflict, and shadows found in so much of their catalog.
It is the chapter of acceptance, spiritual clarity, and gentle transformation.
A reminder that healing doesn’t always arrive loudly — sometimes it arrives when you become still enough to notice the light already entering your life.
It is a song about surrender, grace, and the quiet start of a new version of yourself.`,
    lyrics: `[Verse 1]
I walked alone through fields of doubt
A heavy heart I couldn’t speak out
The sky was gray, the wind stood still
But something deeper called me still

[Pre-Chorus]
I heard a whisper in the rain
A voice that said, “You’re not the same”
So I looked up and let it in
The light that burns beneath the skin

[Chorus]
With open hands, I face the sky
No need to ask the reasons why
If love is real, then let it show
In every step, in all I grow
I’m standing still, yet I begin
This is the place where light comes in

[Verse 2]
I held the past too long, too tight
But healing comes when you stop the fight
The walls I built began to fall
And in their place, I heard the call

[Pre-Chorus]
No perfect words, no flawless faith
Just simple truth and quiet grace
So here I stand, not who I’ve been
But who I’m learning to be in Him

[Chorus]
With open hands, I face the sky
No need to ask the reasons why
If love is real, then let it show
In every step, in all I grow
I’m standing still, yet I begin
This is the place where light comes in

[Bridge]
And if I fall, I’ll rise again
Not on my own, but held within
A greater strength, a higher plan
To walk with purpose, heart in hand

[Final Chorus]
With open hands, I face the sky
No need to ask the reasons why
If love is real, then let it show
In every step, in all I grow
I’m standing still, yet I begin
This is the place where light comes in

[Outro]
Where light begins…
Where light begins…`,
  },
  {
    slug: 'ashes-in-the-rain',
    title: 'Ashes in the Rain',
    album: 'Ashes in the Rain',
    year: 2025,
    releaseDate: 'December 5, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Ashes in the Rain” is a song about confronting the parts of yourself that feel broken beyond repair — the memories that sting, the scars that never fully fade, and the…',
    story: `“Ashes in the Rain” is a song about confronting the parts of yourself that feel broken beyond repair — the memories that sting, the scars that never fully fade, and the moments you wish you could rewrite but can’t. It’s a meditation on pain, acceptance, and the quiet strength of choosing to move forward even when the past refuses to let go.
The song opens with delicate imagery:
“I trace the cracks along the floor — each one a voice I can’t ignore.”
The cracks represent fractures in the narrator’s life: mistakes, heartbreaks, losses.
They whisper what’s gone, what changed, what slipped away.
The silence is cold, unforgiving — yet revealing.
The first verse paints a picture of someone who has survived countless emotional fires, but carries the tension of survival:
Barbed wire, breathless endurance, shadows instead of hope.
There was no miracle, no rescue — only persistence.
The pre-chorus brings the inevitable truth:
Scars can’t be undone.
They haunt, they echo, they resurface at night.
There’s no rewriting the past — only understanding it.
The chorus becomes the emotional centerpiece:
“Just ashes dancing in the wind.”
Ashes symbolize what remains after everything has burned —
fragile, weightless, but still real.
The narrator sees themselves not as destroyed, but as transformed.
Not gone — but altered.
The future is uncertain, but the present is a choice:
“Now is where I choose my line.”
One breath.
One step.
Through pain — but still forward.
The second verse dives deeper into internal conflict:
Silence as a second skin.
A war fought quietly, internally.
The mirror shows the old version of themselves —
but scars hide the soul beneath.
This is an identity crisis, but also a recognition that who they were is not who they must remain.
The second chorus repeats the acceptance:
Scars are permanent.
The past is fixed.
But motion — even painful motion — is still possible.
Still necessary.
The bridge offers a glimmer of shift:
Time doesn’t heal what you refuse to touch.
Silence doesn’t solve anything.
But perhaps the flame can shift —
perhaps the smoke can release the name —
perhaps letting go begins from the inside, not from forgetting.
The final chorus becomes collective, universal:
“We can’t change the scars we keep… but we’re still standing.”
The narrator expands from “I” to “we,”
recognizing that pain is shared,
that survival is communal,
that being “ashes in the rain” doesn’t mean disappearing —
it means rising even while dissolving.
Ashes in the rain shouldn’t exist —
but they do.
Just like people who survive what should’ve broken them.
In the Adolxsense universe, “Ashes in the Rain” is a song of quiet endurance.
It’s the chapter where truth replaces denial,
where acceptance replaces self-blame,
and where resilience is no longer loud —
but steady, soft, and unshakable.
It’s for anyone who has ever looked at their scars,
felt the weight of their past,
and still chose to take one more breath,
one more step,
into the rain.`,
    lyrics: `I trace the cracks along the floor
Each one a voice I can't ignore
The echoes whisper what I've lost
Carved in silence, cold as frost
I held my breath through every fire
Still chained beneath the barbed wire
No prayer reversed the tide I faced
Only shadows I embraced
But I can't change the scars I keep
They haunt me when I try to sleep
No way to rewrite where I've been
Just ashes dancing in the wind
The past won't break, the future's blind
But now is where I choose my line
One breath, one step, through all this pain
I'm just ashes in the rain
I wear the silence like a skin
A quiet war I fight within
The mirror shows me who I was
But not the soul beneath the scars
And I can't change the scars I keep
They haunt me when I try to sleep
No way to rewrite where I've been
Just ashes dancing in the wind
The past won't break, the future's blind
But now is where I choose my line
One breath, one step, through all this pain
I'm just ashes in the rain
Time won't heal what won't be touched
And silence never said too much
But maybe still, I'll shift the flame
And let the smoke forget my name
We can't change the scars we keep
But we're still standing, soul-deep
No way to rewrite where we've been
Still ashes rising in the wind
The past won't bend, the sky won't cry
But now is where we choose to try
One breath, one spark, through all this pain
We're just ashes in the rain…
Ashes in the rain`,
  },
  {
    slug: 'inside-my-skin',
    title: 'Inside My Skin',
    album: 'Unheard',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Inside My Skin” is a song about battling your own mind — about the quiet, relentless storm that rages beneath the surface even when the world thinks you’re fine. It captures…',
    story: `“Inside My Skin” is a song about battling your own mind — about the quiet, relentless storm that rages beneath the surface even when the world thinks you’re fine. It captures the suffocating weight of internal struggle, the fear of falling apart, and the frustration of being trapped inside a version of yourself you can’t escape.
The song opens with imagery that feels fragile and claustrophobic:
“I feel the cracks begin to spread… these walls I built are paper thin.”
The narrator has spent years constructing emotional defenses, only to realize they’re too weak to contain the growing pressure.
Every breath lets darkness in.
Every thought becomes a thorn.
The fight becomes paralysis instead of progress.
One of the most honest lines arrives early:
“And I pretend I’m fine again, but I’m drowning in my skin.”
This is the core wound — the mask that hides the truth, the quiet suffocation of pretending that everything is okay when internally everything is falling apart.
The chorus erupts with raw desperation:
Fear crawls beneath the narrator’s skin like a living thing.
They’re breaking, slipping, fading, falling — over and over, with no chance to recover before the next collapse.
It’s a cycle of pain without rest, a storm that never clears.
The second verse confronts identity:
The mirror reflects a stranger.
The eyes beg for escape.
The smile is temporary, fragile, false —
a mask worn to protect others, or maybe to avoid acknowledging the depth of their own pain.
Once again, the narrator pretends to be whole while feeling hollow.
The chorus returns, louder in emotion, heavier in meaning — the fear, the screaming, the internal chaos becoming impossible to contain.
Then comes the breaking point — the confession many people never say aloud:
“I’m not okay… I’m not okay!”
It’s the moment of emotional surrender, the first truth spoken after years of silence.
Running doesn’t help.
Hiding doesn’t save.
The storm becomes fate.
The final chorus amplifies the emotional weight:
Fear crawling under the skin.
Silence refusing to come.
Bleeding from the inside out — not physically, but emotionally and mentally.
The narrator is still falling, still fading, still calling from a place deep within themselves that no one else can see.
In the Adolxsense universe, “Inside My Skin” represents the internal fight — the mental and emotional collapse that often happens behind closed doors.
It’s a brutally honest portrayal of anxiety, identity fracture, and the suffocating silence of trying to hold yourself together while your inner world is tearing apart.
This song speaks to anyone who has ever felt trapped inside their own body, their own thoughts, their own quiet suffering.
It doesn’t offer resolution — it offers recognition.
It says:
You’re not alone in feeling like this.
You’re not weak for breaking.
And sometimes the bravest thing you can do is admit you’re not okay.`,
    lyrics: `I feel the cracks begin to spread
In the silence screaming in my head
These walls I built are paper thin
And every breath lets darkness in
I try to fight, but I just freeze
My thoughts are thorns I can't unweave

And I pretend I'm fine again
But I'm drowning in my skin

Tearing through me
I can't hold on
I've been breaking
For far too long
This fear is crawling
Underneath my skin
I scream for silence
But it won't let me in
I'm fading, I'm falling
Again and again

The mirror shows a stranger's face
Eyes that beg to be erased
I wear a smile that doesn't stay
Hiding pain I can't betray

And I pretend I'm whole again
But I'm hollow deep within

Tearing through me
I can't hold on
I've been breaking
For far too long
This fear is crawling
Underneath my skin
I scream for silence
But it won't let me in
I'm fading, I'm falling
Again and again

I'm not okay…
I'm not okay!
I tried to run
But I can't escape
The storm I hide
Becomes my fate

Tearing through me
I can't hold on
I've been breaking
Far too long
This fear is crawling
Underneath my skin
I scream for silence
But it won't let me in
I'm bleeding, I'm calling
From deep within
Still fading, still falling
Again and again`,
  },
  {
    slug: 'shadows-in-the-room',
    title: 'Shadows in the Room',
    album: 'Unheard',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Shadows in the Room” is a song about grief, haunting memories, and the way absence can turn a familiar space into a place of quiet torment. It captures the ache of someone…',
    story: `“Shadows in the Room” is a song about grief, haunting memories, and the way absence can turn a familiar space into a place of quiet torment. It captures the ache of someone who lost a person — whether to distance, heartbreak, or something deeper — and now feels their presence everywhere… except where it should be.
The opening lines create a chilling atmosphere:
“Quiet walls, they never talk, but I feel them watching.”
The room becomes a character — a witness to everything that happened, everything that broke, and everything that was left unsaid.
There are eyes in the cracks, shadows that move like memories, and an empty space where love once grew.
The narrator is trapped in a physical and emotional environment that won’t let them forget.
The first chorus asks the central question of the song:
“Do you hear me when I call your name?”
The narrator knows the answer might be no — but asks anyway.
The blame, the grief, the unanswered longing all echo back.
They’re drowning slowly, not in water, but in memories they can’t escape.
The shadows whisper the other person’s pain — suggesting the hurt wasn’t one-sided.
The second verse deepens the haunting imagery:
Footsteps echo in the hallway — but they belong to no one.
Time bleeds away another night.
There’s no one left to turn on the light — literally or emotionally.
This is a world where loneliness takes physical form.
The second chorus reinforces the ghost-like presence of the person who left — the way their absence still speaks louder than most people’s presence ever did.
Then comes the darkest moment in the song:
“The mirror cracks — it swallows my face.”
Identity starts dissolving.
The narrator doesn’t recognize themselves anymore.
There’s nothing left but an empty space.
The scream is swallowed whole by the silence — the room devours it.
The silence becomes a suffocating force wrapping around their soul.
The final chorus repeats the truth:
The room is full of shadows, and none of them are truly the person the narrator is calling for — only reflections of pain, regret, and broken memories.
In the Adolxsense universe, “Shadows in the Room” stands as one of the most atmospheric and haunted tracks — not in a supernatural sense, but emotionally.
It’s about the way absence becomes presence,
how silence becomes noise,
and how grief can echo louder than any scream.
It represents the chapter where the character is alone with their memories — trapped in a space that used to feel like home, now turned into a mirror of everything they’ve lost.`,
    lyrics: `Quiet walls they never talk
But I feel them watching
Eyes in the cracks shadows in the room
Empty space where you used to bloom

Do you hear me when I call your name
Or is it lost in the echo of blame
I'm drowning slow in this endless rain
Shadows in the room whisper your pain

Footsteps ghosting down the hall
They don't belong to anyone at all
The clock's hands bleed another night
No one here to turn on the light

Do you hear me when I call your name
Or is it lost in the echo of blame
I'm drowning slow in this endless rain
Shadows in the room whisper your pain

The mirror cracks it swallows my face
All that's left is an empty space
I scream but it's swallowed whole
The silence wraps around my soul

Do you hear me when I call your name
Or is it lost in the echo of blame
I'm drowning slow in this endless rain
Shadows in the room whisper your pain
Shadows in the room whisper your pain`,
  },
  {
    slug: 'silent-hallways',
    title: 'Silent Hallways',
    album: 'Unheard',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Silent Hallways” is a song about feeling invisible — about walking through places filled with people, voices, and life, yet feeling completely unseen. It captures that…',
    story: `“Silent Hallways” is a song about feeling invisible — about walking through places filled with people, voices, and life, yet feeling completely unseen. It captures that aching loneliness that doesn’t come from being alone, but from being surrounded by the world and still feeling like you’re not part of it.
The opening lines set the emotional landscape:
“Silent hallways where echoes fall… a shadow of me against the wall.”
The narrator is present physically, but emotionally fading.
Every whisper hits like a scream — proof that when you’re struggling inside, even the smallest sound can feel overwhelming.
The theme becomes clear quickly:
This is a song about being overlooked, unheard, and unsure of where you belong.
The first chorus asks the central questions:
“Why does the world spin without me?
Why does the sky feel so empty?”
It’s the internal monologue of someone who is standing in plain sight but feels like background noise in their own life.
The repetition — “I’m here, I’m here, can’t you see?” — is both a plea and a confession.
No one is looking.
No one feels free.
Everyone is trapped in their own battles, and the narrator feels lost in the spaces between them.
The second verse paints loneliness in vivid, everyday details:
Worn-out sneakers, gravel streets, counting cracks in the pavement —
these small, repetitive actions show a person trying to ground themselves in something familiar.
A thousand faces pass by, but none stay — people blur, conversations drift, connection feels impossible.
Words become heavy, too heavy to speak, and float away before they’re ever heard.
Then comes one of the strongest metaphors in the song:
“I built a fortress brick by brick, but it crumbles when the clock ticks.”
The narrator tried to protect themselves emotionally, but time — and life — slowly breaks down every wall.
You can hide from the world only for so long before the loneliness becomes louder than the fears you ran from.
The final verse shifts to a striking image:
A tree in winter — roots deep, branches bare.
This symbolizes resilience mixed with emptiness.
The narrator is grounded, but not growing.
Present, but depleted.
The stars are loud, the moon is silent — even the universe feels distant and disconnected.
The last line is the quietest and most vulnerable question of all:
“Am I too small? Am I too weak?”
It’s the raw honesty of someone wondering if they matter — if they’re seen, if they’re enough.
In the Adolxsense universe, “Silent Hallways” is a portrait of emotional invisibility — the feeling of walking through life on mute while the world keeps rushing by.
It represents the chapter where the character confronts their deepest insecurities:
belonging, identity, purpose, and the fear of being forgotten.
It’s a song for anyone who has ever felt like a quiet shadow in a loud world.`,
    lyrics: `Silent hallways where echoes fall
A shadow of me against the wall
Every whisper feels like a scream
Alone in the crowd
Lost in a dream

Why does the world spin without me
Why does the sky feel so empty
I'm here
I'm here
Can't you see
But no one's looking
No one's free

Worn-out sneakers
Gravel streets
Counting cracks beneath my feet
A thousand faces
None of them stay
Words are heavy
They float away

I built a fortress
Brick by brick
But it crumbles when the clock ticks

Why does the world spin without me
Why does the sky feel so empty
I'm here
I'm here
Can't you see
But no one's looking
No one's free

A tree in winter
Roots so deep
But branches bare
No leaves to keep
The stars are loud
The moon won't speak
Am I too small
Am I too weak`,
  },
  {
    slug: 'break-the-echo',
    title: 'Break the Echo',
    album: 'Unheard',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Break the Echo” is a song about reclaiming your voice after being emotionally silenced and manipulated for far too long. It’s the moment someone finally realizes their…',
    story: `“Break the Echo” is a song about reclaiming your voice after being emotionally silenced and manipulated for far too long. It’s the moment someone finally realizes their worth, steps out of the shadows, and cuts ties with the person who tried to reduce them to an echo of themselves.
From the opening verse, the emotional dynamic is clear:
“I gave you silence when you needed peace… swallowed my voice just to keep the peace.”
The narrator sacrificed themselves — their needs, their truth, their voice — all to avoid conflict and hold the relationship together.
But that silence wasn’t appreciated.
Instead, they were ignored, dismissed, and ultimately erased:
“You looked right through me, like I wasn’t there.”
The pain becomes suffocating —
“choking on empty air.”
It’s the emotional experience of being unseen even when standing right in front of someone.
The turning point arrives quickly:
“I’m not your shadow anymore.”
This is the moment the narrator decides to step out of the role they were forced into — the quiet, compliant, invisible one.
The chorus explodes with defiance and finality:
They’re done fading.
They’re done breaking.
They refuse to be controlled.
They refuse to give their voice to someone who never listened.
“You made your choice, now live alone” is a declaration of release — not cruelty, but truth.
They’re done screaming at a person who emotionally turned to stone.
The second verse exposes the emotional manipulation:
Twisting words, gaslighting, being made to feel “crazy” or deserving of blame.
This verse acknowledges the abusive pattern — and claims the right to break free of it.
“I’m setting fire to yesterday”
symbolizes burning down the version of themselves that stayed silent, afraid, or loyal to someone who wasn’t loyal back.
The third section brings clarity rather than vengeance:
“This isn’t hate, it’s letting go.”
This is not a revenge anthem — it’s a liberation anthem.
It’s about walking away from every lie, every cycle, every emotional chain.
The final chorus shows a full transformation:
Their voice has awakened.
They won’t beg or crawl.
They won’t scream into someone’s indifference again.
They’ve taken control of their life and identity.
The repetition of “Break the echo” at the end is symbolic:
They’re breaking the loop —
breaking the silence,
breaking the patterns,
breaking the person they were forced to become.
In the Adolxsense universe, “Break the Echo” represents the chapter of rebellion and reclamation.
It marks the moment a character stops living as a reflection of someone else’s expectations and begins living as themselves again — louder, stronger, unapologetic.
It’s for anyone who has ever been made small, silenced, blamed, or ignored —
and finally said:
Enough.`,
    lyrics: `I gave you silence when you needed peace
Swallowed my voice just to keep the peace
You looked right through me, like I wasn't there
Now I'm choking on the empty air

I begged for light, you closed the door
I'm not your shadow anymore

I'm done fading, I'm done breaking
Screaming loud but no one's shaking
You don't get to hold me down
You don't get to wear this crown
You made your choice, now live alone
I'm done screaming to the stone
No more chains around my soul
This time I break the echo

I watched you twist my every word
Like I was crazy, like I deserved
The cold, the blame, the weight, the fight
But I'm reclaiming back my right

No more silence just to stay
I'm setting fire to yesterday

I'm done fading, I'm done breaking
Screaming loud but no one's shaking
You don't get to hold me down
You don't get to wear this crown
You made your choice, now live alone
I'm done screaming to the stone
No more chains around my soul
This time I break the echo

This isn't hate, it's letting go
Of every lie I used to know
I won't beg, I won't crawl
I'll rise from the ashes of it all

I'm done fading, I'm done breaking
This voice of mine is finally waking
You don't get to hold me down
You don't get to wear this crown
You made your bed, now sleep alone
I won't scream into your stone
No more chains, I've found control
This time I break the echo

Break the echo
Break the echo`,
  },
  {
    slug: 'where-the-light-still-goes',
    title: 'Where the Light Still Goes',
    album: 'Unheard',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Where the Light Still Goes” is a song about quiet heartbreak — the kind that doesn’t explode, doesn’t scream, and doesn’t beg. It simply accepts. It captures the moment when…',
    story: `“Where the Light Still Goes” is a song about quiet heartbreak — the kind that doesn’t explode, doesn’t scream, and doesn’t beg. It simply accepts. It captures the moment when you realize someone you love is slipping away, and there’s nothing left to hold on to except memory, light, and the promise that you will remember them even when they no longer stay.
The song opens with a soft realization:
“You don’t have to say a word — I already know.”
The narrator senses the emotional distance, the fading warmth, the half-hearted presence that signals an ending.
The wind changes.
The silence grows heavy.
They tried to hold on, but the timing was always wrong — always “too late.”
The chorus becomes a quiet vow:
“I’ll wait where the light still goes.”
This line is symbolic —
a place of tenderness, memory, and emotional clarity.
It’s the last place where love still lingers before disappearing into night.
The stars falling softly represent the gentle collapse of something once bright.
If goodbye is the only gift left, the narrator chooses to honour it with remembrance —
holding the other person’s name like a prayer against the coldness of loss.
The second verse explores the contradiction of love fading:
Once, they promised it would never end —
but even fire sleeps.
The narrator watches that love drift slowly into darkness.
The other person smiles with a sense of relief, as if leaving is liberation, not tragedy.
Meanwhile, the narrator remains with the weight of all the futures that will never happen.
The chorus returns, lifting the emotional intensity:
Staying behind.
Remembering.
Holding on to light even as darkness takes over.
Choosing to wait in the last place where hope still existed.
The final lines —
“I’ll still wait… where the light still goes…”
— are a whisper of acceptance.
A soft surrender.
Not waiting for the person to return,
but waiting to heal in the glow of what once was.
In the Adolxsense universe, “Where the Light Still Goes” is a song of peaceful heartbreak —
the moment where love isn’t ripped away,
but gently fades into the horizon.
It speaks to the kind of goodbye that isn’t angry or dramatic —
just quietly devastating.
It’s about loving someone enough to let them go with grace,
to remember their name kindly,
and to sit in the last place where the light still touches your heart.`,
    lyrics: `You don't have to say a word
I already know
You're here, but half of you
Is letting go
The wind has changed, I feel the shift
Like silence with a weight
I tried to hold you close
But I was always too late

So I'll wait where the light still goes
Where the stars fall soft on the road
If goodbye is all we get
Then I'll try not to forget
I'll hold your name like a prayer in the cold
And I'll wait where the light still goes

You once said we'd never fade
But even fire sleeps
And now I watch your love
Drift into the deep
You smile like it's the end of pain
Like leaving sets you free
And I stay behind
With all we'll never be

So I'll wait where the light still goes
Where the stars fall soft on the road
If goodbye is all we get
Then I'll try not to forget
I'll hold your name like a prayer in the cold
And I'll wait where the light still goes

I'll still wait…
Where the light still goes…`,
  },
  {
    slug: 'fading-echoes',
    title: 'Fading Echoes',
    album: 'Unheard',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Fading Echoes” is a song about losing the emotional fire of youth — the passion, the intensity, the rawness — and waking up one day to realize that the world feels duller,…',
    story: `“Fading Echoes” is a song about losing the emotional fire of youth — the passion, the intensity, the rawness — and waking up one day to realize that the world feels duller, colder, quieter than it used to. It’s about nostalgia not for a person, but for a feeling. For a version of yourself that burned brighter, felt deeper, and believed harder.
The song begins by recalling the vibrance of the past:
“Painted skies in my memory lane… hearts burned like summer rain.”
These are memories soaked in color, sound, and emotion — a time when life felt alive and every moment mattered.
But now?
Silence is the companion.
Dreams that once felt like a second skin no longer fit.
The transition from youth to adulthood is captured in a single line:
“Now I wake in a colder light.”
The magic dims.
The world feels harsher, more artificial —
trading stars for neon.
The first pre-chorus asks the core questions:
Where did the rush go? Where did the colors bleed?
Everything feels hollow, empty, muted.
It’s not depression — it’s disillusionment.
Not heartbreak — but a slow emotional fading.
The chorus expresses the longing with heartbreaking clarity:
“I miss the way I used to feel.”
Back when music healed instead of echoing.
Back when love was real, not metaphor.
Back when every heartbeat carried meaning.
Growing up required letting go —
not just of people, but of belief, wonder, innocence itself.
The second verse expands the theme:
Carving names into time only for it to wipe them away.
Moments blur, faces blur, and the soul grows quieter.
The narrator doesn’t just miss someone —
they miss themselves.
The imagery becomes painfully relatable:
Candy dreams losing their sweetness.
A mirror that laughs because the person inside feels unfamiliar.
Missing the ache and the fight —
because even pain meant being alive.
The second pre-chorus deepens the emotional numbness:
Everything feels borrowed, temporary, without roots.
Nothing begins — everything ends.
The second chorus reflects the same longing but through the lens of erosion:
Hugs feel empty.
Youth turns into a ghost you tell stories about.
Falling used to feel like learning —
now it feels like sinking.
The bridge is the emotional peak:
The narrator sees the kid inside themselves —
the one who screamed truth, believed anything was possible, felt everything fully.
But every step into adulthood pushes that kid further away.
The final chorus becomes softer, more resigned:
The narrator misses not just fire or sting —
but the belief in everything.
Growing up meant fading, piece by piece, learning boundaries, learning “no,” learning survival.
The final line is the perfect closing image:
“Fading echoes in the dark, still tracing where I left my spark…”
The spark isn’t gone —
just buried.
Dimmed.
Dormant.
Waiting to be found again.
In the Adolxsense universe, “Fading Echoes” is the soundtrack of late-night nostalgia — the introspection that hits quietly, honestly, painfully.
It represents the chapter where the character confronts the loss of innocence and wrestles with the emotional distance between who they were and who they’ve become.
It’s the bittersweet realization that we don’t miss the past —
we miss the person we were allowed to be in it.`,
    lyrics: `Painted skies in my memory lane
Back when hearts burned like summer rain
We used to scream like the world would end
Now silence speaks like an old best friend

Wore my dreams like a second skin
Believed in love, like fire within
Now I wake in a colder light
Trading stars for neon nights

Where did the rush go?
Where did the colors bleed?
Everything tastes hollow
Nothing's what I need

I miss the way I used to feel
When every song could make me heal
Now echoes fade where music roared
And love is just a metaphor
I miss the fire, I miss the sting
When every heartbeat meant something
But growing up meant letting go
Of who I was, of what I know

We carved our names into passing time
Now I just scroll past what's not mine
The faces blur, the moments die
The soul grows quiet, but still asks why

Candy dreams don't taste the same
The mirror laughs, but who's to blame?
I miss the ache, I miss the fight
When everything hurt — but it felt right

Where did the wonder go?
Why can't I break or bend?
Everything feels borrowed
No beginnings, just the end

I miss the way I used to feel
When every scar was something real
Now every hug feels like a shell
And youth is just a ghost I tell
I miss the fire, I miss the sting
When falling felt like learning wings
But growing up meant fading slow
Like photographs in undertow

I see that kid behind my eyes
Still screaming truth beneath the lies
But every step into today
Takes him just a breath away

I miss the way I used to feel
When even silence knew the deal
Now every word just slips right through
Like ash from dreams I never knew
I miss the fire, I miss the sting
When I believed in everything
But growing up meant letting go
And I'm still learning to say no

Fading echoes in the dark
Still tracing where I left my spark…`,
  },
  {
    slug: 'fragments-of-enough',
    title: 'Fragments of Enough',
    album: 'Unheard',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Fragments of Enough” is a song about the exhaustion of being someone else’s foundation — about giving until you’re empty, breaking yourself to keep others whole, and finally…',
    story: `“Fragments of Enough” is a song about the exhaustion of being someone else’s foundation — about giving until you’re empty, breaking yourself to keep others whole, and finally realizing that no amount of sacrifice will ever be “enough” for people who never intended to hold you with the same care.
This is a song of awakening.
A song of collapse.
A song of rebirth.
The opening verse sets the tone with devastating imagery:
“I bent backwards just to shape the sky…”
The narrator twisted themselves into impossible shapes to keep others comfortable —
painting beauty over cracks, stitching wounds with their own breath, building bridges out of their own bones.
Every smile was borrowed.
Every effort was silent and unpaid.
Still, people demanded more.
The emotional question emerges early:
“Tell me, when is broken whole?”
It reflects the crushing truth of self-sacrifice — you can give everything and still be told it’s not enough.
The first chorus delivers the central wound:
“I tried, I bled, I gave too much — but still it wasn’t close to enough.”
The narrator tore pieces of themselves to keep others warm, but in return, they were watched, judged, and abandoned.
They were the flame while others held the light.
The name survived — the person did not.
The second verse dives deeper into the metaphor of being used as structural support:
Being the mortar in a tower built by others.
Carving truths into lies, hoping to finally be valued.
But glass-hearted people shatter loudly and blame the one who tried to help them.
Even when the narrator rearranged themselves entirely, they still heard, “You haven’t changed.”
Another haunting question follows:
“When does silence scream?”
An acknowledgment that internal suffering can be deafening even when invisible.
The repetition of the chorus intensifies the realization that self-sacrifice was never the answer — it only fed the imbalance.
The bridge represents a turning point:
“Maybe I was made to break… but even dust remembers air.”
Even in ruin, there is memory.
Even in silence, there is longing for care.
The narrator refuses to rebuild what others continually destroy — recognizing that not every sacrifice leads to healing or love.
The final chorus shifts from tragedy to empowerment:
They gave their voice, it was taken.
They held the blade while others claimed the throne.
But now they are done.
The last lines are triumphant and liberating:
“Not weak, not gone — I’ve had enough.
Now I rise from shattered love.”
It’s the moment the narrator stops bleeding for others and begins rebuilding themselves.
In the Adolxsense universe, “Fragments of Enough” stands as one of the defining songs of self-reclamation.
It’s about reaching the breaking point and choosing yourself for the first time after years of choosing others.
It’s a reminder that love without reciprocity becomes harm —
and that healing begins when you stop calling sacrifice “strength.”
This song speaks to anyone who has ever given endlessly, only to discover that the people they saved would never save them back.`,
    lyrics: `I bent backwards just to shape the sky
Painted gold where the cracks ran dry
Stitched their wounds with my own breath
Built a bridge out of bones they left
Every smile I gave was borrowed
Stacked in silence, paid in sorrow
Still they asked for more of me
A puzzle piece that ceased to be

Tell me, when is broken whole?
When does giving back your soul?

I tried, I bled, I gave too much
But still it wasn't close to "enough."
Tore my skin to keep them warm
But they just watched me brave the storm
They held the light, I stayed the flame
Now all that's left is just my name
No "thank you," no regret, no trust
Only echoes of my rust

I was mortar in their tower tall
Sacrificed just to break the fall
Carved my truth into their lies
Hoping worth would crystallize
But glass hearts shatter loud and quick
When you're the glue, you're also the stick
Gave my pieces, all arranged
Yet still they said, "You haven't changed."

Tell me, when does silence scream?
When is struggle just a dream?

I tried, I bled, I gave too much
But still it wasn't close to "enough."
Tore my skin to keep them warm
But they just watched me brave the storm
They held the light, I stayed the flame
Now all that's left is just my name
No "thank you," no regret, no trust
Only echoes of my rust

Maybe I was made to break
A soul for others' hands to take
But even dust remembers air
Even silence wants to care
I won't rebuild what they destroy
Not every sacrifice brings joy

I tried, I bled, I gave too much
But still it wasn't close to "enough."
Gave my voice, they took my sound
Still they asked me not to drown
They held the throne, I held the blade
And now I'm done with what I gave
Not weak, not gone — I've had enough
Now I rise from shattered love

I gave too much
I've had enough
Now I rise
From shattered love`,
  },
  {
    slug: 'inside-the-maze',
    title: 'Inside the Maze',
    album: 'Unheard',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Inside the Maze” is a song about confronting the labyrinth of your own mind — the confusion, the fractured identity, the echoes of the past, and the heavy task of…',
    story: `“Inside the Maze” is a song about confronting the labyrinth of your own mind — the confusion, the fractured identity, the echoes of the past, and the heavy task of rediscovering yourself after years of trying to be who others told you to be. It’s an inner journey of fear, clarity, and slow rebirth.
The song begins in suffocating isolation:
“In the silence where I scream, no one hears the voice in me.”
The narrator’s pain is invisible.
Their voice is lost inside walls no one else can hear through.
Cracked mirrors reflect fragmented versions of who they used to be —
shattered youth, broken potential, memories trapped in echoing halls.
Each hallway of glass symbolizes fragile identity,
every step reminding them of past expectations and failures.
The question “Who am I beneath this skin?” is not rhetorical —
it’s the core wound of someone who never got to define themselves.
The first pre-chorus reveals the internal prison:
Every thought turns to chains,
pulling them deeper into the maze of doubt and emotional rain.
The chorus captures the heart of the struggle:
They’re falling deeper, searching for a version of themselves that feels real.
The pieces of who they were float in a shadowed haze —
recognizable but unreachable.
They need help, not to be rescued, but to be seen.
To find their way back home — not a place, but a sense of self.
The second verse exposes the origin of the maze:
“I wear the names they gave to me, stitched in fear and apathy.”
This is about identity forced by others — labels, expectations, pressures.
Trying to please, trying to fit, trying to survive —
until the soul itself gets lost.
But then comes the turning point:
A voice inside begins to wake.
Small, trembling, fragile — but real.
For the first time, the narrator breathes under broken skies,
discovering a flicker of hope even while lost.
The second pre-chorus transforms scars into stitching:
Every wound becomes a thread —
sewing new life where pain once lived.
This is self-repair, not self-destruction.
The second chorus carries more clarity:
They’re still lost, but now there’s belief.
Pieces are still floating, but no longer meaningless.
They ask for help — not for saving, but for guidance, for grounding.
The bridge is a moment of powerful vulnerability:
They reject perfection’s mask.
They ask who they are when no one is watching.
The answer:
Someone fighting, quietly, to break free.
The final chorus shifts from falling to rising:
They’re breaking, but also growing.
The fragments start forming a recognizable face —
their own.
They want help, but also want to learn how to build themselves,
not become someone else’s creation again.
The final line delivers the hard-earned truth:
“I’m inside the maze I made, but I’m learning I don’t have to fade.”
The maze is self-made — shaped by choices, fears, trauma, silence —
but that also means it can be unmade.
Healing starts with acknowledgment.
The narrator isn’t out yet,
but they finally see a path forward.
In the Adolxsense universe, “Inside the Maze” is a song of inner reconstruction —
a quiet rebellion against the versions of ourselves shaped by the expectations of others.
It’s about getting lost, breaking down, and then slowly finding the courage to rebuild from within.
It’s a reminder that even inside the deepest maze,
you can find your way out —
if you keep walking.`,
    lyrics: `In the silence where I scream
No one hears the voice in me
Mirrors crack but show no truth
All I see is shattered youth

Wandering through halls of glass
Each step echoes from the past
Who am I beneath this skin?
A war I never chose to win

Every thought becomes a chain
Pulling me beneath the rain

I'm falling, deeper than before
Searching for a self I can't ignore
These pieces float in shadowed haze
I'm still lost inside this maze
Lift me from the cold unknown
Help me find my way back home

I wear the names they gave to me
Stitched in fear and apathy
I tried to fit, I tried to please
But lost my soul in the disease

A voice inside begins to wake
A trembling sound the silence breaks
Through broken skies I start to breathe
Though I am lost, I still believe

Every scar becomes a thread
Sewing life where I once bled

I'm falling, deeper than before
Searching for a self I can't ignore
These pieces float in shadowed haze
I'm still lost inside this maze
Lift me from the cold unknown
Help me find my way back home

I don't want perfection's mask
I just need the strength to ask
Who I am when no one sees
Is someone fighting to be free

I'm rising, even as I break
Finding truth inside the ache
These fragments form a clearer face
Of who I am inside this maze
Lift me from the cold unknown
Help me build myself alone

I'm inside the maze I made
But I'm learning I don't have to fade`,
  },
  {
    slug: 'she-doesn-t-feel-the-rain',
    title: 'She Doesn\'t Feel the Rain',
    album: 'Unheard',
    year: 2025,
    releaseDate: 'November 21, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“She Doesn’t Feel the Rain” is a heartbreaking portrait of emotional numbness — the kind that comes not from a single moment of pain, but from years of feeling unheard,…',
    story: `“She Doesn’t Feel the Rain” is a heartbreaking portrait of emotional numbness — the kind that comes not from a single moment of pain, but from years of feeling unheard, unseen, and quietly overwhelmed. It’s a song about someone who didn’t break in an explosion… but slowly faded until she was no longer reachable.
The song opens with a haunting image:
“She walks alone through streets that know her name, but no one stops.”
She’s familiar to the world, yet invisible.
People recognize her, but no one truly sees her.
Her eyes, once open windows, now have their curtains drawn — a metaphor for emotional withdrawal.
She’s been fading quietly, slipping out of herself without anyone noticing.
The first verse reveals the early signs of numbness:
Cold hands, weak voice, forced smiles that never reach her eyes.
She talks less, thinks more, and disappears even while standing in a crowd.
She’s there physically, but emotionally out of reach.
The chorus delivers the central theme:
She doesn’t feel the rain anymore.
The rain represents emotional release — crying, cleansing, connection.
But she can’t feel it now.
She’s gone numb.
She built a secret world behind a door that nobody ever found.
She isn’t angry or dramatic — she’s simply not there anymore.
A shadow without dawn.
Someone who used to scream, but now doesn’t even try.
The second verse deepens the tragedy:
Calling her name gets no reaction — she’s disconnected from everything around her.
It’s as if she unlearned how to care.
Her bedroom wall holds writings that don’t make sense — fragments of thoughts, pieces of herself left behind.
Even the music she once loved now hurts — reminders of a self she no longer feels connected to.
The second chorus reinforces the emotional numbness — not pain, not rage, just emptiness.
Then comes the most devastating part of the song — the narrator’s confession:
“I wish I’d seen the cracks appear.
I wish I’d stayed, been loud, been near.”
It’s regret.
The kind that comes when you realize someone was drowning quietly while you mistook their silence for strength.
The narrator didn’t act, didn’t ask, didn’t intervene — and now it’s too late.
The final chorus transforms the meaning:
She doesn’t feel the rain now not because she’s healed —
but because she’s beyond exhaustion.
Too tired to fight, too drained to break, too numb to react.
She’s not angry, she’s not in pain —
she’s just far away, emotionally unreachable.
She used to fight for herself, for her life, for her feeling —
now she only remains.
In the Adolxsense universe, “She Doesn’t Feel the Rain” stands as one of the most quietly devastating songs. It isn’t about explosive heartbreak — it’s about slow erosion.
It’s about becoming numb after carrying too much for too long.
It’s about the loneliness that builds in silence until it becomes an inner world no one can enter.
This song speaks to anyone who has ever faded quietly, or watched someone slip away without knowing how to pull them back.`,
    lyrics: `She walks alone through
Streets that know her name
But no one stops
They all look the same
Eyes like windows
Curtains drawn
She's been fading
Quietly for far too long

Her hands are cold, her voice is low
She smiles sometimes, but it doesn't show
She's talking less, but thinking loud
She disappears inside a crowd

And she doesn't feel the rain anymore
Doesn't cry when it's crashing down
She built a world behind a door
That no one ever found
She's not angry, she's just gone
Like a shadow without dawn
She used to scream, now she refrains
She doesn't feel the rain

I called her name, she didn't turn
Just stared ahead like she'd unlearned
How to care or even try
Like hope had left and said goodbye

There's writing on her bedroom wall
But none of it makes sense at all
And every song she used to love
Now just reminds her not enough

And she doesn't feel the rain anymore
Doesn't cry when it's crashing down
She built a world behind a door
That no one ever found
She's not angry, she's just gone
Like a shadow without dawn
She used to scream, now she refrains
She doesn't feel the rain

I wish I'd seen the cracks appear
I wish I'd stayed, been loud, been near
But silence wrapped her like a chain
And I just watched her drift away

Now she doesn't feel the rain anymore
Doesn't flinch when the thunder rolls
She's not who she was before
Too tired to hold control
She's not angry, she's not in pain
She's just somewhere far away
She used to fight, now she remains
And doesn't feel the rain`,
  },
  {
    slug: 'still-reaching',
    title: 'Still Reaching',
    album: 'Still Reaching',
    year: 2025,
    releaseDate: 'November 14, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Still Reaching” is a song about longing that refuses to fade — the kind of emotional gravity that pulls you back to someone no matter how far time or distance tries to push…',
    story: `“Still Reaching” is a song about longing that refuses to fade — the kind of emotional gravity that pulls you back to someone no matter how far time or distance tries to push you away. It’s about calling out to a person who may never answer, and still choosing to stand in the doorway of hope.
The song opens in a cold, fading world:
“The streets are cold, the lights all fade… I walk alone through yesterday.”
The narrator is stuck in memory, moving through familiar places that no longer feel alive. Every face passes without connection — as if the world kept moving while they remained frozen in the moment everything changed.
The first emotional hit comes early:
“And I keep calling out your name — in the silence, only rain.”
The rain symbolizes unanswered longing — the weight of missing someone who may not be coming back.
The chorus captures the heart of the song:
“Are you out there, are you listening? I’m still reaching through the night.”
Even in darkness, even in uncertainty, the narrator refuses to let go.
The distance is painful. The questions are heavy. The memories linger like shadows — but the hope is still alive.
There’s a quiet promise, too:
“If you ever feel like falling too, I’ll be standing here for you.”
The narrator offers unconditional presence, even while they themselves are breaking.
It’s loneliness wrapped in devotion.
The second verse digs into the struggle to move on:
Trying to smile, trying to breathe, trying to keep living —
but staying trapped in the echo of what slipped away.
The wind whispering the other person’s name symbolizes how memories can haunt even the simplest moments.
Once again, the narrator is pulled back into emotional fire.
The bridge deepens the vulnerability:
“Maybe one day you’ll turn around, and I’ll still be on this ground.”
It’s a confession of stubborn love — of waiting even when waiting hurts.
Every hidden tear, every quiet breakdown was endured because this person once gave the narrator a reason to survive.
The final chorus intensifies the emotional weight:
Even bruised, barely breathing, the narrator still believes they’ll be heard.
Even when there’s nothing new, no change, no proof —
they’re still reaching.
The repetition at the end — “Still reaching…” — becomes a soft, aching mantra.
It echoes the central theme:
Hope without answers.
Devotion without guarantees.
Love that persists beyond logic.
In the Adolxsense universe, “Still Reaching” stands as one of the most emotionally exposed tracks — a story of longing, endurance, heartbreak, and quiet resilience.
It’s for anyone who has ever held onto something (or someone) that felt like home, even after it became out of reach.
It says:
I haven’t given up.
I’m still here.
I’m still reaching.`,
    lyrics: `The streets are cold, the lights all fade
I walk alone through yesterday
Every face just passes by
But none of them can meet my eyes

And I keep calling out your name
In the silence, only rain

Are you out there, are you listening?
I'm still reaching through the night
All these questions, all this distance
Just a shadow left behind
If you ever feel like falling too
I'll be standing here for you
Even when I'm breaking through
I'm still reaching

Tried to move, but I still stay
In the echo of what slipped away
I hold my breath and fake the smile
But it only works a little while

The wind just answers with your name
Pulls me back into the flame

Are you out there, are you listening?
I'm still reaching through the night
All these questions, all this distance
Just a shadow left behind
If you ever feel like falling too
I'll be standing here for you
Even when I'm breaking through
I'm still reaching

Maybe one day you'll turn around
And I'll still be on this ground
With every tear I've had to hide
You were the reason I survived

Are you out there, are you listening?
I'm still reaching through the night
Even bruised and barely breathing
Still believe you'll hear me right
If you ever feel like fading too
I'll be standing here for you
Even when there's nothing new
I'm still reaching
Still reaching…`,
  },
  {
    slug: 'maybe-tomorrow',
    title: 'Maybe Tomorrow',
    album: 'Maybe Tomorrow',
    year: 2025,
    releaseDate: 'November 7, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Maybe Tomorrow” is a song about being suspended in the middle of heartbreak — not at the beginning of loss, and not at the point of healing, but in the heavy, quiet space…',
    story: `“Maybe Tomorrow” is a song about being suspended in the middle of heartbreak — not at the beginning of loss, and not at the point of healing, but in the heavy, quiet space where you know things will get better someday… yet today still hurts too much. It’s a portrait of delayed hope, of trying to keep moving when your heart hasn’t caught up.
The song opens with gentle melancholy:
“I sat by the window, watched the rain, hoping it could wash away the pain.”
The rain symbolizes cleansing, but the narrator quickly realizes the hurt is internal — untouched by anything outside.
The words spoken by the person who left still echo, proving the emotional wound is far from closed.
The first verse paints a picture of emotional exhaustion:
Trying to smile, trying to carry on, but feeling out of place in your own life.
The silence left behind becomes louder than arguments ever were.
And the narrator wonders what they’re even holding on for — a question without an answer.
The chorus captures the central theme:
“Maybe tomorrow…”
Maybe tomorrow things will be okay.
Maybe the shadows will thin out.
Maybe breathing will feel easy again.
Maybe hope will return.
But tonight, sorrow has the wheel.
Tonight is about surviving, not healing.
The second verse dives into reflection:
Looking back on the relationship with clearer eyes — acknowledging the good moments, but also the pain that often outweighed them.
The narrator gave everything, but the other person walked away without warning, leaving doubt and confusion in their wake.
The second chorus reinforces the struggle:
The belief that one day there will be more to life than this heartbreak —
but admitting that today, escape feels impossible.
The bridge becomes a quiet moment of honesty:
You know the night won’t last forever — logic says healing will come.
But emotion doesn’t follow logic.
Still, the narrator whispers a promise to their aching heart:
Tomorrow, they will try again.
The final chorus changes tone — shifting from passive hope to a spark of empowerment:
Maybe tomorrow they’ll find their voice.
Maybe tomorrow they won’t just survive — they’ll rise.
But tonight, they allow themselves to break.
To feel.
To rest.
Because even the strongest hearts need a night of falling apart before they can stand again.
In the Adolxsense universe, “Maybe Tomorrow” represents the chapter of raw vulnerability — the moment before strength returns, where pain is honest and unfiltered.
It’s for anyone who doesn’t feel okay today, but still carries a quiet belief that maybe tomorrow, they will.`,
    lyrics: `I sat by the window, watched the rain
Hoping it could wash away the pain
The words you said still echo clear
But you're not here, you're not near

I tried to smile, to carry on
But everything just feels so wrong
The silence screams louder than before
I don't know what I'm waiting for

Maybe tomorrow I'll feel okay
Maybe the shadows will drift away
Maybe I'll find a reason to breathe
A way to let go, a way to believe
But tonight, I'm lost in this sorrow
Hoping for hope
Maybe tomorrow

I keep replaying what we had
Some days were good, most just sad
I gave my all, but you walked out
Left me with questions, left me with doubt

Maybe tomorrow I'll feel okay
Maybe the silence will fade away
Maybe I'll find the strength to see
There's more to life than you and me
But tonight, I'm stuck in this hollow
Hoping for light
Maybe tomorrow

I know the night won't last forever
But it's hard to believe I'll get better
Still I whisper in the dark
A promise to my aching heart

Maybe tomorrow I'll feel okay
Maybe I'll find my voice to say
I'm still here, I'm still alive
And I won't just survive — I'll rise
But tonight, let me break, let me wallow
Let me be still
Maybe tomorrow`,
  },
  {
    slug: 'whiskey-roads',
    title: 'Whiskey Roads',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Whiskey Roads” is a song about running away from yourself — and realizing the escape always leads back to the same place. It portrays a character driving into the fading…',
    story: `“Whiskey Roads” is a song about running away from yourself — and realizing the escape always leads back to the same place. It portrays a character driving into the fading light, carrying emotional wounds that feel as cracked and fragile as the windshield in front of them. The road becomes a metaphor for every attempt to move on: long, winding, uncertain… a place where distance gives the illusion of freedom but never delivers peace.

The “whiskey roads” are the choices we make when we’re hurting — the distractions, the detours, the late-night escapes meant to numb the heart. They take you far, but never where you truly want to be. They burn, they scar, and yet they become familiar paths you keep returning to when you feel lost.

The second verse introduces a broken relationship:
“Her voice like thunder / His heart like rain / They crash together / But it’s all the same.”
It’s a storm that never ends — two people trying to heal each other while carrying their own chaos. No matter how intensely they collide, the emptiness stays.

At its core, “Whiskey Roads” is about isolation wrapped in motion — the feeling of driving endlessly with music loud, windows down, trying to outrun memories that sit quietly in the passenger seat. It’s a confession of someone who’s moving forward physically, but emotionally stuck in place.

In the world of Adolxsense, this track captures that early-2000s heartbreak aesthetic: raw loneliness, blurry highway nights, and the quiet realization that sometimes the road isn’t leading you away… it’s leading you back to yourself.`,
    lyrics: `Dust in the rearview
Sun sinking low
A crack in the windshield
Don't know where to go
The road it winds and bends
Where does it start or end
Whiskey roads
They take me far
But never home
Whiskey roads
Burn like a scar
I'm still alone
Her voice like thunder
His heart like rain
They crash together
But it's all the same
The fire it burns too bright
No shelter in the night
Whiskey roads
They take me far
But never home
Whiskey roads
Burn like a scar
I'm still alone`,
  },
  {
    slug: 'shadows-in-the-hallway',
    title: 'Shadows in the Hallway',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Shadows in the Hallways” is a song about the silent battles we fight when we feel invisible in a world that keeps moving without noticing us. It captures the raw tension…',
    story: `“Shadows in the Hallways” is a song about the silent battles we fight when we feel invisible in a world that keeps moving without noticing us. It captures the raw tension between wanting to belong and fearing that you never truly will. The imagery is claustrophobic — walls closing in, no air to breathe, whispers leaking through the cracks. It reflects the inner world of someone who carries their heart openly yet feels unseen at every turn.

The hallway becomes a symbolic place: a narrow, dim path where you’re surrounded by people but still profoundly alone. The shadows represent judgment, insecurity, and the haunting sensation of being misunderstood. They laugh when you stumble. They echo your doubts. They morph into every fear you carry about not being enough.

The chorus delivers the emotional punch:
“Laughing while I fall / Screaming in the silence / They don’t hear me at all.”
It’s the experience of pleading for connection, but your voice disappears in the noise of other lives. You exist — but you’re not truly seen.

The second verse deepens the internal struggle: chasing fragments of identity, feeling like every glance burns into you, questioning whether you matter or are just a ghost passing through someone else’s world. It’s the fear of becoming forgettable, of having no place that feels like home.

At its core, “Shadows in the Hallways” is about the battle between self-worth and self-doubt. It’s about the loneliness that hits even when you’re surrounded by people — the kind that echoes louder in familiar places than in solitude.

Within the Adolxsense universe, this track represents the emotional weight of adolescence: the hallways of school, the stares you can’t decode, the whispers you swear are about you, the sensation that everyone belongs somewhere except you. It’s a cry for recognition — not pity, not applause — just to be seen.`,
    lyrics: `Fists in my pockets heart on my sleeve
Walls closing in nowhere to breathe
Whispers crawl through the cracks in the door
Do I belong or am I alone
Every stare cuts straight to the bone
Shadows in the hallway
Laughing while I fall
Screaming in the silence
They don't hear me at all
Shadows in the hallway
Where do I belong
Chasing the echoes trying to find
Pieces of me left behind
Every glance burns holes in my skin
Do I matter or am I a ghost
Just another name they'll never know
Shadows in the hallway
Laughing while I fall
Screaming in the silence
They don't hear me at all
Shadows in the hallway
Where do I belong`,
  },
  {
    slug: 'shattered-silence',
    title: 'Shattered Silence',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Shattered Silence” is a song about breaking through the internal battles we try to hide from the world — the kind that fracture us quietly, long before anyone notices. It’s…',
    story: `“Shattered Silence” is a song about breaking through the internal battles we try to hide from the world — the kind that fracture us quietly, long before anyone notices. It’s an anthem of transformation born from pain: the collapse of old identities, the cracking of emotional armor, and the violent rebirth that comes when you finally stop pretending everything is fine.

The opening lines paint a world in chaos:
Broken minds, shattered time, chasing dreams, crossing lines.
It’s the feeling of trying to move forward while pieces of your life fall apart in slow motion. The mask — a symbol of strength, composure, or denial — is torn, revealing a heart still burning and a soul fighting its way back to life.

The chorus is sung with female vocals by design: it adds vulnerability mixed with power, giving the song a haunting, orchestral edge.
“Shattered silence, hear me scream!”
It’s not a scream out of defeat — it’s the first cry of someone reclaiming their voice after being quiet for too long. The violins and cello imagery deepens that cinematic tension: emotion as sound, grief as melody, resilience rising from the wreckage.

The second verse brings clarity through struggle — climbing pain step by step, breaking chains one by one. The whispers in the mind represent intrusive thoughts, old wounds, and the memory of every battle fought alone. But even as the shadow grows, the declaration “But I’ll rise above it all” signals the turning point: the moment the character chooses to rebuild, no matter how shattered they feel.

At its core, “Shattered Silence” is about survival. It’s about claiming space after years of shrinking yourself. It’s the moment where silence — once a prison — breaks open and becomes a roar of self-recovery.

In the Adolxsense universe, this track represents the explosive intersection of vulnerability and strength: the emotional meltdown, the orchestral scream, the cinematic rise. It’s the soundtrack of someone fighting their own mind and emerging not unbroken, but reborn.`,
    lyrics: `Broken minds
Shattered time
Chasing dreams
Crossing lines
Underneath
The mask is torn
Heart of fire
Soul reborn
I see the cracks in the light
I feel the weight of the fight
(Sung by female vocals)
Shattered silence
Hear me scream!
Tearing apart the fragile dream!
Violins cry
The cello moans
In the wreckage
We stand alone!
Step by step
Climb the pain
Feel the loss
But break the chain
Silent whispers in my mind
Echo loud
No peace to find
The shadow grows as I fall
But I'll rise above it all
(Sung by female vocals)
Shattered silence
Hear me scream!
Tearing apart the fragile dream!
Violins cry
The cello moans
In the wreckage
We stand alone!`,
  },
  {
    slug: 'shatterproof',
    title: 'Shatterproof',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Shatterproof” is a declaration of survival. It’s the sound of someone who has been torn apart by life, stitched themselves back together, and now stands unbreakable — not…',
    story: `“Shatterproof” is a declaration of survival. It’s the sound of someone who has been torn apart by life, stitched themselves back together, and now stands unbreakable — not because they avoided pain, but because they walked straight through it.

The song begins in a battlefield disguised as silence.
“I woke up in the silence, breathing in the war”
This sets the emotional landscape: the war isn’t outside — it’s internal. The scars speak louder than words. The chaos buried deep inside refuses to stay silent, clawing at the walls built to keep the world at a distance.

The verses reveal a character who is exhausted, numb, and haunted:

Chains rusted by rain — trauma worn down over time but still heavy.

Smiling on the outside while screaming inside — the painful duality of existing in survival mode.

Walking through fire and feeling nothing — emotional burnout that turns pain into emptiness.

Yet beneath all this, a fire is waiting.

The chorus erupts like a battle cry:
“I won’t break! I’m shatterproof beneath the pain!”
This is the moment the song flips — the character refuses to remain a victim of their past. Every wound becomes a flame, every scar a testament to endurance. The darkness learns their name because they no longer hide from it; they confront it head-on.

The second verse digs deeper into the transformation:
Voices that once tried to destroy them inadvertently sharpened their resolve. The cracks they see in the mirror are not signs of weakness — they’re proof of survival.
“I’d rather bleed than turn to stone.”
They choose vulnerability over becoming emotionally numb. Pain becomes creation, not destruction.

The bridge adds a haunting intimacy with whispered lines — the voice of someone who has been pushed to the edge but refuses to vanish. It’s a reminder: they are still here, still fighting, still burning brighter than every attempt to silence them.

In the world of Adolxsense, “Shatterproof” stands as an anthem of rebirth. It carries the full intensity of early-2000s emotional rock: anguish transformed into power, fragility turned into armor, darkness reshaped into fuel. It’s not about being untouched by pain — it’s about being sculpted by it and rising with unshakable defiance.`,
    lyrics: `I woke up in the silence, breathing in the war
Every scar I carry's louder than before
Tried to kill the chaos, buried it inside
But it's scratching at the walls I built to hide
Chains around my memory, rusted from the rain
Smile on the outside, inside I scream in vain
I walk through fire, but feel nothing at all
Dead behind the eyes, still waiting for the fall
I won't break!
I'm shatterproof beneath the pain!
Rip me wide, I'll rise again!
Let the darkness know my name!
I won't fade!
I'm the storm you couldn't tame!
Every wound became a flame —
I was born from all the blame!
Every voice that told me "you'll never survive"
Helped me build the monster keeping me alive
Staring at the mirror, I see the cracks form
But I won't bow down, I've weathered every storm
I've been the silence in a room full of screams
I've stitched my soul from torn-up dreams
The blood on my hands is mine alone
But I'd rather bleed than turn to stone
I won't break!
I'm shatterproof beneath the pain!
Rip me wide, I'll rise again!
Let the darkness know my name!
I won't fade!
I'm the storm you couldn't tame!
Every wound became a flame —
I was born from all the blame!
"I'm still here… even in the dark…"
"I won't disappear…"
I won't break! (Break me!)
I'm shatterproof beneath the pain! (Let me rise!)
Rip me wide, I'll rise again! (Watch me rise!)
Let the darkness know my name!
I won't fade!
I'm the storm you couldn't tame!
Every wound became a flame —
I was born from all the blame!`,
  },
  {
    slug: 'shattered-crown',
    title: 'Shattered Crown',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Shattered Crown” is a rebellion against everything that tried to break you — a song about reclaiming your identity after the world has buried it under pressure,…',
    story: `“Shattered Crown” is a rebellion against everything that tried to break you — a song about reclaiming your identity after the world has buried it under pressure, expectations, and ruin. It’s the sound of someone fighting not just battles on the outside, but the ones that have shaped their soul from within.

The opening imagery places us in a city that feels alive and hostile:
Crawling streets. Shadows high. Burning past where the angels die.
This is a world where innocence has already been lost, and the only way to survive is to keep moving. The city becomes a metaphor for hardship — steel, dirt, dreams crushed under heavy weight — yet the character refuses to surrender.
“I rise, I fall… no time to stall.”
Even when the walls close in, they’re shattered through sheer will.

The chorus is an uprising in musical form:
“Shattered crown — the throne is burning!”
The crown symbolizes power, identity, or destiny twisted by forces beyond control. But the throne burning is not tragedy — it’s liberation. A chance to rebuild without the chains of the past. Hearts of fire turn endlessly, fueling the resolve to rise again and reclaim what was once lost.

The second verse digs deeper into the fight:

Grime on hands, scars on chest — the body keeps the history of every struggle.

Echoes loud, war drums pounding — the internal drive to rebuild, even if it means tearing down old versions of yourself.

Under the stars, I am the sun — the declaration that even in darkness, there is light you generate for yourself.

The bridge brings the emotional shift:
Chains break. Voices rise. Ashes clear.
The character no longer fights alone — it becomes a collective awakening, a chorus of survivors who recognize their own power to rewrite the story.

The outro adds a cinematic contrast: crying strings, a weeping cello, electric fury meeting acoustic calm. It illustrates the duality at the heart of Adolxsense: rage and healing, destruction and reconstruction, noise and silence woven into a single storm.

In essence, “Shattered Crown” is a defiant anthem.
It’s about reclaiming strength after collapse, refusing to let fate dictate who you become, and rising from the ruins with the fire still burning in your chest.

In the Adolxsense universe, this track stands as a rallying cry for anyone who has ever felt crushed, overlooked, or erased — reminding them that even a shattered crown can be reforged.`,
    lyrics: `Crawling streets
Shadows high
Burning past where the angels die
Steel and dirt
The city speaks
Dreams crushed under heavy peaks
I rise
I fall
No time to stall
Walls close in
I break them all
Shattered crown
The throne is burning!
Hearts of fire
Forever turning!
Rise again
From the ground
We'll take back the shattered crown!
Grime on my hands
Scars on my chest
Fighting fate
Won't let it rest
Echoes loud
The war drums pound
Building towers to tear them down
Breathless runs
The race begun
Under the stars
I am the sun
Chains are broken
Voices rise
Through the ashes
See the skies
Shattered crown
The throne is burning!
Hearts of fire
Forever turning!
Rise again
From the ground
We'll take back the shattered crown!
Strings cry out
The cello weeps
Underneath where silence creeps
Electric rage
Acoustic calm
A storm that sings both hurt and balm`,
  },
  {
    slug: 'screams-of-pain',
    title: 'Screams of Pain',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Screams of Pain” is a song about transforming suffering into strength — about taking the parts of yourself that were once sources of shame or weakness and forging them into…',
    story: `“Screams of Pain” is a song about transforming suffering into strength — about taking the parts of yourself that were once sources of shame or weakness and forging them into a crown you wear with defiance. It’s an anthem of rising from personal ruins, embracing the chaos inside, and becoming unbreakable through the very pain that tried to silence you.

The track begins in a bleak landscape:
Broken streets. Walking alone. Shadows whispering.
It paints the internal world of someone overwhelmed by doubts and memories that haunt more than they help. The fire burning “slow” shows exhaustion — a flame dimming but still alive, refusing to go out.

The whispers are symbolic: intrusive thoughts, criticism from others, the ghosts of past failures. They twist, grind, and try to break the mind apart. Yet in that destruction comes revelation:
“Chains that shatter — a crown I’ll find.”
This is the turning point — realizing that survival itself becomes a kind of royalty. The crown isn’t pristine; it’s shattered and rebuilt. It represents every wound that became wisdom.

The chorus embraces this fully:
“Shattered crown, I wear it proud.”
The character no longer hides the cracks. Instead, they turn pain into identity, letting the “screams of pain” become their crowd — a powerful metaphor for owning one’s darkest emotions instead of hiding them.

The second verse amplifies the internal war:

Words like bullets — the damage caused by others.

Echoed lies that fade away — letting go of external judgment.

Rhythm of war in my veins — resilience becoming instinct.

This is the moment where suffering transforms into momentum. The character chooses to rise, to claim power, to rebuild from the inside out.
“Rise from ashes — the world aligns.”
It signals rebirth, clarity, and a new sense of purpose forged through adversity.

Stylistically, “Screams of Pain” carries the emotional DNA of Adolxsense:
raw, gritty imagery, heavy internal conflict, and a triumphant surge that turns despair into empowerment. It feels like the spiritual sibling of “Shattered Crown,” echoing themes of survival, identity, and the unyielding will to rise above the broken ground.

In the Adolxsense universe, this track stands as a battle cry for anyone who has been underestimated, overlooked, or torn apart — reminding them that every scar can become a symbol, and every scream can turn into strength.`,
    lyrics: `Broken streets
I walk alone
Shadows whisper
They've overthrown
The fire inside
I'm burning slow
Cracks in my mind
Nowhere to go
Whispers louder
They twist and grind
Chains that shatter
A crown I'll find
Shattered crown
I wear it proud
Screams of pain
They're my crowd
Rise above
The broken ground
Shattered crown
I wear it proud
Words like bullets
They ricochet
Echoed lies
They'll fade away
Rhythm of war in my veins
Breaking free from the chains
Roaring louder
The fire's mine
Rise from ashes
The world aligns
Shattered crown
I wear it proud
Screams of pain
They're my crowd
Rise above
The broken ground
Shattered crown
I wear it proud`,
  },
  {
    slug: 'rise-from-ruin',
    title: 'Rise From Ruin',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Rise From Ruin” is an anthem of rebirth — the sound of someone standing up from the ashes of their darkest moments and discovering a strength they never knew they had. It’s…',
    story: `“Rise From Ruin” is an anthem of rebirth — the sound of someone standing up from the ashes of their darkest moments and discovering a strength they never knew they had. It’s not a story about avoiding pain, but about becoming unbreakable because of it.

The song opens with devastation:
Burned to the ground. Ashes in the air.
This is rock bottom — the moment where everything seems lost and the world feels like it’s caving in. Yet even here, something refuses to die.
“Steel in my veins, stronger than fear.”
It marks the turning point: a fire inside the character that refuses to be extinguished, even when everything collapses around them.

The pre-chorus is the heartbeat of resilience:
“I’ve fallen — but I rise again.”
It’s a declaration that defeat isn’t the end, just another step on the path. The character recognizes the fall, but refuses to stay down.

The chorus bursts with power and clarity:
“Rise up, rise up — the fire’s inside.”
This is more than motivation — it’s a call to reclaim your own narrative. The chains that once held them captive are shattered. There’s no more waiting, no more hesitation. Life begins where fear ends.
The “we” in the chorus expands the message: resilience isn’t solitary. It’s a shared spark — a reminder that anyone can rise from their ruins.

The second verse deepens the theme:

The weight of the world crushing the chest — emotional pressure that almost suffocates.

Scars running deep — proof of battles fought and survived.

Being more than the wreckage — refusing to be defined by brokenness.

Being defined by dreams instead — turning pain into direction.

The bridge shifts the atmosphere from darkness to dawn:
“The shadows fade, the dawn begins… through the cracks, the light pours in.”
It’s hope breaking through — the realization that even ruins can bloom if given time.

In the Adolxsense universe, “Rise From Ruin” is one of the band’s purest expressions of empowerment. It captures the core message of rising stronger from hardship, embracing the fire within, and refusing to let despair define who you become. It’s the soundtrack of someone rebuilding themselves — not quietly, but with a roar.`,
    lyrics: `Burned to the ground
Ashes in the air
Fists clenched tight
I'm going nowhere
The earth shakes
But I'm still here
Steel in my veins
Stronger than fear
I've fallen
But I rise again
No defeat
No bitter end
Rise up
Rise up
The fire's inside
Feel the strength
Let it be your guide
We break the chains
We won't be denied
Rise up
Rise up
We're alive!
The weight of the world
Pressing my chest
Scars run deep
But I'm at my best
Through the storms
Through the screams
I'm more than the wreckage
I'm my dreams
The shadows fade
The dawn begins
Through the cracks
The light pours in
Rise up
Rise up
The fire's inside
Feel the strength
Let it be your guide
We break the chains
We won't be denied
Rise up
Rise up
We're alive!`,
  },
  {
    slug: 'shattered-horizon',
    title: 'Shattered Horizon',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Shattered Horizon” is a song about breaking past every limit, every boundary, and every expectation that once held you down. It’s the story of someone standing at the edge…',
    story: `“Shattered Horizon” is a song about breaking past every limit, every boundary, and every expectation that once held you down. It’s the story of someone standing at the edge of their world — a world fractured by pain, chaos, and uncertainty — and choosing to rise into something greater.

The opening lines set the tone with haunting imagery:
“Breathe in shadows, light breaks thin.”
It’s the moment before transformation — when the darkness feels thick, and the hint of light is delicate but undeniable. Echoes tremble. Chains tighten. Whispers rise through bloodstained veins, symbolizing memories, trauma, and the emotional weight that refuses to stay silent.

The pre-chorus cracks everything wide open:
“Crack the sky, tear it wide.”
This is not just about surviving. It’s about ripping open the very limits of your reality. The storm inside can’t be hidden anymore — and instead of fearing it, the character embraces it, channeling rage, power, and clarity.

The chorus becomes a rallying cry:
“Shattered horizon — we rise, we rise.”
The horizon, once a symbol of possibility, is now shattered — meaning the old future is gone. A new one must be created.
Through the chaos, fire glows in the eyes.
With wings of ash — a phoenix-like symbol — the character burns, then soars.
Breaking free becomes not the end of the journey, but the beginning of a life lived without fear.

The second verse brings the raw physicality of struggle:

Fists clenched tight, rage ignites — adrenaline and determination.

Concrete jungle, endless fights — the world is harsh, but the will to persist is stronger.

Dreams crushed, then built anew — resilience as reconstruction.

Pushing through the ruins — refusing to be defined by destruction.

Everything loops back to the emotional transformation — the storm inside becoming a source of power, not paralysis.

In the world of Adolxsense, “Shattered Horizon” represents the moment when survival turns into ascension. It’s the point in the emotional journey where the character no longer just endures — they rise, rebuild, break barriers, and dare to envision a future untouched by fear.

It’s a song for anyone standing on the edge of their own limits, ready to cut through the chaos and become something stronger.`,
    lyrics: `Breathe in shadows
Light breaks thin
Echoes tremble
Where to begin?
Heartbeats
Pounding
Locked in chains
Whispers rise
Through bloodstained veins
Crack the sky
Tear it wide
A storm inside
I cannot hide
Shattered horizon
We rise
We rise
Through the chaos
Fire in our eyes
Wings of ash
We burn
We soar
Breaking free
Forevermore
Fists clenched tight
Rage ignites
Concrete jungle
Endless fights
Dreams crushed down
Built anew
Through the ruins
I'll push through
Crack the sky
Tear it wide
A storm inside
I cannot hide
Shattered horizon
We rise
We rise
Through the chaos
Fire in our eyes
Wings of ash
We burn
We soar
Breaking free
Forevermore`,
  },
  {
    slug: 'shattered-stillness',
    title: 'Shattered Stillness',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Shattered Stillness” is a portrait of emotional fragility — a moment where silence becomes suffocating, memories fracture the mind, and every breath feels like a quiet…',
    story: `“Shattered Stillness” is a portrait of emotional fragility — a moment where silence becomes suffocating, memories fracture the mind, and every breath feels like a quiet scream. It’s a song about breaking down softly, privately, invisibly… and yet refusing to surrender completely.
The opening lines paint a delicate but devastating picture:
Silent echoes twisting, breaking; whispers piling like fragile shards.
The stillness that should bring peace becomes a trap, heavy with shadows and unspoken fears. The world feels fragile, glowing with the remnants of something that once mattered but has since fallen apart.
The pre-chorus captures internal collapse:
“Every breath a scream inside — soft and fleeting.”
It’s the quiet kind of pain — the kind no one sees, but that eats you from within. It asks the heartbreaking question: Where can I hide from myself?
The chorus is the emotional core of the track:
“Shattered stillness — the pieces fall.”
Identity fractures. Confidence dissolves. The character feels lost, broken, and reduced to nothing. Yet, in the final line, a spark remains:
“Beneath the silence, I’m still unbowed.”
Even shattered, they refuse to bend. There is resilience buried beneath the weight of despair — quiet, but alive.
The second verse brings a beautifully cinematic image:
Fingers tracing lines on the glass, time moving slow yet too fast.
It captures dissociation, nostalgia, longing — the sense of watching life from behind a barrier.
The piano crying becomes the soundtrack of inner sorrow, each note a tear that never dries. It’s introspection turned into melody.
The final pre-chorus echoes the emotional conflict:
Every tear is a fleeting lie — real in the moment, but unable to define the whole story.
The character can’t say goodbye, not because they’re weak, but because they’re still fighting to understand what they’re losing.
The second chorus closes the song where it began — broken, quiet, drowning in the stillness — yet with the same unbreakable ember glowing beneath it all.
In the Adolxsense universe, “Shattered Stillness” is one of the most introspective tracks.
It captures the fragile balance between collapse and perseverance — the silent moments no one talks about, where emotions crack like glass but the spirit refuses to shatter completely.
It’s for anyone who has ever fallen apart quietly… and kept going anyway.`,
    lyrics: `Silent echoes
They twist and break
A thousand whispers
Hearts at stake
The weight of shadows
Pulling me low
A fragile world
Shattered in the glow

Every breath
A scream inside
Soft and fleeting
Where can I hide?

Shattered stillness
The pieces fall
I'm lost
I'm broken
I'm nothing at all
Whisper my name
Scream it loud
Beneath the silence
I'm still unbowed

Fingers tracing lines on the glass
Time moves slow
Yet too fast
A hollow tune
The piano cries
Each note
A tear that never dries

Every tear
A fleeting lie
Soft and screaming
I can't say goodbye

Shattered stillness
The pieces fall
I'm lost
I'm broken
I'm nothing at all
Whisper my name
Scream it loud
Beneath the silence
I'm still unbowed`,
  },
  {
    slug: 'words-never-confessed',
    title: 'Words Never Confessed',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Words Never Confessed” is a confession of regret — a song about the weight of all the things left unsaid, the chances not taken, and the love that slipped through your…',
    story: `“Words Never Confessed” is a confession of regret — a song about the weight of all the things left unsaid, the chances not taken, and the love that slipped through your fingers because fear spoke louder than truth. It captures the quiet heartbreak of someone who didn’t lose love because it ended, but because it never fully began.
The song opens with a delicate ache:
Tracing a name in the dust, trying to let go while echoes cling to memory.
This is the image of someone haunted by their own silence. The past keeps replaying, not because of what happened — but because of what never did.
The first verse reveals a painful truth:
They were already drifting away, and instead of fighting, you stayed quiet.
Silence wasn’t protection — it became the wound.
“Silence cuts deeper than lies.”
It’s one of the most devastating lines in the song, encapsulating how withholding your feelings can hurt more than any mistake spoken aloud.
The chorus is the emotional center:
You almost said you needed them — the feeling was real —
but fear won.
Fear of ruining it, fear of being vulnerable, fear of not being enough.
Now the distance is too wide, not because of betrayal, but because of everything you held back.
The regret is heavy:
“I didn’t fight, I didn’t stay — just let it all slip away.”
It’s not self-hatred — it’s mourning.
You lost someone without ever truly trying to keep them.
And now the weight refuses to leave your chest.
The second verse deepens the isolation:
Their shadow follows you everywhere.
No distraction fills the void they left.
The walls you built to feel safe have become a prison —
and instead of healing, time has sharpened the pain you tried to ignore.
The bridge is the breaking point of honesty:
Maybe you waited too long.
Maybe you were too careful, too quiet, too late.
You bent instead of breaking, held back instead of speaking,
and now you drown in what you never meant to lose.
The final chorus hits with new clarity — acceptance mixed with sorrow:
You let the connection decay.
You watched the light fade.
And now silence, once your shield, screams the truth you never dared to say.
They were the words you never confessed —
and now they’re the ghost you can’t forget.
In the Adolxsense universe, “Words Never Confessed” is the soundtrack of unfinished stories, unspoken emotions, and quiet heartbreak.
It’s the ache of looking back and realizing the only thing that stood between you and what you wanted… was your own silence.
This song speaks to anyone who has ever loved in secret, hesitated too long, or wished they could go back and say what they were too afraid to admit.`,
    lyrics: `I trace your name in the dust on the glass
Try to let go, but the echoes last
Every word I didn't say
Still finds its way back to yesterday

You looked at me like I was already gone
I stayed quiet, tried to play it strong
But silence cuts deeper than lies
And I'm still bleeding on the inside

I almost said I needed you
But the fear spoke louder than truth
Now the space between's too wide to cross
And I'm stuck holding what we lost
I didn't fight, I didn't stay
Just let it all slip away
And now the weight won't leave my chest
You were the words I never confessed

Your shadow moves through my every day
In the quiet moments I lost my way
Tried to replace you with noise and light
But nothing ever really felt right

I built walls thinking I'd feel safe
But now I'm just cold in my own escape
Thought time would heal what I ignored
But I only feel it more

I almost said I needed you
But the fear spoke louder than truth
Now the space between's too wide to cross
And I'm stuck holding what we lost
I didn't fight, I didn't stay
Just let it all slip away
And now the weight won't leave my chest
You were the words I never confessed

Maybe I waited too long to change
Now everything feels out of range
I should've broken before I bent
Now I drown in what I never meant

I almost said I needed you
But the fear spoke louder than truth
Now I live with what I let decay
And watch the light just fade away
I didn't fight, I didn't stay
Just let it all slip away
And now the silence screams the rest
You were the words I never confessed`,
  },
  {
    slug: 'another-life',
    title: 'Another Life',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Another Life” is a song about a love that never had the chance to exist — a connection so real, so visceral, that it feels carved into the soul, yet was denied by timing,…',
    story: `“Another Life” is a song about a love that never had the chance to exist — a connection so real, so visceral, that it feels carved into the soul, yet was denied by timing, circumstance, and fate. It’s not about a breakup; it’s about a love story that was written in the heart but never lived in the world.
The song begins with quiet longing:
“I felt you in the quiet rain… your name still lives beneath my skin.”
This is a memory that goes deeper than logic, deeper than language — something emotional, instinctive, haunting. The person remains under the skin, etched into the narrator’s identity, even though destiny never allowed them a place in reality.
The verses reveal a recurring ache:
You reach for them in dreams, only to wake up torn by the truth.
Your hands were almost touching —
a connection that felt destined,
but one that was somehow refused by the universe itself.
“A love the stars themselves withheld.”
It’s cosmic, tragic, and beautiful in its incompleteness.
The middle of the song confronts the cruelty of timing:
The world was wrong; the timing was unkind.
Paths crossed too early or too late.
The person fades like morning light — something warm and real, gone too soon.
Yet even as they fade, they remain:
“You haunt the spaces left in me.”
This is the kind of love that becomes a ghost — not frightening, but lingering, shaping, unforgettable.
The chorus is the heart of the song — the place where longing becomes hope:
“Maybe in another life…”
It’s a belief that the story isn’t over, just paused — that love this unfinished, this powerful, must continue somewhere beyond this lifetime.
A universe where timing is gentle, love arrives before loss,
and “goodbye” isn’t part of the vocabulary.
In that other life:
You won’t run.
They won’t hide.
The stars won’t pull you apart.
Everything that felt impossible here becomes effortless there.
The bridge deepens the spiritual longing:
Whispering their name into the dark, hoping the wind carries it to wherever they are.
If souls remember what the mind forgets,
then you’ll find them again — in a place beyond memory, beyond time.
The final chorus becomes a promise:
A vow to meet them where pain becomes light,
where forever isn’t broken,
and love doesn’t have to disguise itself as longing.
The last line seals the emotion:
“Wait for me… in another life.”
Not desperation — devotion.
In the Adolxsense universe, “Another Life” stands as one of the most bittersweet tracks:
a love letter to someone who was everything emotionally,
but nothing practically.
A story of souls that touched for a moment yet carry each other forever.
It’s for anyone who has ever felt a love that didn’t fit into this world —
but feels destined to find its place in another.`,
    lyrics: `I felt you in the quiet rain
A memory I can't explain
Your name still lives beneath my skin
But fate won't let you in

I reach for you in every dream
But wake up torn apart at the seam
Our hands were close, but never held
A love the stars themselves withheld

The world was wrong, the time unkind
We crossed too soon, then fell behind
I watched you fade like morning light
Still holding on with all my might

You haunt the spaces left in me
A ghost of what could never be
But even pain won't let you go
You're the only truth I've ever known

Maybe in another life
Where the stars don't pull us wide
Where love arrives before goodbye
And time is on our side
Maybe there we'll get it right
No need to run, no need to hide
I'll find you in the next sunrise
In another life

I whisper your name into the dark
Hoping the wind will carry my heart
If souls remember what hearts erase
Then I'll find you in that place

Maybe in another life
Where the hurt turns into light
Where you don't leave and I don't cry
And forever feels just right
Maybe there we'll dance through time
With no regrets, no last goodbyes
I'll love you past this world's disguise
In another life

Wait for me… in another life`,
  },
  {
    slug: 'eternal-flame',
    title: 'Eternal Flame',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“Eternal Flame” is a song about a love that transcends time, circumstance, and even the boundaries of life itself. It’s not about heartbreak — it’s about devotion. It’s about…',
    story: `“Eternal Flame” is a song about a love that transcends time, circumstance, and even the boundaries of life itself. It’s not about heartbreak — it’s about devotion. It’s about a bond so strong that it outlasts storms, darkness, distance, and change. This is one of the warmest and most hopeful tracks do universo Adolxsense.
The song begins with gentle nostalgia:
“I saw your shadow in the morning light…”
This image captures the lingering presence of someone who remains deeply connected to your soul. Their memory isn’t painful — it’s comforting, like early sunlight breaking through the window.
The opening verses show a love that moves at its own rhythm — one that felt inevitable, timeless, and unshakeable:
A love built to last, a bond that survived every storm and tide.
The emphasis here is not on fragility, but on resilience. This is a relationship forged in struggle, strengthened by loyalty, and defined by presence.
The chorus captures the heart of the song:
“You’re my eternal flame — my never-ending spark.”
The metaphor is powerful: a flame that never dies, a spark that refuses to fade, a lighthouse that stands unbroken even in the darkest seas. It symbolizes guidance, hope, and unwavering constancy.
This love isn’t loud or chaotic — it’s steady, warm, and enduring.
It survives:
time
pain
separation
seasons
cosmic uncertainty
Nothing can shake it.
The second verse expands the emotional universe:
You wrote your names in the endless sky — a poetic symbol of permanence.
No storm can erase it.
The echoes of laughter become a melody that returns with each season, showing how deeply this love is intertwined with the rhythm of life itself.
Then comes the vow:
“If the stars forget to shine, if the clocks unwind…”
Even if reality itself collapses, this love remains.
It’s a promise that transcends logic and sits firmly in the emotional and spiritual realm.
The final chorus reaffirms the truth:
Love like this doesn’t fade.
It doesn’t weaken.
It remains — remarkable, rare, eternal.
In the Adolxsense universe, “Eternal Flame” stands out as a celebration of unbreakable connection.
Where many songs explore loss, regret, or internal struggle, this track is a moment of pure clarity — a tribute to a love that survived everything and grew stronger through it all.
It’s a song for soulmates, for lifelong bonds, for people who found in one another something the universe cannot undo.`,
    lyrics: `I saw your shadow in the morning light
A whisper of you still holding tight
The sun rose slow
But you were fast
A love like ours was built to last

Through every storm
Every tide
You stayed by my side

You're my eternal flame
My never-ending spark
A lighthouse shining in the deepest dark
Through time and space
Through joy and pain
This remarkable love will remain

We wrote our names in the endless sky
No wind
No rain could ever make it die
The echoes of your laughter
They still sing
A melody that seasons bring

If the stars forget to shine
If the clocks unwind
I'll still be yours
Forever entwined

You're my eternal flame
My never-ending spark
A lighthouse shining in the deepest dark
Through time and space
Through joy and pain
This remarkable love will remain`,
  },
  {
    slug: 'no-one-leaves-the-desert-unapproved',
    title: 'No One Leaves the Desert Unapproved',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“No One Leaves the Desert Unapproved” is a song about spiritual transformation — about walking into a season of isolation, pain, and uncertainty, only to discover that the…',
    story: `“No One Leaves the Desert Unapproved” is a song about spiritual transformation — about walking into a season of isolation, pain, and uncertainty, only to discover that the desert isn’t a punishment, but a refinement. It represents the moment in someone’s life where everything feels stripped away, yet somehow a deeper truth begins to emerge.
The song opens in stark solitude:
“I walked alone beneath a dying sky… every tear turned to dust.”
The desert is symbolic — a place where distractions vanish, where silence becomes deafening, and where you are forced to confront your own doubts, fears, and old identities. There is no comfort here, no mask strong enough to survive the heat of truth.
And in that rawness, the narrator’s façade begins to crumble.
The first revelation arrives like a quiet prophecy:
“You’re not lost — you’re being found.”
“You’re not broken — you’re being crowned.”
These lines shift the entire meaning of the desert. It isn’t a place of abandonment — it’s a place of preparation.
It isn’t where you die — it’s where you’re forged.
The chorus captures the essence of the journey:
“No one leaves the desert unapproved.”
Every scar becomes a certificate of transformation.
Every moment of pain becomes a mark of progress.
The desert doesn’t remove you — it reshapes you.
And even when you feel forgotten, you were never out of sight.
The second verse dives deeper into the internal conflict:
Cursing the sky, cursing the pain — feeling desperate, thirsty, stretched thin.
But even through the flames, faith whispers.
The thirst isn’t just physical; it’s spiritual — a longing for clarity, identity, and purpose.
Pride collapses. Ego burns away.
And in the dust, the narrator sees that grace was closer than they ever realized.
More revelations follow:
“You’re not dying — you’re being made.”
“You’re not ending — you’re being saved.”
The desert becomes a sacred place of rebirth.
The bridge feels like a divine whisper:
“Be still…
Be changed…
The desert isn’t death — it’s grace.”
It is the turning point — the moment where resistance ends and transformation begins.
The final chorus rises like a declaration of triumph:
You walk into the desert fragmented, but you emerge refined —
renewed, improved, strengthened by everything you faced.
The narrator understands that the journey wasn’t accidental — it was designed for awakening.
The closing lines seal the truth:
They won’t leave until the process is complete — because now they understand the purpose of the pain.
In the Adolxsense universe, “No One Leaves the Desert Unapproved” stands as one of the most symbolic and spiritually charged songs.
It represents purification, identity reconstruction, and the sacred idea that hardship is not meant to destroy you — but to prepare you for the life you were meant to live.
It’s a song for anyone going through a season of isolation or hardship, reminding them:
You’re not being erased.
You’re being shaped.`,
    lyrics: `I walked alone beneath a dying sky,
No sound, no crowd, just the echo of "why."
The sand cut deep, but I kept my pace
Every tear turned to dust on my face

No shelter here, no voices to please
Just the ghosts of my doubts on their knees
I tried to run, but the silence stayed
In the heat of truth, my mask decayed

You're not lost — you're being found
You're not broken — you're being crowned

No one leaves the desert unapproved
Every scar is the proof you've moved
Through the fire, through the night
You were never out of sight
No one leaves the desert unapproved
You're being shaped, not removed

I cursed the sky, I cursed the pain
But faith was whispering through the flame
The thirst I felt was more than need
It was my soul learning to bleed

I saw my pride fall to its knees
My ego burned with every breeze
But in that dust, I saw it clear
The grace I lost was always near

You're not dying — you're being made
You're not ending — you're being saved

No one leaves the desert unapproved
Every scar is the proof you've moved
Through the fire, through the night
You were never out of sight
No one leaves the desert unapproved
You're being shaped, not removed

"Be still…"
"Be changed…"
"The desert isn't death — it's grace…"

No one leaves the desert unapproved
I was lost but I found the truth
Tore my soul just to be renewed
Now I rise — refined, improved
No one leaves the desert unapproved
And I won't leave until I'm through`,
  },
  {
    slug: 'you-ll-never-know-my-name',
    title: 'You\'ll Never Know My Name',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“You’ll Never Know My Name” is a song about the heartbreak of an almost-love — a connection that felt real, electric, unforgettable… but never had the chance to become…',
    story: `“You’ll Never Know My Name” is a song about the heartbreak of an almost-love — a connection that felt real, electric, unforgettable… but never had the chance to become anything more. It’s the emotional weight of someone who fell deeply for a moment, a glance, a spark that never grew into a flame.
The song opens in a place haunted by memory:
A hallway light, late-night silence, words unsaid.
These are the echoes of a story that never started but left a permanent mark. The character is stuck replaying the little things — the looks, the possibilities, the “what if” — because that’s all there ever was.
The first verses reveal the emotional conflict:
One person walked away without closure, while the other is left wondering whether the connection was shared or imagined.
“Or if I’m just a ghost to you.”
This is the core pain of the song — being deeply affected by someone who may not even remember you.
The pre-chorus drives the longing:
“You’re the silence in every song I know.”
A beautiful metaphor for something that’s present in everything yet untouchable.
The chorus hits with full emotional force:
The person becomes the ultimate “what if” —
a fire that never burned,
a possibility frozen in time,
a scar carved inside the heart.
They are the storm the character never dared to ride — too strong, too real, too fleeting.
The pain lies in the truth:
“I scream for what we never became… but you’ll never know my name.”
It’s the tragedy of loving someone from afar, of carrying feelings that never had the chance to be shared.
The second verse deepens the sense of loss:
Seeing their smile in strangers’ faces, trying to move on but always returning to what could have been.
They never kissed — but the regret tastes real.
The character still writes their name in the air, knowing they’ll never turn around.
There was no beginning, no ending, no closure.
Just an emotional imprint that refuses to fade.
The final bridge is the quiet breakdown at the heart of the song:
Was it nothing? Or was it fate?
The character wrestles with the ambiguity — whether it was a brief coincidence or something meaningful in another life.
The last chorus explodes with desperation and acceptance at the same time — the repeated “never” sealing the truth that this person will never know the depth of the feelings they awakened.
In the Adolxsense universe, “You’ll Never Know My Name” represents the softest and most painful kind of heartbreak — the one that never becomes real enough to heal.
It speaks to the emotional ghosts we carry: people who changed us without ever knowing they did.
It’s the anthem of unspoken love, quiet longing, and the ache of stories that never had a chance to begin.`,
    lyrics: `I still see you in the hallway light
When the world gets quiet late at night
All the words we never said
Still echo loud inside my head

A glance, a spark — and then you left
No closure, no final breath
I wonder if you feel it too
Or if I'm just a ghost to you

I tried to move, I tried to let go
But you're the silence in every song I know

You were the "what if" I can't forget
A fire that never got to burn yet
In another life, in another time
Would you have been mine?
I carry you like a scar inside
You're the storm I could never ride
I scream for what we never became…
But you'll never know my name.

I see your smile in strangers' eyes
But it fades like a passing lie
Tried to fake love, tried to pretend
But no one else fits where you've been

We never kissed, but I still taste
Regret and hope wrapped up in waste
And I still write your name in air
Like somehow you'll be standing there

No goodbye, no start, no end
Just a story stuck in my chest again

You were the "what if" I can't forget
A fire that never got to burn yet
In another life, in another time
Would you have been mine?
I carry you like a scar inside
You're the storm I could never ride
I scream for what we never became…
But you'll never know my name.

I still think about you… do you think of me?
Do you feel it too? Or is it just me?

Was it nothing? Or was it fate?
Too late to open, too real to fake

You were the "what if" I can't forget
A fire that never got to burn yet
In another life, in another time
Would you have been mine?
I carry you like a scar inside
You're the storm I could never ride!
I scream for what we never became
But you'll never
Never
Never know my name`,
  },
  {
    slug: 'you-re-still-here',
    title: 'You\'re Still Here',
    album: 'Memories of Unplayed Songs',
    year: 2025,
    releaseDate: 'October 25, 2025',
    label: 'TS Music Records',
    youtubeId: null,
    description: '“You’re Still Here” is one of the most uplifting and compassionate songs in the Adolxsense universe. It speaks directly to the listener — not as a distant narrator, but as a…',
    story: `“You’re Still Here” is one of the most uplifting and compassionate songs in the Adolxsense universe. It speaks directly to the listener — not as a distant narrator, but as a voice offering courage, honesty, and hope to someone who has been through more than they ever admit out loud.
It’s a song about survival in its rawest form: the kind that doesn’t look heroic, doesn’t feel clean, and doesn’t come with a perfect ending — just the simple, powerful truth that you’re still standing.
The opening lines set the emotional tone:
Wake up cold, breath stuck, ghosts you’ve never met.
This isn’t about supernatural fear — it’s about emotional hauntings, regrets, doubts, and the voices that replay in your mind when the world goes quiet. The empty bottle, the sleepless nights, the racing thoughts — all these paint a picture of someone carrying weight alone.
But then comes the spark:
“Look in your eyes, see a spark inside — a little bit of hope you thought had died.”
Even at their lowest, something in them refuses to disappear.
The chorus is the heart of the song — an anthem of resilience:
Life will hit. Life will bruise. Life will try to take from you.
But you were built to rise from it.
You’re tougher than your pain, louder than your fear.
Every scar isn’t a failure — it’s proof that you lived, fought, survived.
“Don’t give in, my friend — you’re still here.”
These lines feel like a hand on your shoulder — gentle, grounding, honest.
The second verse shows the weight of trying to let go:
You swear you’re done.
You swear you’ll forget.
But the past doesn’t always listen.
Even so — you’re still here, stronger than the cost you’ve paid.
Every setback carved strength into your bones.
Every broken piece still belongs to you — nothing about your story disqualifies you from healing.
The bridge is a moment of truth and fire:
The darkness calls your name — but the fire inside burns just as fiercely.
Every breath is an act of defiance.
You weren’t meant to shatter — you were meant to last.
You don’t owe the pain another day.
“You’re the storm they couldn’t take away.”
This is one of the most powerful lines in the song — turning all the suffering, all the battles, into proof of unbreakable identity.
The final chorus hits even harder, lifting the listener into a moment of self-recognition.
Through storms, through numb nights, through every moment that hurt —
you’re still here.
The repetition at the end — still here, still here — becomes a mantra. A grounding truth.
In the Adolxsense universe, “You’re Still Here” stands out as a beacon of emotional resilience.
It’s not about denying the pain.
It’s not about pretending everything is fine.
It’s about reminding you — gently, powerfully — that surviving is enough.
That existing after everything you’ve been through is a victory in itself.
This is the song you play when you’re on the edge of giving up — and need to remember the strength you forgot you had.`,
    lyrics: `Wake up cold, can't catch your breath
Running from ghosts that you've never met
Empty bottle lying by the bed
Voices in your head replay what they said
You've been down, but you're not gone yet
Every fall's a fight that you won't forget
Look in your eyes, see a spark inside
A little bit of hope you thought had died

Life's gonna hit, try to make you bleed
Knock you down, take what you need
But hold your ground, don't you slip
You were made to rise from this
You're tougher than the hurt, louder than the fear
Even when it breaks, your heart's still here
Every scar's a mark that says you've lived
Don't give in, my friend — you're still here
Through the storms, through the pain you feel
Through the nights that don't seem real
Stand tall, don't fall, let the whole world hear
You're still here

Last night you swore that you'd let it go
But the weight still whispers it won't say no
The mirror shows the cost you've paid
But you're still standing, unafraid
Every setback carved your name in stone
Every battle wrote the strength you've shown
You don't need perfect, just need true
Every broken piece still belongs to you

Life's gonna hit, try to make you bleed
Knock you down, take what you need
But hold your ground, don't you slip
You were made to rise from this
You're tougher than the hurt, louder than the fear
Even when it breaks, your heart's still here
Every scar's a mark that says you've lived
Don't give in, my friend — you're still here

I know the dark keeps calling your name
But the fire inside still burns the same
Every breath you take defies the past
You're not broken — you were built to last
You don't owe the pain another day
You're the storm they couldn't take away
Look in the mirror, through the tears and the smear
And tell yourself again — you're still here

You're tougher than the hurt, louder than the fear
Even when it breaks, your heart's still here
Every scar's a mark that says you've lived
Don't give in, my friend — you're still here
Through the storms, through the pain you feel
Through the nights that don't seem real
Stand tall, don't fall, let the whole world hear
You're still here

Still here
Still here
Yeah, you're still here`,
  },
];

export function getSongBySlug(slug: string): Song | undefined {
  return songs.find((s) => s.slug === slug);
}
