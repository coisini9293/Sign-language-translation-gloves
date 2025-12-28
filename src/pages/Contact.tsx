import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact = () => {
  const faqs = [
    {
      question: "What is the price of the sign language glove?",
      answer: "Our goal is to keep the cost below $50, making it affordable for more hearing-impaired individuals. Specific pricing will be announced after mass production."
    },
    {
      question: "When will the product be available?",
      answer: "We are currently in the prototype testing phase and plan to begin small-scale trial production in 2027. We will announce the official launch date on our website."
    },
    {
      question: "Does the glove support all sign languages?",
      answer: "Currently, we primarily support Chinese Sign Language (CSL). We plan to add support for more sign language systems in the future."
    },
    {
      question: "How accurate is the recognition?",
      answer: "After over 100 tests, our sign language recognition accuracy remains stable above 92%. We continue to optimize algorithms to improve recognition accuracy."
    },
    {
      question: "How do I become a partner?",
      answer: "We welcome collaboration with academic institutions, special education schools, corporate sponsors, and manufacturing partners. Please contact us via email, and we will respond as soon as possible."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We look forward to hearing from you. Whether you have questions, suggestions, or partnership intentions, please feel free to contact us
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">linyusen188511@163.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                We will respond to your message within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-elegant border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
