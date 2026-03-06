'use client';

import { useState, useEffect } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { Search, BarChart2, Settings, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom'
export default function SEOPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleCaseStudyClick = () => {
    const section = document.getElementById('caseStudy');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuditClick = () => {
    window.location.href = '/contact';
  };
  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Search size={32} />,
      title: 'Keyword Research',
      description: 'Discover high-value keywords that drive targeted traffic to your website and outperform competitors.',
      features: ['Competitor Analysis', 'Search Volume Data', 'Keyword Difficulty', 'Search Intent']
    },
    {
      icon: <BarChart2 size={32} />,
      title: 'On-Page SEO',
      description: 'Optimize every element of your web pages to rank higher and attract more qualified visitors.',
      features: ['Content Optimization', 'Meta Tags', 'Header Structure', 'Internal Linking']
    },
    {
      icon: <Settings size={32} />,
      title: 'Technical SEO',
      description: 'Improve your website infrastructure for better crawling, indexing, and performance.',
      features: ['Site Speed', 'Mobile Optimization', 'Schema Markup', 'Canonicalization']
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Analytics & Reporting',
      description: 'Track performance with comprehensive analytics and data-driven insights for continuous improvement.',
      features: ['Google Analytics', 'Search Console', 'Rank Tracking', 'Conversion Metrics']
    }
  ];

  const portfolio = [
    {
      title: 'E-commerce SEO',
      category: 'E-commerce & Online Retail Optimization',
      image: 'https://www.wordstream.com/wp-content/uploads/2021/12/seo-metrics-google-search-console-ctr.png'
    },
    {
      title: 'Business SEO',
      category: 'Local & Service-Based Business SEO',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYD3d5Es6MAlntb4t8K7drgrZN08iJM8fDg&s'
    },
    {
      title: 'Company Portfolio SEO',
      category: 'Corporate & Brand Visibility SEO',
      image: 'https://i.ibb.co/WvYHSgt9/1752062210598.jpg'
    }
  ];

  const clients = [
    { name: 'Jessica Taylor', role: 'Marketing Director', company: 'RetailCorp', rating: 5, review: 'Our organic traffic increased by 450% in just 6 months. The SEO strategy was perfectly tailored to our business goals.' },
    { name: 'Robert Kim', role: 'CEO', company: 'StartupABC', rating: 5, review: 'Incredible results! We went from page 3 to top 3 rankings for our most valuable keywords.' },
    { name: 'Amanda Smith', role: 'E-commerce Manager', company: 'ShopOnline', rating: 5, review: 'The technical SEO improvements alone doubled our conversion rates. Highly recommended!' },
    { name: 'Daniel Wilson', role: 'Founder', company: 'ContentHub', rating: 5, review: 'The most data-driven SEO approach we have ever experienced. Our traffic grows every month.' }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
        {/* Dynamic Mouse Follower */}
        <div
          className="fixed w-4 h-4 bg-red-500/30 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: 'scale(1)',
          }}
        />
        <div
          className="fixed w-8 h-8 border border-red-500/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
          }}
        />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-black via-red-900 to-black">
          {/* Background with image overlay */}
          {/* Dark overlay */}

          {/* Animated elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)] animate-pulse"></div>


          {/* Hero content */}
          <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1900 delay-700 ${isLoaded ? 'translate-y-1 opacity-200' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-3 bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text ">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>S</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>E</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>O</span>
              <span className="inline-block animate-bounce ml-4" style={{ animationDelay: '0.3s' }}>S</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>E</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>R</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>V</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>I</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>C</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>E</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1s' }}>S</span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Boost your online visibility and drive sustainable organic traffic with our data-driven SEO strategies that deliver measurable results.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              <button
                onClick={handleCaseStudyClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-rotate-1 whitespace-nowrap cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">View Case Studies</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute top-0 -left-full w-full h-full bg-white/20 transform skew-x-12 group-hover:left-full transition-all duration-700"></div>
              </button>

              <button
                onClick={handleAuditClick}
                className="group relative px-8 py-4 border-2 border-red-600 hover:bg-red-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:rotate-1 whitespace-nowrap cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Free SEO Audit</span>
                <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
              </button>

            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500/50 rounded-full animate-ping delay-500"></div>
            <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-red-400/40 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-600/60 rounded-full animate-pulse delay-300"></div>
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-16 h-16 border-2 border-red-500/20 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-20 right-20 w-12 h-12 bg-red-500/10 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-br from-red-500/20 to-transparent transform rotate-45 animate-pulse delay-500"></div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 relative bg-gradient-to-br from-black via-red-900 to-black">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text">
                OUR SEO SERVICES
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-red-200 transition-colors duration-500 cursor-default">
                Comprehensive search engine optimization strategies to grow your organic traffic and revenue
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-red-600/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30 cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="absolute top-0 left-0 w-0 h-0 border-l-4 border-t-4 border-red-500 group-hover:border-red-500/60 border-transparent rounded-tl-2xl transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-r-4 border-b-4 border-red-500 group-hover:border-red-500/60 border-transparent rounded-br-2xl transition-all duration-500 delay-100 group-hover:w-8 group-hover:h-8"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 text-white bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/50">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-300 transition-colors duration-300 group-hover:animate-pulse">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm border border-red-600/30 hover:bg-red-600/40 hover:scale-105 hover:border-red-500/60 transition-all duration-300 cursor-pointer"
                          style={{ transitionDelay: `${fIndex * 100}ms` }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-red-500/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-red-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-400"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-red-600/5 rounded-full blur-2xl animate-bounce delay-2000"></div>
          </div>
        </section>

        {/* Portfolio Section */}


        <section id="caseStudy" className="py-20 px-6 bg-gradient-to-bl from-black via-red-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                SEO CASE STUDIES
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-red-200 transition-colors duration-500 cursor-default">
                Real results we've achieved for our clients across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((project, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30 cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600/0 via-red-500/0 to-red-400/0 group-hover:from-red-600/50 group-hover:via-red-500/50 group-hover:to-red-400/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover object-top group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6 relative text-center">
                      <span className="text-red-400 text-sm font-semibold mb-2 block group-hover:text-red-300 group-hover:animate-pulse transition-all duration-300">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300 group-hover:animate-pulse">
                        {project.title}
                      </h3>

                      <div className="mt-4">
                        <Link
                          to="/Casestudy"
                          onClick={() => localStorage.setItem("caseTitle", project.title)}
                          className="inline-block px-6 py-2 mt-2 border-2 border-red-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                          View Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 relative   bg-gradient-to-br from-black via-red-900 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                CLIENT SUCCESS STORIES
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-red-200 transition-colors duration-500 cursor-default">
                What our clients say about our SEO services and results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-red-600/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30 cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute top-4 left-4 text-6xl text-red-500/20 group-hover:text-red-500/40 group-hover:animate-pulse transition-all duration-500">"</div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      {[...Array(client.rating)].map((_, i) => (
                        <span key={i} className="text-red-500 text-lg mr-1 group-hover:animate-pulse transition-all duration-300" style={{ animationDelay: `${i * 100}ms` }}>★</span>
                      ))}
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed italic group-hover:text-white transition-colors duration-300">
                      "{client.review}"
                    </p>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/50">
                        <span className="text-white font-bold text-lg group-hover:animate-pulse">
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-red-300 transition-colors duration-300">{client.name}</h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">{client.role} at {client.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-0 h-0 border-t-4 border-r-4 border-red-500 group-hover:border-red-500/60 border-transparent rounded-tr-2xl transition-all duration-500 group-hover:w-6 group-hover:h-6"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-b-4 border-l-4 border-red-500 group-hover:border-red-500/60 border-transparent rounded-bl-2xl transition-all duration-500 delay-200 group-hover:w-6 group-hover:h-6"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-16 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            <div className="absolute bottom-1/4 -right-16 w-24 h-24 bg-red-600/5 rounded-full blur-xl animate-bounce delay-1500"></div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6  bg-gradient-to-bl from-black via-red-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                OUR SEO PROCESS
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-red-200 transition-colors duration-500 cursor-default">
                A proven methodology that delivers consistent results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { number: '01', title: 'Discovery', desc: 'Comprehensive website audit and competitive analysis' },
                { number: '02', title: 'Strategy', desc: 'Custom SEO plan tailored to your business goals' },
                { number: '03', title: 'Implementation', desc: 'Technical, on-page and content optimizations' },
                { number: '04', title: 'Growth', desc: 'Continuous monitoring and performance improvements' }
              ].map((step, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800 hover:border-red-600/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30 cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-red-500 mb-4 group-hover:text-red-400 group-hover:animate-pulse transition-all duration-300">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-red-500/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
                </div>
              ))}
            </div>

            {/* <div className="relative group">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-125 hover:-rotate-3 hover:translate-y-2 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-red-500/50 group-hover:animate-pulse relative overflow-hidden">
                <span className="relative z-10">Learn About Our Process</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute top-0 -left-full w-full h-full bg-white/30 transform skew-x-12 group-hover:left-full transition-all duration-700"></div>
              </button>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 group-hover:animate-ping"></div>
              <div className="absolute -inset-4 border-2 border-red-500/0 group-hover:border-red-500/30 rounded-full transition-all duration-700 group-hover:animate-spin"></div>
            </div> */}
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-red-600/5 rounded-full blur-2xl animate-bounce delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500/30 rounded-full animate-ping delay-1500"></div>
            <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-red-400/25 transform rotate-45 animate-pulse delay-1800"></div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6   bg-gradient-to-br from-black via-red-900 to-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
              READY TO GROW YOUR ORGANIC TRAFFIC?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a free SEO audit and discover how we can improve your search rankings and drive more qualified visitors to your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-rotate-1 whitespace-nowrap cursor-pointer overflow-hidden inline-block"
              >
                <span className="relative z-10">Get Free Audit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute top-0 -left-full w-full h-full bg-white/30 transform skew-x-12 group-hover:left-full transition-all duration-700"></div>
              </Link>

              <Link
                to="/team"
                className="group relative px-8 py-4 border-2 border-red-600 hover:bg-red-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:rotate-2 hover:-translate-y-1 whitespace-nowrap cursor-pointer overflow-hidden inline-block"
              >
                <span className="relative z-10">Contact Our Team</span>
                <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute -inset-2 border-2 border-red-500/0 group-hover:border-red-500/40 rounded-full transition-all duration-500 group-hover:animate-spin"></div>
              </Link>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full animate-bounce delay-1000 hover:animate-spin hover:scale-150 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-600/40 rounded-full animate-pulse delay-500 hover:animate-bounce hover:scale-200 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute top-1/4 -right-8 w-4 h-4 bg-red-400/50 rounded-full animate-ping delay-700 hover:animate-spin hover:scale-300 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute bottom-1/3 -left-6 w-5 h-5 bg-red-500/45 transform rotate-45 animate-pulse delay-900 hover:animate-bounce hover:scale-150 hover:rotate-180 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute top-1/2 -right-6 w-3 h-3 bg-red-600/60 rounded-full animate-bounce delay-1200 hover:animate-ping hover:scale-200 transition-all duration-500 cursor-pointer"></div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-2xl animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-400/3 rounded-full blur-xl animate-pulse delay-500"></div>

            <div className="absolute top-20 left-20 w-3 h-3 bg-red-500/20 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-40 right-40 w-2 h-2 bg-red-400/30 rounded-full animate-ping delay-1500"></div>
            <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-red-600/15 transform rotate-45 animate-pulse delay-2000"></div>
            <div className="absolute bottom-40 right-20 w-2 h-2 bg-red-500/25 rounded-full animate-bounce delay-2500"></div>
            <div className="absolute top-1/3 left-10 w-3 h-3 bg-red-400/20 rounded-full animate-ping delay-3000"></div>
            <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-red-600/30 rounded-full animate-pulse delay-3500"></div>
          </div>
        </section>

        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
            }
            50% {
              box-shadow: 0 0 40px rgba(239, 68, 68, 0.8);
            }
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
}