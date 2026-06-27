// src/pages/ProjectsPage.jsx
import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBolt, FaGasPump, FaCompass, FaChevronRight, FaRulerCombined, FaWeightHanging, FaTachometerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// ─── NEW ISOLATED PROJECT CARD COMPONENT ──────────────────────────────────────
const ProjectCard = ({ project, addProjectRef, getThemeStyles }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const styles = getThemeStyles(project.color);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [project.images]);

  // Dynamic helper to match specific metric keys to their respective icons
  const getSpecIcon = (key) => {
    switch (key.toLowerCase()) {
      case 'speed': return <FaTachometerAlt className="mr-2 text-cyan-400 w-3.5 h-3.5 flex-shrink-0" />;
      case 'weight': return <FaWeightHanging className="mr-2 text-cyan-400 w-3.5 h-3.5 flex-shrink-0" />;
      case 'powertrain':
      case 'power': return <FaBolt className="mr-2 text-cyan-400 w-3.5 h-3.5 flex-shrink-0" />;
      default: return <FaRulerCombined className="mr-2 text-cyan-400 w-3.5 h-3.5 flex-shrink-0" />;
    }
  };

  // Determine if we should make a grid item full width (span 2 columns)
  const isFullWidthSpec = (key) => {
    return ['powertrain', 'power', 'chassis', 'frame'].includes(key.toLowerCase());
  };

  return (
    <div
      ref={addProjectRef}
      className="project-card group relative overflow-hidden bg-gray-900/40 rounded-2xl border border-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
    >
      {/* Colored dynamic background glow on card */}
      <div className={`absolute inset-0 ${styles.glow} opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

      {/* Card Image Slideshow Container */}
      <div className="relative overflow-hidden h-60 w-full border-b border-white/5 bg-black flex items-center justify-center">
        {project.images.map((imgUrl, index) => (
          <img
            key={imgUrl + index}
            src={imgUrl}
            alt={`${project.title} slide ${index}`}
            className={`absolute max-w-full max-h-full object-contain transition-all duration-700 ease-in-out group-hover:scale-102 ${
              index === currentImgIndex 
                ? 'opacity-100 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-98 pointer-events-none'
            }`}
          />
        ))}
        
        {/* Simple slide indicator dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/5">
            {project.images.map((_, index) => (
              <span 
                key={index} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImgIndex ? 'w-4 bg-cyan-400' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute top-4 right-4 bg-gray-950/80 border border-white/10 p-3 rounded-xl backdrop-blur-sm z-20">
          {project.icon}
        </div>
      </div>

      <div className="p-6 relative z-10 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className={`text-[10px] font-extrabold uppercase tracking-widest ${styles.text} bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full inline-block`}>
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            {project.desc}
          </p>
        </div>

        {/* ─── NEW COMPLETELY OPTIONAL SPECIFICATION SHEET BLOCK ───────────────── */}
        {project.specs && Object.keys(project.specs).length > 0 && (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 border-t border-white/5 bg-gray-950/30 p-3 sm:p-4 rounded-xl mt-auto">
            {Object.entries(project.specs).map(([key, value]) => (
              <div 
                key={key} 
                className={`flex items-center text-[10px] sm:text-xs text-gray-300 ${
                  isFullWidthSpec(key) ? 'col-span-2' : ''
                }`}
              >
                {getSpecIcon(key)}
                <span className="truncate">
                  {key.charAt(0).toUpperCase() + key.slice(1)}: <strong>{value}</strong>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  
  const projectCardRefs = useRef([]);
  projectCardRefs.current = [];
  
  const capabilityCardRefs = useRef([]);
  capabilityCardRefs.current = [];

  const addProjectRef = (el) => {
    if (el && !projectCardRefs.current.includes(el)) {
      projectCardRefs.current.push(el);
    }
  };

  const addCapabilityRef = (el) => {
    if (el && !capabilityCardRefs.current.includes(el)) {
      capabilityCardRefs.current.push(el);
    }
  };

  const categories = ['All', 'Combustion', 'Electric', 'Design Concepts'];

  // Updated projects array replacing single `imageUrl` with an array of `images`
  const projects = [
    {
      title: "Formula Kart Design Challenge '25 - VANDAL",
      category: "Combustion",
      desc: "Our latest combustion flagship. Designed to optimize dynamic weight distribution and peak cornering lateral-acceleration.",
      images: [
        "photos/projects/vandal1.jpeg",
        "photos/projects/vandal2.jpeg",
        "photos/projects/vandal3.jpeg",
        "photos/projects/vandal4.jpeg"
      ],
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
      title: "Indian karting race '26 - Brahmastra",
      category: "Combustion",
      desc: "An ultra-rugged off-road monster engineered to survive extreme rocks, drops, and water hazards.",
      images: [
        "photos/projects/Brahmastra1.jpeg",
        "photos/projects/Brahmastra2.jpeg"
      ],
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
      title: "Radio Controlled Nitro car",
      category: "Electric",
      desc: "Radio-Controlled (RC) Cars are battery/fuel powered miniature ATV (all-terrain vehicle) cars that can be controlled from a distant radio controller. Every year, a team of dedicated members are selected for building up their very own RC Nitro car. This project specifically focuses on designing and fabrication of a Nitro-fuel powered IC-Engine Car (not to be confused with electric cars). Major aspects of project work includes working on Engine, Chassis, Drivetrain, Suspension, Body-Balance, Runtime and Upkeep of the car. The product takes part in Powerdrift, a center-stage event at IIT-R technical fest – Cognizance and there’s no end to its competitive nature!",
      images: [
        "photos/projects/Rccar.png"
      ],
      icon: <FaBolt className="text-cyan-400" />,
      color: "cyan"
    },
    {
      title: "Active Aero EV Concept",
      category: "Electric",
      desc: "Quadcopter unmanned aerial vehicles are used for surveillance by military and law enforcement agencies, video shooting as well as search and rescue missions in urban environments.These project comprises of a Quadcopter with a camera and the aim is to fabricate Flight Controller Designing, Electronics and assembling of components. This project unifies the Mechanical. Electronic as well as Coding skills of the team members. The product would be a Quad-copter with a camera mounted on it and the flight controller designing is also involved.",
      images: [
        "photos/projects/Camcopter.png"
      ],
      icon: <FaBolt className="text-cyan-400" />,
      color: "cyan"
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

  const filteredProjects = projects.filter(p => 
    activeFilter === 'All' ? true : p.category === activeFilter
  );

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

      if (projectCardRefs.current.length > 0) {
        gsap.fromTo(projectCardRefs.current, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

      if (capabilityCardRefs.current.length > 0) {
        gsap.fromTo(capabilityCardRefs.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#capabilities-grid',
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 2. Tab Filter Stagger Transition
  useLayoutEffect(() => {
    if (projectCardRefs.current.length > 0) {
      gsap.killTweensOf(projectCardRefs.current);
      gsap.fromTo(projectCardRefs.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [activeFilter]);

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
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.title}
              project={project}
              addProjectRef={addProjectRef}
              getThemeStyles={getThemeStyles}
            />
          ))}
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
                ref={addCapabilityRef}
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