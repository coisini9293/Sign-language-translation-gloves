import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Hand, Volume2, Workflow } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">技术原理</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            深入了解手语翻译手套的技术原理和实现方案
          </p>
        </div>

        <section className="mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Workflow className="w-8 h-8 text-primary" />
                <CardTitle className="text-3xl">系统总览</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary p-8 rounded-lg">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Hand className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">数据采集</h3>
                    <p className="text-muted-foreground">弯曲传感器和陀螺仪捕捉手部动作</p>
                  </div>
                  <div className="text-4xl text-muted-foreground">→</div>
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">数据处理</h3>
                    <p className="text-muted-foreground">ESP32微控制器分析识别手势</p>
                  </div>
                  <div className="text-4xl text-muted-foreground">→</div>
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Volume2 className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">语音输出</h3>
                    <p className="text-muted-foreground">语音合成模块转换为自然语音</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">数据采集层</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">弯曲传感器</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/b3b7abe6-9468-4816-b78b-1d56b18fadbc.jpg"
                    alt="弯曲传感器演示"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  每个手指上安装了5个弯曲传感器，实时捕捉每个手指关节的弯曲角度，实现对手指动作的精确识别。
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 高灵敏度：能够捕捉细微的手指动作</li>
                  <li>• 快速响应：毫秒级数据采集</li>
                  <li>• 耐用性强：可承受100万次以上弯曲</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">陀螺仪</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
                    alt="陀螺仪演示"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  手背上安装了6轴陀螺仪，捕捉手部的方向和运动轨迹，提供全面的手势信息。
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 3轴加速度计：捕捉手部加速度</li>
                  <li>• 3轴陀螺仪：捕捉手部旋转角度</li>
                  <li>• 高精度：±0.1°角度精度</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">处理中心：ESP32微控制器</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">核心特性</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>双核处理器：</strong>并行处理传感器数据和算法计算</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>低功耗：</strong>支持8小时以上连续使用</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>无线连接：</strong>内置WiFi和蓝牙模块</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>丰富接口：</strong>支持多种传感器连接</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">处理流程</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span>
                      <span>采集传感器数据（弯曲传感器+陀螺仪）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span>
                      <span>数据预处理（滤波、归一化）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span>
                      <span>特征提取（手势特征向量）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">4.</span>
                      <span>模式识别（机器学习算法）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">5.</span>
                      <span>结果输出（文本或语音指令）</span>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">算法原理</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">1. 数据预处理</h3>
                  <p className="text-muted-foreground">
                    原始传感器数据经过滤波和归一化处理，去除噪声和异常值，确保数据质量和稳定性。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">2. 特征提取</h3>
                  <p className="text-muted-foreground">
                    从预处理后的数据中提取关键特征，如手指弯曲角度、手部方向、运动轨迹等，形成手势特征向量。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">3. 模式识别</h3>
                  <p className="text-muted-foreground">
                    使用机器学习算法（如SVM、神经网络）将手势特征向量与预训练的手语模型进行匹配，识别出对应的手语含义。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">4. 结果输出</h3>
                  <p className="text-muted-foreground">
                    将识别出的手语含义转换为文本或语音输出，实现实时沟通。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Technology;
