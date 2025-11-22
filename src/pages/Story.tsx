import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Target } from "lucide-react";

const Story = () => {
  const teamMembers = [
    {
      name: "Carolin",
      role: "商业负责人",
      description: "商业管理专业，擅长市场分析和产品规划，致力于让科技产品更贴近用户需求",
      image: "https://miaoda-site-img.cdn.bcebos.com/images/2aefc4cc-713c-45e1-89f6-ae4081548fa2.jpg"
    },
    {
      name: "Stephen",
      role: "技术负责人",
      description: "电子工程专业，专注于可穿戴设备和传感器技术研发，拥有丰富的硬件开发经验",
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
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">背景故事</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            一次偶然的相遇，开启了改变听障人士生活的旅程
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
                这个项目的诞生源于一次听障社区的慈善活动。在那次志愿活动中，Carolin和Stephen相遇了。他们亲眼目睹了听障人士在与不懂手语的人交流时所面临的挑战。虽然市面上已经存在一些技术解决方案，但它们并不实用，也无法在日常生活中轻松使用。
              </p>
              <p>
                Carolin凭借她在商业领域的专业知识，立即看到了开发一款能够弥合这一沟通鸿沟的产品的潜力。她建议创造一个既实用又易于使用的解决方案。Stephen则凭借他在技术领域的背景，对这个想法感到非常兴奋。他提议开发一款能够将手语翻译成文字或语音的智能手套。
              </p>
              <p>
                结合Carolin对市场的深刻理解和Stephen的技术专长，他们决定组建团队。两人都决心创造一款能够打破沟通障碍、改善听障社区生活的产品。于是，手语翻译手套项目就这样诞生了。
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

export default Story;
