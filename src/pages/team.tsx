import Navigation from "@/components/Navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import { User, Award, Star, Mail } from "lucide-react"

const teamMembers = [
   {
    title: "Chief Executive Officer",
    name: "Abdullah Shahid",
    description: "Abdullah defines the company vision and strategy, driving growth, brand development, and stakeholder relationships.",
    skills: ["Leadership", "Growth Strategy", "Brand Development", "Business Development", "Analytics"],
    image:"https://i.ibb.co/SwdxbTqk/5.png",
  },
  {
    title: "Chief Technical Officer",
    name: "Anza Bajwa",
    description: "Anza leads the technology strategy, overseeing system architecture, project management, and technical team guidance.",
    skills: ["System Architecture", "Project Management", "Technical Leadership", "Software Strategy", "Team Management"],
    image:"https://i.ibb.co/s9DSG06c/Team.png",
  },
    {
    title: "HR Manager",
    name: "Zarnish Fatima",
    description: "Zarnish manages recruitment, employee engagement, and organizational development to ensure a productive workplace culture.",
    skills: ["Recruitment", "Employee Engagement", "HR Policies", "Talent Management", "Organizational Development"],
    image:"https://i.ibb.co/s9DSG06c/Team.png",
  },
  {
    title: "Junior Mobile app developer",
    name: "Rizwan Ashraf",
    description: "Rizwan develops cross-platform mobile applications using Flutter and React Native, ensuring smooth performance and great UX.",
    skills: ["Flutter", "React Native", "Mobile Development", "UI/UX Design", "Cross-platform Apps"],
    image:"https://i.ibb.co/0jRhTwrG/4.png",
  },
    {
    title: "AI Backend Developer",
    name: "Nasir sultan",
    description: "Nasir focuses on building scalable backend systems, RESTful APIs, and database management using Node.js, Express, and PostgreSQL.",
    skills: ["Node.js", "Express.js", "PostgreSQL", "API Development", "Database Management"],
    image:"https://i.ibb.co/Z64jVCc9/3.png",
  },
 {
    title: "AI developer",
    name: "Meerab Shahid",
    description: "Meerab builds AI and machine learning solutions, including predictive models, NLP applications, and intelligent automation.",
    skills: ["Machine Learning", "Python", "NLP", "Data Analysis", "AI Development"],
    image:"https://i.ibb.co/s9DSG06c/Team.png",
  },
];

const teamImage = "https://i.ibb.co/0jF39yZ5/Whats-App-Image-2026-01-27-at-11-19-04-AM.jpg";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    adaptiveHeight: true,
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-hero py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Team
            </h1>
            <p className="text-[hsl(0,0%,70%)] text-lg max-w-2xl mx-auto">
              Meet the talented individuals who make our company exceptional
            </p>
          </div>
          <div className="mb-16 bg-white/5 backdrop-blur-sm rounded-3xl p-4 md:p-12 border  border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  United by Purpose
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  We believe in the power of collaboration and innovation. Our team is composed of dedicated professionals who share a common vision: to transform challenges into opportunities and deliver exceptional results.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Each member brings unique expertise and perspective, creating a dynamic environment where creativity thrives and excellence is the standard.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">23+</div>
                  <div className="text-white/70 text-sm">Team Members</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">8+</div>
                  <div className="text-white/70 text-sm">Years Modern Experience</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">200+</div>
                  <div className="text-white/70 text-sm">Projects Delivered</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">90%+</div>
                  <div className="text-white/70 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        <Slider {...settings}>
  {teamMembers.map((member, index) => (
    <div key={index} className="w-full animate-slide-up">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-gradient-to-b from-red-800 via-red-900 to-black h-auto md:h-[360px]">

          <img
            src={member.image}
            alt={member.name}
            className="w-full sm:w-2/4 h-64 sm:h-full md:h-full object-cover grayscale animate-slide-in-left"
            style={{ clipPath: "polygon(0 0, 75% 0, 100% 100%, 0 100%)" }}
          />

          <div className="w-full sm:w-2/4 p-6 sm:p-8 flex flex-col justify-center h-auto md:h-full text-center sm:text-right">

            <span className="flex items-center justify-center sm:justify-end text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80 mb-2 gap-2 animate-scale-in">
              <Award size={16} /> {member.title}
            </span>

            <h3 className="flex items-center justify-center sm:justify-end text-xl md:text-3xl font-bold text-white mb-4 gap-2 animate-slide-in-right">
              <User size={20} /> {member.name}
            </h3>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4 animate-slide-up">
              {member.description}
            </p>

            <div className="flex flex-wrap justify-center sm:justify-end gap-2 mb-6 animate-scale-in">
              {member.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 px-3 py-1 text-xs sm:text-sm bg-white/20 text-white rounded-full animate-pulse-glow"
                >
                  <Star size={12} /> {skill}
                </span>
              ))}
            </div>

            <button className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-white/30 bg-black/20 text-white font-medium transition-all duration-300 hover:bg-black/40 hover:border-white/50 w-fit mx-auto sm:ml-auto gap-2 animate-scale-in">
              Contact here <Mail size={16} />
            </button>

          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>




          <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for excellence
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105">
              View Open Positions
            </button>
          </div>




          <div className="mt-16 text-center backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Our Team Capabilities
            </h3>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
              <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Pressure Handling
                </h4>
                <p className="text-white/70 text-sm">
                  Our team thrives under pressure, delivering high-quality results even in challenging situations.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Innovation & Creativity
                </h4>
                <p className="text-white/70 text-sm">
                  We constantly innovate and apply creative solutions to meet project goals and client expectations.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Drive to Learn
                </h4>
                <p className="text-white/70 text-sm">
                  Our team is committed to continuous learning and staying ahead in development and technology trends.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Strong Communication
                </h4>
                <p className="text-white/70 text-sm">
                  Clear and effective communication ensures smooth collaboration and better project outcomes.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Ownership Mindset
                </h4>
                <p className="text-white/70 text-sm">
                  We take full responsibility for our work and focus on delivering reliable and scalable solutions.
                </p>
              </div>
            </div>
          </div>






        </div>
      </div>
            <Footer />
    </>
  );
};

export default Team;
