'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navigation from './Navigation';

export default function VideoProductionPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / scrollTotal) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Motion Graphics",
      icon: "🎬",
      description: "Dynamic animations that bring your brand to life",
      features: ["Logo animations", "Text animations", "Infographics", "3D elements"]
    },
    {
      title: "Video Editing",
      icon: "✂️",
      description: "Professional editing for seamless storytelling",
      features: ["Color grading", "Sound design", "Transitions", "Multi-cam editing"]
    },
    {
      title: "2D Animation",
      icon: "🖌️",
      description: "Engaging character animations and illustrations",
      features: ["Character design", "Whiteboard animation", "Cartoon style", "Frame-by-frame"]
    },
    {
      title: "Explainer Videos",
      icon: "📢",
      description: "Simplify complex ideas with visual storytelling",
      features: ["Script writing", "Voiceover sync", "Visual metaphors", "Call-to-action"]
    },
  
  ];

  const portfolioItems = [
    {
      title: "Tech Product Demo",
      category: "Explainer Video",
      tags: ["After Effects", "3D Modeling"],
      videoUrl: "#"
    },
    {
      title: "Fashion Brand Campaign",
      category: "Commercial",
      tags: ["Color Grading", "4K Resolution"],
      videoUrl: "#"
    },
    {
      title: "Mobile App Tutorial",
      category: "How-To Video",
      tags: ["Screen Recording", "Motion Graphics"],
      videoUrl: "#"
    },
    {
      title: "Corporate Presentation",
      category: "Business Video",
      tags: ["PowerPoint", "Animation"],
      videoUrl: "#"
    },
    {
      title: "Music Video",
      category: "Entertainment",
      tags: ["Special Effects", "Color Correction"],
      videoUrl: "#"
    },
    {
      title: "Social Media Ad",
      category: "Marketing",
      tags: ["Vertical Video", "Fast Cuts"],
      videoUrl: "#"
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      company: "TechStart Inc.",
      quote: "Our explainer video increased conversions by 40% - absolutely stunning work!",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "FashionForward",
      quote: "The team delivered our campaign video ahead of schedule with exceptional quality.",
      rating: 5
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="  text-white min-h-screen">
        <Navigation />
      {/* Animated scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to- from-red-600 to-red-800 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
      />

      {/* Hero Section with enhanced gradient */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute  bg-gradient-to-bl from-black via-red-800 to-black inset-0 opacity-80 animate-pulse-slow"></div>
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 animate-gradient-flow"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
VIDEO EDITING & ANIMATION          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Professional video content that tells your story and captivates your audience
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-red-900/50 hover:shadow-red-700/70">
              View Portfolio
            </button>
            <button className="px-8 py-4 border-2 border-red-600 text-red-400 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors hover:border-red-700">
              Get Quote
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-4 border-red-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-red-500 rounded-full mt-1"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section with animated cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-r from-black via-red-800 to-black ">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive video production solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-b from-gray-900/80 via-gray-800/40 to-gray-900/80 rounded-xl p-8 border border-gray-800 hover:border-red-600/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-red-900/30"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-6 hover:scale-110 hover:text-red-400 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-400">{service.title}</h3>
                <p className="text-gray-300 mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center hover:text-red-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section with enhanced gradients */}
      <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-r from-black via-red-800 to-black]">
  <div className="max-w-7xl mx-auto">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
        Our Portfolio
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Showcase of our recent video production projects
      </p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Tech Product Demo - Modern Tech Style */}
      <motion.div 
        className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-blue-400/70 transition-all duration-500 h-80"
        variants={item}
        whileHover={{ scale: 1.03 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,rgba(59,130,246,0.2)_100%)] opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-400/40 transition-all duration-700 rounded-xl"></div>
        
        <div className="relative h-full flex flex-col justify-end p-6">
          <span className="text-blue-400 text-sm font-medium mb-2 transition-all duration-300 group-hover:translate-x-1">
            Tech Product
          </span>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-500">
            Tech Product Demo
          </h3>
          <motion.div 
            className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <a href="https://github.com/yourusername/tech-product-demo" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs border border-blue-800/60 hover:bg-blue-800/60 transition-colors">
              GitHub
            </a>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">After Effects</span>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">3D Modeling</span>
          </motion.div>
        </div>
        
        <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-blue-400/0 group-hover:border-blue-400/50 rounded-full group-hover:animate-spin transition-all duration-1000"></div>
      </motion.div>

      {/* Fashion Brand Campaign - Elegant Style */}
      <motion.div 
        className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-pink-500/70 transition-all duration-500 h-80"
        variants={item}
        whileHover={{ scale: 1.03 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,rgba(236,72,153,0.2)_100%)] opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-pink-500/40 transition-all duration-700 rounded-xl"></div>
        
        <div className="relative h-full flex flex-col justify-end p-6">
          <span className="text-pink-400 text-sm font-medium mb-2 transition-all duration-300 group-hover:translate-x-1">
            Fashion
          </span>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-300 transition-colors duration-500">
            Fashion Brand Campaign
          </h3>
          <motion.div 
            className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <a href="https://github.com/yourusername/fashion-campaign" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-pink-900/40 text-pink-300 rounded-full text-xs border border-pink-800/60 hover:bg-pink-800/60 transition-colors">
              GitHub
            </a>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">Color Grading</span>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">4K Resolution</span>
          </motion.div>
        </div>
        
        <div className="absolute top-4 right-4 w-3 h-3 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-pink-500/0 group-hover:border-pink-500/50 rounded-full group-hover:animate-spin transition-all duration-1000"></div>
      </motion.div>

      {/* Mobile App Tutorial - Modern UI Style */}
      <motion.div 
        className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-purple-500/70 transition-all duration-500 h-80"
        variants={item}
        whileHover={{ scale: 1.03 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,rgba(168,85,247,0.2)_100%)] opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-purple-500/40 transition-all duration-700 rounded-xl"></div>
        
        <div className="relative h-full flex flex-col justify-end p-6">
          <span className="text-purple-400 text-sm font-medium mb-2 transition-all duration-300 group-hover:translate-x-1">
            App Tutorial
          </span>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-500">
            Mobile App Tutorial
          </h3>
          <motion.div 
            className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <a href="https://github.com/yourusername/app-tutorial" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs border border-purple-800/60 hover:bg-purple-800/60 transition-colors">
              GitHub
            </a>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">Screen Recording</span>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">Motion Graphics</span>
          </motion.div>
        </div>
        
        <div className="absolute top-4 right-4 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-full group-hover:animate-spin transition-all duration-1000"></div>
      </motion.div>

      {/* Corporate Presentation - Professional Style */}
      <motion.div 
        className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-emerald-500/70 transition-all duration-500 h-80"
        variants={item}
        whileHover={{ scale: 1.03 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,rgba(16,185,129,0.2)_100%)] opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-emerald-500/40 transition-all duration-700 rounded-xl"></div>
        
        <div className="relative h-full flex flex-col justify-end p-6">
          <span className="text-emerald-400 text-sm font-medium mb-2 transition-all duration-300 group-hover:translate-x-1">
            Corporate
          </span>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-300 transition-colors duration-500">
            Corporate Presentation
          </h3>
          <motion.div 
            className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <a href="https://github.com/yourusername/corporate-presentation" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-emerald-900/40 text-emerald-300 rounded-full text-xs border border-emerald-800/60 hover:bg-emerald-800/60 transition-colors">
              GitHub
            </a>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">PowerPoint</span>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">Animation</span>
          </motion.div>
        </div>
        
        <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-emerald-500/0 group-hover:border-emerald-500/50 rounded-full group-hover:animate-spin transition-all duration-1000"></div>
      </motion.div>

      {/* Music Video - Creative Style */}
      <motion.div 
        className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-yellow-500/70 transition-all duration-500 h-80"
        variants={item}
        whileHover={{ scale: 1.03 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,rgba(234,179,8,0.2)_100%)] opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-500/40 transition-all duration-700 rounded-xl"></div>
        
        <div className="relative h-full flex flex-col justify-end p-6">
          <span className="text-yellow-400 text-sm font-medium mb-2 transition-all duration-300 group-hover:translate-x-1">
            Music Video
          </span>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-500">
            Music Video Production
          </h3>
          <motion.div 
            className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <a href="https://github.com/yourusername/music-video" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-yellow-900/40 text-yellow-300 rounded-full text-xs border border-yellow-800/60 hover:bg-yellow-800/60 transition-colors">
              GitHub
            </a>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">Special Effects</span>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">Color Correction</span>
          </motion.div>
        </div>
        
        <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-yellow-500/0 group-hover:border-yellow-500/50 rounded-full group-hover:animate-spin transition-all duration-1000"></div>
      </motion.div>

      {/* Social Media Ad - Vibrant Style */}
      <motion.div 
        className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-red-500/70 transition-all duration-500 h-80"
        variants={item}
        whileHover={{ scale: 1.03 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,rgba(239,68,68,0.2)_100%)] opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-500/40 transition-all duration-700 rounded-xl"></div>
        
        <div className="relative h-full flex flex-col justify-end p-6">
          <span className="text-red-400 text-sm font-medium mb-2 transition-all duration-300 group-hover:translate-x-1">
            Social Media
          </span>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-red-300 transition-colors duration-500">
            Social Media Ad
          </h3>
          <motion.div 
            className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <a href="https://github.com/yourusername/social-media-ad" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-900/40 text-red-300 rounded-full text-xs border border-red-800/60 hover:bg-red-800/60 transition-colors">
              GitHub
            </a>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">Vertical Video</span>
            <span className="px-3 py-1 bg-gray-800/40 text-gray-300 rounded-full text-xs border border-gray-700/60">Fast Cuts</span>
          </motion.div>
        </div>
        
        <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-red-500/0 group-hover:border-red-500/50 rounded-full group-hover:animate-spin transition-all duration-1000"></div>
      </motion.div>
    </motion.div>
  </div>
</section>
      {/* Testimonials Section with animated cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-r from-black via-red-800 to-black ">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our clients say about our video production services
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/80 via-gray-800/40 to-gray-900/80 rounded-xl p-8 border border-gray-800 hover:border-red-600/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-900/20"
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-red-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-lg italic mb-6 hover:text-white transition-colors">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-900/50 to-red-800/30 rounded-full flex items-center justify-center text-red-400 font-bold mr-4 hover:scale-110 transition-transform">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with intense gradient */}
      <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-r from-black via-red-800 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Elevate Your Video Content?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let's discuss how we can bring your vision to life with stunning video production
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-red-900/50 hover:shadow-red-700/70">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-red-600 text-red-400 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors hover:border-red-700">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer with gradient border */}
    

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
      <Footer />
    </div>
  );
}