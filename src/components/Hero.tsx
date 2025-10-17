import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 7,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen md:container md:mx-auto px-4 flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-accent opacity-20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container px-1 relative z-10 flex flex-col md:flex-row items-center gap-1">
        {/* Left-side */}
        <div className="flex-1 text-left md:text-left space-y-0 animate-slide-up">
          {/* Heading with Green Dot and Tooltip */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-4 relative w-fit group">
            {/* Green Neon Dot */}
            <div className="absolute  left-4  -translate-x-1/2 w-3 h-3 text-center items-center rounded-full bg-green-400 shadow-[0_0_8px_2px_#00FF00]" />

            {/* Tooltip on Hover */}
            <div className="absolute ml-15 left-14 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <div className="inline-flex items-center space-x-2 bg-gradient-card border border-accent/20 rounded-full px-6 py-2 shadow-lg backdrop-blur-sm animate-scale-in">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">
                  Premium Digital Solutions
                </span>
              </div>
            </div>

            {/* Main Text */}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              EAGLINES
            </span>
            <br />
            <span className="text-foreground">Software Company</span>
          </h1>

          {/* Paragraph */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed mt-4">
            We are the one‑stop shop for all your online marketing needs, from
            designing to development. We'll help you engage with more audience
            and customers with our innovative digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8">
            <button className="group relative px-8 py-4 border-2 bg-red-700 border-red-600 hover:bg-black rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:rotate-1 whitespace-nowrap cursor-pointer overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            </button>
            <Button variant="agency" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right-side Rotating Image */}
        <div className="relative w-80 h-80 md:block ml-8">
          <svg
            width="280"
            height="280"
            viewBox="0 0 200 200"
            className="absolute inset-0"
          >
            <defs>
              <path
                id="circlePath"
                d="M100,100 m0,-90 a90,90 0 1,1 0,180 a90,90 0 1,1 0,-180"
              />
            </defs>
            <motion.g variants={orbitVariants} animate="animate">
              <text fill="currentColor" fontSize="14" fontWeight="bold">
                <textPath href="#circlePath" startOffset="0%">
                  GRAPHIC DESIGNING • MARKETING AGENCY • SOFTWARE DESIGN COMPANY •
                </textPath>
              </text>
            </motion.g>
            <image
              href="/Eaglines navlogo.png"
              x="1"
              y="4"
              width="190"
              height="190"
              alt="Logo"
              className="rounded-full shadow-lg"
            />
          </svg>
          <div className="absolute inset-0 rounded-full blur-2xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
