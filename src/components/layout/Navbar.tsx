
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  // Add scroll event listener to handle navbar behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // When mobile menu is open, prevent body scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    }
  }, [isOpen]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b border-pyn-blue/15 bg-white/85 py-3 backdrop-blur-xl transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
      initial={prefersReducedMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pyn-lightBlue/60 to-transparent"
        animate={prefersReducedMotion ? undefined : { opacity: isScrolled ? [0.35, 0.9, 0.35] : 0.25 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between relative">
          {/* Logo with eager loading and explicit dimensions */}
          <motion.div whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link to="/" className="flex items-center z-10">
              <img
                alt="Pyn Technologies"
                className="h-10 w-auto md:h-11"
                src="/pyn-logo.svg"
                loading="eager"
                width="280"
                height="72"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <DesktopNav />
          
          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden text-gray-600 hover:text-pyn-blue p-2 focus:outline-none z-10">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </motion.header>
  );
};

export default Navbar;
