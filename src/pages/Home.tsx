import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, DollarSign, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 xl:px-8 text-center py-20">
          <h1 className="text-5xl xl:text-7xl font-bold text-white mb-4 tracking-tight">
            Sign Language Glove
          </h1>
          <h2 className="text-3xl xl:text-5xl font-bold text-white mb-12">
            Making Every Silent Gesture Heard by the World
          </h2>

          <p className="text-lg xl:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            A low-cost, real-time sign language to speech translation smart glove
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-12">
            Core Values
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Accuracy &gt; 92%</h3>
                  <p className="text-muted-foreground">
                    High-precision sign language recognition through multi-sensor fusion technology
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Cost &lt; $50</h3>
                  <p className="text-muted-foreground">
                    Low-cost design making it affordable for more hearing-impaired individuals
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Real-time Translation</h3>
                  <p className="text-muted-foreground">
                    Millisecond response for smooth real-time voice output
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-12">
            Product Workflow
          </h2>
          <div className="aspect-video bg-background rounded-2xl shadow-elegant overflow-hidden border border-border/50 flex items-center justify-center p-8">
            <img
              src="https://miaoda-site-img.cdn.bcebos.com/images/96807189-a6c6-483e-b011-c774b4293da8.jpg"
              alt="Product workflow diagram"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 text-center">
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-6">
            Technology Bridges, Communication Without Boundaries
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We believe everyone has the right to express themselves. Let's work together to use technology to open the door to the world of sound for the hearing impaired.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-base px-8 shadow-lg">
              Contact Us for Partnership <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
