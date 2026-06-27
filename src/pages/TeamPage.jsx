// src/pages/TeamPage.jsx
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin, FaGithub, FaEnvelope, FaUser , FaPhone } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const subsystems = ['All', 'Leadership', 'Mechanical', 'Tech', 'Business & Operations'];

  const facultyAdvisors = [
    {
      name: 'Dr. Akshay Dvivedi',
      role: 'Faculty Advisor',
      department: 'Mechanical & Industrial Engineering',
      email: 'akshaydvivedi@me.iitr.ac.in',
      phone: '+91-1332-285428',
      linkedin: 'https://linkedin.com',
      image: 'photos/team/Akshaysir.webp', // e.g., '/images/ramesh.jpg'
      glowColor: 'blue'
    },
    {
      name: 'Dr. Arup Kumar Das',
      role: 'Faculty Advisor',
      department: 'Mechanical & Industrial Engineering',
      email: 'arup.das@me.iitr.ac.in',
      phone: '+91-1332-284802',
      linkedin: 'https://linkedin.com',
      image: 'photos/team/Arupsir.webp', 
      glowColor: 'blue'
    }
  ];

  const teamMembers = [
    {
      name: 'Malhar Patil',
      role: 'Chairperson',
      subsystem: 'Leadership',
      email: 'malhar@saeiitr.in',
      phone: '+91 93568 39085',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'cyan'
    },
    {
      name: 'Gunjan Shah',
      role: 'Vice Chairperson',
      subsystem: 'Leadership',
      email: 'gunjan@saeiitr.in',
      phone: '+91 70163 10213',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'orange'
    },
    {
      name: 'Bhushan Khodankar',
      role: 'Secretary / IKR Team Marketing Head',
      subsystem: 'Leadership ',
      email: 'bhushan@saeiitr.in',
      phone: '+91 91468 40340',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'blue'
    },
    {
      name: 'Shreyash Pandey',
      role: 'Joint Secretary',
      subsystem: 'Leadership',
      email: 'shreyash@saeiitr.in',
      phone: '+91 91370 59557',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'blue'
    },
    {
      name: 'Mukul',
      role: 'Joint Secretary / IKR Team Captain',
      subsystem: 'Leadership',
      email: 'mukul@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'cyan'
    },
    {
      name: 'Jay Tanna',
      role: 'Events Coordinator',
      subsystem: 'Business & Operations',
      email: 'jay@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'teal'
    },
    {
      name: 'Aryan Sharma',
      role: 'Powertrain Head',
      subsystem: 'Mechanical',
      email: 'aryan@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'amber'
    },
    {
      name: 'Prathvi Singh',
      role: 'Braking Head',
      subsystem: 'Mechanical',
      email: 'prathvi@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'orange'
    },
    {
      name: 'Umang Ramavat',
      role: 'Chassis Head',
      subsystem: 'Mechanical',
      email: 'umang@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'cyan'
    },
    {
      name: 'Dishant Jain',
      role: 'Steering Head',
      subsystem: 'Mechanical',
      email: 'dishant@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'emerald'
    },
    {
      name: 'Tushar Chaudhary',
      role: 'Marketing Head',
      subsystem: 'Business & Operations',
      email: 'tushar@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'purple'
    },
    {
      name: 'Suyash Patil',
      role: 'Sponsorship Head',
      subsystem: 'Business & Operations',
      email: 'suyash@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'cyan'
    },
    {
      name: 'Samruddhi',
      role: 'Design Head',
      subsystem: 'Tech',
      email: 'samruddhi@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'fuchsia'
    },
    {
      name: 'Alok Prajapati',
      role: 'Technical Head',
      subsystem: 'Tech',
      email: 'alok@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'orange'
    },
    {
      name: 'Sanat Jha',
      role: 'Technical Head',
      subsystem: 'Tech',
      email: 'sanat@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'emerald'
    },
    {
      name: 'Chiraag K',
      role: 'IKR Team Manager',
      subsystem: 'Mechanical',
      email: 'chiraag@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      image: '', 
      glowColor: 'blue'
    }
  ];

  // 1. Initial Hero and Scroll Entrance Animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('#team-hero-header', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
      })
      .from('#team-hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.8')
      .from('.faculty-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'all' // Crucial fix: prevents elements from getting stuck at opacity 0
      }, '-=0.4')
      .from('#team-filters', {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');

      // Grid items entrance
      gsap.from('.team-member-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 2. Tab filtering Stagger Refade Animation
  useLayoutEffect(() => {
    const cards = gridRef.current.querySelectorAll('.team-member-card');
    if (cards.length > 0) {
      gsap.killTweensOf(cards);
      gsap.fromTo(cards, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [activeFilter]);

  const filteredMembers = teamMembers.filter(member => 
    activeFilter === 'All' ? true : member.subsystem === activeFilter
  );

  const getGlowStyle = (color) => {
    switch (color) {
      case 'cyan': return 'shadow-[0_0_20px_rgba(34,211,238,0.4)] border-cyan-400 text-cyan-400';
      case 'blue': return 'shadow-[0_0_20px_rgba(59,130,246,0.4)] border-blue-400 text-blue-400';
      case 'pink': return 'shadow-[0_0_20px_rgba(236,72,153,0.4)] border-pink-400 text-pink-400';
      case 'amber': return 'shadow-[0_0_20px_rgba(245,158,11,0.4)] border-amber-400 text-amber-400';
      case 'orange': return 'shadow-[0_0_20px_rgba(249,115,22,0.4)] border-orange-400 text-orange-400';
      case 'emerald': return 'shadow-[0_0_20px_rgba(16,185,129,0.4)] border-emerald-400 text-emerald-400';
      case 'purple': return 'shadow-[0_0_20px_rgba(168,85,247,0.4)] border-purple-400 text-purple-400';
      case 'fuchsia': return 'shadow-[0_0_20px_rgba(217,70,239,0.4)] border-fuchsia-400 text-fuchsia-400';
      case 'teal': return 'shadow-[0_0_20px_rgba(20,184,166,0.4)] border-teal-400 text-teal-400';
      default: return 'shadow-[0_0_20px_rgba(34,211,238,0.4)] border-cyan-400 text-cyan-400';
    }
  };

  const getGradientStyle = (color) => {
    switch (color) {
      case 'cyan': return 'from-cyan-500/20 to-blue-500/5';
      case 'blue': return 'from-blue-500/20 to-indigo-500/5';
      case 'pink': return 'from-pink-500/20 to-purple-500/5';
      case 'amber': return 'from-amber-500/20 to-yellow-500/5';
      case 'orange': return 'from-orange-500/20 to-red-500/5';
      case 'emerald': return 'from-emerald-500/20 to-teal-500/5';
      case 'purple': return 'from-purple-500/20 to-violet-500/5';
      case 'fuchsia': return 'from-fuchsia-500/20 to-pink-500/5';
      case 'teal': return 'from-teal-500/20 to-cyan-500/5';
      default: return 'from-cyan-500/20 to-blue-500/5';
    }
  };

  return (
    <div className="relative bg-gray-950 text-white min-h-screen font-sans pb-20 overflow-hidden" ref={containerRef}>
      {/* Background glow nodes */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* 1. Header Section */}
      <section className="relative pt-32 pb-12 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-semibold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 uppercase tracking-wider">
            MEET THE ENGINEER FORCE
          </div>
          <h1 id="team-hero-header" className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            The Minds Behind <span className="text-cyan-400">The Machines</span>
          </h1>
          <p id="team-hero-subtitle" className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our team brings together coders, designers, aerodynamicists, and managers working in full synergy to turn computational physics into racetrack engineering.
          </p>
        </div>
      </section>

      {/* 1.5 Faculty Advisor Section */}
      <section className="px-6 mb-20 relative z-30">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {facultyAdvisors.map((faculty, idx) => (
            <div
              key={idx}
              className="faculty-card group relative overflow-hidden bg-gray-900/60 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradientStyle(faculty.glowColor)} opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none`} />
              
              {/* Image Frame with Vibrant Fallback Icon Color */}
              <div className={`w-24 h-24 shrink-0 rounded-2xl border bg-gray-950 overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${getGlowStyle(faculty.glowColor)}`}>
                {faculty.image ? (
                  <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
                ) : (
                  <FaUser className="text-4xl current-color" />
                )}
              </div>

              <div className="text-center sm:text-left relative z-20 flex-grow">
                <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  {faculty.role}
                </span>
                <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {faculty.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed mb-3">
                  {faculty.department}
                </p>
                {faculty.phone && (
                  <a 
                    className="flex items-center gap-2 mb-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium mt-1" 
                    aria-label="Call Faculty"
                  >
                    <FaPhone className="text-base shrink-0" />
                    <span>{faculty.phone}</span>
                  </a>
                )}
                <div className="flex justify-center sm:justify-start space-x-4">
                  <a href={`mailto:${faculty.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-lg" aria-label="Email Faculty">
                    <FaEnvelope />
                  </a>
                  <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg" aria-label="LinkedIn Profile">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Interactive Filter Tabs */}
      <section className="px-6 mb-16 relative z-20">
        <div 
          id="team-filters" 
          className="container mx-auto max-w-5xl bg-gray-900/60 border border-white/10 p-2 rounded-2xl backdrop-blur-md flex flex-wrap justify-center gap-1.5 shadow-xl"
        >
          {subsystems.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveFilter(sub)}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === sub
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Team Cards Grid */}
      <section className="px-6 relative z-10">
        <div 
          ref={gridRef}
          className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredMembers.map((member, idx) => (
            <div
              key={idx}
              className="team-member-card group relative overflow-hidden bg-gray-900/40 rounded-2xl border border-white/5 hover:border-white/15 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${getGradientStyle(member.glowColor)} opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none`} />

              <div className="p-6 relative z-10 flex-grow">
                {/* Styled Profile Image Container with vibrant fallbacks */}
                <div className="flex justify-center mb-6">
                  <div className={`w-24 h-24 rounded-2xl border bg-gray-950 overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${getGlowStyle(member.glowColor)}`}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <FaUser className="text-4xl current-color" />
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {member.subsystem}
                  </span>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed h-10 px-2">
                    {member.role}
                  </p>
                  {member.phone && (
                    <a 
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-xs font-semibold mt-2 justify-center w-full"
                    >
                      <FaPhone className="text-base shrink-0" />
                      <span>{member.phone}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover overlay panel containing contact/social links */}
              <div className="p-4 bg-gray-950/80 border-t border-white/5 flex items-center justify-center space-x-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 relative z-10">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 text-lg transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 text-lg transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-400 hover:text-cyan-400 text-lg transition-colors"
                  aria-label="Send Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Join the Club Banner */}
      <section className="mt-28 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Are you ready to innovate?</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Recruitments open every autumn semester for engineering, programming, operations, and media divisions. Come drive the future.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-extrabold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105">
              Recruitment Guidelines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;