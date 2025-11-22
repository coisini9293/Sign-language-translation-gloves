import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText, Users, Building2, GraduationCap, Heart } from "lucide-react";
import { resourceApi } from "@/db/api";
import type { Resource } from "@/types";

const Resources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = async () => {
    try {
      setLoading(true);
      const data = await resourceApi.getAllResources();
      setResources(data);
    } catch (error) {
      toast({
        title: "加载失败",
        description: "无法加载资源列表，请稍后重试",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (resource: Resource) => {
    try {
      await resourceApi.incrementDownloadCount(resource.id);
      window.open(resource.file_url, '_blank');
      toast({
        title: "下载开始",
        description: `正在下载 ${resource.title}`
      });
    } catch (error) {
      toast({
        title: "下载失败",
        description: "无法下载文件，请稍后重试",
        variant: "destructive"
      });
    }
  };

  const cooperationTypes = [
    {
      icon: GraduationCap,
      title: "学术研究合作",
      description: "欢迎高校和研究机构与我们合作，共同推进手语识别技术的发展"
    },
    {
      icon: Users,
      title: "特殊教育机构试点",
      description: "邀请特殊教育学校参与产品试点，帮助我们改进产品设计"
    },
    {
      icon: Building2,
      title: "企业赞助",
      description: "寻求企业赞助支持，加速产品研发和市场推广"
    },
    {
      icon: Heart,
      title: "生产资源引入",
      description: "寻找生产合作伙伴，实现产品的规模化生产"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">支持与资源</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            携手共进，共创无障碍沟通未来
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">合作邀请</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {cooperationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="shadow-elegant">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{type.title}</h3>
                        <p className="text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">资料下载</h2>
          {loading ? (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="shadow-elegant">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 bg-muted" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Skeleton className="h-4 w-full bg-muted" />
                    <Skeleton className="h-4 w-2/3 bg-muted" />
                    <Skeleton className="h-10 w-full bg-muted" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {resource.description && (
                      <p className="text-muted-foreground text-sm">{resource.description}</p>
                    )}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{resource.file_type}</span>
                      <span>{resource.file_size}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        下载次数: {resource.download_count}
                      </span>
                      <Button onClick={() => handleDownload(resource)}>
                        <Download className="w-4 h-4 mr-2" />
                        下载
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!loading && resources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">暂无可下载资源</p>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">常见问题</h2>
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>产品什么时候可以购买？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  我们目前正在进行用户测试和产品优化阶段，预计在2025年第一季度开始小批量试产。具体的购买信息会在我们的官方网站和社交媒体上发布，敬请关注。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>产品的价格是多少？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  我们的目标是将产品价格控制在50美元以内，让更多的听障人士能够负担得起。具体价格会根据生产成本和市场情况进行调整，我们会尽力保持产品的可负担性。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>产品支持哪些手语？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  目前我们的产品主要支持中国手语的常用词汇，词汇量超过500个。我们正在不断扩充词汇库，并计划在未来支持更多国家和地区的手语。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>如何参与产品测试？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  如果您是听障人士或特殊教育工作者，并且有兴趣参与我们的产品测试，请通过联系我们页面提交申请。我们会根据测试计划与您联系。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
