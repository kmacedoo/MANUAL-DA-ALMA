import React, { useState } from 'react';
import { Button } from './components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/Card';
import { Label } from './components/ui/Label';
import { Progress } from './components/ui/Progress';
import { ArrowRight } from './components/icons/ArrowRight';
import { Gift } from './components/icons/Gift';
import { AnimatedSparkles } from './components/icons/AnimatedSparkles';
import { CheckCircle } from './components/icons/CheckCircle';
import { AnimatedCompass } from './components/icons/AnimatedCompass';
import { ShieldCheck } from './components/icons/ShieldCheck';
import { quizQuestions } from './constants';

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleNextQuestion = () => {
    if (selectedOption) {
      setAnswers([...answers, selectedOption]);
      setSelectedOption(null);
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizFinished(true);
      }
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (!quizStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 py-12 text-center">
        <Card className="w-full max-w-2xl shadow-2xl bg-card/80 backdrop-blur-sm border-border animate-fade-in">
          <CardHeader>
             <div className="mx-auto bg-primary rounded-full p-3 w-fit mb-4 shadow-lg shadow-primary/30">
                <AnimatedCompass className="size-12 text-primary-foreground" />
             </div>
            <CardTitle className="font-headline text-3xl md:text-4xl text-foreground">Sente que algo precisa mudar, mas não sabe o quê?</CardTitle>
            <CardDescription className="text-lg pt-2 text-muted-foreground">
             Suas respostas para as próximas perguntas podem revelar o caminho.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className='text-left space-y-4 text-foreground/80'>
                <p>
                    Este não é apenas um quiz. É um espelho para sua alma. Em poucos minutos, você terá a chance de olhar para dentro e entender os padrões, medos e desejos que te moldam hoje.
                </p>
                <p className='font-semibold text-foreground'>
                    As respostas que você busca estão mais perto do que imagina. Você tem coragem de encontrá-las?
                </p>
            </div>
                <Button onClick={() => setQuizStarted(true)} size="lg" className="w-full font-bold text-lg py-7 px-10 shadow-lg shadow-primary/40">
                     Começar minha jornada <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizFinished) {
    return (
       <div className="flex flex-col items-center justify-center min-h-screen p-4 py-12">
        <Card className="w-full max-w-2xl text-center shadow-2xl bg-card/80 backdrop-blur-sm border-border animate-fade-in">
          <CardHeader>
             <div className="mx-auto bg-primary rounded-full p-3 w-fit mb-4 shadow-lg shadow-primary/30">
                <AnimatedSparkles className="size-12 text-primary-foreground" />
             </div>
            <CardTitle className="font-headline text-3xl md:text-4xl text-foreground">Sua Análise Está Pronta.</CardTitle>
            <CardDescription className="text-lg pt-2 text-muted-foreground">
              Suas respostas não são coincidência. Elas são um chamado da sua alma por direção.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className='text-left space-y-4 text-muted-foreground'>
                <p>
                    A sensação de estar perdido(a), os ciclos que se repetem, a voz da intuição que é ignorada, os medos que paralisam... Tudo isso são sintomas de uma desconexão com sua verdadeira essência.
                </p>
                <p className='font-semibold text-foreground'>
                    Chega de se sentir à deriva. As respostas que você deu desenharam um mapa da sua alma, e o <span className="text-primary font-bold">Guia da Alma</span> é a chave para decifrá-lo. Esta é a sua chance de parar de repetir os mesmos erros e finalmente tomar as rédeas da sua vida.
                </p>
                <p className='font-bold text-foreground/90'>
                    A oportunidade é única e o momento da virada é AGORA. Após a confirmação, o acesso é <span className='text-primary underline decoration-primary decoration-2'>enviado imediatamente para o seu e-mail</span>. Sua transformação começa no instante em que você diz 'sim'.
                </p>
            </div>

            <Card className="bg-white/5 border-border p-6 space-y-4">
                 <h3 className="font-headline text-2xl font-bold text-foreground">A Ferramenta Para Sua Transformação</h3>
                 <div className='text-left space-y-3 text-muted-foreground'>
                    <p className='flex items-start gap-3'><CheckCircle className='size-5 text-green-400 mt-1 shrink-0' /> <span><span className='font-bold text-foreground/90'>Clareza e Direção:</span> Encontre o seu norte e tome decisões com confiança, entendendo seu propósito.</span></p>
                    <p className='flex items-start gap-3'><CheckCircle className='size-5 text-green-400 mt-1 shrink-0' /> <span><span className='font-bold text-foreground/90'>Quebra de Padrões:</span> Entenda a raiz dos ciclos repetitivos e liberte-se deles.</span></p>
                    <p className='flex items-start gap-3'><CheckCircle className='size-5 text-green-400 mt-1 shrink-0' /> <span><span className='font-bold text-foreground/90'>Reconexão Interior:</span> Aprenda a ouvir e a confiar na sua intuição como nunca antes.</span></p>
                    <p className='flex items-start gap-3'><CheckCircle className='size-5 text-green-400 mt-1 shrink-0' /> <span><span className='font-bold text-foreground/90'>Coragem para Agir:</span> Receba as ferramentas para dissolver medos e dar os próximos passos com segurança.</span></p>
                 </div>
            </Card>

            <Card className="bg-primary/10 border-primary/50 p-6">
                 <h3 className="font-headline text-2xl font-bold text-foreground">Sua Jornada Começa Agora</h3>
                 <p className="text-muted-foreground mt-2">Um investimento único no seu bem mais precioso: você.</p>
                <div className="my-6">
                    <span className="text-2xl font-bold line-through text-muted-foreground/80">De R$147,00</span>
                    <p className='text-sm text-primary/80'>por apenas</p>
                    <span className="text-6xl font-bold font-headline text-primary">R$79,90</span>
                    <p className="text-muted-foreground mt-1">ou 12x de R$7,90</p>
                </div>
                <a href="https://achou-kids-baby.mycartpanda.com/checkout" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full font-bold text-lg py-7 px-10 shadow-lg shadow-primary/40 animate-pulse">
                        Quero Meu Guia da Alma Agora!
                    </Button>
                </a>
                <p className="mt-4 text-sm text-primary/90 font-semibold flex items-center justify-center gap-2"><Gift className="size-4" /> Oferta especial válida apenas para quem finaliza o quiz!</p>
                 <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
                    <ShieldCheck className="size-5 text-green-400" />
                    <p className="font-semibold text-sm">Garantia de 15 Dias</p>
                    <p className='text-sm'>| Seu dinheiro 100% de volta</p>
                </div>
            </Card>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = quizQuestions[currentQuestion];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 py-8">
       <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-sm border-border">
        <CardHeader>
            <Progress value={progress} className="w-full mb-4 h-2" />
            <CardTitle className="font-headline text-2xl text-foreground">Quiz da Alma</CardTitle>
             <CardDescription className="text-muted-foreground">
                Responda com o coração.
             </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='mb-6'>
            <h2 className="text-lg font-semibold leading-snug text-foreground/90">{currentQ.question}</h2>
            <p className='text-sm text-muted-foreground mt-2'>{currentQ.explanation}</p>
          </div>
          <div className="space-y-3">
            {currentQ.options.map((option) => (
              <div 
                key={option} 
                onClick={() => setSelectedOption(option)}
                className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${selectedOption === option ? 'border-primary bg-primary/10 shadow-md shadow-primary/20' : 'border-border bg-white/5 hover:border-primary/50'}`}
              >
                <div className={`h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${selectedOption === option ? 'border-primary bg-primary' : 'border-muted-foreground/50'}`}>
                    {selectedOption === option && <div className="h-2 w-2 rounded-full bg-primary-foreground" />}
                </div>
                <Label className="pl-4 text-base cursor-pointer w-full text-foreground/90">
                  {option}
                </Label>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button onClick={handleNextQuestion} disabled={!selectedOption} size="lg" className="shadow-lg shadow-primary/30">
              {currentQuestion < quizQuestions.length - 1 ? 'Próxima' : 'Ver Minha Análise'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </CardContent>
       </Card>
    </div>
  );
}