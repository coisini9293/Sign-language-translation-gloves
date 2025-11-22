import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Tag } from "lucide-react";
import { blogApi } from "@/db/api";
import type { BlogPost } from "@/types";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { toast } = useToast();

  const categories = [
    { value: "all", label: "全部" },
    { value: "项目进展", label: "项目进展" },
    { value: "团队随笔", label: "团队随笔" },
    { value: "行业洞察", label: "行业洞察" },
    { value: "活动参与", label: "活动参与" }
  ];

  useEffect(() => {
    loadPosts();
  }, [selectedCategory]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      let data: BlogPost[];
      if (selectedCategory === "all") {
        data = await blogApi.getPublishedPosts();
      } else {
        data = await blogApi.getPostsByCategory(selectedCategory);
      }
      setPosts(data);
    } catch (error) {
      toast({
        title: "加载失败",
        description: "无法加载博客文章，请稍后重试",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">博客动态</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            记录我们的成长，分享我们的思考
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="shadow-elegant">
                <CardHeader>
                  <Skeleton className="h-8 w-3/4 bg-muted" />
                  <Skeleton className="h-4 w-1/2 bg-muted" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-4 w-full bg-muted" />
                  <Skeleton className="h-4 w-full bg-muted" />
                  <Skeleton className="h-4 w-2/3 bg-muted" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="shadow-elegant hover:shadow-glow transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl flex-1">{post.title}</CardTitle>
                    {post.category && (
                      <span className="flex items-center gap-1 text-sm text-primary font-semibold whitespace-nowrap">
                        <Tag className="w-4 h-4" />
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {post.cover_image && (
                    <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt || post.content.substring(0, 150) + '...'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">暂无博客文章</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
