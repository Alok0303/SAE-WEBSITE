// src/pages/HomePage.jsx
import About from '../components/About';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div>
      <Hero /> {/* <-- THIS LINE IS DISPLAYING YOUR HERO SECTION */}
      <About />
    </div>
  );
};

export default HomePage;