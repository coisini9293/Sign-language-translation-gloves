import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { caseApi } from "@/db/api";
import type { UserCase } from "@/types";

const Cases = () => {
  const [cases, setCases] = useState<UserCase[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadCases();
  }, []);

  const loadCases = async () => {
    try {
      setLoading(true);
      const data = await caseApi.getPublishedCases();
      setCases(data);
    } catch (error) {
      toast({
        title: "加载失败",
        description: "无法加载用户案例，请稍后重试",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">用户案例</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            真实的故事，真实的改变
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="shadow-elegant">
                <CardHeader>
                  <Skeleton className="h-8 w-3/4 bg-muted" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-48 w-full bg-muted" />
                  <Skeleton className="h-4 w-full bg-muted" />
                  <Skeleton className="h-4 w-full bg-muted" />
                  <Skeleton className="h-4 w-2/3 bg-muted" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {cases.map((caseItem) => (
              <Card key={caseItem.id} className="shadow-elegant hover:shadow-glow transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{caseItem.title}</CardTitle>
                  {caseItem.scenario && (
                    <span className="text-sm text-primary font-semibold">
                      {caseItem.scenario}
                    </span>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {caseItem.image_url && (
                    <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                      <img
                        src={caseItem.image_url}
                        alt={caseItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    {caseItem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && cases.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">暂无用户案例</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cases;
