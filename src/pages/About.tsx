import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Target } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "张明",
      role: "项目负责人",
      description: "电子工程专业，曾在多家科技公司担任硬件工程师",
      image: "https://miaoda-site-img.cdn.bcebos.com/images/2aefc4cc-713c-45e1-89f6-ae4081548fa2.jpg"
    },
    {
      name: "李华",
      role: "算法工程师",
      description: "人工智能专业，专注于手势识别和机器学习算法研究",
      image: "https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
    },
    {
      name: "王芳",
      role: "产品设计师",
      description: "工业设计专业，致力于创造人性化的辅助设备",
      image: "https://miaoda-image.cdn.bcebos.com/img/corpus/1fca7fa8d4dd4e6b850270f5f4b21a93.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">关于我们</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            用科技的力量，为听障人士搭建通往有声世界的桥梁
          </p>
        </div>

        <section className="mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                <CardTitle className="text-3xl">灵感故事</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
              <p>
                这个项目的诞生源于一次特殊的志愿者活动。在一所特殊教育学校，我们遇到了一群可爱的听障儿童。他们用手语表达着自己的想法，眼神中充满了对沟通的渴望。
              </p>
              <p>
                那一刻，我们深刻地意识到，沟通障碍不应该成为他们融入社会的阻碍。作为工程师，我们有责任用自己的专业知识，为他们创造一个更好的沟通工具。
              </p>
              <p>
                于是，手语翻译手套项目就这样诞生了。我们希望通过这个项目，让每一位听障人士都能自由地表达自己，让他们的声音被世界听见。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                <CardTitle className="text-3xl">团队使命</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
              <p>
                我们的使命是构建一个无障碍的沟通环境，让科技成为连接听障人士与有声世界的桥梁。
              </p>
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">可负担</h3>
                  <p className="text-muted-foreground">
                    将成本控制在$50以内，让更多人能够使用
                  </p>
                </div>
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">高精度</h3>
                  <p className="text-muted-foreground">
                    持续优化算法，提供准确可靠的翻译服务
                  </p>
                </div>
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">易使用</h3>
                  <p className="text-muted-foreground">
                    简单直观的设计，让每个人都能轻松上手
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl xl:text-4xl font-bold text-foreground">核心团队</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              一群充满热情的工程师和设计师
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-elegant">
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

export default About;
