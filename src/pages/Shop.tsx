import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCart, Zap, Shield, Headphones } from "lucide-react";
import { useState } from "react";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: "basic",
      name: "基础版",
      price: "$299",
      originalPrice: "$399",
      badge: "热销",
      badgeVariant: "default" as const,
      image: "https://miaoda-site-img.cdn.bcebos.com/images/b3b7abe6-9468-4816-b78b-1d56b18fadbc.jpg",
      features: [
        "5个弯曲传感器",
        "6轴陀螺仪",
        "ESP32微控制器",
        "8小时续航",
        "92%识别准确率",
        "蓝牙连接",
        "1年质保"
      ],
      description: "适合个人日常使用，满足基本沟通需求"
    },
    {
      id: "pro",
      name: "专业版",
      price: "$499",
      originalPrice: "$699",
      badge: "推荐",
      badgeVariant: "secondary" as const,
      image: "https://miaoda-site-img.cdn.bcebos.com/images/3d71cedf-e0b5-477c-99f0-70b79915c505.jpg",
      features: [
        "10个高精度传感器",
        "9轴陀螺仪",
        "双核处理器",
        "12小时续航",
        "95%识别准确率",
        "WiFi + 蓝牙双模",
        "实时云端同步",
        "2年质保",
        "优先技术支持"
      ],
      description: "适合专业场景，提供更高精度和更多功能"
    },
    {
      id: "enterprise",
      name: "企业版",
      price: "联系我们",
      originalPrice: "",
      badge: "定制",
      badgeVariant: "outline" as const,
      image: "https://miaoda-site-img.cdn.bcebos.com/images/96807189-a6c6-483e-b011-c774b4293da8.jpg",
      features: [
        "全套定制传感器",
        "AI深度学习算法",
        "企业级处理器",
        "24小时续航",
        "98%识别准确率",
        "多设备管理平台",
        "数据分析报告",
        "定制化开发",
        "3年质保",
        "7×24技术支持"
      ],
      description: "为教育机构和企业提供定制化解决方案"
    }
  ];

  const handleBuyNow = (productId: string) => {
    setSelectedProduct(productId);
    // 这里可以添加购买逻辑
    alert(`您选择了${products.find(p => p.id === productId)?.name}，购买功能即将上线！`);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-4">选购手语翻译手套</h1>
          <p className="text-xl text-muted-foreground">
            选择适合您的版本，开启无障碍沟通新体验
          </p>
        </div>

        {/* 产品对比卡片 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card 
              key={product.id}
              className={`shadow-elegant border-border/50 hover:shadow-glow transition-all ${
                selectedProduct === product.id ? 'ring-2 ring-primary' : ''
              } ${product.id === 'pro' ? 'xl:scale-105' : ''}`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <Badge variant={product.badgeVariant}>{product.badge}</Badge>
                </div>
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handleBuyNow(product.id)}
                  variant={product.id === 'pro' ? 'default' : 'outline'}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.id === 'enterprise' ? '联系销售' : '立即购买'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 购买保障 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">7天无理由退换</h3>
                <p className="text-muted-foreground">
                  收到产品后7天内，如不满意可无理由退换货
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">质量保证</h3>
                <p className="text-muted-foreground">
                  所有产品均经过严格质检，提供完善的售后保障
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">专业技术支持</h3>
                <p className="text-muted-foreground">
                  提供专业的技术支持和使用培训服务
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 常见问题 */}
        <Card className="shadow-elegant border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">购买须知</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">Q: 如何选择适合的版本？</h4>
                <p className="text-muted-foreground">
                  A: 基础版适合个人日常使用；专业版适合需要更高精度的用户；企业版适合教育机构和企业批量采购。
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Q: 产品支持哪些手语？</h4>
                <p className="text-muted-foreground">
                  A: 目前支持中国手语和美国手语（ASL），更多语言版本正在开发中。
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Q: 配送时间是多久？</h4>
                <p className="text-muted-foreground">
                  A: 国内订单一般3-5个工作日送达，国际订单7-15个工作日送达。
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Q: 是否提供发票？</h4>
                <p className="text-muted-foreground">
                  A: 是的，我们为所有订单提供正规发票。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shop;