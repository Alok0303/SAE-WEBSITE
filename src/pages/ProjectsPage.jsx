// src/pages/ProjectsPage.jsx
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBolt, FaGasPump, FaCompass, FaChevronRight, FaRulerCombined, FaWeightHanging, FaTachometerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const categories = ['All', 'Combustion', 'Electric', 'Design Concepts'];

  const projects = [
    {
      title: "Formula Bharat '24 - AGNI",
      category: "Combustion",
      desc: "Our latest combustion flagship. Designed to optimize dynamic weight distribution and peak cornering lateral-acceleration.",
      imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=AGNI",
      specs: {
        speed: "145 km/h",
        weight: "192 kg",
        powertrain: "KTM 390cc (Custom intake)",
        chassis: "Steel spaceframe + custom CFRP ducts"
      },
      icon: <FaGasPump className="text-orange-400" />,
      color: "orange"
    },
    {
      title: "Baja SAE India '23 - PREDATOR",
      category: "Combustion",
      desc: "An ultra-rugged off-road monster engineered to survive extreme rocks, drops, and water hazards.",
      imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=PREDATOR",
      specs: {
        speed: "60 km/h",
        weight: "172 kg",
        powertrain: "Briggs & Stratton 10HP",
        chassis: "Double A-Arm & semi-trailing arms"
      },
      icon: <FaGasPump className="text-amber-400" />,
      color: "amber"
    },
    {
      title: "Formula Electric '27 - VOLT",
      category: "Electric",
      desc: "Our active transition flagship, hosting a fully custom accumulator assembly and synchronous motor architecture.",
      imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=VOLT",
      specs: {
        speed: "135 km/h",
        weight: "205 kg",
        powertrain: "Dual PMAC Motors (BMS modular)",
        chassis: "Composite hybrid monocoque"
      },
      icon: <FaBolt className="text-cyan-400" />,
      color: "cyan"
    },
    {
      title: "Active Aero EV Concept",
      category: "Design Concepts",
      desc: "A computational research model evaluating drag-reduction systems (DRS) and active venturi tunnels.",
      imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=ACTIVE+AERO",
      specs: {
        speed: "N/A (Concept)",
        weight: "180 kg (Simulated)",
        powertrain: "Quad hub electric motors",
        chassis: "Full carbon-fiber honeycomb"
      },
      icon: <FaCompass className="text-purple-400" />,
      color: "purple"
    }
  ];

  const capabilities = [
    {
      title: "Aerodynamics & CFD Simulations",
      desc: "Executing high-density finite element grids and Navier-Stokes simulations in ANSYS Fluent to balance downforce with minimum drag coefficients."
    },
    {
      title: "Custom Battery Engineering (BMS)",
      desc: "Developing custom modular cell hierarchies, thermal cooling channels, and low-latency microcontrollers to safely isolate 400V battery boxes."
    },
    {
      title: "Telemetry & Sensor Analytics",
      desc: "Configuring real-time CAN-Bus telemetry boards transmitting tire pressures, shock travel, and thermal logs back to telemetry control pits."
    },
    {
      title: "Topology Weight Optimization",
      desc: "Reducing critical structural mass by up to 20% using genetic algorithms and generative design for custom CNC brackets and hubs."
    }
  ];

  // 1. Initial Page Load Animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('#projects-hero-header', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out'
      })
      .from('#projects-hero-desc', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.8')
      .from('#projects-filters', {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6');

      // Grid items entrance
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });

      // Capabilities Entrance
      gsap.from('.capability-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#capabilities-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 2. Tab Filter Stagger Transition
  useLayoutEffect(() => {
    const cards = gridRef.current.querySelectorAll('.project-card');
    if (cards.length > 0) {
      gsap.killTweensOf(cards);
      gsap.fromTo(cards, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [activeFilter]);

  const filteredProjects = projects.filter(p => 
    activeFilter === 'All' ? true : p.category === activeFilter
  );

  const getThemeStyles = (color) => {
    switch (color) {
      case 'cyan': return {
        border: 'border-cyan-500/20 hover:border-cyan-400/40',
        text: 'text-cyan-400',
        glow: 'shadow-[0_0_15px_rgba(34,211,238,0.15)] bg-gradient-to-b from-cyan-500/15 to-transparent'
      };
      case 'orange': return {
        border: 'border-orange-500/20 hover:border-orange-400/40',
        text: 'text-orange-400',
        glow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)] bg-gradient-to-b from-orange-500/15 to-transparent'
      };
      case 'amber': return {
        border: 'border-amber-500/20 hover:border-amber-400/40',
        text: 'text-amber-400',
        glow: 'shadow-[0_0_15px_rgba(245,158,11,0.15)] bg-gradient-to-b from-amber-500/15 to-transparent'
      };
      case 'purple': return {
        border: 'border-purple-500/20 hover:border-purple-400/40',
        text: 'text-purple-400',
        glow: 'shadow-[0_0_15px_rgba(168,85,247,0.15)] bg-gradient-to-b from-purple-500/15 to-transparent'
      };
      default: return {
        border: 'border-cyan-500/20 hover:border-cyan-400/40',
        text: 'text-cyan-400',
        glow: 'shadow-[0_0_15px_rgba(34,211,238,0.15)] bg-gradient-to-b from-cyan-500/15 to-transparent'
      };
    }
  };

  return (
    <div className="relative bg-gray-950 text-white min-h-screen font-sans pb-24 overflow-hidden" ref={containerRef}>
      {/* Decorative neon backdrops */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* 1. Hero Header */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-semibold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 uppercase tracking-wider">
            SAE Fleet & Capability Deck
          </div>
          <h1 id="projects-hero-header" className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
            Engineered for <span className="text-cyan-400">High Performance</span>
          </h1>
          <p id="projects-hero-desc" className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From the roaring engines of our combustion line to the modular high-voltage accumulator packs in our EVs, explore the machines we have brought to life.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter Tabs */}
      <section className="px-6 mb-16 relative z-20">
        <div 
          id="projects-filters" 
          className="container mx-auto max-w-4xl bg-gray-900/60 border border-white/10 p-2 rounded-2xl backdrop-blur-md flex flex-wrap justify-center gap-1.5 shadow-xl"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Projects Showcase Grid */}
      <section className="px-6 relative z-10 mb-28">
        <div 
          ref={gridRef}
          className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((p, idx) => {
            const styles = getThemeStyles(p.color);
            return (
              <div
                key={idx}
                className={`project-card group relative overflow-hidden bg-gray-900/40 rounded-2xl border ${styles.border} backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between`}
              >
                {/* Colored dynamic background glow on card */}
                <div className={`absolute inset-0 ${styles.glow} opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                {/* Card Image */}
                <div className="relative overflow-hidden h-60 w-full border-b border-white/5">
                  <img 
                    src={p.imageUrl} 
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-gray-950/80 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
                    {p.icon}
                  </div>
                </div>

                <div className="p-6 relative z-10 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest ${styles.text} bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full inline-block`}>
                      {p.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  {/* Spec Sheets Block */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 border-t border-white/5 bg-gray-950/30 p-3 sm:p-4 rounded-xl">
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-300">
                      <FaTachometerAlt className="mr-2 text-cyan-400 w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">Speed: <strong>{p.specs.speed}</strong></span>
                    </div>
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-300">
                      <FaWeightHanging className="mr-2 text-cyan-400 w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">Weight: <strong>{p.specs.weight}</strong></span>
                    </div>
                    <div className="col-span-2 flex items-center text-[10px] sm:text-xs text-gray-300">
                      <FaBolt className="mr-2 text-cyan-400 w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">Power: <strong>{p.specs.powertrain}</strong></span>
                    </div>
                    <div className="col-span-2 flex items-center text-[10px] sm:text-xs text-gray-300">
                      <FaRulerCombined className="mr-2 text-cyan-400 w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">Frame: <strong>{p.specs.chassis}</strong></span>
                    </div>
                  </div>

                </div>

                <div className="p-4 bg-gray-950/70 border-t border-white/5 flex justify-end relative z-10">
                  <button className="text-cyan-400 hover:text-cyan-300 font-bold text-xs inline-flex items-center group/btn transition-colors">
                    Detailed Dynamic Specs <FaChevronRight className="ml-1 text-[10px] transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Engineering Capabilities Section */}
      <section className="py-20 bg-gray-900/40 border-t border-b border-white/5 relative z-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">Under-The-Hood Capabilities</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Designing competitive racing models demands excellence across several dynamic engineering disciplines.
            </p>
          </div>

          <div id="capabilities-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="capability-card bg-gray-950 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300 shadow-xl"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">{cap.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
