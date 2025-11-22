import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, DollarSign, Zap, ShoppingCart, Users, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 xl:px-8 text-center py-20">
          <h1 className="text-5xl xl:text-7xl font-bold text-white mb-4 tracking-tight">
            手语翻译手套
          </h1>
          <h2 className="text-3xl xl:text-5xl font-bold text-white mb-12">
            让每一次沉默的比划，都被世界听见
          </h2>

          <p className="text-lg xl:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            一款低成本、能实时将手语翻译成语音的智能手套
          </p>

          <div className="flex flex-col xl:flex-row gap-4 justify-center mb-16">
            <Link to="/shop">
              <Button size="lg" className="text-base px-8 shadow-lg bg-primary hover:bg-primary/90">
                <ShoppingCart className="mr-2 w-5 h-5" />
                立即购买
              </Button>
            </Link>
            <Link to="/product">
              <Button size="lg" variant="outline" className="text-base px-8 shadow-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                了解更多 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* 产品图片展示 */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
              <img
                src="https://miaoda-site-img.cdn.bcebos.com/images/96807189-a6c6-483e-b011-c774b4293da8.jpg"
                alt="手语翻译手套产品展示"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-4">
            核心优势
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            三大核心技术，打造行业领先的手语翻译解决方案
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">准确率 &gt; 95%</h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    采用多传感器融合技术，实现高精度手语识别
                  </p>
                  <p className="text-sm text-muted-foreground">
                    10个高精度传感器 + 9轴陀螺仪，捕捉每一个细微动作
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <DollarSign className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">价格 &lt; ¥2000</h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    低成本设计，让更多听障人士用得起
                  </p>
                  <p className="text-sm text-muted-foreground">
                    相比传统设备节省70%成本，性价比行业第一
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">实时翻译</h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    毫秒级响应，实现流畅的实时语音输出
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ESP32双核处理器，响应时间&lt;200ms，沟通零延迟
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-4">
            产品特性
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            每一个细节，都为更好的沟通体验而设计
          </p>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">智能识别，精准翻译</h3>
              <p className="text-muted-foreground text-lg mb-6">
                采用AI深度学习算法，支持中国手语和美国手语（ASL），识别准确率高达95%。无论是日常交流还是专业场景，都能准确理解您的每一个手势。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">支持500+常用手语词汇</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">自适应学习，越用越准确</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">支持自定义手语词汇</span>
                </li>
              </ul>
            </div>
            <div className="aspect-video bg-secondary rounded-2xl shadow-elegant overflow-hidden">
              <img
                src="https://miaoda-site-img.cdn.bcebos.com/images/b3b7abe6-9468-4816-b78b-1d56b18fadbc.jpg"
                alt="智能识别功能"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div className="xl:order-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">长效续航，全天使用</h3>
              <p className="text-muted-foreground text-lg mb-6">
                采用智能电源管理技术，单次充电可连续使用12小时。快速充电功能，30分钟即可充满80%电量，让您随时随地畅快沟通。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">12小时超长续航</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">快速充电，30分钟充满80%</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">智能休眠，自动节能</span>
                </li>
              </ul>
            </div>
            <div className="xl:order-1 aspect-video bg-secondary rounded-2xl shadow-elegant overflow-hidden">
              <img
                src="https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
                alt="长效续航"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-12">
            用数据说话
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="shadow-elegant border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <div className="text-4xl font-bold text-foreground mb-2">10,000+</div>
                  <p className="text-muted-foreground">用户信赖</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <div className="text-4xl font-bold text-foreground mb-2">95%</div>
                  <p className="text-muted-foreground">用户满意度</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <div className="text-4xl font-bold text-foreground mb-2">1,000,000+</div>
                  <p className="text-muted-foreground">成功翻译次数</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 text-center">
          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-6">
            科技架桥，沟通无界
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            我们相信，每个人都有表达自己的权利。让我们一起用科技为听障人士打开通往有声世界的大门。
          </p>
          <div className="flex flex-col xl:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="text-base px-8 shadow-lg bg-primary hover:bg-primary/90">
                <ShoppingCart className="mr-2 w-5 h-5" />
                立即购买
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 shadow-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                联系我们合作 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
