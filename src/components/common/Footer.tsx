import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto py-12 px-4 xl:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">About Us</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dedicated to using technology to eliminate communication barriers, providing low-cost, high-precision real-time sign language translation solutions for hearing-impaired individuals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="text-muted-foreground space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>linyusen188511@163.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>{currentYear} Sign Language Glove</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
