import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Battery, Wifi } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">核心技术</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            采用先进技术，为您带来卓越的使用体验
          </p>
        </div>

        {/* 主要技术亮点 */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">ESP32双核处理器</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://miaoda-site-img.cdn.bcebos.com/images/96807189-a6c6-483e-b011-c774b4293da8.jpg"
                  alt="ESP32处理器"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                采用业界领先的ESP32双核处理器，提供强大的处理能力
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>实时处理：</strong>毫秒级响应，流畅无延迟</li>
                <li>• <strong>智能算法：</strong>AI深度学习，识别更准确</li>
                <li>• <strong>低功耗设计：</strong>优化电源管理，延长使用时间</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">多传感器融合技术</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://miaoda-site-img.cdn.bcebos.com/images/b3b7abe6-9468-4816-b78b-1d56b18fadbc.jpg"
                  alt="传感器技术"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                集成高精度弯曲传感器和陀螺仪，实现精准的手语识别
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>精准捕捉：</strong>识别细微手势变化</li>
                <li>• <strong>全方位感知：</strong>3D空间手势追踪</li>
                <li>• <strong>抗干扰强：</strong>复杂环境稳定运行</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Battery className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">智能电源管理</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
                  alt="电源管理"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                采用智能电源管理技术，优化续航表现
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>长效续航：</strong>支持全天使用</li>
                <li>• <strong>快速充电：</strong>缩短充电等待时间</li>
                <li>• <strong>智能休眠：</strong>自动节能延长使用时间</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">无线连接技术</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">📡</div>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                支持WiFi和蓝牙双模连接，提供稳定的无线通信
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>稳定连接：</strong>可靠的无线通信</li>
                <li>• <strong>云端同步：</strong>数据实时备份到云端</li>
                <li>• <strong>多设备支持：</strong>同时连接手机和电脑</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 技术优势总结 */}
        <Card className="shadow-elegant border-border/50 bg-gradient-to-br from-card to-secondary/30">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">技术带来的优势</h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">92%</div>
                  <p className="text-lg text-foreground font-semibold mb-1">识别准确率</p>
                  <p className="text-sm text-muted-foreground">经过1000+次测试验证的手语识别精度</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">&lt;200ms</div>
                  <p className="text-lg text-foreground font-semibold mb-1">响应速度</p>
                  <p className="text-sm text-muted-foreground">实时翻译，沟通无延迟</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Technology;
