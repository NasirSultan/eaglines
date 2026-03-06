import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "/lovable-uploads/138f6d2b-effa-4275-a3a0-c39ae0b2f273.png",
      rating: 5,
      feedback: "EAGLINES transformed our digital presence completely. Their UI/UX design expertise and development skills are outstanding. Highly recommended!"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCorp",
      image: "/lovable-uploads/138f6d2b-effa-4275-a3a0-c39ae0b2f273.png",
      rating: 5,
      feedback: "The team delivered exceptional results for our SEO and social media campaigns. Our online visibility increased by 300% within 6 months."
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeStudio",
      image: "/lovable-uploads/138f6d2b-effa-4275-a3a0-c39ae0b2f273.png",
      rating: 5,
      feedback: "Their graphic design and branding work exceeded our expectations. Professional, creative, and always delivered on time."
    },
    {
      name: "David Thompson",
      role: "CTO, InnovateLabs",
      image: "/lovable-uploads/138f6d2b-effa-4275-a3a0-c39ae0b2f273.png",
      rating: 5,
      feedback: "Amazing web development services! They built our complex e-commerce platform with perfect functionality and beautiful design."
    },
    {
      name: "Lisa Wang",
      role: "Brand Manager, StyleHub",
      image: "/lovable-uploads/138f6d2b-effa-4275-a3a0-c39ae0b2f273.png",
      rating: 5,
      feedback: "EAGLINES helped us create stunning video content and animations that boosted our engagement rates significantly."
    },
    {
      name: "James Miller",
      role: "Director, AutoBot Solutions",
      image: "/lovable-uploads/138f6d2b-effa-4275-a3a0-c39ae0b2f273.png",
      rating: 5,
      feedback: "Their AI and chatbot solutions revolutionized our customer service. Professional team with cutting-edge expertise."
    }
  ];

  const clientLogos = [
    "TechStart", "GrowthCorp", "CreativeStudio", "InnovateLabs", "StyleHub", "AutoBot"
  ];

  return (
    <section id="clients" className="py-20 md:container md:mx-auto px-4 bg-gradient-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <Badge variant="secondary" className="bg-gradient-card border border-accent/20 text-accent">
            Happy Clients
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="bg-gradient-to-tr from-red-200 to-red-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="px-6 py-3 bg-gradient-card border border-accent/10 rounded-lg animate-scale-in hover:border-accent/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-lg font-semibold text-muted-foreground">{logo}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-accent opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-accent/10">
                  <Avatar className="w-12 h-12 border-2 border-accent/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-accent text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-foreground font-semibold group-hover:text-accent transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-accent/10">
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "150+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;