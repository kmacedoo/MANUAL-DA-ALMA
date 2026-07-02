// Storyboard AI - Novelilhas Verticais para Redes Sociais

export interface StoryboardScene {
  id: number;
  title: string;
  description: string;
  visualPrompt: string;
  dialogue: string;
  duration: string;
  cameraAngle: string;
  emotion: string;
}

export interface StoryTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface AspectRatio {
  id: string;
  name: string;
  width: number;
  height: number;
}

export const storyTemplates: StoryTemplate[] = [
  {
    id: 'romance',
    name: 'Romance Dramático',
    description: 'Histórias de amor com reviravoltas emocionantes',
    icon: '💕'
  },
  {
    id: 'mystery',
    name: 'Mistério & Suspense',
    description: 'Enredos intrigantes que prendem a atenção',
    icon: '🔍'
  },
  {
    id: 'comedy',
    name: 'Comédia',
    description: 'Situações engraçadas e divertidas',
    icon: '😂'
  },
  {
    id: 'drama',
    name: 'Drama Familiar',
    description: 'Conflitos e emoções da vida familiar',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 'fantasy',
    name: 'Fantasia Urbana',
    description: 'Elementos mágicos no mundo moderno',
    icon: '✨'
  },
  {
    id: 'thriller',
    name: 'Thriller Psicológico',
    description: 'Tensão e suspense psicológico',
    icon: '🎭'
  },
  {
    id: 'slice_of_life',
    name: 'Slice of Life',
    description: 'Histórias cotidianas e inspiradoras',
    icon: '☀️'
  },
  {
    id: 'supernatural',
    name: 'Sobrenatural',
    description: 'Mistérios além do mundo natural',
    icon: '🌙'
  }
];

export const aspectRatios: AspectRatio[] = [
  { id: '9:16', name: 'Vertical (TikTok/Reels/Shorts)', width: 1080, height: 1920 },
  { id: '4:5', name: 'Instagram Feed', width: 1080, height: 1350 },
  { id: '1:1', name: 'Quadrado', width: 1080, height: 1080 }
];

export const cameraAngles = [
  'Close-up (rosto)',
  'Plano médio (cintura para cima)',
  'Plano aberto (corpo inteiro)',
  'Ângulo baixo (poder)',
  'Ângulo alto (vulnerabilidade)',
  'Over the shoulder (sobre o ombro)',
  'POV (ponto de vista)',
  'Dutch angle (inclinado)'
];

export const emotions = [
  'Alegria/Euforia',
  'Tristeza/Melancolia',
  'Raiva/Fúria',
  'Medo/Terror',
  'Surpresa/Choque',
  'Amor/Paixão',
  'Nostalgia/Saudade',
  'Determinação/Foco',
  'Confusão/Dúvida',
  'Alívio/Paz'
];

export const defaultSystemPrompt = `Você é um especialista em criação de storyboards para novelinhas verticais de redes sociais (TikTok, Instagram Reels, YouTube Shorts).

Sua tarefa é criar storyboards envolventes e otimizados para o formato vertical.

Para cada cena, inclua:
1. Título descritivo da cena
2. Descrição visual detalhada (cenário, personagens, ações)
3. Prompt visual para IA de geração de imagens
4. Diálogo ou narração
5. Duração estimada (em segundos)
6. Ângulo de câmera recomendado
7. Emoção predominante

Considere:
- Formato vertical (9:16)
- Ritmo acelerado para prender atenção
- Ganchos visuais nos primeiros 3 segundos
- Legendas claras e objetivas
- Transições suaves entre cenas`;

export const sampleStories = [
  {
    title: 'O Segredo da Vizinha',
    genre: 'mystery',
    logline: 'Uma jovem descobre que sua vizinha perfeita esconde um segredo sombrio.',
    scenes: 8
  },
  {
    title: 'Amor no Café',
    genre: 'romance',
    logline: 'Dois estranhos se encontram diariamente no mesmo café sem nunca terem se falado.',
    scenes: 6
  },
  {
    title: 'A Herança Maldita',
    genre: 'supernatural',
    logline: 'Após herdar uma casa antiga, uma família começa a experiencing fenômenos inexplicáveis.',
    scenes: 10
  }
];
