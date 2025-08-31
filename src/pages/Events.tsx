import React from "react";
import { Calendar, Clock, MapPin, Users, ExternalLink, Star, Zap, Code2, Brain } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      date: "Aug 26",
      time: "9:00AM",
      title: "Azure Developer Day",
      description: "This will be a 2-hour event designed to introduce college students to cutting-edge Azure technologies, real-world use cases, and cloud career opportunities, and also to internship opportunities in growing startups exclusively. The session will be delivered by experienced speakers from the Azure Developer Community.",
      type: "Workshop",
      color: "from-cyan-500 to-blue-500",
      location: "TIIPS Campus",
      attendees: "200+",
      difficulty: "Seminar Hall",
      link: "https://forms.gle/1JYbtSHaowKCnAit",
      tentative: true,

    },
    {
      date: "Sept 1",
      time: "10:00AM",
      title: "Smart India Hackathon",
      description: "Smart India Hackathon (SIH) is a nationwide initiative by the Government of India to provide students a platform to solve pressing real-life problems.",
      type: "Workshop",
      color: "from-purple-500 to-pink-500",
      location: "Seminar Hall",
      attendees: "100+",
      difficulty: "Beginner",
      link: "https://forms.gle/1JYbtSHaowKCnAit9",
      tentative: true,

    },
    {
      date: "Oct 5",
      time: "9:00AM",
      title: "TechJam2.0 Entrepreneurthon",
      description: "TechJam 2.0: Entrepreneurthon is an electrifying blend of technology and entrepreneurship, bringing together innovative minds to turn bold ideas into impactful solutions. Participants will brainstorm, prototype and pitch their ventures while gaining insights from industry experts. It’s not just a competition—it’s a launchpad for future innovators, problem-solvers and change-makers ready to shape the business and tech landscape.",
      type: "Ideathon",
      color: "from-green-400 to-cyan-400",
      location: "Main Campus",
      attendees: 100,
      difficulty: "Intermediate",
      link: "https://forms.gle/1JYbtSHaowKCnAit9",
      tentative: true,

    },
    {
      date: "Nov 15",
      time: "9:00AM",
      title: "Industiral Visit",
      description: "Industrial Visit offers students a chance to explore the real-world workings of the tech and business industry. From witnessing cutting-edge technologies to learning industry best practices directly from professionals, participants will gain insights that bridge academic learning with practical application. This experience will help them understand the skills and mindset needed to excel in their careers.",
      type: "Visit",
      color: "from-orange-500 to-red-500",
      location: "TBD",
      attendees: 200,
      difficulty: "All Levels",
      link: "https://forms.gle/1JYbtSHaowKCnAit9",
      tentative: true,

    },
  ];

  const pastEvents = [
    {
      title: "Start-Up Mindset",
      date: "10th Oct, 2024",
      participants: "100+",
      description: "Shubham Raj, CEO of Zeber, inspired students with his journey from school innovator to entrepreneur at the Session.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7251182981036269568/",
    },
    {
      title: "Trinity's TechJam 1.0",
      date: "24th Oct 2024",
      participants: "100+",
      description: "Month-long initiative contributing to major open source projects.",
      link: "https://unstop.com/hackathons/trinitys-techjam-10-trinity-institute-of-innovations-in-professional-studies-1182822",
    },
    {
      title: "Code Nakshatra Hackathon",
      date: "3-4th April 2025",
      participants: "200+",
      description: "Industry leaders discussing quantum computing and AI advancements.",
      link: "https://code-nakshatra.xyz/",
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">UPCOMING MISSIONS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Join our elite events where code warriors gather to push the boundaries of technology. Every mission is designed to challenge your skills and expand your digital horizons.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 font-mono">{event.date.split(" ")[1]}</div>
                       <div className="text-sm text-yellow-400 uppercase font-mono">{event.date.split(" ")[0]}
                        </div>
                        {event.tentative && (
    <div className="text-xs text-gray-400 font-mono mt-1">(Tentative)</div>
  )}
                      </div>
                      <div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${event.color} text-white`}>{event.type}</span>
                        <div className="flex items-center text-gray-400 text-sm font-mono mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{event.title}</h3>

                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{event.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      <span className="font-mono">{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2 text-purple-400" />
                      <span className="font-mono">{event.attendees} slots</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Star className="w-4 h-4 mr-2 text-yellow-400" />
                      <span className="font-mono">{event.difficulty}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 mr-2 text-green-400" />
                      <span className="font-mono">High Energy</span>
                    </div>
                  </div>
                  <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 font-mono flex items-center justify-center group-hover:scale-105">
                    REGISTER FOR MISSION
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Past Events */}
          <div className="border-t border-cyan-500/20 pt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">MISSION ARCHIVES</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-gray-900/30 to-black/30 rounded-xl p-6 border border-cyan-500/10 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <Code2 className="w-6 h-6 text-cyan-400" />
                    <span className="text-xs text-gray-400 font-mono">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-cyan-400 font-mono">
                    <Users className="w-4 h-4 mr-1" />
                    {event.participants} participants
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
