import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Wifi } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">Core Technology</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Adopting advanced technology to bring you an excellent user experience
          </p>
        </div>

        {/* Main Technology Highlights */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">ESP32 Dual-Core Processor</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://miaoda-site-img.cdn.bcebos.com/images/96807189-a6c6-483e-b011-c774b4293da8.jpg"
                  alt="ESP32 Processor"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Utilizing industry-leading ESP32 dual-core processor, providing powerful processing capabilities
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Real-time Processing:</strong> Millisecond response, smooth and lag-free</li>
                <li>• <strong>Intelligent Algorithms:</strong> AI deep learning for more accurate recognition</li>
                <li>• <strong>Low Power Design:</strong> Optimized energy consumption performance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Multi-Sensor Fusion Technology</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://miaoda-site-img.cdn.bcebos.com/images/b3b7abe6-9468-4816-b78b-1d56b18fadbc.jpg"
                  alt="Sensor Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Integrating high-precision flex sensors and gyroscopes for accurate sign language recognition
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Precise Capture:</strong> Recognizes subtle gesture changes</li>
                <li>• <strong>Omnidirectional Sensing:</strong> 3D spatial gesture tracking</li>
                <li>• <strong>Strong Anti-Interference:</strong> Stable operation in complex environments</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Wireless Connectivity</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">📡</div>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Supports WiFi and Bluetooth dual-mode connectivity, providing stable wireless communication
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Stable Connection:</strong> Reliable wireless communication</li>
                <li>• <strong>Cloud Sync:</strong> Real-time data backup to cloud</li>
                <li>• <strong>Multi-Device Support:</strong> Simultaneous connection to phone and computer</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technology Advantages Summary */}
        <Card className="shadow-elegant border-border/50 bg-gradient-to-br from-card to-secondary/30">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Technology Advantages</h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">92%</div>
                  <p className="text-lg text-foreground font-semibold mb-1">Recognition Accuracy</p>
                  <p className="text-sm text-muted-foreground">Sign language recognition precision verified through 1000+ tests</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">&lt;200ms</div>
                  <p className="text-lg text-foreground font-semibold mb-1">Response Speed</p>
                  <p className="text-sm text-muted-foreground">Real-time translation with no communication delay</p>
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
