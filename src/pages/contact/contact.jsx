import Navigation from "@/components/Navigation";
import SendMail from "@/components/sendmail";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  const contactItems = [
    { icon: MapPin, label: "Visit Us", value: "Near Azadi Chowk, Lahore, Pakistan" },
    { icon: Phone, label: "Call Us", value: "+923222502232" },
    { icon: Mail, label: "Email Us", value: "hr@eaglines.co" },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-hero pt-20 relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-6xl">
            <div className="grid gap-12 lg:gap-16 items-start lg:grid-cols-1">
              <div className="space-y-12">
                <div className="font-sans">
                  <p className="text-primary text-4xl md:text-5xl font-bold leading-tight">
                    Get in Touch
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    LET'S CONNECT
                  </h1>
                  <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-sm animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    Ready to bring your vision to life? We'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactItems.map((item, index) => (
                    <div
                      key={item.label}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/40 border border-border/50 transition-all duration-300 hover:bg-secondary/60 hover:border-primary/30 animate-slide-up cursor-pointer"
                      style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                        <item.icon className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-12 w-full">
                <div
                  className="relative p-8 md:p-10 lg:p-12 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <h2 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-8">
                    SEND A MESSAGE
                  </h2>

                  <SendMail />
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border/30 text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Studio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
          <Footer />
    </>
  );
};

export default Index;
