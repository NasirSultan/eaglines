import { Code, Palette, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful interfaces that users love to interact with",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast applications optimized for speed",
      gradient: "from-primary/20 to-primary/5",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-border rounded-2xl p-6 h-full hover:border-primary transition-all duration-500 hover:shadow-glow`}>
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                  
                  <div className="relative z-10 space-y-4">
                    {/* Icon with ping animation */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="absolute inset-0 w-16 h-16 bg-primary/30 rounded-xl animate-ping-slow group-hover:animate-none"></div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
