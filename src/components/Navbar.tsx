import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
      : 'bg-transparent py-6'
  }`;

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `relative px-3 py-2 text-base transition-all duration-200 ${
      isActive 
        ? 'font-medium' 
        : 'hover:text-neutral-600'
    }`;

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-semibold tracking-tight">
          Victor Ope
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/work" className={navLinkClasses}>Work</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-neutral-900 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col space-y-6 text-lg">
          <NavLink to="/" className={navLinkClasses} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses} onClick={toggleMenu}>About</NavLink>
          <NavLink to="/work" className={navLinkClasses} onClick={toggleMenu}>Work</NavLink>
          <NavLink to="/contact" className={navLinkClasses} onClick={toggleMenu}>Contact</NavLink>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;