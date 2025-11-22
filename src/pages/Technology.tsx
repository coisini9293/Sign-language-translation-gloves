import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Hand, Volume2, Workflow } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">Technical Principles</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In-depth understanding of the technical principles and implementation solutions of the sign language glove
          </p>
        </div>

        <section className="mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Workflow className="w-8 h-8 text-primary" />
                <CardTitle className="text-3xl">System Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary p-8 rounded-lg">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Hand className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Data Collection</h3>
                    <p className="text-muted-foreground">Flex sensors and gyroscopes capture hand movements</p>
                  </div>
                  <div className="text-4xl text-muted-foreground">→</div>
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Data Processing</h3>
                    <p className="text-muted-foreground">ESP32 microcontroller analyzes and recognizes gestures</p>
                  </div>
                  <div className="text-4xl text-muted-foreground">→</div>
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Volume2 className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Voice Output</h3>
                    <p className="text-muted-foreground">Speech synthesis module converts to natural voice</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Data Collection Layer</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Flex Sensors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/b3b7abe6-9468-4816-b78b-1d56b18fadbc.jpg"
                    alt="Flex sensor demonstration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Five flex sensors are installed on each finger to capture the bending angle of each finger joint in real-time, achieving precise recognition of finger movements.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High sensitivity: Captures subtle finger movements</li>
                  <li>• Fast response: Millisecond-level data collection</li>
                  <li>• Durability: Withstands over 1 million bends</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Gyroscope</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg"
                    alt="Gyroscope demonstration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  A 6-axis gyroscope is installed on the back of the hand to capture the orientation and movement trajectory of the hand, providing comprehensive gesture information.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 3-axis accelerometer: Captures hand acceleration</li>
                  <li>• 3-axis gyroscope: Captures hand rotation angle</li>
                  <li>• High precision: ±0.1° angle accuracy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Processing Center: ESP32 Microcontroller</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Core Features</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Dual-core processor:</strong> Parallel processing of sensor data and algorithm computation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Low power consumption:</strong> Supports 8+ hours of continuous use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Wireless connectivity:</strong> Built-in WiFi and Bluetooth modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Rich interfaces:</strong> Supports multiple sensor connections</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Processing Flow</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span>
                      <span>Collect sensor data (flex sensors + gyroscope)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span>
                      <span>Data preprocessing (filtering, normalization)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span>
                      <span>Feature extraction (gesture feature vectors)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">4.</span>
                      <span>Pattern recognition (machine learning algorithms)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">5.</span>
                      <span>Result output (text or voice commands)</span>
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
              <CardTitle className="text-2xl">Algorithm Principles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">1. Data Preprocessing</h3>
                  <p className="text-muted-foreground">
                    Raw sensor data undergoes filtering and normalization to remove noise and outliers, ensuring data quality and stability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">2. Feature Extraction</h3>
                  <p className="text-muted-foreground">
                    Extracts key features from preprocessed data, such as finger bending angles, hand orientation, and movement trajectories, forming gesture feature vectors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">3. Pattern Recognition</h3>
                  <p className="text-muted-foreground">
                    Uses machine learning algorithms (such as SVM, neural networks) to match gesture feature vectors with pre-trained sign language models, recognizing corresponding sign language meanings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">4. Result Output</h3>
                  <p className="text-muted-foreground">
                    Converts recognized sign language meanings into text or voice output, enabling real-time communication.
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
