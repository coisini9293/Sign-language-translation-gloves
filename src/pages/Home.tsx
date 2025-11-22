import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, DollarSign, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 text-center">
          <h1 className="text-4xl xl:text-6xl font-bold text-foreground mb-6">
            让每一次沉默的比划
            <br />
            都被世界听见
          </h1>
          <p className="text-xl xl:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            一款低成本、能实时将手语翻译成语音的智能手套
          </p>
          <div className="flex flex-col xl:flex-row gap-4 justify-center items-center">
            <Link to="/about">
              <Button size="lg" className="text-lg px-8">
                了解更多 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/technology">
              <Button size="lg" variant="outline" className="text-lg px-8">
                技术原理
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-12">
            核心价值
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">准确率 &gt; 92%</h3>
                  <p className="text-muted-foreground">
                    通过多传感器融合技术，实现高精度手语识别
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">成本 &lt; $50</h3>
                  <p className="text-muted-foreground">
                    低成本设计，让更多听障人士能够负担得起
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">实时翻译</h3>
                  <p className="text-muted-foreground">
                    毫秒级响应，实现流畅的实时语音输出
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-12">
            产品工作流程
          </h2>
          <div className="aspect-video bg-card rounded-lg shadow-elegant flex items-center justify-center">
            <img
              src="https://miaoda-site-img.cdn.bcebos.com/images/b3b7abe6-9468-4816-b78b-1d56b18fadbc.jpg"
              alt="产品工作流程演示"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 text-center">
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-6">
            科技架桥，沟通无界
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            我们相信，每个人都有表达自己的权利。让我们一起，用科技的力量，为听障人士打开通往有声世界的大门。
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8">
              联系我们合作 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
