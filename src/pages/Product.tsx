import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-4">Product Introduction</h1>
          <p className="text-xl text-muted-foreground">
            From technical validation to practical application, our product is changing the lives of hearing-impaired individuals
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Technical Validation</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Recognition Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">92%</div>
                  <p className="text-muted-foreground">
                    After 100+ tests, sign language recognition accuracy remains stable above 92%
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Response Speed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">&lt;200ms</div>
                  <p className="text-muted-foreground">
                    From gesture recognition to voice output, average response time is less than 200 milliseconds
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">User Guide</h2>
          <Card className="shadow-elegant border-border/50 max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Wearing the Device</h3>
                  <p>Wear the device on your forearm, ensure sensor patches contact fingers properly and device fits snugly on wrist.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Power On</h3>
                  <p>Press the power button on the side to start. Device will automatically enter gesture recognition mode.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Gesture Input</h3>
                  <p>Device samples gesture data every 2 seconds. Start from relaxed hand position, make target gesture, hold for about 1 second and wait for voice feedback.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Troubleshooting</h3>
                  <p>If gesture not recognized: return fingers to fully relaxed state, repeat gesture slowly and clearly, or restart device if needed.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Charging & Maintenance</h3>
                  <p>Use Type-C port for charging (about 2 hours for full charge). Sensor patches are removable and washable (do not immerse main unit). Firmware upgrade requires computer connection via Type-C port.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-elegant border-border/50 bg-gradient-to-br from-card to-secondary/30">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Seeking Partnerships</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We sincerely invite academic research institutions, special education schools, corporate sponsors, and manufacturing partners to collaborate with us in promoting the development and popularization of sign language translation technology.
                </p>
                <Button 
                  size="lg" 
                  className="text-base px-8"
                  onClick={() => navigate('/contact')}
                >
                  Become a Partner
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Product;
