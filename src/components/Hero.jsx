// src/components/Hero.jsx
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// A placeholder video URL. Replace this with your own video file later.
const videoURL = "videos/5638361-uhd_3840_2160_25fps.mp4";

const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      }).to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      }).from("#welcome", {
        opacity: 0,
        duration: 0.5,
      })
    }, comp);

    return () => ctx.revert();
  }, []);


  return (
    <div className="relative h-screen" ref={comp}>
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoURL}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Content */}
      <div id="welcome" className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Driving Engineering Forward
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
          We are the Students of Automobile Engineering at IIT Roorkee, turning classroom theory into competitive reality.
        </p>
        <Link
          to="/projects"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
        >
          Explore Our Vehicles <FaArrowRight className="ml-2" />
        </Link>
      </div>

      {/* Intro Slider - CORRECTED */}
      {/* <div id="intro-slider" className="h-screen p-10 bg-gray-50 absolute top-0 left-0 z-30 w-full flex flex-col gap-10 tracking-tight"> */}
        {/* Added text-black to make the titles visible */}
        {/* <h1 className="text-7xl text-black" id="title-1">Software Engineer</h1> */}
        {/* <h1 className="text-7xl text-black" id="title-2">Designer</h1> */}
        {/* <h1 className="text-7xl text-black" id="title-3">Creator</h1> */}
      {/* </div> */}
    </div>
  );
};

export default Hero;