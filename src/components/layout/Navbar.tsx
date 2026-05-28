
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
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
    <header className={`sticky top-0 w-full border-b border-pyn-blue/10 bg-white/95 backdrop-blur z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-sm' : 'py-3'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between relative">
          {/* Logo with eager loading and explicit dimensions */}
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
    </header>
  );
};

export default Navbar;
