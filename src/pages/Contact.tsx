import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";
import { contactApi } from "@/db/api";
import type { ContactSubmission } from "@/types";

const Contact = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: "",
    email: "",
    organization: "",
    message: "",
    contact_type: null
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "请填写必填项",
        description: "姓名、邮箱和留言内容为必填项",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "邮箱格式错误",
        description: "请输入有效的邮箱地址",
        variant: "destructive"
      });
      return;
    }

    try {
      setSubmitting(true);
      await contactApi.submitContact(formData);
      toast({
        title: "提交成功",
        description: "感谢您的留言，我们会尽快与您联系"
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: "",
        contact_type: null
      });
    } catch (error) {
      toast({
        title: "提交失败",
        description: "无法提交表单，请稍后重试",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">联系我们</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            期待与您携手，共创无障碍沟通未来
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">联系方式</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">邮箱地址</h3>
                  <p className="text-muted-foreground">contact@signglove.com</p>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">关注我们的社交媒体</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>微信公众号：手语翻译手套</p>
                  <p>微博：@手语翻译手套项目</p>
                  <p>抖音：手语翻译手套</p>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">合作咨询</h3>
                <p className="text-muted-foreground">
                  如果您对我们的项目感兴趣，或希望与我们合作，欢迎通过右侧表单与我们联系。我们期待与您的交流！
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">留言表单</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名 *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">邮箱 *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="请输入您的邮箱"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">组织/机构</Label>
                  <Input
                    id="organization"
                    value={formData.organization || ""}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="请输入您所在的组织或机构（可选）"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact_type">联系类型</Label>
                  <Select
                    value={formData.contact_type || ""}
                    onValueChange={(value) => setFormData({ ...formData, contact_type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="请选择联系类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cooperation">合作咨询</SelectItem>
                      <SelectItem value="inquiry">产品咨询</SelectItem>
                      <SelectItem value="feedback">意见反馈</SelectItem>
                      <SelectItem value="other">其他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">留言内容 *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="请输入您的留言内容"
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={submitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {submitting ? "提交中..." : "提交留言"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
