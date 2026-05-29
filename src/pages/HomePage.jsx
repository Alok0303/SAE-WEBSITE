// src/pages/HomePage.jsx
import About from '../components/About';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const HomePage = () => {
  return (
    <div>
      <Hero /> {/* <-- THIS LINE IS DISPLAYING YOUR HERO SECTION */}
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;