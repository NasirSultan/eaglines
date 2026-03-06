import { useState } from "react";
import { Quote, Star, Linkedin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const ClientFeedback = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CEO, TechVenture Inc.",
      platform: "linkedin",
      avatar: "SM",
      rating: 5,
      project: "E-Commerce Platform Redesign",
      feedback: "Absolutely transformative work. The attention to detail and creative vision exceeded every expectation. Our conversion rates increased by 340% within the first month.",
      date: "December 2024",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Founder, Innovate Labs",
      platform: "upwork",
      avatar: "MC",
      rating: 5,
      project: "SaaS Dashboard Development",
      feedback: "Exceptional talent and professionalism. Delivered a complex dashboard system that our enterprise clients absolutely love. The UI/UX is world-class.",
      date: "November 2024",
    },
    {
      id: 3,
      name: "Elena Rossi",
      role: "Creative Director, Luxe Brand",
      platform: "linkedin",
      avatar: "ER",
      rating: 5,
      project: "Brand Identity & Web Experience",
      feedback: "A true visionary. Created an immersive digital experience that perfectly captures our luxury brand essence. The animations and interactions are breathtaking.",
      date: "October 2024",
    },
    {
      id: 4,
      name: "James Wright",
      role: "CTO, FinanceFlow",
      platform: "upwork",
      avatar: "JW",
      rating: 5,
      project: "Financial Analytics Platform",
      feedback: "Outstanding technical expertise combined with exceptional design sensibility. The platform handles millions of data points seamlessly with an intuitive interface.",
      date: "September 2024",
    },
    {
      id: 5,
      name: "Aisha Patel",
      role: "VP Product, HealthTech Co",
      platform: "linkedin",
      avatar: "AP",
      rating: 5,
      project: "Healthcare App Redesign",
      feedback: "Revolutionized our patient experience. The empathetic design approach and attention to accessibility made our app truly inclusive and user-friendly.",
      date: "August 2024",
    },
  ];
  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "12", label: "Countries Served" },
  ];
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-hero   overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-3xl" />
        </div>
        {/* Decorative Lines */}
        <div className="fixed left-[5%]" />
        <div className="fixed right-[5%] " />
        <div className="relative z-10 min-h-screen py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <p className="text-primary uppercase tracking-[0.4em] text-sm mb-6 animate-fade-in">
                Client Testimonials
              </p>
              <h1 className="  text-7xl md:text-7xl font-bold leading-tight animate-slide-up">
                VOICES OF
                <br />
                <span className="  text-4xl md:text-7xl font-bold leading-tight">SUCCESS</span>
              </h1>
              <p className="text-muted-foreground mt-8 text-lg md:text-xl max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Real stories from clients who transformed their digital presence through our collaborative partnership.
              </p>
            </div>
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-card/40 border border-border/30 backdrop-blur-sm animate-slide-up"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <p className="font-display text-4xl md:text-5xl text-gradient-red mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
            {/* Featured Testimonial */}
            <div className="mb-20">
              <div className="relative">
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-12 h-12 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-12 h-12 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                {/* Main Card */}
                <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-card/60 backdrop-blur-sm border border-border/50 overflow-hidden">
                  {/* Top accent */}
                  <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 md:top-12 md:right-12">
                    <Quote className="w-16 h-16 md:w-24 md:h-24 text-primary/10" />
                  </div>
                  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Left - Author Info */}
                    <div className="lg:col-span-1">
                      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Avatar */}
                        <div className="w-24 h-24 rounded-2xl bg-gradient-red flex items-center justify-center mb-6 glow-red">
                          <span className="font-display text-3xl text-primary-foreground">
                            {testimonials[activeIndex].avatar}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wide">
                          {testimonials[activeIndex].name}
                        </h3>
                        <p className="text-muted-foreground mt-1 mb-4">
                          {testimonials[activeIndex].role}
                        </p>
                        {/* Platform Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${testimonials[activeIndex].platform === "linkedin"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : "bg-green-500/10 text-green-400 border border-green-500/20"
                          }`}>
                          {testimonials[activeIndex].platform === "linkedin" ? (
                            <Linkedin className="w-4 h-4" />
                          ) : (
                            <ExternalLink className="w-4 h-4" />
                          )}
                          <span className="capitalize">{testimonials[activeIndex].platform}</span>
                        </div>
                        {/* Rating */}
                        <div className="flex gap-1 mt-6">
                          {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Right - Content */}
                    <div className="lg:col-span-2 flex flex-col justify-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                        {testimonials[activeIndex].project}
                      </p>
                      <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-6">
                        "{testimonials[activeIndex].feedback}"
                      </blockquote>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[activeIndex].date}
                      </p>
                    </div>
                  </div>
                  {/* Bottom accent */}
                  <div className="absolute -bottom-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>
                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted hover:bg-muted-foreground"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Testimonial Grid */}
         
            {/* CTA Section */}
            <div className="text-center">
              <div className="inline-block  md:p-8 rounded-3xl bg-card/40 border border-border/30 backdrop-blur-sm">
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  READY TO START YOUR <span className="text-gradient-red">PROJECT?</span>
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Join our growing list of satisfied clients and transform your digital presence.
                </p>
                <a
                  href="contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-2 overflow-hidden bg-transparent border-2 border-primary rounded-full text-primary font-display text-lg tracking-[0.1em] transition-all duration-500 hover:text-primary-foreground hover:border-transparent"
                >
                  <span className="relative z-5">GET IN TOUCH</span>
                  <ExternalLink className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-red transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
                </a>
              </div>
            </div>
            {/* Footer */}
          
          </div>
        </div>
      </div>
          <Footer />
    </>
  );
};


export default ClientFeedback;