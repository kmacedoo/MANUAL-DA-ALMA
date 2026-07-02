import React, { useState } from 'react';
import { StoryboardScene, storyTemplates, aspectRatios, cameraAngles, emotions, defaultSystemPrompt } from './constants';

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [storyTitle, setStoryTitle] = useState<string>('');
  const [storyDescription, setStoryDescription] = useState<string>('');
  const [numScenes, setNumScenes] = useState<number>(6);
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<string>('9:16');
  const [generatedStoryboard, setGeneratedStoryboard] = useState<StoryboardScene[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const generateStoryboard = () => {
    setIsGenerating(true);
    
    // Simulação de geração de storyboard com IA
    setTimeout(() => {
      const scenes: StoryboardScene[] = Array.from({ length: numScenes }, (_, i) => ({
        id: i + 1,
        title: `Cena ${i + 1}`,
        description: `Descrição detalhada da cena ${i + 1} com personagens e ação principal`,
        visualPrompt: `Vertical shot, ${selectedGenre} style, scene ${i + 1}, dramatic lighting, professional composition --ar 9:16`,
        dialogue: i === 0 ? 'GANCHO: Algo inesperado acontece...' : i === numScenes - 1 ? 'CLÍMAX: A revelação final!' : `Diálogo ou narração da cena ${i + 1}`,
        duration: `${3 + (i % 3)}s`,
        cameraAngle: cameraAngles[i % cameraAngles.length],
        emotion: emotions[i % emotions.length]
      }));
      
      setGeneratedStoryboard(scenes);
      setIsGenerating(false);
      setShowResult(true);
    }, 2000);
  };

  const resetForm = () => {
    setShowResult(false);
    setGeneratedStoryboard([]);
    setStoryTitle('');
    setStoryDescription('');
    setSelectedGenre('');
    setNumScenes(6);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">🎬 Storyboard Gerado</h1>
            <p className="text-purple-200 text-lg">{storyTitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {generatedStoryboard.map((scene) => (
              <div key={scene.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="text-center p-4 z-10">
                    <span className="text-6xl mb-4 block">🎭</span>
                    <p className="text-white/80 text-sm">Preview da Cena</p>
                  </div>
                  <div className="absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Cena {scene.id}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {scene.duration}
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-white text-lg">{scene.title}</h3>
                    <p className="text-purple-200 text-sm mt-1">{scene.description}</p>
                  </div>
                  
                  <div className="border-t border-white/10 pt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400">📝</span>
                      <p className="text-white/90 text-sm italic">"{scene.dialogue}"</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">📷</span>
                      <span className="text-white/80 text-sm">{scene.cameraAngle}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">❤️</span>
                      <span className="text-white/80 text-sm">{scene.emotion}</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-2">
                    <p className="text-xs text-green-400 font-mono break-words">{scene.visualPrompt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={resetForm}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30"
            >
              🔄 Criar Novo Storyboard
            </button>
            <button
              onClick={() => alert('Funcionalidade de exportação em desenvolvimento!')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              📥 Exportar Storyboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            🎬 Storyboard AI
          </h1>
          <p className="text-xl text-purple-200">
            Crie novelinhas verticais para redes sociais com Inteligência Artificial
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              📱 TikTok
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              📸 Instagram Reels
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              ▶️ YouTube Shorts
            </span>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">📝 Configure Sua História</h2>
          
          <div className="space-y-6">
            {/* Título */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Título da História *
              </label>
              <input
                type="text"
                value={storyTitle}
                onChange={(e) => setStoryTitle(e.target.value)}
                placeholder="Ex: O Segredo da Vizinha"
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
              />
            </div>

            {/* Gênero */}
            <div>
              <label className="block text-white font-semibold mb-2">
                🎭 Gênero *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {storyTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedGenre(template.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedGenre === template.id
                        ? 'bg-purple-600 border-purple-400 scale-105'
                        : 'bg-white/5 border-white/20 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-3xl block mb-2">{template.icon}</span>
                    <span className="text-white text-sm font-medium">{template.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-white font-semibold mb-2">
                📖 Sinopse / Descrição
              </label>
              <textarea
                value={storyDescription}
                onChange={(e) => setStoryDescription(e.target.value)}
                placeholder="Descreva brevemente sua história, personagens e enredo..."
                rows={4}
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all resize-none"
              />
            </div>

            {/* Número de Cenas */}
            <div>
              <label className="block text-white font-semibold mb-2">
                🎬 Número de Cenas: {numScenes}
              </label>
              <input
                type="range"
                min="3"
                max="15"
                value={numScenes}
                onChange={(e) => setNumScenes(parseInt(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-white/60 text-sm mt-1">
                <span>3 cenas</span>
                <span>15 cenas</span>
              </div>
            </div>

            {/* Aspect Ratio */}
            <div>
              <label className="block text-white font-semibold mb-2">
                📐 Formato
              </label>
              <div className="grid grid-cols-3 gap-3">
                {aspectRatios.map((ratio) => (
                  <button
                    key={ratio.id}
                    onClick={() => setSelectedAspectRatio(ratio.id)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      selectedAspectRatio === ratio.id
                        ? 'bg-purple-600 border-purple-400'
                        : 'bg-white/5 border-white/20 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-white text-sm font-medium block">{ratio.id}</span>
                    <span className="text-white/60 text-xs">{ratio.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateStoryboard}
              disabled={!storyTitle || !selectedGenre || isGenerating}
              className={`w-full py-5 rounded-xl font-bold text-xl transition-all duration-300 ${
                !storyTitle || !selectedGenre || isGenerating
                  ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]'
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Gerando Storyboard...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  ✨ Gerar Storyboard com IA
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-white font-bold text-lg mb-2">IA Especializada</h3>
            <p className="text-white/70 text-sm">Algoritmos treinados para criar storyboards otimizados para redes sociais</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-white font-bold text-lg mb-2">Geração Rápida</h3>
            <p className="text-white/70 text-sm">Crie storyboards completos em segundos, não horas</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-white font-bold text-lg mb-2">Formato Vertical</h3>
            <p className="text-white/70 text-sm">Perfeito para TikTok, Reels, Shorts e outras plataformas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
