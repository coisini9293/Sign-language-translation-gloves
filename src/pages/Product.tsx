import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Download, FileText, Presentation, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Product = () => {
  const userCases = [
    {
      title: "Classroom Questions for Hearing-Impaired Children",
      description: "Xiao Ming, a hearing-impaired child, can now freely ask and answer questions in class using the sign language glove, no longer missing learning opportunities due to communication barriers.",
      image: "https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg",
      impact: "Enhanced learning participation and confidence"
    },
    {
      title: "Hospital Visits for Deaf Individuals",
      description: "Ms. Li can accurately describe her symptoms to doctors through the sign language glove during hospital visits, allowing doctors to clearly understand her condition and greatly improving treatment efficiency.",
      image: "https://miaoda-image.cdn.bcebos.com/img/corpus/1fca7fa8d4dd4e6b850270f5f4b21a93.jpg",
      impact: "Improved doctor-patient communication quality"
    },
    {
      title: "Workplace Communication for Hearing-Impaired Employees",
      description: "Mr. Wang uses the sign language glove to participate in meetings and team discussions at work, expressing his ideas in real-time and communicating barrier-free with colleagues.",
      image: "https://miaoda-site-img.cdn.bcebos.com/images/2aefc4cc-713c-45e1-89f6-ae4081548fa2.jpg",
      impact: "Promoted workplace integration and team collaboration"
    }
  ];

  const resources = [
    {
      title: "Project Overview PPT",
      description: "Detailed introduction to the background, technical solutions, and application scenarios of the sign language glove project",
      icon: Presentation,
      fileSize: "5.2 MB",
      downloadUrl: "#"
    },
    {
      title: "Technical Whitepaper",
      description: "In-depth analysis of the technical principles, algorithm design, and performance metrics of the sign language glove",
      icon: FileText,
      fileSize: "3.8 MB",
      downloadUrl: "#"
    },
    {
      title: "Promotional Brochure",
      description: "Public-facing product promotional materials, including product features and user guides",
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
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
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
                    After 1000+ tests, sign language recognition accuracy remains stable above 92%
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

            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  User Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">
                    Among users who participated in testing, 95% expressed willingness to use the product long-term
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">User Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <p className="text-lg text-muted-foreground italic mb-2">
                    "This glove allowed my child to raise their hand and speak up in class for the first time. As a parent, I'm truly moved."
                  </p>
                  <p className="text-sm text-foreground font-medium">— Special Education Teacher Zhang</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <p className="text-lg text-muted-foreground italic mb-2">
                    "With this device, I can finally go to the hospital independently without needing family members to accompany me every time."
                  </p>
                  <p className="text-sm text-foreground font-medium">— Hearing-Impaired User Ms. Li</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Testing Site Photos</h3>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                  <img
                    src="https://miaoda-image.cdn.bcebos.com/img/corpus/1fca7fa8d4dd4e6b850270f5f4b21a93.jpg"
                    alt="Testing site 1"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
                    alt="Testing site 2"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/2aefc4cc-713c-45e1-89f6-ae4081548fa2.jpg"
                    alt="Testing site 3"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">User Cases</h2>
          <div className="space-y-8">
            {userCases.map((caseItem, index) => (
              <Card key={index} className="shadow-elegant border-border/50 overflow-hidden">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
                  <div className="aspect-video xl:aspect-auto">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{caseItem.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{caseItem.description}</p>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-primary font-medium">✓ {caseItem.impact}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Resource Downloads</h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <resource.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <p className="text-sm text-muted-foreground mb-4">File Size: {resource.fileSize}</p>
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
                <div className="flex flex-col xl:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-base px-8">
                    Become a Partner
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 bg-card/50">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Product;
