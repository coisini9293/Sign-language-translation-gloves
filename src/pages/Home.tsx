import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Feather, Zap, DollarSign, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 xl:px-8 text-center py-20">
          <h1 className="text-5xl xl:text-7xl font-bold text-white mb-4 tracking-tight">
            Sign Language Glove
          </h1>
          <h2 className="text-3xl xl:text-5xl font-bold text-white mb-12">
            Making Every Silent Gesture Heard by the World
          </h2>

          <p className="text-lg xl:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            A low-cost, real-time sign language to speech translation smart glove
          </p>

          <div className="flex flex-col xl:flex-row gap-4 justify-center mb-16">
            <Link to="/product">
              <Button size="lg" className="text-base px-8 shadow-lg bg-primary hover:bg-primary/90">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 shadow-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* 产品图片展示 */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
              <img
                src="https://miaoda-site-img.cdn.bcebos.com/images/96807189-a6c6-483e-b011-c774b4293da8.jpg"
                alt="手语翻译手套产品展示"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-4">
            Our Advantages
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Our glove distinguishes itself through several key advantages
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Feather className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Portability and Comfort</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Lightweight design suitable for extended wear. Provides comfortable user experience in both daily communication and professional scenarios.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Real-time Response</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Low-latency processing capable of supporting natural conversations. Real-time translation makes communication smooth and natural.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Cost Efficiency</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Modular and scalable production lowers costs for users, making this technology affordable for more hearing-impaired individuals.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Social Impact</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Beyond being a commercial product, it carries strong values of inclusivity and accessibility, making it well-positioned for partnerships with governments, schools, and nonprofits.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-4">
            Product Features
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Every detail designed for better communication experience
          </p>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Intelligent Recognition, Accurate Translation</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Using multi-sensor fusion technology and AI algorithms to achieve high-precision sign language recognition. Whether in daily communication or professional scenarios, it accurately understands every gesture.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">High-precision sensors capture hand movements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Real-time processing with low-latency response</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Supports natural conversation scenarios</span>
                </li>
              </ul>
            </div>
            <div className="aspect-video bg-secondary rounded-2xl shadow-elegant overflow-hidden">
              <img
                src="https://miaoda-site-img.cdn.bcebos.com/images/b3b7abe6-9468-4816-b78b-1d56b18fadbc.jpg"
                alt="Intelligent recognition feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div className="xl:order-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">Lightweight and Comfortable Design</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Lightweight design ensures comfort during extended wear, allowing you to communicate freely anytime, anywhere.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Lightweight design, comfortable to wear</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Suitable for extended wear</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Portable and easy to use, communicate anytime</span>
                </li>
              </ul>
            </div>
            <div className="xl:order-1 aspect-video bg-secondary rounded-2xl shadow-elegant overflow-hidden">
              <img
                src="https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
                alt="Lightweight and comfortable design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-6">
            Market Positioning
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Compared to existing alternatives, our glove better meets user needs and demonstrates stronger market adoption potential
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="shadow-elegant border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Individual Users</h3>
                  <p className="text-muted-foreground">
                    Providing convenient daily communication tools for hearing-impaired individuals
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Educational Institutions</h3>
                  <p className="text-muted-foreground">
                    Helping special education schools improve teaching effectiveness
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Public Services</h3>
                  <p className="text-muted-foreground">
                    Partnering with governments and nonprofits to promote accessible communication
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 text-center">
          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-6">
            Technology Bridges, Communication Without Boundaries
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We believe everyone has the right to express themselves. Let's use technology together to open the door to the hearing world for the hearing-impaired.
          </p>
          <div className="flex flex-col xl:flex-row gap-4 justify-center">
            <Link to="/product">
              <Button size="lg" className="text-base px-8 shadow-lg bg-primary hover:bg-primary/90">
                Learn Product Details <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 shadow-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                Contact Us for Partnership
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
