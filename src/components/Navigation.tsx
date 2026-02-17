import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Clients", href: "/clients" },
    { label: "Team", href: "/team" }
  ];

  const handleNavigate = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-2 z-50 transition-all duration-300 ${
        isScrolled
          ? "w-[93%] mx-auto left-0 right-0 bg-background/70 backdrop-blur-md rounded-[2.5rem] border border-border"
          : "w-full left-0 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-black to-red-500 border border-slate-300">
              <img
                src="/loader.png"
                alt="Logo"
                className="w-8 h-8 sm:w-8 sm:h-8 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <span className="text-base font-semibold tracking-wide text-foreground">
              EAGLINES
            </span>
          </div>

          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.href)}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button
              variant="contact"
              size="default"
              onClick={() => handleNavigate("/contact")}
            >
              Contact Now
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-accent"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  variant="contact"
                  size="default"
                  className="w-full"
                  onClick={() => handleNavigate("/contact")}
                >
                  Contact Now
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
