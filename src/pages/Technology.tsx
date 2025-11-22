import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Hand, Volume2, Workflow } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">技术详解</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            深入了解手语翻译手套的技术原理和实现方案
          </p>
        </div>

        <section className="mb-16">
          <Card className="shadow-elegant">
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
                    <p className="text-muted-foreground">弯曲传感器 + 陀螺仪</p>
                  </div>
                  <div className="text-4xl text-muted-foreground">→</div>
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">数据处理</h3>
                    <p className="text-muted-foreground">ESP32主控板</p>
                  </div>
                  <div className="text-4xl text-muted-foreground">→</div>
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Volume2 className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">语音输出</h3>
                    <p className="text-muted-foreground">语音合成模块</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">技术组成</h2>
          <div className="grid grid-cols-1 gap-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">数据采集层</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">弯曲传感器</h3>
                  <p className="text-muted-foreground mb-4">
                    在手套的每个手指上安装弯曲传感器，实时监测手指的弯曲角度。当手指弯曲时，传感器的电阻值会发生变化，通过测量电阻值的变化，我们可以精确地获取手指的弯曲程度。
                  </p>
                  <div className="bg-secondary p-6 rounded-lg">
                    <img
                      src="https://miaoda-site-img.cdn.bcebos.com/images/4ba29319-79b2-4f7c-a871-f0a7ebfc9ade.jpg"
                      alt="弯曲传感器演示"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">陀螺仪</h3>
                  <p className="text-muted-foreground mb-4">
                    在手套背部安装六轴陀螺仪，用于检测手部的姿态和运动轨迹。陀螺仪可以测量手部在三维空间中的旋转角度和加速度，这对于识别需要手部移动的手语动作至关重要。
                  </p>
                  <div className="bg-secondary p-6 rounded-lg">
                    <img
                      src="https://miaoda-site-img.cdn.bcebos.com/images/b1c1c6e4-8748-4347-b3f8-b211ae5230a5.jpg"
                      alt="陀螺仪演示"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">处理中心</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-2">ESP32主控板</h3>
                <p className="text-muted-foreground">
                  ESP32是一款功能强大且成本低廉的微控制器，具有以下特点：
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>双核处理器，主频高达240MHz，能够快速处理传感器数据</li>
                  <li>内置WiFi和蓝牙模块，支持无线数据传输</li>
                  <li>低功耗设计，延长电池使用时间</li>
                  <li>丰富的GPIO接口，方便连接各种传感器</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">输出模块</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-2">语音合成模块</h3>
                <p className="text-muted-foreground">
                  采用先进的语音合成技术，将识别出的手语文本转换为自然流畅的语音输出。支持多种音色选择，用户可以根据自己的喜好进行个性化设置。
                </p>
                <div className="bg-secondary p-6 rounded-lg">
                  <p className="text-foreground font-semibold mb-2">语音样例：</p>
                  <div className="flex items-center gap-4">
                    <Volume2 className="w-6 h-6 text-primary" />
                    <span className="text-muted-foreground">你好，很高兴认识你</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">算法原理</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  我们的手语识别算法采用机器学习技术，通过以下步骤实现手语到语音的转换：
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                  <li>
                    <span className="font-semibold text-foreground">数据预处理：</span>
                    对传感器采集的原始数据进行滤波和归一化处理，去除噪声干扰
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">特征提取：</span>
                    从预处理后的数据中提取关键特征，如手指弯曲角度、手部姿态等
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">模式识别：</span>
                    使用训练好的机器学习模型，将提取的特征与手语词汇库进行匹配
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">语音合成：</span>
                    将识别出的手语文本通过语音合成模块转换为语音输出
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Technology;
