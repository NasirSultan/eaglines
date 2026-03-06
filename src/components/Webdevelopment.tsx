// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { Globe, Smartphone, Apple } from "lucide-react";
import pic3 from "./pi-3.png";
import pic4 from "./pi-4.png";
import pic5 from "./pi-5.png";
import pic6 from "./pi-6.png";
import pic7 from "./pi-7.png";
import pic8 from "./pi-8.png";
import { FiUser } from 'react-icons/fi';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const portfolio = [
    {
      title: 'Toe Tet – Interactive E-Learning Platform',
      category: 'Mobile App',
      image: 'https://play-lh.googleusercontent.com/OkVM7Cp_U9wlfA6NnG1zv_zqe4Y6QhCPVODXKqTL4ti5OD3ZMz8B-H_uyRbRh7uB=w2560-h1440-rw',
      web: "https://www.toetet.com/home",
      android: "https://play.google.com/store/apps/details?id=com.toetet.user&hl=en_US",
      ios: 'https://apps.apple.com/us/app/toe-tet-e-learning-platform/id6480333894'
    },
    {
      title: 'Leadhunt.ai – AI Lead Generation Extension',
      category: 'Chrome Extension',
      image: 'https://www.salesmate.io/mm-images/ai-lead-generation-5u96133d.webp?width=730',
      web: 'https://leadhunt.ai/',
      android: null,
      ios: null
    },
    {
      title: 'Matter AR – Augmented Reality Learning Platform',
      category: 'Augmented Reality App',
      image: 'https://play-lh.googleusercontent.com/rXFYMs4voFjzRmNctbL7YGURHcgvlQQCW9Ewz_KyTAWb3BVILdh656QB3Z33kQgVSPk=w2560-h1440-rw',
      web: null,
      android: 'https://play.google.com/store/apps/details?id=com.HDM.Matter&hl=en_US',
      ios: 'https://apps.apple.com/gb/app/matter-ar/id6443903385'
    },
    {

      title: 'UniDoc – Smart Doctor Appointment ',
      category: 'Mobile Application',
      image: 'https://play-lh.googleusercontent.com/WDwiVbQaVsKDM5AlLyoZYIGj2hQxOmnIsK81NgN2BMa1IRE_PNwlXhTJOjTZwbiDPoE=w2560-h1440-rw', // add a screenshot or placeholder image
      web: null,
      android: 'https://play.google.com/store/apps/details?id=com.ae.unidoc&hl=en_US',
      ios: 'https://apps.apple.com/ae/app/unidoc-doctor-appointment/id1527263282'


    },
    {
      title: "Clique for Pets – Social Platform for Pet Lovers",
      category: "iOS Mobile App",
      image: pic3,
      web: null,
      android: null,
      ios: "https://apps.apple.com/us/app/clique-for-pets/id6744467640"
    }

    ,
    {
      "title": "Trotter It – AI Travel Journal for Personalized Adventures",
      "category": "Mobile App",
      "image": "https://play-lh.googleusercontent.com/6Ejy5O6xAPnQJTqAHmMyKtpHBjRrT2H9fT0fqWNq9yuZqyFT23z9n35o6JzOvDZP0oo=w2560-h1440-rw",
      "web": null,
      "android": "https://play.google.com/store/apps/details?id=com.anansi.anansi&hl=en_US",
      "ios": "https://apps.apple.com/us/app/trotter-it-travel-journal-app/id6443733048"
    },
    {
      "title": "Event Check-in App – Seamless Attendance Management",
      "category": "Mobile App",
      "image": "https://play-lh.googleusercontent.com/qB9qIIYx3mGB-vl7YzI0y05MeE6vIbjNyUwQPEObxPRfRPTC9-UVq4SXxFMfIKKQjr8=w2560-h1440-rw",
      "web": null,
      "android": "https://play.google.com/store/apps/details?id=com.theeventscalendar.eventticketsplus&hl=en",
      "ios": "https://apps.apple.com/us/app/event-tickets-plus/id1395674797"
    }
    ,
    {
      "title": "HyperWrite AI – Writing Assistant for Smarter Content Creation",
      "category": "Web Application",
      "image": pic4,
      "web": "https://www.hyperwriteai.com",
      "android": null,
      "ios": null
    },
    {
      "title": "Eat App – Restaurant Management and Reservation System",
      "category": "Web Application",
      "image": pic5,
      "web": "https://restaurant.eatapp.co/",
      "android": null,
      "ios": null
    },

    {
      "title": "Socialbu – Social Media Management",
      "category": "Web Application",
      "image": pic6,
      "web": "https://socialbu.com/",
      "android": null,
      "ios": null
    }


    ,
    {
      "title": "365 Inventory – AI Inventory Management",
      "category": "Web Application",
      "image": pic7,
      "web": "https://inventory365.co/",
      "android": null,
      "ios": null
    }
    ,
    {
      "title": "No-Code Scraper – AI Data Extraction",
      "category": "Web Application",
      "image": pic8,
      "web": "https://www.nocodescraper.com/",
      "android": null,
      "ios": null
    }



  ];



  // Add these styles to your existing styles
  const styles = document.createElement('style');
  styles.innerHTML = `
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeInLeft {
    animation: fadeInLeft 1s ease-out forwards;
  }

  .animate-fadeInRight {
    animation: fadeInRight 1s ease-out forwards;
  }

  .animate-fadeInUp {
    animation: fadeInUp 1s ease-out forwards;
  }
`;
  document.head.appendChild(styles);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen  bg-gradient-to-r from-red-600/10 to-black" style={{ minHeight: '1024px' }}>
      {/* Hero Section with Animated Gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0  to-black animate-pulse"></div>
        <div className={`max-w-7xl mx-auto px-6 pt-32  relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Software <span className="text-red-500">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Creating powerful, scalable, and innovative web solutions that drive business growth and user engagement.
          </p>
        </div>
      </div>
      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to- from-black to-red-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={` p-8 rounded-lg border border-red-500/20 transition-all duration-500 hover:border-red-500/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <i className="fas fa-code text-red-500 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Custom Development</h3>
              <p className="text-gray-300">Tailored solutions built with cutting-edge technologies to meet your specific business needs.</p>
            </div>
            <div className={`bg-gradient-to-br from-black to-red-900/30 p-8 rounded-lg border border-red-500/20 transition-all duration-500 hover:border-red-500/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <i className="fas fa-mobile-alt text-red-500 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Responsive Design</h3>
              <p className="text-gray-300">Mobile-first approach ensuring your website looks perfect on all devices.</p>
            </div>
            <div className={`bg-gradient-to-br from-black to-red-900/30 p-8 rounded-lg border border-red-500/20 transition-all duration-500 hover:border-red-500/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <i className="fas fa-rocket text-red-500 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Performance Optimization</h3>
              <p className="text-gray-300">Lightning-fast loading speeds and optimized performance for better user experience.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies Section */}

      <section className="pt-20 px-6bg-gradient-to-r from-black to-red-600/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
              <span className="inline-block hover:animate-pulse hover:scale-110 transition-all duration-300 cursor-default">FEATURED PORTFOLIO</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-red-200 transition-colors duration-500 cursor-default">
              Showcase of our most impactful UI/UX design projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30 cursor-pointer"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Top part (image + title + category) */}
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 relative">
                    <span className="text-red-400 text-sm font-semibold mb-2 block group-hover:text-red-300 transition-all duration-300">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom row for links */}
                <div className="flex justify-around items-center border-t border-gray-700 p-4 bg-gray-900/40">
                  {/* Web Link */}
                  {project.web ? (
                    <a
                      href={project.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Globe className="w-6 h-6" />
                    </a>
                  ) : (
                    <Globe className="w-6 h-6 text-gray-600 cursor-not-allowed" />
                  )}

                  {/* Android Link */}
                  {project.android ? (
                    <a
                      href={project.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Smartphone className="w-6 h-6" />
                    </a>
                  ) : (
                    <Smartphone className="w-6 h-6 text-gray-600 cursor-not-allowed" />
                  )}

                  {/* iOS Link */}
                  {project.ios ? (
                    <a
                      href={project.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Apple className="w-6 h-6" />
                    </a>
                  ) : (
                    <Apple className="w-6 h-6 text-gray-600 cursor-not-allowed" />
                  )}
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
      {/* Process Section */}
      <section className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Planning</h3>
              <p className="text-gray-300 text-center">Detailed project analysis and strategy development</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Design</h3>
              <p className="text-gray-300 text-center">Creating intuitive and engaging user interfaces</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Development</h3>
              <p className="text-gray-300 text-center">Clean, efficient code implementation</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Launch</h3>
              <p className="text-gray-300 text-center">Testing and deployment to production</p>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Ideas Into
              <span className="text-red-500"> Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge digital solutions that drive growth and innovation in the digital landscape.
              Our expert team combines creativity with technology to bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-10 px-6 bg-gradient-to- from-black to-red-600/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-white">About Our Web Development</h2>
              <p className="text-gray-300 text-lg">
                We are passionate about creating exceptional web experiences that drive business growth. Our team of expert developers combines creativity with technical expertise to deliver innovative solutions that exceed expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-3"></i>
                  <span className="text-gray-300">Custom-built solutions tailored to your needs</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-3"></i>
                  <span className="text-gray-300">Cutting-edge technologies and best practices</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-3"></i>
                  <span className="text-gray-300">Scalable and future-proof architecture</span>
                </div>
              </div>
            </div>
            <div className={`bg-gradient-to-r from-red-500/20 to-black p-8 rounded-lg ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">10+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">200+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-16 px-6 bg-gradient-to-nr from-black to-red-600/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-12">
            Happy Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Client Card 1 */}
           <div className={`bg-gradient-to-br from-black to-red-900/30 p-8 rounded-lg border border-red-500/20 transform hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
  <div className="flex items-center mb-6">
    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
      <FiUser className="text-white text-2xl" />
    </div>
    <div className="ml-4">
      <h4 className="text-white font-bold">John Smith</h4>
      <p className="text-gray-400">CEO, Tech Solutions</p>
    </div>
  </div>
  <p className="text-gray-300">
    "Outstanding web development service! They transformed our vision into a stunning reality. The team's expertise and dedication were exceptional."
  </p>
</div>
            {/* Client Card 2 */}
            <div className={`bg-gradient-to-br from-black to-red-900/30 p-8 rounded-lg border border-red-500/20 transform hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
      <FiUser className="text-white text-2xl" />
    </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold">Sarah Johnson</h4>
                  <p className="text-gray-400">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The attention to detail and technical expertise displayed by the team was impressive. Our new website has significantly improved our online presence."
              </p>
            </div>

            {/* Client Card 3 */}
            <div className={`bg-gradient-to-br from-black to-red-900/30 p-8 rounded-lg border border-red-500/20 transform hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
      <FiUser className="text-white text-2xl" />
    </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold">Michael Chen</h4>
                  <p className="text-gray-400">Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Exceptional service from start to finish. They delivered a modern, responsive website that perfectly represents our brand and drives results."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App