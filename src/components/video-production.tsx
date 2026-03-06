'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaEdit, FaPaintBrush, FaBullhorn } from 'react-icons/fa';

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
    { title: "Motion Graphics", icon: <FaVideo size={40} />, description: "Dynamic animations that bring your brand to life", features: ["Logo animations", "Text animations", "Infographics", "3D elements"] },
    { title: "Video Editing", icon: <FaEdit size={40} />, description: "Professional editing for seamless storytelling", features: ["Color grading", "Sound design", "Transitions", "Multi-cam editing"] },
    { title: "2D Animation", icon: <FaPaintBrush size={40} />, description: "Engaging character animations and illustrations", features: ["Character design", "Whiteboard animation", "Cartoon style", "Frame-by-frame"] },
    { title: "Explainer Videos", icon: <FaBullhorn size={40} />, description: "Simplify complex ideas with visual storytelling", features: ["Script writing", "Voiceover sync", "Visual metaphors", "Call-to-action"] },
  ];

  const portfolioItems = [
    { title: "Tech Product Demo", category: "Explainer Video", tags: ["After Effects", "3D Modeling"], imageUrl: "https://images.unsplash.com/photo-1605902711622-cfb43c4434c5" },
    { title: "Fashion Brand Campaign", category: "Commercial", tags: ["Color Grading", "4K Resolution"], imageUrl: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15" },
    { title: "Mobile App Tutorial", category: "How-To Video", tags: ["Screen Recording", "Motion Graphics"], imageUrl: "https://images.unsplash.com/photo-1581091215361-8beacb1b0424" },
    { title: "Corporate Presentation", category: "Business Video", tags: ["PowerPoint", "Animation"], imageUrl: "https://images.unsplash.com/photo-1581092334304-2639d49b9b70" },
    { title: "Music Video", category: "Entertainment", tags: ["Special Effects", "Color Correction"], imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" },
    { title: "Social Media Ad", category: "Marketing", tags: ["Vertical Video", "Fast Cuts"], imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6" }
  ];

  const testimonials = [
    { name: "Alex Johnson", company: "TechStart Inc.", quote: "Our explainer video increased conversions by 40% - absolutely stunning work!", rating: 5 },
    { name: "Sarah Williams", company: "FashionForward", quote: "The team delivered our campaign video ahead of schedule with exceptional quality.", rating: 5 }
  ];

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="text-white min-h-screen">
      <Navigation />
      <motion.div className="fixed top-0 left-0 h-1 z-50 bg-red-600" style={{ width: `${scrollProgress}%` }} initial={{ width: 0 }} />

      <section className="relative h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            VIDEO EDITING & ANIMATION
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
            Professional video content that tells your story and captivates your audience
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="#portfolio" className="px-8 py-4 bg-red-600 rounded-lg text-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-red-900/50 text-center">View Portfolio</a>
  <a href="/contact" className="px-8 py-4 border-2 border-red-600 text-red-400 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors text-center">Get Started</a>
</div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive video production solutions tailored to your needs</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {services.map((service, index) => (
              <motion.div key={index} className="bg-gray-900/80 rounded-xl p-8 border border-gray-800 hover:border-red-600/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-red-900/30" variants={item} whileHover={{ scale: 1.05 }}>
                <div className="text-red-400 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm hover:text-red-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></span>{feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="portfolio"   className="  py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Showcase of our recent video production projects</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {portfolioItems.map((item, index) => (
              <motion.div key={index} className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-red-600/70 transition-all duration-500 h-80" variants={item} whileHover={{ scale: 1.03 }}>
                <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                <div className="relative h-full flex flex-col justify-end p-6 bg-black/50 rounded-xl">
                  <span className="text-red-400 text-sm font-medium mb-2">{item.category}</span>
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700/60 text-gray-300 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">What our clients say about our video production services</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}