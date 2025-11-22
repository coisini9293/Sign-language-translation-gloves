import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import routes from "@/routes";

const Header = () => {
  const location = useLocation();
  const navigation = routes.filter((route) => route.visible !== false);

  return (
    <>
      <header className="bg-foreground/95 backdrop-blur-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="flex justify-between items-center h-14">
            <Link to="/" className="flex items-center gap-2">
              <div className="text-xl font-bold text-background tracking-tight">
                Sign Language Glove
              </div>
            </Link>

            <div className="flex items-center gap-1">
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

            <div className="flex items-center gap-3">
              <Link to="/contact">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Purchase / Partner
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      
      {location.pathname !== "/" && (
        <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 xl:px-8 text-center">
            <h1 className="text-4xl xl:text-5xl font-bold text-white mb-3 tracking-tight">
              Sign Language Glove
            </h1>
            <h2 className="text-2xl xl:text-3xl font-bold text-white">
              Making Every Silent Gesture Heard by the World
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
