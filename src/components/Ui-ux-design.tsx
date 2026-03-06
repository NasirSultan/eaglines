
'use client';

import { useState, useEffect } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { Figma, Monitor, Smartphone } from "lucide-react";
import pic9 from "./pi-9.png";
import pic10 from "./pi-10.png";
import pic11 from "./pi-11.png";
import pic12 from "./pi-12.png";
import pic13 from "./pi-13.png";
import pic14 from "./pi-14.png";


export default function UIUXPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


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
      text: '1',
      title: 'User Interface Design',
      description: 'Creating visually stunning and intuitive interfaces that captivate users and enhance their digital experience.',
      features: ['Visual Design', 'Color Theory', 'Typography', 'titleography']
    },
    {
      text: '2',
      title: 'User Experience Research',
      description: 'Deep understanding of user behavior and needs through comprehensive research and testing methodologies.',
      features: ['User Research', 'Persona Development', 'Journey Mapping', 'Usability Testing']
    },
    {
      text: '3',
      title: 'Mobile App Design',
      description: 'Designing seamless mobile experiences that work flawlessly across all devices and platforms.',
      features: ['iOS Design', 'Android Design', 'Responsive Design', 'Touch Interactions']
    },
    {
      text: '4',
      title: 'Wireframing & Prototyping',
      description: 'Building interactive prototypes and wireframes to validate concepts before development.',
      features: ['Low-fi Wireframes', 'High-fi Prototypes', 'Interactive Demos', 'Design Systems']
    }
  ];

