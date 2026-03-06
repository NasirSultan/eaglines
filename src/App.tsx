import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GraphicDesign from "@/components/GraphicDesign";
import WebDevelopment from "@/components/Webdevelopment";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Clients from "./pages/Clients/Clients";
import UIDesign from "@/components/Ui-ux-design";
import SEOPage from "./components/Seo";
import Portfolio from "./components/portfolio";
import OnlineAdvertising from "./components/online-advertising";
import SocialMediaMarketing from "./components/social-media-marketing";
import VideoProduction from "./components/video-production";
import AiChatbot from "./components/ai-solutions";
import Contact from "@/pages/contact/contact";
import Team from "@/pages/team";
import Casestudy from "@/pages/Casestudy/Case";


const queryClient = new QueryClient();

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Track mouse position
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Detect hover state on interactive elements
    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);

    // Add hover detection after components mount
    const timer = setTimeout(() => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-interactive]'
      );
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleLeave);
      });
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(timer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* Custom Cursor Elements */}
        <div
          className="fixed w-4 h-4 bg-gradient-to-r from-red-500/30 to-red-800 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          }}
        />
        <div
          className="fixed w-8 h-8 border border-black rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            transform: isHovering ? 'scale(0.8)' : 'scale(1)',
          }}
        />

        <BrowserRouter>
          <div className="cursor-none"> {/* This hides the default cursor */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/GraphicDesign" element={<GraphicDesign />} />
              <Route path="/Webdevelopment" element={<WebDevelopment />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Clients" element={<Clients />} />
              <Route path="/Ui-ux-design" element={<UIDesign />} />
              <Route path="/online-advertising" element={<OnlineAdvertising />} />
              <Route path="/seo" element={<SEOPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
              <Route path="/video-production" element={<VideoProduction />} />
              <Route path="/ai-solutions" element={<AiChatbot />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
                   <Route path="/Casestudy" element={<Casestudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;