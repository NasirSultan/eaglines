import React, { useState, useEffect } from 'react';
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap,
  Github,
  Linkedin,
  Mail,
  Download,
  Star,
  Trophy,
  Users,
  Coffee,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Play,
  Monitor,
  Layers,
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from './Footer';
import Navigation from './Navigation';

const AiChatbot = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const portfolioBoxes = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
      projects: 25,
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      projects: 18,
      gradient: "from-accent to-primary-glow"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      technologies: ["Figma", "Adobe XD", "Sketch", "Tailwind"],
      projects: 32,
      gradient: "from-primary-glow to-accent"
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable server architectures and APIs",
      technologies: ["Express", "PostgreSQL", "Redis", "Docker"],
      projects: 20,
      gradient: "from-primary-dark to-primary"
    },
    {
      icon: Globe,
      title: "E-Commerce",
      description: "Complete online store solutions",
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      projects: 15,
      gradient: "from-accent to-primary-dark"
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Intelligent automation solutions",
      technologies: ["OpenAI", "TensorFlow", "Python", "FastAPI"],
      projects: 12,
      gradient: "from-primary to-accent"
    }
  ];

  const achievements = [
    { icon: Trophy, label: "Awards Won", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Coffee, label: "Projects Completed", value: "150+" },
    { icon: Star, label: "5-Star Reviews", value: "95%" }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Angular",
    "Node.js", "Python", "PHP", "Laravel", "Express", "MongoDB",
    "PostgreSQL", "MySQL", "Redis", "Docker", "AWS", "Azure",
    "Figma", "Adobe XD", "Photoshop", "Illustrator", "Tailwind CSS", "SASS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-800 to-black text-foreground overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-black via-black to-red-800 ">
          <div className="text-center max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-glow">
                AI &
                <br />
                <span className="text-primary animate-bounce-in">Chatbots</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Intelligent automation solutions that enhance customer experience and streamline operations.
                Specializing in AI integration, chatbot development, and process automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark shadow-glow hover:shadow-intense transition-all duration-300 group px-8 py-4"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow px-8 py-4"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-gradient-to-br from-black via-red-800 to-black ">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-slide-up">
              About Me
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate full-stack developer with over 5 years of experience creating
                  innovative digital solutions. My expertise spans from crafting beautiful user
                  interfaces to building robust backend systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I specialize in modern web technologies, mobile app development, and AI integration.
                  My goal is to transform ideas into reality through clean, efficient, and scalable code.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-card rounded-lg border border-border hover-glow animate-scale-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <achievement.icon className="w-8 h-8 mx-auto mb-2 text-primary animate-glow" />
                      <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-float">
                <div className="w-full h-96 bg-gradient-primary rounded-2xl shadow-intense relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Let's Build Something Amazing
                    </h3>
                    <p className="text-white/80">
                      Ready to bring your vision to life
                    </p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <Cpu className="w-12 h-12 text-white/60 animate-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-6 bg-gradient-to-bl from-black via-red-800 to-black ">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-slide-up">
              My Portfolio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioBoxes.map((box, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border border-border hover-glow animate-scale-in group cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${box.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <box.icon className="w-12 h-12 text-primary  group-hover:scale-110 transition-transform duration-300" />
                      <Badge variant="secondary" className="bg-primary/10  text-primary border-primary/20">
                        {box.projects} Projects
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {box.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {box.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {box.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full text-primary hover:bg-primary hover:text-primary-foreground group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      View Projects
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-gradient-to-br from-black via-red-800 to-black ">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-slide-up">
              Skills & Technologies
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold mb-8 text-primary">Technical Expertise</h3>
                <div className="space-y-6">
                  {[
                    { name: "Frontend Development", level: 95 },
                    { name: "Backend Development", level: 90 },
                    { name: "Mobile Development", level: 85 },
                    { name: "UI/UX Design", level: 88 },
                    { name: "Database Management", level: 92 },
                    { name: "DevOps & Cloud", level: 80 }
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-black to-red-700 animate-glow transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold mb-8 text-primary">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm py-2 px-4 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105 animate-bounce-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-bl from-black via-red-800 to-black ">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-bold mb-8 gradient-text animate-slide-up">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in">
              Ready to bring your next project to life? Let's discuss how we can create
              something amazing together.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Mail, label: "Email", value: "hello@portfolio.com", link: "mailto:hello@portfolio.com" },
                { icon: Github, label: "GitHub", value: "github.com/portfolio", link: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/portfolio", link: "https://linkedin.com" }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover-glow animate-scale-in group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <contact.icon className="w-12 h-12 text-primary mb-4  group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg mb-2">{contact.label}</h3>
                  <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors duration-300">
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark shadow-glow hover:shadow-intense transition-all duration-300 px-8 py-4"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow px-8 py-4"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AiChatbot;