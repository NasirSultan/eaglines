import React, { useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant, slideIn } from '../utils/motion';
import { Badge } from 'lucide-react';

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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer()}
        className="py-16 px-6 bg-gradient-to-br from-black to-red-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Design Expertise</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              We transform ideas into compelling visual experiences that resonate with your audience and elevate your brand presence across all platforms and mediums.
            </p>
          </motion.div>

          {/* Animated Service Tabs */}
          <motion.div 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="flex justify-center mb-12"
          >
            <div className="flex bg-gray-700 rounded-lg p-1">
              {['overview', 'process', 'portfolio'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer ${
                    activeTab === tab 
                      ? 'bg-red-600 text-white shadow-lg shadow-red-500/30' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Animated Service Details Grid */}
          {activeTab === 'overview' && (
            <motion.div 
              variants={staggerContainer()}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: 'fa-palette',
                  title: 'Logo Design',
                  description: 'Distinctive brand marks that capture your company\'s identity and values through memorable visual symbols.',
                  items: ['Brand Analysis', 'Concept Development', 'Multiple Variations', 'File Formats']
                },
                {
                  icon: 'fa-layer-group',
                  title: 'Brand Identity',
                  description: 'Comprehensive visual systems that ensure consistent brand representation across all touchpoints and platforms.',
                  items: ['Style Guides', 'Color Palettes', 'Typography', 'Brand Guidelines']
                },
                {
                  icon: 'fa-print',
                  title: 'Print Design',
                  description: 'High-quality print materials that make lasting impressions through professional design and attention to detail.',
                  items: ['Business Cards', 'Brochures', 'Packaging', 'Marketing Materials']
                },
                {
                  icon: 'fa-desktop',
                  title: 'Digital Graphics',
                  description: 'Engaging digital visuals optimized for web, social media, and digital marketing campaigns that drive results.',
                  items: ['Social Media Graphics', 'Web Banners', 'Infographics', 'Digital Ads']
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-[15deg] transition-transform">
                    <i className={`fas ${service.icon} text-white text-2xl`}></i>
                  </div>
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
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Process Tab with animated steps */}
          {activeTab === 'process' && (
            <motion.div 
              variants={staggerContainer()}
              className="max-w-4xl mx-auto"
            >
              {[
                {
                  step: '1',
                  title: 'Discovery & Research',
                  description: 'We begin by understanding your brand, target audience, and project goals through comprehensive research and strategic planning.'
                },
                {
                  step: '2',
                  title: 'Concept Development',
                  description: 'Our creative team develops multiple design concepts that align with your vision and brand objectives.'
                },
                {
                  step: '3',
                  title: 'Design & Refinement',
                  description: 'We create detailed designs and work closely with you to refine and perfect every element until it meets your expectations.'
                },
                {
                  step: '4',
                  title: 'Delivery & Support',
                  description: 'Final designs are delivered in all required formats with comprehensive guidelines and ongoing support.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('right', 'spring', index * 0.2, 1)}
                  className="flex items-start space-x-6 mb-8 last:mb-0"
                >
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Portfolio Tab with animated items */}
          {activeTab === 'portfolio' && (
            <motion.div 
              variants={staggerContainer()}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Tech Startup Branding',
                  description: 'Complete brand identity for innovative technology company',
                  query: 'professional%20logo%20design%20showcase%20modern%20minimalist%20brand%20identity%20creative%20typography%20clean%20white%20background%20studio%20lighting%20high%20quality%20presentation'
                },
                {
                  title: 'Corporate Materials',
                  description: 'Professional print collateral for Fortune 500 company',
                  query: 'elegant%20print%20design%20brochure%20layout%20professional%20business%20materials%20clean%20typography%20modern%20layout%20design%20studio%20photography%20white%20background%20premium%20quality'
                },
                {
                  title: 'Social Media Campaign',
                  description: 'Engaging digital graphics for viral marketing campaign',
                  query: 'digital%20graphics%20social%20media%20design%20vibrant%20colors%20modern%20layout%20creative%20visual%20elements%20professional%20presentation%20clean%20background%20contemporary%20style'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 'tween', index * 0.2, 1)}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-red-500 transition-all cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={`https://readdy.ai/api/search-image?query=${item.query}&width=400&height=300&seq=portfolio-${index+1}&orientation=landscape`}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
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
                price: '$299',
                popular: false,
                features: ['Logo Design', 'Business Card', '2 Revisions', 'File Formats'],
                buttonText: 'Get Started'
              },
              {
                title: 'Standard',
                price: '$599',
                popular: true,
                features: ['Complete Brand Identity', 'Print Materials', '5 Revisions', 'Brand Guidelines'],
                buttonText: 'Get Started'
              },
              {
                title: 'Premium',
                price: '$999',
                popular: false,
                features: ['Everything in Standard', 'Digital Graphics', 'Unlimited Revisions', 'Priority Support'],
                buttonText: 'Get Started'
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1 + 0.2, 1)}
                whileHover={{ y: -10 }}
                className={`bg-gray-800 p-8 rounded-lg border ${plan.popular ? 'border-2 border-red-500' : 'border-gray-700'} relative`}
              >
                {plan.popular && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm"
                  >
                    Popular
                  </motion.div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-white">{plan.title}</h3>
                <div className="text-4xl font-bold mb-6 text-red-400 animate-bounce">{plan.price}</div>
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
                  className={`w-full py-3 !rounded-button whitespace-nowrap cursor-pointer font-semibold ${
                    plan.popular 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Client Testimonials with staggered animations */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer()}
        className="py-16 px-6 bg-gradient-to-br from-black to-red-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeIn('up', 'tween', 0.1, 1)}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">What Our Clients Say</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer()}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
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
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', index * 0.2, 1)}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 p-6 rounded-lg hover:shadow-lg hover:shadow-red-500/10 transition-all"
              >
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <motion.i 
                      key={star}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: star * 0.1 }}
                      className="fas fa-star text-yellow-400"
                    ></motion.i>
                  ))}
                </div>
                <motion.p 
                  className="text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  "{testimonial.quote}"
                </motion.p>
                <div className="flex items-center">
                  <motion.div 
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ delay: 0.8, type: 'spring' }}
                  >
                    <i className="fas fa-user text-white"></i>
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

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
              className="bg-white text-red-500 px-8 py-4 !rounded-button whitespace-nowrap cursor-pointer font-semibold"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
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