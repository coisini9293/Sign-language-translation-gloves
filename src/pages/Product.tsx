import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Download, FileText, Presentation, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Product = () => {
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
      description: "深入分析手语翻译手套的技术原理、算法设计和性能指标",
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

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">技术验证</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          </div>
        </section>

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
                    <p className="text-sm text-muted-foreground mb-4">文件大小：{resource.fileSize}</p>
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

        <section>
          <Card className="shadow-elegant border-border/50 bg-gradient-to-br from-card to-secondary/30">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">寻求合作</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  我们诚挚邀请学术研究机构、特殊教育学校、企业赞助商和生产制造伙伴与我们合作，共同推动手语翻译技术的发展和普及。
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
