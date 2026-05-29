// src/pages/TeamPage.jsx
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const subsystems = ['All', 'Leadership', 'Mechanical', 'Electrical', 'Controls & Software', 'Business & Operations'];

  const teamMembers = [
    {
      name: 'Aryan Sharma',
      role: 'Team Captain / Chief Systems Engineer',
      subsystem: 'Leadership',
      email: 'aryan.sharma@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'AS',
      glowColor: 'cyan'
    },
    {
      name: 'Ananya Sen',
      role: 'Vice Captain / Operations Head',
      subsystem: 'Leadership',
      email: 'ananya.sen@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'AS',
      glowColor: 'pink'
    },
    {
      name: 'Rohan Verma',
      role: 'Chassis & Suspension Lead',
      subsystem: 'Mechanical',
      email: 'rohan.verma@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'RV',
      glowColor: 'blue'
    },
    {
      name: 'Vikram Rathore',
      role: 'Aerodynamics Specialist',
      subsystem: 'Mechanical',
      email: 'vikram.r@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'VR',
      glowColor: 'cyan'
    },
    {
      name: 'Meera Nair',
      role: 'Powertrain & Cooling Engineer',
      subsystem: 'Mechanical',
      email: 'meera.nair@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'MN',
      glowColor: 'teal'
    },
    {
      name: 'Kabir Kapoor',
      role: 'Battery Box & BMS Lead',
      subsystem: 'Electrical',
      email: 'kabir.k@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'KK',
      glowColor: 'amber'
    },
    {
      name: 'Riya Gupta',
      role: 'Wire Harness & Electronics Specialist',
      subsystem: 'Electrical',
      email: 'riya.g@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'RG',
      glowColor: 'orange'
    },
    {
      name: 'Tanish Pashte',
      role: 'Telemetry & Embedded Controls Lead',
      subsystem: 'Controls & Software',
      email: 'tanish.p@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'TP',
      glowColor: 'cyan'
    },
    {
      name: 'Neha Patel',
      role: 'RTOS & Embedded Systems Engineer',
      subsystem: 'Controls & Software',
      email: 'neha.p@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'NP',
      glowColor: 'emerald'
    },
    {
      name: 'Sameer Sen',
      role: 'Public Relations & Marketing Lead',
      subsystem: 'Business & Operations',
      email: 'sameer.sen@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'SS',
      glowColor: 'purple'
    },
    {
      name: 'Preeti Roy',
      role: 'Finance & Sponsor Coordinator',
      subsystem: 'Business & Operations',
      email: 'preeti.r@saeiitr.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      avatarText: 'PR',
      glowColor: 'fuchsia'
    }
  ];

  // 1. Initial Hero and Scroll Entrance Animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Entrance
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
      .from('#team-filters', {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6');

      // Grid items entrance
      gsap.from('.team-member-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
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
      case 'cyan': return 'shadow-[0_0_15px_rgba(34,211,238,0.2)] border-cyan-500/20 text-cyan-400';
      case 'blue': return 'shadow-[0_0_15px_rgba(59,130,246,0.2)] border-blue-500/20 text-blue-400';
      case 'pink': return 'shadow-[0_0_15px_rgba(236,72,153,0.2)] border-pink-500/20 text-pink-400';
      case 'amber': return 'shadow-[0_0_15px_rgba(245,158,11,0.2)] border-amber-500/20 text-amber-400';
      case 'orange': return 'shadow-[0_0_15px_rgba(249,115,22,0.2)] border-orange-500/20 text-orange-400';
      case 'emerald': return 'shadow-[0_0_15px_rgba(16,185,129,0.2)] border-emerald-500/20 text-emerald-400';
      case 'purple': return 'shadow-[0_0_15px_rgba(168,85,247,0.2)] border-purple-500/20 text-purple-400';
      case 'fuchsia': return 'shadow-[0_0_15px_rgba(217,70,239,0.2)] border-fuchsia-500/20 text-fuchsia-400';
      case 'teal': return 'shadow-[0_0_15px_rgba(20,184,166,0.2)] border-teal-500/20 text-teal-400';
      default: return 'shadow-[0_0_15px_rgba(34,211,238,0.2)] border-cyan-500/20 text-cyan-400';
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
    <div className="bg-gray-950 text-white min-h-screen font-sans pb-20 overflow-hidden" ref={containerRef}>
      {/* Dynamic glow nodes in background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* 1. Header Section */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-semibold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 uppercase tracking-wider">
            MEET THE ENGINEER FORCE
          </div>
          <h1 id="team-hero-header" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            The Minds Behind <span className="text-cyan-400">The Machines</span>
          </h1>
          <p id="team-hero-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our team brings together coders, designers, aerodynamicists, and managers working in full synergy to turn computational physics into racetrack engineering.
          </p>
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
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
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
              className="team-member-card group relative overflow-hidden bg-gray-900/40 rounded-2xl border border-white/5 hover:border-white/15 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Glow plaque background and border outline based on subsystem styling */}
              <div className={`absolute inset-0 bg-gradient-to-b ${getGradientStyle(member.glowColor)} opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              <div className="p-6 relative z-10 flex-grow">
                {/* Styled initial Avatar */}
                <div className="flex justify-center mb-6">
                  <div className={`w-24 h-24 rounded-2xl border bg-gray-950 flex items-center justify-center font-extrabold text-3xl transition-transform duration-500 group-hover:scale-105 ${getGlowStyle(member.glowColor)}`}>
                    {member.avatarText}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/5 border border-cyan-400/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {member.subsystem}
                  </span>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed h-10 px-2">
                    {member.role}
                  </p>
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle glow core */}
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
