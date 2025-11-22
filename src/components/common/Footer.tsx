import { Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto py-12 px-4 xl:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">关于我们</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              致力于用科技消除沟通障碍，为听障人士提供低成本、高精度的实时手语翻译解决方案。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">联系方式</h3>
            <div className="text-muted-foreground space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@signglove.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">关注我们</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>{currentYear} 手语翻译手套</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
