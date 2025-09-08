import React, { useState } from 'react';
import { Button } from './components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/Card';
import { Label } from './components/ui/Label';
import { Progress } from './components/ui/Progress';
import { ArrowRight } from './components/icons/ArrowRight';
import { Gift } from './components/icons/Gift';
import { AnimatedSparkles } from './components/icons/AnimatedSparkles';
import { CheckCircle } from './components/icons/CheckCircle';
import { ShieldCheck } from './components/icons/ShieldCheck';
import { quizQuestions } from './constants';

const testimonials = [
  {
    quote: "Eu estava presa em um ciclo de autossabotagem... O Guia da Alma foi um divisor de águas. Finalmente entendi a raiz dos meus problemas e hoje vivo com um propósito que nunca imaginei ser possível.",
    name: "Juliana S.",
    tag: "Cliente Verificada"
  },
  {
    quote: "Cético no início, mas desesperado. Este guia me deu a clareza que anos de terapia não conseguiram. Simples, direto e transformador. Recomendo de olhos fechados.",
    name: "Marcos P.",
    tag: "Cliente Verificado"
  },
  {
    quote: "Parecia que faltava uma peça no quebra-cabeça da minha vida. O Guia me ajudou a encontrar não só a peça, mas a ver a imagem inteira. Sinto uma paz e uma confiança que não sentia há anos.",
    name: "Carolina M.",
    tag: "Cliente Verificada"
  }
];

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
            <img src="https://i.imgur.com/Hyz8wV8.png" alt="Análise da Alma" className="rounded-lg w-full max-w-sm mx-auto mb-6 shadow-lg shadow-primary/20" />
            <CardTitle className="font-headline text-3xl md:text-4xl text-foreground">Desvende o Mapa da Sua Alma</CardTitle>
            <CardDescription className="text-lg pt-2 text-muted-foreground">
             Uma análise profunda e gratuita para revelar os bloqueios que te impedem de evoluir. Responda com o coração.
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
            <CardTitle className="font-headline text-3xl md:text-4xl text-foreground">Seu Diagnóstico da Alma está Completo.</CardTitle>
            <CardDescription className="text-lg pt-2 text-muted-foreground">
              Suas respostas revelaram um padrão claro. E a verdade é que você não chegou até aqui por acaso.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className='text-left space-y-4 text-muted-foreground'>
                <p>
                    A sensação de estar perdido(a), os ciclos que se repetem, a voz da intuição que é ignorada, os medos que paralisam... Tudo isso são sintomas de uma desconexão com sua verdadeira essência. Suas respostas confirmam isso.
                </p>
                <p className='font-semibold text-foreground'>
                    Chega de se sentir à deriva. As respostas que você deu desenharam um mapa da sua alma, e o <span className="text-primary font-bold">Guia da Alma</span> é a chave para decifrá-lo. Esta é a sua chance de parar de repetir os mesmos erros e finalmente tomar as rédeas da sua vida.
                </p>
                <p className='font-bold text-foreground/90'>
                    A oportunidade é única e o momento da virada é AGORA. Após a confirmação, o acesso é <span className='text-primary underline decoration-primary decoration-2'>enviado imediatamente para o seu e-mail</span>. Sua transformação começa no instante em que você diz 'sim'.
                </p>
            </div>

            <Card className="bg-white/5 border-border p-6 space-y-4 text-left">
                 <h3 className="font-headline text-2xl font-bold text-foreground text-center">O Guia da Alma: A Chave Para Sua Transformação</h3>
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                    <img src="https://i.imgur.com/QIHZL40.png" alt="Página do Guia da Alma 1" className="rounded-lg shadow-lg w-full" />
                    <img src="https://i.imgur.com/4zxejUy.png" alt="Página do Guia da Alma 2" className="rounded-lg shadow-lg w-full" />
                </div>
                 <div className='space-y-3 text-muted-foreground'>
                    <p className='flex items-start gap-3'><CheckCircle className='size-5 text-green-400 mt-1 shrink-0' /> <span><span className='font-bold text-foreground/90'>Clareza e Direção:</span> Encontre o seu norte e tome decisões com confiança, entendendo seu propósito.</span></p>
                    <p className='flex items-start gap-3'><CheckCircle className='size-5 text-green-400 mt-1 shrink-0' /> <span><span className='font-bold text-foreground/90'>Quebra de Padrões:</span> Entenda a raiz dos ciclos repetitivos e liberte-se deles.</span></p>
                    <p className='flex items-start gap-3'><CheckCircle className='size-5 text-green-400 mt-1 shrink-0' /> <span><span className='font-bold text-foreground/90'>Reconexão Interior:</span> Aprenda a ouvir e a confiar na sua intuição como nunca antes.</span></p>
                    <p className='flex items-start gap-3'><CheckCircle className='size-5 text-green-400 mt-1 shrink-0' /> <span><span className='font-bold text-foreground/90'>Coragem para Agir:</span> Receba as ferramentas para dissolver medos e dar os próximos passos com segurança.</span></p>
                 </div>
            </Card>

            <div className='space-y-4'>
              <h3 className="font-headline text-2xl font-bold text-foreground text-center">O Que Nossos Guiados Dizem</h3>
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white/5 border-border p-4 text-left">
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      <p className="text-right font-semibold text-primary/90 mt-2">- {testimonial.name} <span className='text-xs font-normal text-green-400'>({testimonial.tag})</span></p>
                  </Card>
              ))}
            </div>

            <Button size="lg" className="w-full font-bold text-lg py-7 px-10 shadow-lg shadow-primary/40">
                QUERO MINHA TRANSFORMAÇÃO AGORA <Gift className="ml-2 h-5 w-5" />
            </Button>
            <div className='flex items-center justify-center gap-4 text-xs text-muted-foreground mt-2'>
                <ShieldCheck className='size-4' />
                <span>Compra segura | Acesso imediato</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 py-12">
      <Card className="w-full max-w-2xl shadow-2xl bg-card/80 backdrop-blur-sm border-border animate-fade-in">
        <CardHeader>
          <Progress value={progress} className="mb-4" />
          <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">
            {quizQuestions[currentQuestion].question}
          </CardTitle>
          <CardDescription className="pt-2 text-muted-foreground">
            {quizQuestions[currentQuestion].explanation}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedOption(option)}
                className={`w-full p-4 text-left rounded-md transition-all duration-200 border text-foreground/80 hover:bg-accent/80 hover:text-accent-foreground ${
                  selectedOption === option
                    ? 'bg-primary/90 text-primary-foreground border-primary'
                    : 'bg-accent/50 border-border'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <Button onClick={handleNextQuestion} disabled={!selectedOption} size="lg" className="w-full font-bold text-lg py-6 shadow-lg shadow-primary/40">
            Próxima <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
