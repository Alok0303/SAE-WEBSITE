// src/components/Navbar.jsx
import { useState, useEffect } from 'react'; // Import useEffect
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// --- Icon components remain the same ---
const MenuIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // --- ADD THIS LINE ---
  const location = useLocation();

  const navLinks = [
    { title: 'About', to: '/#about' },
    { title: 'Events', to: '/events' },
    { title: 'Projects', to: '/projects' },
    { title: 'Team', to: '/team' },
    { title: 'Sponsors', to: '/sponsors' },
  ];

  // --- ADD THIS ENTIRE useEffect HOOK ---
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled more than 50px
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* --- MODIFY THIS LINE --- */}
      <header 
         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
         ${hasScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
            SAE <span className="text-cyan-400">IITR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = link.to === '/#about' ? location.pathname === '/' : location.pathname === link.to;
              return (
                <Link
                  key={link.title}
                  to={link.to}
                  className={`transition-colors duration-200 font-medium ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* --- Mobile Menu remains the same --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-xs bg-gray-900 z-50 p-6 md:hidden border-l border-white/10"
          >
            <div className="flex justify-end mb-8">
              <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                const isActive = link.to === '/#about' ? location.pathname === '/' : location.pathname === link.to;
                return (
                  <Link
                    key={link.title}
                    to={link.to}
                    onClick={toggleMobileMenu}
                    className={`text-2xl transition-colors duration-200 font-medium ${
                      isActive ? 'text-cyan-400 font-bold' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;