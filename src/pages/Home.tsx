import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, DollarSign, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 xl:px-8 text-center py-20">
          <h1 className="text-5xl xl:text-7xl font-bold text-white mb-4 tracking-tight">
            手语翻译手套
          </h1>
          <h2 className="text-3xl xl:text-5xl font-bold text-white mb-12">
            让每一次沉默的比划，都被世界听见
          </h2>

          <p className="text-lg xl:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            一款低成本、能实时将手语翻译成语音的智能手套
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-12">
            核心价值
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">准确率 &gt; 92%</h3>
                  <p className="text-muted-foreground">
                    通过多传感器融合技术，实现高精度手语识别
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">成本 &lt; $50</h3>
                  <p className="text-muted-foreground">
                    低成本设计，让更多听障人士能够负担得起
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-foreground" />
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

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-12">
            产品工作流程
          </h2>
          <div className="aspect-video bg-secondary rounded-2xl shadow-elegant overflow-hidden border border-border/50">
            <img
              src="https://miaoda-site-img.cdn.bcebos.com/images/b3b7abe6-9468-4816-b78b-1d56b18fadbc.jpg"
              alt="产品工作流程演示"
              className="w-full h-full object-cover"
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
            <Button size="lg" className="text-base px-8 shadow-lg">
              联系我们合作 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
