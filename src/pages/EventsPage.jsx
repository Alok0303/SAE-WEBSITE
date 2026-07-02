// src/pages/EventsPage.jsx
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCalendarAlt, FaMapMarkerAlt, FaCogs, FaTrophy, FaBolt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const EventsPage = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  // Create an array ref to target mapped elements cleanly
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Animations
      const heroTimeline = gsap.timeline();
      heroTimeline.from('#events-hero-glow', {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: 'power3.out',
      })
      .from('#events-hero-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      }, '-=1')
      .from('#events-hero-desc', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6');

      // 2. Upcoming Events Stagger (Using direct array references)
      if (cardRefs.current.length > 0) {
        gsap.fromTo(cardRefs.current, 
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#upcoming-section',
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

      // 3. Timeline line drawing animation
      gsap.from('#timeline-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: true,
        }
      });

      // 4. Timeline item reveal stagger
      const timelineItems = gsap.utils.toArray('.timeline-item');
      timelineItems.forEach((item) => {
        const dot = item.querySelector('.timeline-dot');
        const content = item.querySelector('.timeline-content');
        
        gsap.from(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        });

        gsap.from(content, {
          x: item.classList.contains('md:flex-row-reverse') ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const upcomingEvents = [
    {
      title: "Formula Bharat '27 - Project VOLT",
      date: "January 21-26, 2027",
      location: "Kari Motor Speedway, Coimbatore",
      phase: "Design & Simulations",
      desc: "Our highly anticipated shift to a fully custom electric vehicle powertrain, built to excel in both endurance and efficiency.",
      color: "from-cyan-500 to-blue-600",
      icon: <FaBolt className="text-2xl text-cyan-400" />
    },
    {
      title: "Baja SAE India '27 - GOLIATH",
      date: "March 11-15, 2027",
      location: "NATRAX, Indore",
      phase: "Component Sourcing",
      desc: "An aggressive all-terrain vehicle sporting automated continuously variable transmission (CVT) and reinforced carbon-steel frame.",
      color: "from-amber-500 to-orange-600",
      icon: <FaCogs className="text-2xl text-amber-400" />
    }
  ];

  const pastMilestones = [
    {
      year: "2025",
      title: "AIR 2 in Cost Evaluation",
      desc: "Demonstrated flawless budget management and cost-effective engineering.",
      tag: "FORMULA KART DESIGN CHALLENGE",
    },
    {
      year: "2025",
      title: "AIR 3 in Design Evaluation",
      desc: "Recognized for pure engineering design, structural integrity, and innovation.",
      tag: "FORMULA KART DESIGN CHALLENGE",
    },
    {
      year: "2025",
      title: "AIR 7 in Business Plan",
      desc: "Proved our team's business acumen with a highly scalable and viable pitch.",
      tag: "FORMULA KART DESIGN CHALLENGE",
    },
    {
      year: "2025",
      title: "Top 10 overall in FKDC",
      desc: "Secured a top 10 overall finish in the highly competitive Formula Kart Design Challenge.",
      tag: "FORMULA KART DESIGN CHALLENGE",
    },
    {
      year: "2025",
      title: "Ranked 8th in Skidpad",
      desc: "Showcased exceptional chassis balance and suspension tuning to navigate tight corners with precision.",
      tag: "FORMULA KART DESIGN CHALLENGE",
    },
    {
      year: "2025",
      title: "Ranked 9th in Lateral Acceleration",
      desc: "Achieved high cornering speeds with optimized aerodynamic downforce and maximum mechanical grip.",
      tag: "FORMULA KART DESIGN CHALLENGE",
    },
    {
      year: "2025",
      title: "Ranked 11th in Endurance",
      desc: "Proved the reliability and durability of our powertrain over a rigorous and demanding long-distance race.",
      tag: "FORMULA KART DESIGN CHALLENGE",
    },
    {
      year: "2025",
      title: "Transition to EV Frameworks",
      desc: "Voted and initiated the club's pivot to electric drivetrains. Hand-crafted our first custom modular battery box and advanced thermodynamic cooling ducts.",
      tag: "Technological Pivot",
    },
    {
      year: "2024",
      title: "Formula Bharat '24 (AGNI)",
      desc: "Debuted AGNI. Ranked 4th in Engineering Design and successfully completed the rigorous tilt, noise, and brake tests in record time.",
      tag: "Top 5 Design",
      highlight: true
    },
    {
      year: "2023",
      title: "Baja SAE India '23 (PREDATOR)",
      desc: "Conquered Indore NATRAX's brutal mud course. Cleared the 4-hour high-impact endurance race with zero major failures, finishing in the top tier.",
      tag: "Endurance Masters",
    },
  ];

  return (
    <div className="relative bg-gray-950 text-white min-h-screen font-sans overflow-hidden" ref={containerRef}>
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 flex flex-col justify-center items-center">
        <div id="events-hero-glow" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[250px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-[40px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-semibold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 uppercase tracking-wider">
            Race Calendar & Archives
          </div>
          <h1 id="events-hero-title" className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
            Pushing Boundaries, <span className="text-cyan-400">Breaking Records</span>
          </h1>
          <p id="events-hero-desc" className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From state-of-the-art simulations in our campus labs to high-octane engineering competitions across India, discover where we are heading and where we have made our mark.
          </p>
        </div>
      </section>

      {/* 2. Upcoming Events Section */}
      <section id="upcoming-section" className="py-16 md:py-24 bg-gray-900/50 border-t border-b border-white/5 relative z-10 px-6 isolate">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Gearing Up for the Future
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our active developmental seasons. We are currently manufacturing and tuning our next-generation flagships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                ref={addToRefs}
                className="upcoming-card bg-gray-950/80 rounded-2xl border border-white/10 hover:border-cyan-400/30 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Visual Accent Header */}
                <div className={`h-2 bg-gradient-to-r ${event.color}`} />
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      Season 2026-27
                    </span>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      {event.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">{event.desc}</p>
                  
                  {/* Detailed Specs */}
                  <div className="space-y-3 pt-6 border-t border-white/5">
                    <div className="flex items-center text-sm text-gray-300">
                      <FaCalendarAlt className="mr-3 text-cyan-400 w-4 h-4 flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <FaMapMarkerAlt className="mr-3 text-cyan-400 w-4 h-4 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <FaCogs className="mr-3 text-cyan-400 w-4 h-4 flex-shrink-0" />
                      <span>Phase: <strong className="text-cyan-400 font-semibold">{event.phase}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 border-t border-white/5 flex justify-end">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105">
                    Follow Development
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Timeline / Milestones Section */}
      <section className="py-20 md:py-32 px-6" ref={timelineRef}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A chronological look at how we have evolved, scaled, and dominated automotive forums year after year.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Center Line for desktop */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2" />
            {/* GSAP animated glowing line */}
            <div id="timeline-line" className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-20">
              {pastMilestones.map((m, idx) => {
                const isEven = idx % 2 !== 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-stretch timeline-item ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Circle Dot on the line */}
                    <div className="absolute left-4 md:left-1/2 top-6 md:top-8 -translate-x-1/2 z-20">
                      <div className="timeline-dot w-6 h-6 rounded-full bg-gray-950 border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-125" />
                    </div>

                    {/* Timeline Content Block */}
                    <div className={`w-full md:w-1/2 pl-12 ${isEven ? 'md:pl-8 md:pr-0' : 'md:pr-8 md:pl-0'}`}>
                      <div className={`timeline-content bg-gray-900/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border ${
                        m.highlight ? 'border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.15)] bg-gray-900/80' : 'border-white/5'
                      } relative hover:border-white/15 transition-all duration-300`}>
                        
                        {/* Glowing highlight indicator */}
                        {m.highlight && (
                          <span className="absolute -top-3 right-6 bg-cyan-400 text-black font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-flex items-center">
                            <FaTrophy className="mr-1" /> Flagship Success
                          </span>
                        )}

                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase block mb-1">
                          {m.tag}
                        </span>
                        
                        <div className="flex items-baseline space-x-3 mb-3">
                          <span className="text-3xl font-extrabold text-white">{m.year}</span>
                          <h3 className="text-lg md:text-xl font-bold text-gray-200">{m.title}</h3>
                        </div>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed whitespace-pre-line">{m.desc}</p>
                      </div>
                    </div>

                    {/* Empty block to balance grid on desktop */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Call To Action */}
      <section className="py-16 md:py-24 bg-gradient-to-t from-gray-950 to-gray-900 px-6 border-t border-white/5 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">Want to see our cars live?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We host campus showcases, engine fire-ups, and static reviews. Follow our newsletter and stay updated on the next tire-burn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-900 border border-white/10 text-white rounded-full px-6 py-3 text-sm focus:outline-none focus:border-cyan-400 w-full sm:w-80"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-extrabold text-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;