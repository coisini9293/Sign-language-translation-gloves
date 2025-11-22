import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Target } from "lucide-react";

const Story = () => {
  const teamMembers = [
    {
      name: "Carolin",
      role: "Business Lead",
      description: "Business management major, skilled in market analysis and product planning, dedicated to making technology products more user-friendly",
      image: "https://miaoda-site-img.cdn.bcebos.com/images/2aefc4cc-713c-45e1-89f6-ae4081548fa2.jpg"
    },
    {
      name: "Stephen",
      role: "Technical Lead",
      description: "Electronic engineering major, focused on wearable device and sensor technology R&D, with extensive hardware development experience",
      image: "https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
    },
    {
      name: "Wang Fang",
      role: "Product Designer",
      description: "Industrial design major, dedicated to creating humanized assistive devices",
      image: "https://miaoda-image.cdn.bcebos.com/img/corpus/1fca7fa8d4dd4e6b850270f5f4b21a93.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A chance encounter that began a journey to change the lives of hearing-impaired individuals
          </p>
        </div>

        <section className="mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                <CardTitle className="text-3xl">Inspiration Story</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
              <p>
                The birth of this project originated from a charity event in the hearing-impaired community. During that volunteer activity, Carolin and Stephen met. They witnessed firsthand the challenges faced by hearing-impaired individuals when communicating with people who don't understand sign language. Although some technical solutions already existed in the market, they were impractical and couldn't be easily used in daily life.
              </p>
              <p>
                With her expertise in business, Carolin immediately saw the potential for developing a product that could bridge this communication gap. She suggested creating a solution that was both practical and easy to use. Stephen, with his technical background, was very excited about this idea. He proposed developing a smart glove that could translate sign language into text or speech.
              </p>
              <p>
                Combining Carolin's deep understanding of the market and Stephen's technical expertise, they decided to form a team. Both were determined to create a product that could break down communication barriers and improve the lives of the hearing-impaired community. Thus, the Sign Language Glove project was born.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
              <p>
                Our mission is to build a barrier-free communication environment, allowing every hearing-impaired individual to freely express their thoughts and have their voices heard by the world.
              </p>
              <p>
                Through technological innovation and humanized design, we are committed to developing sign language translation devices that are both economically affordable and highly accurate, helping hearing-impaired individuals better integrate into society and enjoy equal communication rights.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Core Team</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              A group of passionate professionals dedicated to changing the world through technology
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-secondary rounded-full mb-4 flex items-center justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Story;
