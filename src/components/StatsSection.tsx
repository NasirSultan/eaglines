import { Users, MessageCircle, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "1000+", delay: 0 },
    { icon: MessageCircle, label: "Messages Sent", value: "5000+", delay: 0.1 },
    { icon: Award, label: "Awards Won", value: "50+", delay: 0.2 },
    { icon: TrendingUp, label: "Success Rate", value: "99%", delay: 0.3 },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-secondary via-secondary to-card border border-border rounded-2xl p-6 md:p-8 text-center hover:border-primary transition-all duration-500 hover:shadow-glow">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                  
                  <div className="relative z-10 space-y-3">
                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </div>
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

export default StatsSection;
