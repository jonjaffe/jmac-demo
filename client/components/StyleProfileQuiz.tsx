import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type StyleProfile = {
  colorPalette: string;
  silhouette: string;
  printAffinity: string;
  lifestyle: string;
  archetype: string;
};

type QuizQuestion = {
  id: string;
  category: string;
  question: string;
  options: {
    value: string;
    label: string;
    description: string;
    image: string;
  }[];
};

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "color",
    category: "colorPalette",
    question: "What's your color palette?",
    options: [
      {
        value: "Neutral",
        label: "Neutral Elegance",
        description: "Creams, whites, blacks, grays, taupes",
        image: "https://images.pexels.com/photos/3894793/pexels-photo-3894793.jpeg",
      },
      {
        value: "Warm",
        label: "Warm & Earthy",
        description: "Warm whites, caramels, burnt orange, terracotta",
        image: "https://images.pexels.com/photos/7045589/pexels-photo-7045589.jpeg",
      },
      {
        value: "Cool",
        label: "Cool Tones",
        description: "Navy, cool whites, soft blues, cool grays",
        image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg",
      },
      {
        value: "Vibrant",
        label: "Vibrant & Bold",
        description: "Jewel tones, bright colors, saturated hues",
        image: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg",
      },
    ],
  },
  {
    id: "silhouette",
    category: "silhouette",
    question: "What silhouettes do you prefer?",
    options: [
      {
        value: "Relaxed",
        label: "Relaxed & Comfortable",
        description: "Loose fits, flowing fabrics, ease of movement",
        image: "https://images.pexels.com/photos/5367478/pexels-photo-5367478.jpeg",
      },
      {
        value: "Tailored",
        label: "Tailored & Fitted",
        description: "Structure, precision, flattering cuts",
        image: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg",
      },
      {
        value: "Mixed",
        label: "Mixed & Layered",
        description: "Combination of structured and relaxed pieces",
        image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
      },
    ],
  },
  {
    id: "print",
    category: "printAffinity",
    question: "How do you feel about prints?",
    options: [
      {
        value: "Solid",
        label: "Solid Colors",
        description: "Timeless, versatile, classic",
        image: "https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg",
      },
      {
        value: "Subtle",
        label: "Subtle Prints",
        description: "Delicate patterns, minimal visual impact",
        image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      },
      {
        value: "Bold",
        label: "Bold Prints",
        description: "Statement making, eye-catching, vibrant",
        image: "https://images.pexels.com/photos/6311288/pexels-photo-6311288.jpeg",
      },
    ],
  },
  {
    id: "lifestyle",
    category: "lifestyle",
    question: "What's your primary lifestyle context?",
    options: [
      {
        value: "Professional",
        label: "Professional & Office",
        description: "Work events, business casual, formal settings",
        image: "https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg",
      },
      {
        value: "Social",
        label: "Social & Weekend",
        description: "Gatherings, weekends, casual outings",
        image: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg",
      },
      {
        value: "Vacation",
        label: "Vacation & Leisure",
        description: "Travel, resort wear, relaxation",
        image: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg",
      },
      {
        value: "Active",
        label: "Active & Lifestyle",
        description: "Outdoor activities, sports, active wear",
        image: "https://images.pexels.com/photos/4498156/pexels-photo-4498156.jpeg",
      },
    ],
  },
];

const ARCHETYPES: Record<string, string> = {
  "Neutral-Relaxed-Solid-Professional": "Newport Classic",
  "Neutral-Tailored-Subtle-Professional": "City Sophisticate",
  "Warm-Relaxed-Subtle-Vacation": "Coastal Garden",
  "Cool-Tailored-Bold-Social": "Modern Maven",
  "Vibrant-Relaxed-Bold-Active": "Adventure Spirit",
  default: "Personal Style",
};

interface StyleProfileQuizProps {
  onComplete: (profile: any) => void;
}

const StyleProfileQuiz = ({ onComplete }: StyleProfileQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const question = QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleSelectOption = (value: string) => {
    const newAnswers = {
      ...answers,
      [question.category]: value,
    };
    setAnswers(newAnswers);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeQuiz(newAnswers);
    }
  };

  const completeQuiz = (finalAnswers: Record<string, string>) => {
    const archetypeKey = Object.values(finalAnswers).join("-");
    const archetype =
      ARCHETYPES[archetypeKey] || ARCHETYPES.default;

    const profile = {
      colorPalette: finalAnswers.colorPalette || "Neutral",
      silhouette: finalAnswers.silhouette || "Mixed",
      printAffinity: finalAnswers.printAffinity || "Subtle",
      lifestyle: finalAnswers.lifestyle || "Social",
      archetype,
    };

    setIsComplete(true);
    onComplete(profile);
  };

  if (isComplete) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg mb-6">
            Check out your personalized looks in the Occasion Builder tab.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
          </span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div>
        <h2 className="text-2xl font-serif font-bold mb-6">{question.question}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelectOption(option.value)}
              className="group text-left"
            >
              <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={option.image}
                      alt={option.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-base mb-1">{option.label}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleProfileQuiz;
