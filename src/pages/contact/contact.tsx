import Footer from "@/components/Footer";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import ContactInfo from "@/components/ContactInfo";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import { MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Particles Background */}
      <ParticlesBackground />

      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 bg-[image:var(--gradient-mesh)] opacity-50 pointer-events-none"></div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] animate-glow-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20 space-y-8"
          >
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary-glow to-primary rounded-3xl flex items-center justify-center shadow-glow animate-glow-pulse">
                  <MessageCircle className="w-12 h-12 text-primary-foreground" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-primary animate-bounce-slow" />
              </div>
            </motion.div>

            {/* Title with gradient animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                Let's Create
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-glow via-primary to-foreground bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                Something Amazing
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Transform your ideas into reality. We're here to bring your vision to life
              with cutting-edge design and development.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            ></motion.div>
          </motion.div>

          {/* Stats Section */}
          <StatsSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Multiple ways to reach us
              </p>
            </div>
            <ContactInfo />
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Glow effect behind form */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl -z-10 animate-glow-pulse"></div>
              
              <div className="bg-gradient-to-br from-card via-card/95 to-secondary backdrop-blur-xl border border-border rounded-3xl p-8 md:p-12 shadow-elegant relative overflow-hidden">
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer bg-[length:1000px_100%] pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-3">
                      Send us a Message
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>
                  <EnhancedContactForm />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative bottom section */}
      <section className="py-20 bg-gradient-to-b from-background via-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground text-lg font-semibold rounded-xl shadow-glow hover:shadow-[0_0_60px_hsl(0_84%_60%/0.7)] transition-all duration-500"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
