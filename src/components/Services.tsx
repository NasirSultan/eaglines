import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Code, 
  Search, 
  Megaphone, 
  Video, 
  Share2, 
  Bot,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  link?: string;
};

import React, { useState, useEffect } from "react";

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services: Service[] = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual solutions that capture your brand's essence and communicate your message effectively.",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics"],
      link: "/GraphicDesign"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies for optimal performance.",
      features: ["Frontend Development", "Backend Systems", "E-commerce", "CMS Solutions"],
      link: "/Webdevelopment"
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "User-centered design approaches that create intuitive and engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      link: "/Ui-ux-design"
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
      link: "/seo"
    },
    {
      icon: Megaphone,
      title: "Online Advertising",
      description: "Targeted advertising campaigns that maximize ROI and reach your ideal customers.",
      features: ["Google Ads", "Facebook Ads", "Display Advertising", "Retargeting"],
      link: "/online-advertising"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all social platforms.",
      features: ["Content Strategy", "Social Management", "Community Building", "Analytics"],
      link: "/social-media-marketing"
    },
    {
      icon: Video,
      title: "Video Editing & Animation",
      description: "Professional video content that tells your story and captivates your audience.",
      features: ["Motion Graphics", "Video Editing", "2D Animation", "Explainer Videos"],
      link: "/video-production"
    },
    {
      icon: Bot,
      title: "AI & Chatbots",
      description: "Intelligent automation solutions that enhance customer experience and streamline operations.",
      features: ["AI Integration", "Chatbot Development", "Process Automation", "AI Consulting"],
      link: "/ai-solutions"
    }
  ];

  return (
    <section id="services" className="py-20 md:container md:mx-auto px-4  bg-gradient-hero relative overflow-hidden">
        <div 
        className="fixed w-4 h-4 bg-red-500/30 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1)',
        }}
      />
       <div 
        className="fixed w-8 h-8 border border-red-500/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-red-700 opacity-50"></div>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <Badge variant="secondary" className="bg-gradient-card border border-accent/20 text-accent">
            Our Services
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-red-400 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {services.map((service, index) => {
    const CardContent = (
      <Card
        className={`p-6 bg-gradient-card border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:scale-105 group animate-scale-in ${
          service.link ? "cursor-pointer" : "cursor-default"
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="space-y-4">
          <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:animate-pulse">
            <service.icon className="w-7 h-7 text-primary-foreground" />
          </div>

          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.description}
          </p>

          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="agency"
              size="sm"
              className="w-full"
              disabled={!service.link}
            >
              {service.link ? "Learn More" : "Coming Soon"}
            </Button>
          </div>
        </div>
      </Card>
    );

    return service.link ? (
      <Link key={index} to={service.link} className="cursor-pointer">
        {CardContent}
      </Link>
    ) : (
      <div key={index}>{CardContent}</div>
    );
  })}
</div>


        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up">
          <Button variant="hero" size="xl" className="bg-gradient-to-tr from-red-800 to-red-500">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;