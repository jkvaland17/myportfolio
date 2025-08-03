import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import componyLogo from "@/assets/android-chrome-192x192.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={componyLogo} alt="componyLogo" className="w-[40px]" />
            <span className="font-heading font-bold text-xl text-foreground">
              H&J Codecraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "font-medium transition-colors duration-200 relative",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button size="sm" className="ml-4">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
