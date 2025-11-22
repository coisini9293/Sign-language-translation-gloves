import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, DollarSign, Calendar } from "lucide-react";

const Progress = () => {
  const roadmap = [
    {
      phase: "第一阶段",
      title: "原型开发",
      status: "已完成",
      description: "完成硬件原型设计和基础算法开发",
      date: "2024年1-3月"
    },
    {
      phase: "第二阶段",
      title: "技术验证",
      status: "已完成",
      description: "进行技术测试，验证识别准确率和系统稳定性",
      date: "2024年4-6月"
    },
    {
      phase: "第三阶段",
      title: "用户测试",
      status: "进行中",
      description: "在特殊教育学校进行用户测试，收集反馈",
      date: "2024年7-9月"
    },
    {
      phase: "第四阶段",
      title: "优化改进",
      status: "计划中",
      description: "根据用户反馈优化产品设计和算法",
      date: "2024年10-12月"
    },
    {
      phase: "第五阶段",
      title: "小批量试产",
      status: "计划中",
      description: "进行小批量生产，准备市场推广",
      date: "2025年1-3月"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">验证与进展</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            用数据说话，用实践验证
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" />
            技术验证数据
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">92%</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">识别准确率</h3>
                  <p className="text-muted-foreground">
                    对常用手语的识别准确率达到92%，超出预期目标
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">&lt;200ms</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">响应时间</h3>
                  <p className="text-muted-foreground">
                    从手语动作到语音输出的平均响应时间小于200毫秒
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">词汇量</h3>
                  <p className="text-muted-foreground">
                    目前支持超过500个常用手语词汇的识别
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-primary" />
            用户验证反馈
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>特教老师的评价</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "这个设备如果能普及，将会极大地改善听障学生的学习体验。他们在课堂上提问会更加自信，与同学的交流也会更加顺畅。我看到了科技改变教育的可能性。"
                </blockquote>
                <p className="text-right text-muted-foreground mt-4">—— 李老师，特殊教育学校</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>听障学生的感受</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "终于可以让更多人听懂我说的话了！以前我总是担心别人不理解我的手语，现在有了这个手套，我可以更自信地表达自己的想法。"
                </blockquote>
                <p className="text-right text-muted-foreground mt-4">—— 小明，听障学生</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-elegant mt-8">
            <CardContent className="pt-6">
              <div className="bg-secondary p-6 rounded-lg">
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

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-primary" />
            经济性验证
          </h2>
          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">成本对比</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                      <span className="text-foreground font-semibold">市场同类产品</span>
                      <span className="text-2xl font-bold text-muted-foreground">$200-500</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary rounded-lg">
                      <span className="text-primary-foreground font-semibold">我们的产品</span>
                      <span className="text-2xl font-bold text-primary-foreground">&lt; $50</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">成本优势</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>采用成熟的传感器和控制器，降低硬件成本</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>优化算法设计，减少对高性能处理器的依赖</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>简化产品结构，降低生产和组装成本</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>规模化生产后，成本还有进一步下降空间</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-primary" />
            研发路线图
          </h2>
          <div className="space-y-6">
            {roadmap.map((item, index) => (
              <Card key={index} className="shadow-elegant">
                <CardContent className="pt-6">
                  <div className="flex flex-col xl:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                        item.status === "已完成" ? "bg-primary" :
                        item.status === "进行中" ? "bg-secondary border-2 border-primary" :
                        "bg-secondary"
                      }`}>
                        {item.status === "已完成" && (
                          <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
                        )}
                        {item.status === "进行中" && (
                          <TrendingUp className="w-12 h-12 text-primary" />
                        )}
                        {item.status === "计划中" && (
                          <Calendar className="w-12 h-12 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{item.phase}: {item.title}</h3>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full w-fit ${
                          item.status === "已完成" ? "bg-primary text-primary-foreground" :
                          item.status === "进行中" ? "bg-secondary text-primary border border-primary" :
                          "bg-secondary text-muted-foreground"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
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

export default Progress;
