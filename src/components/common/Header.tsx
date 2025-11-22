import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import routes from "@/routes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = routes.filter((route) => route.visible !== false);

  return (
    <header className="bg-foreground/95 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 xl:px-8">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-xl font-bold text-background tracking-tight">
              手语翻译手套
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-background/90 hover:text-background hover:bg-background/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <button className="p-2 text-background/90 hover:text-background transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                采购 / 合作
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-background"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="xl:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-background/90 hover:bg-background/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button size="sm" className="w-full mt-2">
                采购 / 合作
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
