import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Megaphone, Search, BarChart3, Target, Zap, Users, Award, Mail, Phone, MapPin, Github, Linkedin, Twitter, Play, CheckCircle, Star, TrendingUp, Globe, Monitor, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "./Footer";
import Navigation from "./Navigation";

const OnlineAdvertising = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const advertisingServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Google Ads",
      description: "Dominate search results with targeted Google advertising campaigns that drive qualified traffic.",
      features: ["Search Campaigns", "Display Network", "Shopping Ads", "YouTube Ads"],
      price: "Starting from $500/month",
      delay: "delay-100"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Facebook & Instagram Ads",
      description: "Reach billions of users with precision-targeted social media advertising campaigns.",
      features: ["Feed Ads", "Story Ads", "Video Ads", "Carousel Ads"],
      price: "Starting from $400/month",
      delay: "delay-200"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Display Advertising",
      description: "Build brand awareness with eye-catching banner ads across premium websites.",
      features: ["Banner Ads", "Rich Media", "Video Display", "Programmatic Buying"],
      price: "Starting from $300/month",
      delay: "delay-300"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Retargeting Campaigns",
      description: "Re-engage visitors who didn't convert with strategic retargeting advertisements.",
      features: ["Website Retargeting", "Social Retargeting", "Email Retargeting", "Cross-Platform"],
      price: "Starting from $250/month",
      delay: "delay-[400ms]"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "LinkedIn Advertising",
      description: "Connect with professionals and decision-makers through targeted B2B advertising.",
      features: ["Sponsored Content", "Message Ads", "Lead Gen Forms", "Event Promotion"],
      price: "Starting from $600/month",
      delay: "delay-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Amazon Advertising",
      description: "Boost product visibility and sales with Amazon's powerful advertising platform.",
      features: ["Sponsored Products", "Sponsored Brands", "Display Ads", "Video Ads"],
      price: "Starting from $350/month",
      delay: "delay-[600ms]"
    }
  ];

  const platforms = [
    { name: "Google", users: "4.3B+", icon: <Search className="w-6 h-6" /> },
    { name: "Facebook", users: "2.9B+", icon: <Users className="w-6 h-6" /> },
    { name: "Instagram", users: "2B+", icon: <Smartphone className="w-6 h-6" /> },
    { name: "LinkedIn", users: "900M+", icon: <Tablet className="w-6 h-6" /> },
    { name: "YouTube", users: "2.7B+", icon: <Play className="w-6 h-6" /> },
    { name: "Amazon", users: "300M+", icon: <Globe className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Our ROI increased by 340% within 3 months of starting their advertising campaigns. Incredible results!",
      rating: 5,
      delay: "delay-100"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      text: "Professional team that delivered beyond expectations. Our conversion rates doubled!",
      rating: 5,
      delay: "delay-200"
    },
    {
      name: "Emily Rodriguez",
      company: "Growth Marketing",
      text: "Best advertising agency we've worked with. They understand our business and deliver results.",
      rating: 5,
      delay: "delay-300"
    }
  ];

  const navItems = ["Home", "Services", "Platforms", "Portfolio", "Testimonials", "Contact"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-32 right-16 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navbar */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-bounce-in' : ''}`}>
            <div className="flex items-center justify-center mb-6 animate-fade-in-up">
              <Megaphone className="w-16 h-16 text-primary mr-4 animate-pulse-glow" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              ONLINE ADVERTISING
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              That Actually Works
            </h2>
            <p className="text-md md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              Drive qualified traffic, increase conversions, and maximize ROI with our data-driven online advertising campaigns across all major platforms.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '900ms' }}>
              <Button size="lg" className="mr-4  hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg glow-red animate-pulse-glow">
                Start Campaign
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-card to-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "250%", label: "Average ROI Increase", icon: <TrendingUp className="w-8 h-8" /> },
              { number: "$2.5M+", label: "Ad Spend Managed", icon: <BarChart3 className="w-8 h-8" /> },
              { number: "500+", label: "Successful Campaigns", icon: <Target className="w-8 h-8" /> },
              { number: "150+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`animate-fade-in-up hover:scale-110 transition-transform duration-300`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center animate-float" style={{ animationDelay: `${index * 1000}ms` }}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              Our <span className="text-primary">Advertising Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Comprehensive online advertising solutions designed to maximize your reach, engagement, and conversions across all major platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advertisingServices.map((service, index) => (
              <Card
                key={service.title}
                className={`gradient-border bg-card hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-fade-in-up ${service.delay} cursor-pointer`}
              >
                <CardContent className="p-8">
                  <div className="text-primary mb-6 group-hover:animate-bounce-in group-hover:text-accent transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 group-hover:animate-pulse-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                  <Button 
                    className="w-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300 group-hover:glow-red"
                  >
                    Get Started
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              Advertising <span className="text-primary">Platforms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              We manage campaigns across all major advertising platforms to maximize your reach and ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`text-center p-8 bg-background rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in-up group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center  group-hover:text-accent transition-colors duration-300" style={{ animationDelay: `${index * 500}ms` }}>
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{platform.name}</h3>
                <p className="text-muted-foreground text-lg">{platform.users} Users</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              Client <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Don't just take our word for it - see what our clients say about our advertising campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`gradient-border bg-card hover:bg-card/80 transition-all duration-500 hover:scale-105 group animate-fade-in-up ${testimonial.delay}`}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent group-hover:animate-pulse-glow" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-secondary to-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              A proven methodology that delivers consistent results for every campaign
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", description: "Analyze your business and create a custom advertising strategy" },
              { step: "02", title: "Setup", description: "Create and configure campaigns across selected platforms" },
              { step: "03", title: "Launch", description: "Monitor performance and optimize campaigns in real-time" },
              { step: "04", title: "Scale", description: "Scale successful campaigns and improve ROI continuously" }
            ].map((process, index) => (
              <div
                key={process.step}
                className={`text-center animate-fade-in-up hover:scale-105 transition-transform duration-300`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl font-bold text-primary mb-4 animate-pulse-glow">{process.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              Start Your <span className="text-primary">Campaign Today</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Ready to see real results from your advertising budget? Let's discuss your goals and create a winning strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Mail className="w-8 h-8" />, title: "Email", detail: "ads@adpro.com", color: "text-primary" },
              { icon: <Phone className="w-8 h-8" />, title: "Phone", detail: "+1 (555) 123-ADPRO", color: "text-accent" },
              { icon: <MapPin className="w-8 h-8" />, title: "Location", detail: "New York, NY", color: "text-primary" }
            ].map((contact, index) => (
              <div
                key={contact.title}
                className={`text-center p-8 bg-background rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`${contact.color} mb-4 flex justify-center animate-float`} style={{ animationDelay: `${index * 1000}ms` }}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.detail}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg glow-red animate-pulse-glow mr-4">
              Start Free Consultation
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-12 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer />
    </div>
  );
};

export default OnlineAdvertising;