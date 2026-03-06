import React, { useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant, slideIn } from '../utils/motion';
import { Badge } from 'lucide-react';
import { FaUser } from 'react-icons/fa'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Animation variants
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.0 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.0 } }
  };

  return (
    <div className="min-h-screen  text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with enhanced animations */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer()}
        className="relative py-20 px-6"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20creative%20design%20studio%20workspace%20with%20graphic%20design%20elements%20colorful%20gradients%20and%20geometric%20shapes%20professional%20dark%20background%20with%20vibrant%20accents%20digital%20art%20tools%20and%20creative%20inspiration&width=1440&height=400&seq=hero-graphic-design&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Blurred background layer (separate from content) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 1
        }}></div>

        {/* Content container with higher z-index */}
        <motion.div
          variants={staggerContainer()}
          className="relative max-w-7xl mx-auto text-center"
          style={{
            position: 'relative', // Important
            zIndex: 2 // Higher than the blur layer
          }}
        >
          <motion.div variants={textVariant(0.1)}>
            <span className="inline-block bg-gradient-card border border-accent/20 text-accent mb-4 px-4 py-2 rounded-full animate-float">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            variants={textVariant(0.2)}
            className="text-6xl font-bold mb-6 text-white" // Changed to white for better contrast
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }} // Added text shadow
          >
            GRAPHIC DESIGN
          </motion.h1>

          <motion.p
            variants={textVariant(0.3)}
            className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed" // Lightened gray
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            Creative visual solutions that capture your brand's essence and communicate your message effectively through innovative design approaches and cutting-edge creative techniques.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Service Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 bg-gradient-to-br from-black to-red-800"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our Design Expertise
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              We transform ideas into compelling visual experiences that connect with your audience.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gradient-card border border-accent/10 rounded-lg p-1">
              {['overview', 'process', 'portfolio'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg transition-all ${activeTab === tab
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">

            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {[
                  {
                    title: 'Logo Design',
                    description: 'Distinctive brand marks that define your identity.',
                    items: ['Brand Analysis', 'Concept Development', 'Variations', 'File Formats']
                  },
                  {
                    title: 'Brand Identity',
                    description: 'Complete visual systems for strong brand presence.',
                    items: ['Style Guides', 'Color Palette', 'Typography', 'Guidelines']
                  },
                  {
                    title: 'Print Design',
                    description: 'Professional print materials with high quality.',
                    items: ['Business Cards', 'Brochures', 'Packaging', 'Marketing']
                  },
                  {
                    title: 'Digital Graphics',
                    description: 'Optimized graphics for digital platforms.',
                    items: ['Social Media', 'Web Banners', 'Infographics', 'Ads']
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-card border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:scale-105 group cursor-pointer animate-scale-in p-8 rounded-lg"
                  >

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'process' && (
              <motion.div
                key="process"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                {[
                  { step: '1', title: 'Discovery', desc: 'Understand brand and goals.' },
                  { step: '2', title: 'Concept', desc: 'Create multiple creative ideas.' },
                  { step: '3', title: 'Refinement', desc: 'Improve until perfect.' },
                  { step: '4', title: 'Delivery', desc: 'Provide final files and support.' }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-6 mb-8">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {step.title}
                      </h3>

                      <p className="text-gray-300">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'portfolio' && (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[
                  {
                    title: 'Startup Branding',
                    description: 'Modern brand identity project',
                    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e'
                  },
                  {
                    title: 'Corporate Materials',
                    description: 'Professional print designs',
                    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
                  },
                  {
                    title: 'Social Campaign',
                    description: 'Digital marketing creatives',
                    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-card rounded-lg overflow-hidden border border-white/10 hover:border-red-500 transition-all"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-white">
                        {item.title}
                      </h4>

                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </motion.div>

      {/* Pricing Plans with animated cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer()}
        className="py-16 px-6 bg-gradient-to-tr from-black to-red-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn('up', 'tween', 0.1, 1)}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Pricing Plans</h2>
            <p className="text-lg text-gray-300">Choose the perfect package for your design needs</p>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Basic',
                price: '$99',
                popular: false,
                features: ['Logo Design', 'Business Card', '2 Revisions', 'File Formats'],
                buttonText: 'Get Started'
              },
              {
                title: 'Standard',
                price: '$299',
                popular: true,
                features: ['Complete Brand Identity', 'Print Materials', '5 Revisions', 'Brand Guidelines'],
                buttonText: 'Get Started'
              },
              {
                title: 'Premium',
                price: '$499',
                popular: false,
                features: ['Everything in Standard', 'Digital Graphics', 'Unlimited Revisions', 'Priority Support'],
                buttonText: 'Get Started'
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                whileHover={{ y: -10 }}
                className={`bg-gradient-card p-8 rounded-lg border ${plan.popular ? 'border-red-500' : 'border-white/10'} relative transition-all duration-500 hover:scale-105 hover:border-red-500 cursor-pointer`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm"
                  >
                    Popular
                  </motion.div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-white">{plan.title}</h3>
                <div className="text-4xl font-bold mb-6 text-red-400">{plan.price}</div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center"
                    >
                      <i className="fas fa-check text-red-500 mr-3"></i>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                  className="w-full py-3 rounded-full cursor-pointer font-semibold bg-red-500 text-white hover:bg-red-600"
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Client Testimonials with staggered animations */}
      <div className="py-16 px-6 bg-gradient-to-br from-black to-red-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Exceptional design work that perfectly captured our brand vision. The team's creativity and professionalism exceeded our expectations.",
                name: "Sarah Johnson",
                role: "CEO, TechStart"
              },
              {
                quote: "Outstanding results and incredible attention to detail. Our new brand identity has significantly improved our market presence.",
                name: "Michael Chen",
                role: "Marketing Director"
              },
              {
                quote: "Professional, creative, and delivered on time. The design quality is exceptional and our customers love the new look.",
                name: "Emma Rodriguez",
                role: "Founder, CreativeCo"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-card p-6 rounded-lg border border-white/10 hover:border-red-500 transition-all"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="fas fa-star text-yellow-400"
                    ></i>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action with floating animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="py-20 px-6 bg-gradient-to-tr from-black to-red-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-white"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            Ready to Transform Your Brand?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-red-100"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            Let's create something amazing together. Contact us today to discuss your project and get a custom quote.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="bg-red-800 text-white px-8 py-4 whitespace-nowrap cursor-pointer font-semibold"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white px-8 py-4 !rounded-button whitespace-nowrap cursor-pointer font-semibold"
            >
              Get Free Quote
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;