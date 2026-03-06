import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp
} from "lucide-react";
import { useRef } from "react";
import { useState, useEffect } from "react";
const Footer = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Graphic Design",
    "Web Development",
    "UI/UX Design",
    "SEO Optimization",
    "Social Media Marketing",
    "Video Production"
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "Privacy Policy",
    "Terms of Service",
    "Contact"
  ];

  const handleSubscribe = () => {
    const email = emailRef.current.value;
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="bg-gradient-hero md:container md:mx-auto px-4 border-t border-accent/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="py-8 border-t border-accent/10">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-gradient-card border border-accent/20 text-accent">
            Stay Updated
          </Badge>
          <h3 className="text-2xl font-bold text-foreground">Subscribe to Our Newsletter</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get the latest updates on digital trends, design tips, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gradient-card border border-accent/20 rounded-lg"
            />
            <Button onClick={handleSubscribe} className="px-6 py-3 bg-accent rounded-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-black to-red-500 border border-slate-300 shadow-red-200">
                <img src="/loader.png" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
              </div>
              <span className="text-2xl font-bold text-foreground">EAGLINES</span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We are a leading digital agency specializing in creating beautiful, functional, and user-friendly digital experiences that drive business growth.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/eaglines/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center hover:bg-gradient-accent hover:scale-110 transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="https://www.linkedin.com/company/eaglines/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center hover:bg-gradient-accent hover:scale-110 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center hover:bg-gradient-accent hover:scale-110 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center hover:bg-gradient-accent hover:scale-110 transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center space-x-2 group">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a onClick={() => navigate(item === "Contact" ? "/contact" : "#")} className="cursor-pointer text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center space-x-2 group">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <a href="mailto:hr@eaglines.co" className="text-muted-foreground">hr@eaglines.co</a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <a href="https://wa.me/923222502232" target="_blank" className="text-muted-foreground">+923222502232</a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <Link to="/contact" className="text-muted-foreground">Near Azadi Chowk, Lahore, Pakistan</Link>
              </div>
            </div>

            <Button size="default" className="w-full" onClick={() => navigate("/contact")}>
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="py-6 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2023 EAGLINES Software Company. All rights reserved.
          </p>
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 z-50"
            >
              <ArrowUp className="w-5 h-5 text-primary-foreground" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;