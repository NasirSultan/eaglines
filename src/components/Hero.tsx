import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full overflow-hidden pt-20 px-8 flex items-center justify-center bg-gradient-hero relative"
    >
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-accent opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full max-w-screen-xl">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight relative w-fit mx-auto md:mx-0">
            <div className="absolute hidden md:block left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_2px_#00FF00]" />

          


            <span className="relative inline-block group cursor-pointer">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                EAGLINES
              </span>

              <span className="absolute hidden md:flex left-1/2 -translate-x-1/2 -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <span className="inline-flex items-center gap-2 bg-gradient-card border border-accent/20 rounded-full px-5 py-2 shadow-lg backdrop-blur-sm whitespace-nowrap">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Premium Digital Solutions
                  </span>
                </span>
              </span>
            </span>


            <br />
            <span className="text-foreground">Software Company</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto md:mx-0 mt-6">
            We are the one-stop shop for all your online marketing needs, from
            designing to development. We'll help you engage with more audience
            and customers with our innovative digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <button className="px-8 py-4 border-2 bg-red-700 border-red-600 rounded-lg text-lg font-semibold">
              Get Started
            </button>
            <Button variant="agency" size="xl">
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {[
              { number: "147+", label: "Projects Completed" },
              { number: "53+", label: "Happy Clients" },
              { number: "7+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex relative w-72 h-72 flex-shrink-0 overflow-hidden">
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
            <text fill="currentColor" fontSize="14" fontWeight="bold">
              <textPath href="#circlePath">
                GRAPHIC DESIGNING • MARKETING AGENCY • SOFTWARE DESIGN COMPANY •
              </textPath>
            </text>
            <image
              href="/Eaglines navlogo.png"
              x="5"
              y="5"
              width="190"
              height="190"
              className="rounded-full shadow-lg"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
