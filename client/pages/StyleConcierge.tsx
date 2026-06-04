import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StyleProfileQuiz from "@/components/StyleProfileQuiz";
import OccasionBuilder from "@/components/OccasionBuilder";

type StyleProfile = {
  colorPalette: string;
  silhouette: string;
  printAffinity: string;
  lifestyle: string;
  archetype: string;
};

const StyleConcierge = () => {
  const [styleProfile, setStyleProfile] = useState<StyleProfile | null>(null);
  const [activeTab, setActiveTab] = useState("quiz");

  useEffect(() => {
    const saved = localStorage.getItem("styleConciergeProfile");
    if (saved) {
      setStyleProfile(JSON.parse(saved));
    }
  }, []);

  const handleQuizComplete = (profile: StyleProfile) => {
    setStyleProfile(profile);
    localStorage.setItem("styleConciergeProfile", JSON.stringify(profile));
    setActiveTab("occasions");
  };

  const handleResetProfile = () => {
    setStyleProfile(null);
    localStorage.removeItem("styleConciergeProfile");
    setActiveTab("quiz");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold mb-2">Style Concierge</h1>
          <p className="text-lg text-muted-foreground">
            Your personal styling assistant. Discover curated looks tailored to your style.
          </p>
        </div>

        {styleProfile && (
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{styleProfile.archetype}</h3>
                  <p className="text-sm text-muted-foreground">
                    Your style profile • {styleProfile.colorPalette} palette • {styleProfile.silhouette} silhouettes
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleResetProfile}
                >
                  Update Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="quiz">
              Style Profile {styleProfile ? "✓" : ""}
            </TabsTrigger>
            <TabsTrigger value="occasions" disabled={!styleProfile}>
              Occasion Builder
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quiz">
            <StyleProfileQuiz onComplete={handleQuizComplete} />
          </TabsContent>

          <TabsContent value="occasions">
            {styleProfile && (
              <OccasionBuilder styleProfile={styleProfile} />
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default StyleConcierge;
