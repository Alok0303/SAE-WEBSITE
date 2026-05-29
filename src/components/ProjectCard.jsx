// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ProjectCard = ({ imageUrl, title, description, link }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-lg bg-gray-900 shadow-lg border border-white/10"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }} // The animation triggers when 50% of the card is visible
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }} // Effect on hover
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-56 object-cover" 
        loading="lazy" // Natively lazy-loads the image
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 h-24">{description}</p>
        <a
          href={link}
          className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center group"
        >
          Learn More
          <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;