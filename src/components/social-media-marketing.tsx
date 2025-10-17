import { motion } from "framer-motion";
import { Share2, TrendingUp, Users, BarChart, Target, MessageCircle, Heart, Eye, ThumbsUp, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";
import Navigation from "./Navigation";

const SocialMediaMarketing = () => {
  const services = [
    {
      icon: <Share2 className="w-8 h-8 text-red-500" />,
      title: "Content Strategy",
      description: "Develop compelling content that resonates with your audience and drives engagement."
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Social Management", 
      description: "Professional management of all your social media platforms for maximum reach."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-red-500" />,
      title: "Community Building",
      description: "Build and nurture engaged communities around your brand and values."
    },
    {
      icon: <BarChart className="w-8 h-8 text-red-500" />,
      title: "Analytics & Insights",
      description: "Track performance and optimize your social media strategy with detailed analytics."
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Paid Advertising",
      description: "Strategic paid campaigns to amplify your reach and target specific audiences."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: "Growth Hacking",
      description: "Innovative techniques to accelerate your social media growth and engagement."
    }
  ];

  const portfolioProjects = [
    {
      title: "Fashion Brand Campaign",
      platform: "Instagram",
      results: "+250% Engagement",
      metrics: { likes: "45K", comments: "2.3K", shares: "890" },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      title: "Tech Startup Launch",
      platform: "LinkedIn",
      results: "+180% Followers",
      metrics: { likes: "12K", comments: "580", shares: "340" },
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
    },
    {
      title: "Food Restaurant Chain",
      platform: "TikTok",
      results: "+500% Views",
      metrics: { likes: "89K", comments: "5.2K", shares: "2.1K" },
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    },
    {
      title: "Fitness Brand Growth",
      platform: "YouTube",
      results: "+320% Subscribers",
      metrics: { likes: "23K", comments: "1.8K", shares: "690" },
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      title: "E-commerce Store",
      platform: "Facebook",
      results: "+400% Sales",
      metrics: { likes: "67K", comments: "3.4K", shares: "1.5K" },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Travel Agency",
      platform: "Pinterest",
      results: "+290% Traffic",
      metrics: { likes: "34K", comments: "1.2K", shares: "780" },
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
    }
  ];

  const stats = [
    { number: "500M+", label: "Impressions Generated" },
    { number: "2.5M+", label: "Engagement Rate" },
    { number: "150+", label: "Successful Campaigns" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-r from-black via-red-800 to-black text-white overflow-hidden">
        <Navigation />
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
       
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Share2 className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
SOCIAL MEDIA MARKETING            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build your brand presence and engage with your audience across all social platforms with our data-driven strategies.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400"
          >
            Our Services
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group perspective-1000"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm h-full">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className="mx-auto mb-4 p-4 bg-red-500/10 rounded-full w-fit"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">
                      {service.description}
                    </CardDescription>
                    <div className="mt-6 text-center">
                      <Button 
                        variant="outline" 
                        className="border-red-500/50 text-red-400 hover:bg-red-500/10 group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-100"
          >
            Portfolio Showcase
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5
                }}
                className="group perspective-1000"
              >
                <Card className="bg-black/70 border-gray-800 hover:border-red-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.platform}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="text-2xl font-bold text-red-500">
                      {project.results}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-red-500" />
                        {project.metrics.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1 text-blue-400" />
                        {project.metrics.comments}
                      </div>
                      <div className="flex items-center">
                        <Share2 className="w-4 h-4 mr-1 text-green-400" />
                        {project.metrics.shares}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-red-700 hover:bg-red-600 text-white group"
                      size="sm"
                    >
                      View Case Study
                      <Eye className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
         
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text ">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let's create a social media strategy that builds your brand, engages your audience, and drives real results.
            </p>
           
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-red-500/25"
              >
                Start Your Campaign Today
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;