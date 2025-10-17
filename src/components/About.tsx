import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We develop targeted strategies that align with your business goals and drive measurable results."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our talented professionals bring years of experience in design, development, and digital marketing."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of trends and use cutting-edge technologies to deliver exceptional solutions."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing to ensure the highest standards of quality and performance."
    }
  ];

  return (
    <section id="about" className="py-20  bg-gradient-t md:container md:mx-auto px-4 from-black to-red-900 text-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-in-left">
            <Badge variant="secondary" className="bg-gradient-card border border-accent/20 text-accent">
              About Our Agency
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Creating <span className="bg-gradient-accent bg-clip-text text-transparent">Beautiful</span> Digital Experiences
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At EAGLINES, we believe in the power of exceptional design and innovative technology. 
              Our team combines creativity with technical expertise to deliver solutions that not only 
              look stunning but also perform flawlessly across all platforms.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-foreground">Comprehensive UI/UX Design Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-foreground">Full-Stack Development Services</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-foreground">Digital Marketing & Brand Strategy</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="mt-8">
              Learn More About Us
            </Button>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:scale-105 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:animate-pulse">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;