// src/components/Footer.jsx
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { title: 'About', to: '/#about' },
    { title: 'Events', to: '/events' },
    { title: 'Projects', to: '/#projects' },
    { title: 'Team', to: '/team' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com', 'aria-label': 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com', 'aria-label': 'GitHub' },
    { icon: <FaInstagram />, href: 'https://instagram.com', 'aria-label': 'Instagram' },
    { icon: <FaEnvelope />, href: 'mailto:sae@iitr.ac.in', 'aria-label': 'Email' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Mission */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              SAE <span className="text-cyan-400">IITR</span>
            </h3>
            <p className="max-w-xs">
              Driving innovation and fostering the next generation of automobile engineers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.to} className="hover:text-cyan-400 transition-colors duration-200">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social['aria-label']}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social['aria-label']}
                  className="text-2xl hover:text-cyan-400 hover:scale-110 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SAE IIT Roorkee. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;