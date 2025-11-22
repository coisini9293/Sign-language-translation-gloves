import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Feather, Zap, DollarSign, Heart } from "lucide-react";

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
            <Link to="/product">
              <Button size="lg" className="text-base px-8 shadow-lg bg-primary hover:bg-primary/90">
                了解更多 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 shadow-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                联系我们
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

      {/* Core Advantages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-4">
            核心优势
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            我们的手套通过以下关键优势脱颖而出
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Feather className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">便携性和舒适性</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    轻量化设计，适合长时间佩戴。无论是日常交流还是专业场景，都能提供舒适的使用体验。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">实时响应</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    低延迟处理能力，支持自然对话。实时翻译让沟通更加流畅自然。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">成本效益</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    模块化和可扩展生产降低用户成本，让更多听障人士能够负担得起这项技术。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">社会影响</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    不仅仅是商业产品，更承载着包容性和可及性的强烈价值观，非常适合与政府、学校和非营利组织合作。
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
                采用多传感器融合技术和AI算法，实现高精度手语识别。无论是日常交流还是专业场景，都能准确理解您的每一个手势。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">高精度传感器捕捉手部动作</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">实时处理，低延迟响应</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">支持自然对话场景</span>
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
              <h3 className="text-2xl font-bold text-foreground mb-4">轻量舒适，持久续航</h3>
              <p className="text-muted-foreground text-lg mb-6">
                轻量化设计确保长时间佩戴的舒适性，智能电源管理技术提供持久续航，让您随时随地畅快沟通。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">轻量化设计，佩戴舒适</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">长效续航，全天使用</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">智能节能，延长使用时间</span>
                </li>
              </ul>
            </div>
            <div className="xl:order-1 aspect-video bg-secondary rounded-2xl shadow-elegant overflow-hidden">
              <img
                src="https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
                alt="轻量舒适设计"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl xl:text-4xl font-bold text-center text-foreground mb-6">
            市场定位
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            与现有替代方案相比，我们的手套更好地满足了用户需求，展现出更强的市场采用潜力
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="shadow-elegant border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">个人用户</h3>
                  <p className="text-muted-foreground">
                    为听障人士提供便捷的日常沟通工具
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">教育机构</h3>
                  <p className="text-muted-foreground">
                    帮助特殊教育学校提升教学效果
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">公共服务</h3>
                  <p className="text-muted-foreground">
                    与政府和非营利组织合作推广无障碍沟通
                  </p>
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
            <Link to="/product">
              <Button size="lg" className="text-base px-8 shadow-lg bg-primary hover:bg-primary/90">
                了解产品详情 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 shadow-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                联系我们合作
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