const portfolio = [
  {
    title: "Pubbli - Mobile App Design Project",
    category: "Mobile App",
    image: pic9,
    figmaWeb: "https:",
    figmaDesktop: null,
    figmaMobile: "https://www.figma.com/design/ohMTU2SeVzSJuuCkKRCpcx/Pubblie--Copy-?node-id=2109-16894&p=f&t=6hmlbMDBTZUWUKNx-0",
  },
  {
    title: "Inspirational Quote – Tony Robbins Experience",
    category: "Game UI/UX",
    image: pic10,
    figmaWeb: "null",
    figmaDesktop: "https://www.figma.com/design/sSBDzpW3vGRBeqllMGSE2r/Untitled--Copy-?node-id=135-68962&p=f&t=tTH476PPLMCEwtJZ-0",
    figmaMobile: null,
  },
  {
    title: "ArtMatch – Report a Concern Feature",
    category: "Art App",
    image: pic11,
    figmaWeb: "https://www.figma.com/design/Hh0CTSwOWqvUuEbqVllJR7/Artmatch--Copy-?node-id=195-936&t=xbY27oQX3JbV8mmM-0",
    figmaDesktop: null,
    figmaMobile: "https://www.figma.com/design/Hh0CTSwOWqvUuEbqVllJR7/Artmatch--Copy-?node-id=195-936&t=xbY27oQX3JbV8mmM-0",
  },
  {
    title: "Clique for Pets Mobile Application Design",
    category: "iOS Mobile App",
    image: pic12,
    figmaWeb: "https",
    figmaDesktop: null,
    figmaMobile: "https://www.figma.com/design/dAGsLDJzBiyLWAYP7lrjet/Clique--Copy-?node-id=75-864&t=8NNwO1U1X4W4VaTm-0https://www.figma.com/design/dAGsLDJzBiyLWAYP7lrjet/Clique--Copy-?node-id=75-864&t=8NNwO1U1X4W4VaTm-0",
  },
  {
    title: "Start Cooking – Join the Community App",
    category: "Mobile App",
    image: pic13,
    figmaWeb: "https",
    figmaDesktop: null,
    figmaMobile: "https://www.figma.com/design/ogpeOZ4YjbVCRbSHQMLMoN/Chefio---Recipe-App--Copy-?node-id=156-0&p=f&t=FEQBQIoukD2mZETB-0",
  },
  {
    title: "Start Cooking – Join the Community Platform",
    category: "Mobile App",
    image: pic14,
    figmaWeb: "https",
    figmaDesktop: "https://www.figma.com/design/RXCsKSDeiXgxtjkgCa2B98/Card-Craft-Manufacturer?node-id=1810-27161&t=fadzNrjM0OvxMupA-0",
    figmaMobile: null,
  },
];

  const clients = [
    { name: 'Sarah Johnson', role: 'Product Manager', company: 'TechCorp', rating: 5, review: 'Exceptional UI/UX design that transformed our user engagement by 300%. The attention to detail is remarkable.' },
    { name: 'Michael Chen', role: 'CEO', company: 'StartupXYZ', rating: 5, review: 'Outstanding work! The design perfectly captured our vision and exceeded all expectations.' },
    { name: 'Emily Davis', role: 'Marketing Director', company: 'GrowthCo', rating: 5, review: 'Professional, creative, and delivered on time. Our conversion rates improved significantly.' },
    { name: 'David Wilson', role: 'Founder', company: 'InnovateLab', rating: 5, review: 'The best UI/UX designer we have worked with. Highly recommended for any project.' }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-bl from-black to-red-700 text-white overflow-hidden">
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

        {/* Hero Section with Enhanced Animations */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black transition-all duration-2000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)] animate-pulse"></div>
          </div>

          <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1900 delay-700 ${isLoaded ? 'translate-y-1 opacity-200' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-3 bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text  ">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>U</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>I</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>/</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>U</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>X</span>
              <span className="inline-block animate-bounce ml-4" style={{ animationDelay: '0.5s' }}>D</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>e</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>s</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>i</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>g</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1s' }}>n</span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Crafting exceptional digital experiences through innovative design, user research, and cutting-edge interface solutions that drive engagement and conversions.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button
  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
  className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-rotate-1 whitespace-nowrap cursor-pointer overflow-hidden"
>
  <span className="relative z-10">View Portfolio</span>
  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
  <div className="absolute top-0 -left-full w-full h-full bg-white/20 transform skew-x-12 group-hover:left-full transition-all duration-700"></div>
</button>
              <button
  onClick={() => window.location.href = '/contact'}
  className="group relative px-8 py-4 border-2 border-red-600 hover:bg-red-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:rotate-1 whitespace-nowrap cursor-pointer overflow-hidden"
>
  <span className="relative z-10">Get Quote</span>
  <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
</button>
            </div>
          </div>

          {/* Enhanced Animated Background Elements */}
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


        <section className="py-20 px-6 relative  bg-gradient-to-bl from-black via-red-900/20 to-black">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                <span className="inline-block hover:animate-pulse hover:scale-110 transition-all duration-300 cursor-default">OUR UI/UX SERVICES</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-red-200 transition-colors duration-500 cursor-default">
                Comprehensive design solutions that transform ideas into exceptional user experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-red-600/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30 cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Animated Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Animated Corner Accents */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-l-4 border-t-4 border-red-500 group-hover:border-red-500/60 border-transparent rounded-tl-2xl transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-r-4 border-b-4 border-red-500 group-hover:border-red-500/60 border-transparent rounded-br-2xl transition-all duration-500 delay-100 group-hover:w-8 group-hover:h-8"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 text-white bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/50">
                      <i className="text-2xl text-white group-hover:animate-pulse" >{service.text}</i>
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

                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-red-500/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-red-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-400"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Background Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-red-600/5 rounded-full blur-2xl animate-bounce delay-2000"></div>
          </div>
        </section>

        {/* Portfolio Section with Advanced Hover Effects */}
<section id="portfolio" className="py-20 px-6 bg-gradient-to-tl from-black via-red-900/20 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                <span className="inline-block hover:animate-pulse hover:scale-110 transition-all duration-300 cursor-default">FEATURED PORTFOLIO</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-red-200 transition-colors duration-500 cursor-default">
                Showcase of our most impactful UI/UX design projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((project, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30 cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Card Image and Animations */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 relative">
                    <span className="text-red-400 text-sm font-semibold mb-2 block group-hover:text-red-300 group-hover:animate-pulse transition-all duration-300">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300 group-hover:animate-pulse">
                      {project.title}
                    </h3>

                    {/* Figma Icons (inside map, so project is defined) */}
                    <div className="flex  justify-around items-center  mt-4 space-x-4">
                      {project.figmaWeb ? (
                        <a
  href={project.figmaWeb}
  title="Figma Web"
  className="text-red-400 hover:text-red-300 transition cursor-not-allowed"
  onClick={(e) => e.preventDefault()} // prevents redirect
>
  <Figma className="w-5 h-5" />
</a>

                      ) : (
                        <Figma className="w-5 h-5 text-gray-600 cursor-not-allowed" />
                      )}

                      {project.figmaDesktop ? (
                        <a
                          href={project.figmaDesktop}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Figma Desktop App"
                          className="text-red-400 hover:text-red-300 transition"
                        >
                          <Monitor className="w-5 h-5" />
                        </a>
                      ) : (
                        <Monitor className="w-5 h-5 text-gray-600 cursor-not-allowed" />
                      )}

                      {project.figmaMobile ? (
                        <a
                          href={project.figmaMobile}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Figma Mobile App"
                          className="text-red-400 hover:text-red-300 transition"
                        >
                          <Smartphone className="w-5 h-5" />
                        </a>
                      ) : (
                        <Smartphone className="w-5 h-5 text-gray-600 cursor-not-allowed" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>


            {/* <div className="text-center mt-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:rotate-1 whitespace-nowrap cursor-pointer overflow-hidden">
                <span className="relative z-10">View All Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                <div className="absolute top-0 -left-full w-full h-full bg-white/20 transform skew-x-12 group-hover:left-full transition-all duration-700"></div>
              </button>
            </div> */}
          </div>

          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-10 w-6 h-6 bg-red-500/10 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-1/3 right-10 w-4 h-4 bg-red-400/15 rounded-full animate-pulse delay-1500"></div>
            <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-red-600/20 rounded-full animate-ping delay-2000"></div>
          </div>
        </section>

        {/* Happy Clients Section with Enhanced Animations */}
     <section className="py-20 px-6 relative bg-gradient-to-bl from-black via-red-900/20 to-black">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
     <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
  HAPPY CLIENTS
</h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-white transition-colors duration-500 cursor-default">
        What our clients say about our UI/UX design work
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
                <i
                  key={i}
                  className="ri-star-fill text-red-500 text-lg mr-1 group-hover:animate-pulse transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                ></i>
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
                <h4 className="font-bold text-white group-hover:text-white transition-colors duration-300">
                  {client.name}
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                  {client.role} at {client.company}
                </p>
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

        {/* About Section with Maximum Animations */}
        <section className="py-20 px-6  bg-gradient-to-tl from-black via-red-900/20 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-2000 ease-in-out delay-500 ${isLoaded ? 'translate-x-4 opacity-100' : '-translate-x-20 opacity-0'}`}>

                <h2
                  className="text-4xl md:text-5xl  font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-500 bg-clip-text text-transparent "


                >
                  ABOUT OUR UI/UX DESIGN
                </h2>             <div className="relative overflow-hidden group cursor-pointer">
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed transform transition-all duration-700 group-hover:translate-x-2 group-hover:text-red-200 group-hover:scale-105">
                    We are passionate UI/UX designers dedicated to creating exceptional digital experiences that drive business growth and user satisfaction.
                  </p>
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-top"></div>
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-red-500/0 group-hover:bg-red-500/60 rounded-full transition-all duration-500 group-hover:animate-ping"></div>
                </div>
                <div className="relative overflow-hidden group cursor-pointer">
                  <p className="text-gray-400 mb-8 leading-relaxed transform transition-all duration-700 group-hover:translate-x-2 group-hover:text-red-300 group-hover:scale-105">
                    With years of experience in user-centered design, we combine creativity with data-driven insights to deliver solutions that not only look stunning but also perform exceptionally well in real-world scenarios.
                  </p>
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-400 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 delay-300 origin-top"></div>
                  <div className="absolute -left-2 bottom-0 w-3 h-3 bg-red-400/0 group-hover:bg-red-400/70 rounded-full transition-all duration-500 delay-300 group-hover:animate-bounce"></div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="group text-center transform transition-all duration-500 hover:-translate-y-6 hover:scale-125 hover:rotate-3 cursor-pointer relative">
                    <div className="relative">
                      <div className="text-3xl font-bold text-red-200 mb-2 group-hover:text-red-400 transition-all duration-300  group-hover:animate-pulse">150+</div>
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-ping"></div>
                      <div className="absolute -inset-2 border-2 border-red-500/0 group-hover:border-red-500/40 rounded-full transition-all duration-500 group-hover:animate-spin"></div>
                    </div>
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:animate-pulse">Projects Completed</div>
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-red-500/0 group-hover:bg-red-500/70 rounded-full transition-all duration-500 delay-200 group-hover:animate-ping"></div>
                  </div>
                  <div className="group text-center transform transition-all duration-500 delay-100 hover:-translate-y-6 hover:scale-125 hover:-rotate-3 cursor-pointer relative">
                    <div className="relative">
                      <div className="text-3xl font-bold text-red-200 mb-2 group-hover:text-red-400 transition-all duration-300  group-hover:animate-pulse delay-100">98%</div>
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 group-hover:animate-ping"></div>
                      <div className="absolute -inset-2 border-2 border-red-500/0 group-hover:border-red-500/40 rounded-full transition-all duration-500 delay-100 group-hover:animate-spin"></div>
                    </div>
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:animate-pulse">Client Satisfaction</div>
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-red-500/0 group-hover:bg-red-500/70 rounded-full transition-all duration-500 delay-300 group-hover:animate-bounce"></div>
                  </div>
                  <div className="group text-center transform transition-all duration-500 delay-200 hover:-translate-y-6 hover:scale-125 hover:rotate-2 cursor-pointer relative">
                    <div className="relative">
                      <div className="text-3xl font-bold text-red-200 mb-2 group-hover:text-red-400 transition-all duration-300  group-hover:animate-pulse delay-200">5+</div>
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 group-hover:animate-ping"></div>
                      <div className="absolute -inset-2 border-2 border-red-500/0 group-hover:border-red-500/40 rounded-full transition-all duration-500 delay-200 group-hover:animate-spin"></div>
                    </div>
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:animate-pulse">Years Experience</div>
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-red-400/0 group-hover:bg-red-400/60 transform rotate-45 transition-all duration-500 delay-400"></div>
                  </div>
                  <div className="group text-center transform transition-all duration-500 delay-300 hover:-translate-y-6 hover:scale-125 hover:-rotate-2 cursor-pointer relative">
                    <div className="relative">
                      <div className="text-3xl font-bold text-red-200 mb-2 group-hover:text-red-400 transition-all duration-300  group-hover:animate-pulse delay-300">24/7</div>
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 group-hover:animate-ping"></div>
                      <div className="absolute -inset-2 border-2 border-red-500/0 group-hover:border-red-500/40 rounded-full transition-all duration-500 delay-300 group-hover:animate-spin"></div>
                    </div>
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:animate-pulse">Support Available</div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-red-500/0 group-hover:bg-red-500/80 rounded-full transition-all duration-500 delay-500 group-hover:animate-pulse"></div>
                  </div>
                </div>

                {/* <div className="relative group">
                  <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-125 hover:-rotate-3 hover:translate-y-2 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-red-500/50 group-hover:animate-pulse relative overflow-hidden">
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="absolute top-0 -left-full w-full h-full bg-white/30 transform skew-x-12 group-hover:left-full transition-all duration-700"></div>
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 group-hover:animate-ping"></div>
                  <div className="absolute -inset-4 border-2 border-red-500/0 group-hover:border-red-500/30 rounded-full transition-all duration-700 group-hover:animate-spin"></div>
                </div> */}
              </div>

              <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                <div className="group relative overflow-hidden rounded-2xl transform transition-all duration-700 hover:scale-110 hover:rotate-6 hover:-translate-y-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20UI%2FUX%20designer%20workspace%20with%20modern%20computer%20setup%2C%20design%20tools%2C%20wireframes%2C%20sketches%2C%20red%20and%20black%20color%20scheme%2C%20creative%20studio%20environment%2C%20clean%20minimal%20background%2C%20design%20process%20visualization&width=600&height=400&seq=about-uiux&orientation=landscape"
                    alt="UI/UX Design Process"
                    className="w-full rounded-2xl object-cover object-top transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl group-hover:from-red-900/40 transition-all duration-500"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-red-500/20 rounded-full animate-ping group-hover:animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-red-600/30 rounded-full animate-pulse group-hover:animate-bounce"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 border-4 border-red-500 rounded-full animate-spin border-t-transparent group-hover:border-red-400"></div>
                    </div>
                    <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-red-400/40 transform rotate-45 animate-pulse delay-500"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-6 h-6 border-2 border-red-500/60 rounded-full animate-bounce delay-700"></div>
                  </div>

                  {/* Advanced Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-500/0 to-red-400/0 group-hover:from-red-600/10 group-hover:via-red-500/10 group-hover:to-red-400/10 rounded-2xl transition-all duration-500"></div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full animate-bounce delay-1000 hover:animate-spin hover:scale-150 transition-all duration-500 cursor-pointer"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-600/40 rounded-full animate-pulse delay-500 hover:animate-bounce hover:scale-200 transition-all duration-500 cursor-pointer"></div>
                <div className="absolute top-1/4 -right-8 w-4 h-4 bg-red-400/50 rounded-full animate-ping delay-700 hover:animate-spin hover:scale-300 transition-all duration-500 cursor-pointer"></div>
                <div className="absolute bottom-1/3 -left-6 w-5 h-5 bg-red-500/45 transform rotate-45 animate-pulse delay-900 hover:animate-bounce hover:scale-150 hover:rotate-180 transition-all duration-500 cursor-pointer"></div>
                <div className="absolute top-1/2 -right-6 w-3 h-3 bg-red-600/60 rounded-full animate-bounce delay-1200 hover:animate-ping hover:scale-200 transition-all duration-500 cursor-pointer"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-red-600/5 rounded-full blur-2xl animate-bounce delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500/30 rounded-full animate-ping delay-1500"></div>
            <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-red-400/25 transform rotate-45 animate-pulse delay-1800"></div>
          </div>
        </section>

        {/* CTA Section with Ultimate Animations */}
        <section 
        
        className="py-20 px-6 bg-gradient-to-r from-red-900/20 to-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
             READY TO TRANSFORM YOUR DIGITAL EXPERIENCE
           </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button 
                onClick={() => window.location.href = '/contact'}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-rotate-1 whitespace-nowrap cursor-pointer overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute top-0 -left-full w-full h-full bg-white/30 transform skew-x-12 group-hover:left-full transition-all duration-700"></div>
              </button>
             
            </div>
          </div>

          {/* Enhanced Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full animate-bounce delay-1000 hover:animate-spin hover:scale-150 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-600/40 rounded-full animate-pulse delay-500 hover:animate-bounce hover:scale-200 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute top-1/4 -right-8 w-4 h-4 bg-red-400/50 rounded-full animate-ping delay-700 hover:animate-spin hover:scale-300 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute bottom-1/3 -left-6 w-5 h-5 bg-red-500/45 transform rotate-45 animate-pulse delay-900 hover:animate-bounce hover:scale-150 hover:rotate-180 transition-all duration-500 cursor-pointer"></div>
          <div className="absolute top-1/2 -right-6 w-3 h-3 bg-red-600/60 rounded-full animate-bounce delay-1200 hover:animate-ping hover:scale-200 transition-all duration-500 cursor-pointer"></div>

          {/* Ultimate Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-2xl animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-400/3 rounded-full blur-xl animate-pulse delay-500"></div>

            {/* Floating Particles */}
            <div className="absolute top-20 left-20 w-3 h-3 bg-red-500/20 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-40 right-40 w-2 h-2 bg-red-400/30 rounded-full animate-ping delay-1500"></div>
            <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-red-600/15 transform rotate-45 animate-pulse delay-2000"></div>
            <div className="absolute bottom-40 right-20 w-2 h-2 bg-red-500/25 rounded-full animate-bounce delay-2500"></div>
            <div className="absolute top-1/3 left-10 w-3 h-3 bg-red-400/20 rounded-full animate-ping delay-3000"></div>
            <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-red-600/30 rounded-full animate-pulse delay-3500"></div>
          </div>
        </section>

        {/* Custom CSS for additional animations */}
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
