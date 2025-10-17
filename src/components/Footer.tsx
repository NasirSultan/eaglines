import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <footer className="bg-gradient-hero md:container md:mx-auto px-4 border-t border-accent/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
             <div className="w-12 h-12 rounded-full flex items-center justify-center 
                bg-gradient-to-tr from-black to-red-500 border border-slate-300 
                shadow-red-200">
  <img
    src="/loader.png"
    alt="Logo"
    className="w-10 h-10 rounded-full object-cover"
  />
</div>


              <span className="text-2xl font-bold text-foreground">EAGLINES</span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We are a leading digital agency specializing in creating beautiful,
              functional, and user-friendly digital experiences that drive business growth.
            </p>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center hover:bg-gradient-accent hover:scale-110 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span className="text-muted-foreground">info@eaglines.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-card border border-accent/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-muted-foreground">123 Business Ave, City, State</span>
              </div>
            </div>

            <Button variant="hero" size="default" className="w-full">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-accent/10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="bg-gradient-card border border-accent/20 text-accent">
              Stay Updated
            </Badge>
            <h3 className="text-2xl font-bold text-foreground">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get the latest updates on digital trends, design tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gradient-card border border-accent/20 rounded-lg focus:border-accent focus:outline-none text-foreground placeholder-muted-foreground"
              />
              <Button variant="hero" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EAGLINES Software Company. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 mt-4 md:mt-0"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;