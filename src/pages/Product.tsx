import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Download, FileText, Presentation, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Product = () => {
  const userCases = [
    {
      title: "听障儿童的课堂提问",
      description: "小明是一名听障儿童，在使用手语翻译手套后，他可以在课堂上自如地提问和回答问题，不再因为沟通障碍而错过学习机会。",
      image: "https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg",
      impact: "提升了学习参与度和自信心"
    },
    {
      title: "聋哑人士的医院就医",
      description: "李女士在医院就诊时，通过手语翻译手套，能够准确地向医生描述自己的症状，医生也能清楚地了解病情，大大提高了诊疗效率。",
      image: "https://miaoda-image.cdn.bcebos.com/img/corpus/1fca7fa8d4dd4e6b850270f5f4b21a93.jpg",
      impact: "改善了医患沟通质量"
    },
    {
      title: "听障员工的职场沟通",
      description: "王先生在公司工作时，使用手语翻译手套参加会议和团队讨论，能够实时表达自己的想法，与同事们无障碍交流。",
      image: "https://miaoda-site-img.cdn.bcebos.com/images/2aefc4cc-713c-45e1-89f6-ae4081548fa2.jpg",
      impact: "促进了职场融入和团队协作"
    }
  ];

  const resources = [
    {
      title: "项目简介PPT",
      description: "详细介绍手语翻译手套项目的背景、技术方案和应用场景",
      icon: Presentation,
      fileSize: "5.2 MB",
      downloadUrl: "#"
    },
    {
      title: "技术白皮书",
      description: "深入解析手语翻译手套的技术原理、算法设计和性能指标",
      icon: FileText,
      fileSize: "3.8 MB",
      downloadUrl: "#"
    },
    {
      title: "宣传手册",
      description: "面向公众的产品宣传资料，包含产品特点和使用指南",
      icon: BookOpen,
      fileSize: "2.1 MB",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-4">产品介绍</h1>
          <p className="text-xl text-muted-foreground">
            从技术验证到实际应用，我们的产品正在改变听障人士的生活
          </p>
        </div>

        {/* 技术验证 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">技术验证</h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  识别准确率
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">92%</div>
                  <p className="text-muted-foreground">
                    经过1000+次测试，手语识别准确率稳定在92%以上
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  响应速度
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">&lt;200ms</div>
                  <p className="text-muted-foreground">
                    从手势识别到语音输出，平均响应时间小于200毫秒
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  用户满意度
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">
                    参与测试的用户中，95%表示愿意长期使用该产品
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 用户反馈 */}
        <section className="mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">用户反馈</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <p className="text-lg text-muted-foreground italic mb-2">
                    "这个手套让我的孩子第一次在课堂上主动举手发言，作为家长，我真的非常感动。"
                  </p>
                  <p className="text-sm text-foreground font-medium">— 特教老师 张老师</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <p className="text-lg text-muted-foreground italic mb-2">
                    "使用这个设备后，我终于可以独立去医院看病了，不需要每次都麻烦家人陪同。"
                  </p>
                  <p className="text-sm text-foreground font-medium">— 听障用户 李女士</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">测试现场照片</h3>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                  <img
                    src="https://miaoda-image.cdn.bcebos.com/img/corpus/1fca7fa8d4dd4e6b850270f5f4b21a93.jpg"
                    alt="测试现场1"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
                    alt="测试现场2"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/2aefc4cc-713c-45e1-89f6-ae4081548fa2.jpg"
                    alt="测试现场3"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 用户案例 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">用户案例</h2>
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

        {/* 资源下载 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">资源下载</h2>
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
                    <p className="text-sm text-muted-foreground mb-4">文件大小: {resource.fileSize}</p>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      下载
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 合作邀请 */}
        <section>
          <Card className="shadow-elegant border-border/50 bg-gradient-to-br from-card to-secondary/30">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">寻求合作</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  我们诚挚邀请学术研究机构、特殊教育学校、企业赞助商以及生产制造商与我们合作，共同推动手语翻译技术的发展和普及。
                </p>
                <div className="flex flex-col xl:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-base px-8">
                    成为合作伙伴
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 bg-card/50">
                    了解更多
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
