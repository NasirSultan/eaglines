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
  Cpu,
  Brain,
  Bot,
  Sparkles,
  Network,
  Workflow,
  MessageSquare,
  FileText,
  Image as ImageIcon,
  Mic,
  BarChart3,
  Target,
  TrendingUp,
  Award,
  Phone,  // Added missing Phone import
  MapPin  // Added MapPin for location
} from 'lucide-react';
import { SiApple, SiGoogleplay } from "react-icons/si";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from './Footer';
import Navigation from './Navigation';
import {  BookOpen, Home, MessageCircle } from "lucide-react";
const AiChatbot = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "RAG Systems",
      description: "Implement Retrieval-Augmented Generation for accurate, context-aware responses using your own data.",
      features: ["Vector Databases", "Document Retrieval", "Context Integration", "Semantic Search"],

      delay: "delay-100"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Agentic AI",
      description: "Deploy intelligent agents that autonomously perform tasks, make decisions, and interact with users.",
      features: ["Task Automation", "Decision Making", "Multi-Agent Systems", "Workflow Automation"],

      delay: "delay-200"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Generative AI",
      description: "Create content, images, and responses using cutting-edge generative AI models.",
      features: ["Content Generation", "Image Creation", "Code Generation", "Creative Writing"],
 
      delay: "delay-300"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Fine-Tuning Models",
      description: "Customize pre-trained models for your specific industry and use cases.",
      features: ["Domain Adaptation", "Custom Training", "Performance Optimization", "Model Evaluation"],

      delay: "delay-[400ms]"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with intelligent AI solutions.",
      features: ["Workflow Automation", "Data Processing", "Report Generation", "Integration"],

      delay: "delay-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Custom Chatbots",
      description: "Build intelligent conversational agents for customer support and engagement.",
      features: ["24/7 Support", "Multi-Language", "Analytics", "Human Handoff"],

      delay: "delay-[600ms]"
    }
  ];

  const platforms = [
    { name: "OpenAI", users: "GPT-4, DALL-E", icon: <Brain className="w-6 h-6" /> },
    { name: "LangChain", users: "RAG Framework", icon: <Network className="w-6 h-6" /> },
    { name: "Hugging Face", users: "Transformers", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Anthropic", users: "Claude", icon: <Bot className="w-6 h-6" /> },
    { name: "Google AI", users: "Gemini", icon: <Zap className="w-6 h-6" /> },
    { name: "Meta AI", users: "Llama", icon: <Cpu className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Chen",
      company: "TechCorp Solutions",
      text: "The RAG system they built transformed our customer support. Response accuracy increased by 85% and response time dropped by 70%.",
      rating: 5,
      delay: "delay-100"
    },
    {
      name: "Sarah Williams",
      company: "InnovateAI",
      text: "Their agentic AI solution automated 60% of our manual processes. ROI was achieved in just 3 months!",
      rating: 5,
      delay: "delay-200"
    },
    {
      name: "Michael Rodriguez",
      company: "Creative Studios",
      text: "The fine-tuned model they created for our content generation is incredible. It understands our brand voice perfectly.",
      rating: 5,
      delay: "delay-300"
    }
  ];

const portfolioProjects = [
  {
    title: "Chatbots & Image Generation",
    description: "Unlimited access to AI chatbotsand image generation (1000+ models including Midjourney, DALL-E 3).",
    image: "https://i.ibb.co/pv3Fyrf0/Screenshot-2026-02-26-014250.png",
    android: "https://play.google.com/store/apps/details?id=com.hyperspace.ai.marketplace.android&hl=en",
    ios: "https://apps.apple.com/us/app/hyperspace-ai-chatbots-art/id6469622307",
    icon: <Cpu className="w-8 h-8 text-primary" />
  },
  {
    title: "Coursiv",
    description: "AI-powered learning platform with personalized learning paths and interactive content.",
    image: "https://i.ibb.co/hh3cpS5/Screenshot-2026-02-26-014413.png",
    android: "https://play.google.com/store/apps/details?id=io.zimran.coursiv&hl=en",
    ios: "https://apps.apple.com/us/app/coursiv-ai-tools-mastery/id6478281150",
    icon: <BookOpen className="w-8 h-8 text-primary" />
  },
  {
    title: "Trotter-It",
    description: "AI digital travel journal that auto-generates recap videos from user content.",
    image: "https://i.ibb.co/NnHPST7g/Screenshot-2026-02-26-014522.png",
    android: "https://play.google.com/store/apps/details?id=com.anansi.anansi&hl=en_US",
    ios: "https://apps.apple.com/us/app/trotter-it-travel-journal-app/id6443733048",
    icon: <MapPin className="w-8 h-8 text-primary" />
  },
  {
    title: "CozyAI",
    description: "AI-powered home design app for room restyling, furniture integration, and virtual staging.",
    image: "https://i.ibb.co/nsjWLR0j/Screenshot-2026-02-26-014804.png",
    ios: "https://apps.apple.com/us/app/cozyai-ai-home-design/id6744885843?uo=2",
    icon: <Home className="w-8 h-8 text-primary" />
  },
  {
    title: "Neome Enterprise",
    description: "Conversational AI automation platform for mobile, supporting scalable chat and SaaS integration.",
    image: "https://i.ibb.co/mCC9n10N/Screenshot-2026-02-26-014912.png",
    android: "https://play.google.com/store/apps/details?id=com.neomenta.neome&hl=en",
    ios: "https://apps.apple.com/in/app/neome-enterprise-automation/id6503088429",
    icon: <MessageCircle className="w-8 h-8 text-primary" />
  },
  {
    title: "AI Content Generation Platform",
    description: "Automated marketing content creation using AI for text, image, and video outputs.",
    image: "https://i.ibb.co/GQz5fGPD/Screenshot-2026-02-26-015041.png",
    android: "https://play.google.com/store/apps/details?id=codingx.coding.programming.learn.learntocode.code.java.python.program.delevopment.it.apps.dev&hl=en",
    ios: "https://apps.apple.com/in/app/coding-x-learn-programming/id6447521430",
    icon: <Sparkles className="w-8 h-8 text-primary" />
  }
];


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-32 right-16 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navbar */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-bounce-in' : ''}`}>
            <div className="flex items-center justify-center mb-6 animate-fade-in-up">
              <Brain className="w-16 h-16 text-primary mr-4 animate-pulse-glow" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI & CHATBOTS
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              Intelligent Automation That Works
            </h2>
            <p className="text-md md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              Transform your business with cutting-edge AI solutions including RAG systems, agentic AI, generative models, and fine-tuned automation.
            </p>
          
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-card to-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "95%", label: "Accuracy Rate", icon: <Target className="w-8 h-8" /> },
              { number: "10M+", label: "API Calls/Month", icon: <Zap className="w-8 h-8" /> },
              { number: "150+", label: "AI Projects", icon: <Brain className="w-8 h-8" /> },
              { number: "85%", label: "Cost Reduction", icon: <BarChart3 className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`animate-fade-in-up hover:scale-110 transition-transform duration-300`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center animate-float" style={{ animationDelay: `${index * 1000}ms` }}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
    <section id="services" className="py-20 px-6">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
        Our <span className="text-primary">AI Services</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        Comprehensive AI solutions designed to automate, enhance, and transform your business operations.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {aiServices.map((service, index) => (
        <Card
          key={service.title}
          className={`gradient-border bg-card hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-fade-in-up ${service.delay} cursor-pointer`}
        >
          <CardContent className="p-8">
            <div className="text-primary mb-6 group-hover:animate-bounce-in group-hover:text-accent transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-3 group-hover:animate-pulse-glow" />
                  {feature}
                </li>
              ))}
            </ul>
         <Button 
  className="w-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300 group-hover:glow-red"
  onClick={() => window.location.href = '/contact'}
>
  Get Started
  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              AI <span className="text-primary">Platforms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              We work with leading AI platforms and frameworks to deliver cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`text-center p-8 bg-background rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in-up group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center group-hover:text-accent transition-colors duration-300" style={{ animationDelay: `${index * 500}ms` }}>
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{platform.name}</h3>
                <p className="text-muted-foreground text-lg">{platform.users}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
   <section id="portfolio" className="py-20 px-6">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
        Our <span className="text-primary">Portfolio</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        Explore our AI-powered applications across various industries
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioProjects.map((project, index) => (
        <Card
          key={project.title}
          className="gradient-border bg-card hover:bg-card/80 transition-all duration-500 hover:scale-105 group animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-6">
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-primary">
                {project.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-3 text-sm">
              {project.description}
            </p>
            <div className="flex gap-4">
              {project.android && (
                <a href={project.android} target="_blank" className="text-green-500 hover:text-green-700 flex items-center">
                  <SiGoogleplay className="w-6 h-6 mr-1" /> Android
                </a>
              )}
              {project.ios && (
                <a href={project.ios} target="_blank" className="text-blue-500 hover:text-blue-700 flex items-center">
                  <SiApple className="w-6 h-6 mr-1" /> iOS
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              Client <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              See how our AI solutions have transformed businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`gradient-border bg-background hover:bg-background/80 transition-all duration-500 hover:scale-105 group animate-fade-in-up ${testimonial.delay}`}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent group-hover:animate-pulse-glow" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-secondary to-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              A proven methodology for successful AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Analyze your needs and identify AI opportunities" },
              { step: "02", title: "Development", description: "Build and train custom AI models" },
              { step: "03", title: "Integration", description: "Seamlessly integrate AI into your workflow" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and improvement" }
            ].map((process, index) => (
              <div
                key={process.step}
                className={`text-center animate-fade-in-up hover:scale-105 transition-transform duration-300`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl font-bold text-primary mb-4 animate-pulse-glow">{process.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AiChatbot;