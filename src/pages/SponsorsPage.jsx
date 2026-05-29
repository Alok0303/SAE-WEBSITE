// src/pages/SponsorsPage.jsx
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHandshake, FaFileDownload, FaBuilding, FaAward, FaCrown, FaWrench } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const SponsorsPage = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Entrance
      const tl = gsap.timeline();
      tl.from('#sponsors-hero-title', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
      })
      .from('#sponsors-hero-desc', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.8')
      .from('#sponsors-hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6');

      // Sponsor board categories entrance
      gsap.from('.sponsor-tier-section', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#sponsors-board',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      // Stats Stagger
      gsap.from('.stat-card', {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '#stats-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleSponsor = {
    name: "IIT Roorkee Alumni Association",
    category: "Club Catalyst & Endowment Partner",
    supportType: "Core Funding & Research Grants",
    logoText: "IITR ALUMNI",
    desc: "Empowering next-gen student innovations by providing testing equipment, workspace maintenance, and travel grants for national tournaments."
  };

  const platinumSponsors = [
    {
      name: "ANSYS Inc.",
      category: "Simulation Software Partner",
      supportType: "CFD & FEA Software Licenses",
      logoText: "Ansys",
      desc: "Providing high-fidelity simulation solvers enabling complete virtual testing of aerodynamic downforce and structural chassis stress."
    },
    {
      name: "Dassault Systèmes / SolidWorks",
      category: "Computational Design Partner",
      supportType: "3D CAD & PLM Packages",
      logoText: "3DS SOLIDWORKS",
      desc: "Delivering advanced CAD licenses for detailed 3D assembly, wiring routing, and generative bracket design optimization."
    }
  ];

  const goldSponsors = [
    { name: "Apex Motorsports Tech", logoText: "APEX", provision: "Dampers & Kinematics tuning" },
    { name: "Lithium Grid Solutions", logoText: "LITHIUM GRID", provision: "Custom battery cell packs" },
    { name: "Carbon Composites Ltd.", logoText: "CARBON COMP", provision: "Carbon-fiber prepregs & tooling" }
  ];

  const technicalPartners = [
    { name: "Bosch India", provision: "Sensors & ECU hardware" },
    { name: "STMicroelectronics", provision: "Microcontrollers & dev boards" },
    { name: "Sartorius Research", provision: "Precision scales & dynamic load-cell components" },
    { name: "GKN Automotive", provision: "Driveshaft couplings & CV joints" },
    { name: "Kari Speedways", provision: "Track time & testing support" },
    { name: "Innovate PCB", provision: "Multi-layer prototype fabrication" }
  ];

  const metrics = [
    {
      value: "50K+",
      label: "Annual Social Outreach",
      desc: "High digital exposure across LinkedIn, Instagram, and web newsletters connecting with tech hobbyists."
    },
    {
      value: "60+",
      label: "Top Recruit Pool",
      desc: "Our alumni consistently secure high-tier profiles in Jaguar Land Rover, Tesla, NVIDIA, and top-tier motorsports divisions."
    },
    {
      value: "20+",
      label: "Press & Media Mentions",
      desc: "Frequent coverage in leading engineering forums, university prints, and national automotive blogs."
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans pb-24 overflow-hidden" ref={containerRef}>
      {/* Visual glowing accents */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[200px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl blur-[35px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-semibold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 uppercase tracking-wider">
            Partners in Engineering
          </div>
          <h1 id="sponsors-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
            Fueling Innovation, <span className="text-cyan-400">Supporting Speed</span>
          </h1>
          <p id="sponsors-hero-desc" className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Our accomplishments are made possible through the support of corporate leaders and research sponsors. Together, we are bridging classroom fundamentals with track-ready performance.
          </p>
          <div id="sponsors-hero-cta" className="flex flex-wrap justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-extrabold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 inline-flex items-center">
              <FaHandshake className="mr-2" /> Partner With Us
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 inline-flex items-center">
              <FaFileDownload className="mr-2 text-cyan-400" /> Pitch Brochure (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* 2. Sponsor Board */}
      <section id="sponsors-board" className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl space-y-16 md:space-y-24">
          
          {/* TITLE TIER */}
          <div className="sponsor-tier-section">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <FaCrown className="text-amber-400 text-2xl" />
              <h2 className="text-2xl font-bold tracking-widest text-center uppercase text-amber-400">Title Sponsor</h2>
            </div>
            
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-amber-500/10 to-amber-500/0 border border-amber-500/30 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center gap-8 hover:border-amber-400/50 transition-all duration-300">
              <div className="w-48 h-48 rounded-2xl bg-gray-950 border border-amber-500/20 flex flex-col items-center justify-center p-4 text-center flex-shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.1)] group">
                <span className="text-3xl font-extrabold text-amber-400 tracking-wider group-hover:scale-105 transition-transform duration-300">{titleSponsor.logoText}</span>
              </div>
              <div className="text-center md:text-left flex-grow">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">{titleSponsor.category}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{titleSponsor.name}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">{titleSponsor.desc}</p>
                <div className="inline-block bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-gray-300">
                  Provision: {titleSponsor.supportType}
                </div>
              </div>
            </div>
          </div>

          {/* PLATINUM TIER */}
          <div className="sponsor-tier-section">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <FaAward className="text-cyan-400 text-2xl" />
              <h2 className="text-2xl font-bold tracking-widest text-center uppercase text-cyan-400">Platinum Sponsors</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {platinumSponsors.map((sponsor, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/20 p-8 rounded-3xl backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300 flex flex-col md:flex-row items-center gap-6"
                >
                  <div className="w-36 h-36 rounded-2xl bg-gray-950 border border-cyan-500/10 flex items-center justify-center p-3 text-center flex-shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.08)]">
                    <span className="text-xl font-black text-cyan-400 uppercase tracking-widest leading-tight">{sponsor.logoText}</span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 block mb-1">{sponsor.category}</span>
                    <h3 className="text-xl font-extrabold text-white mb-2">{sponsor.name}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3">{sponsor.desc}</p>
                    <span className="text-[11px] font-semibold text-gray-300 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full block md:inline-block">
                      License: {sponsor.supportType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GOLD TIER */}
          <div className="sponsor-tier-section">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <FaBuilding className="text-gray-300 text-xl" />
              <h2 className="text-xl font-bold tracking-widest text-center uppercase text-gray-300">Gold Sponsors</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {goldSponsors.map((sponsor, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-900/40 border border-white/5 p-6 rounded-2xl text-center backdrop-blur-sm hover:border-white/15 transition-all duration-300"
                >
                  <div className="w-full h-16 bg-gray-950 border border-white/5 rounded-xl mb-4 flex items-center justify-center text-sm font-extrabold text-gray-300 tracking-wider">
                    {sponsor.logoText}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{sponsor.name}</h3>
                  <p className="text-gray-400 text-xs">Provision: {sponsor.provision}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNICAL PARTNERS */}
          <div className="sponsor-tier-section">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <FaWrench className="text-gray-500 text-xl" />
              <h2 className="text-lg font-bold tracking-widest text-center uppercase text-gray-500">Technical & Equipment Partners</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {technicalPartners.map((partner, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-900/30 border border-white/5 p-4 rounded-xl text-center backdrop-blur-sm hover:bg-gray-900/60 transition-colors"
                >
                  <h3 className="text-xs md:text-sm font-bold text-gray-300 mb-1">{partner.name}</h3>
                  <p className="text-gray-500 text-[10px] uppercase font-medium tracking-wide">{partner.provision}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Stats / Impact Section */}
      <section id="stats-section" className="py-20 bg-gray-900/40 border-t border-b border-white/5 relative z-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">Why Partner with Us?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Sponsorship isn't just about charity; it's a corporate strategy that unlocks valuable opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((stat, idx) => (
              <div 
                key={idx}
                className="stat-card bg-gray-950 border border-white/5 p-8 rounded-2xl shadow-lg relative overflow-hidden flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-[30px]" />
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-black text-cyan-400 block mb-2">{stat.value}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Partnership Call To Action */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-gray-900 to-gray-950 border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Become an Innovation Partner</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join us on our journey. We offer multiple avenues of cooperation including aerodynamic decals, recruitment pipelines, and technical telemetry sponsorships.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:sae@iitr.ac.in" 
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-extrabold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                Contact Relations
              </a>
              <button 
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-extrabold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                Request Pitch Presentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;
