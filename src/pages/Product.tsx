import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Download, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const resources = [
    {
      title: "Technical Whitepaper",
      description: "In-depth analysis of the technical principles, algorithm design, and performance metrics of the sign language glove",
      icon: FileText,
      fileSize: "3.8 MB",
      downloadUrl: "#"
    },
    {
      title: "Promotional Brochure",
      description: `User Guide: 
      
1. Wearing the Device - Wear the device on your forearm, ensure sensor patches contact fingers properly and device fits snugly on wrist.

2. Power On - Press the power button on the side to start. Device will automatically enter gesture recognition mode.

3. Gesture Input - Device samples gesture data every 2 seconds. Start from relaxed hand position, make target gesture, hold for about 1 second and wait for voice feedback.

4. Troubleshooting - If gesture not recognized: return fingers to fully relaxed state, repeat gesture slowly and clearly, or restart device if needed.

5. Charging & Maintenance - Use Type-C port for charging (about 2 hours for full charge). Sensor patches are removable and washable (do not immerse main unit). Firmware upgrade requires computer connection via Type-C port.`,
      icon: BookOpen,
      fileSize: "2.1 MB",
      downloadUrl: "#"
    }
  ];

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
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Resource Downloads</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <resource.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 text-center">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4 text-left whitespace-pre-line w-full">{resource.description}</p>
                    <p className="text-sm text-muted-foreground mb-4 text-center w-full">File Size: {resource.fileSize}</p>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
