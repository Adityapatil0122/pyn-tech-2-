
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { aiSolutions, webServices, productItems } from "./navItems";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-white z-40 overflow-y-auto border-t border-pyn-blue/10 pb-safe-area-inset-bottom">
      <div className="flex flex-col space-y-3 py-4 max-h-full">
        {/* Mobile AI Solutions Section */}
        <div className="px-4 py-2">
          <h3 className="text-sm font-semibold text-pyn-dark mb-2">AI Solutions</h3>
          <div className="space-y-2 pl-2">
            {aiSolutions.map((item, index) => (
              <Link 
                key={index} 
                to={item.link} 
                className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-pyn-gray" 
                onClick={onClose}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile Web Services Section */}
        <div className="px-4 py-2">
          <h3 className="text-sm font-semibold text-pyn-dark mb-2">Web Services</h3>
          <div className="space-y-2 pl-2">
            {webServices.map((item, index) => (
              <Link 
                key={index} 
                to={item.link} 
                className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-pyn-gray" 
                onClick={onClose}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile Products Section */}
        <div className="px-4 py-2">
          <h3 className="text-sm font-semibold text-pyn-dark mb-2">Products</h3>
          <div className="space-y-2 pl-2">
            {productItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.link} 
                className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-pyn-gray" 
                onClick={onClose}
              >
                {item.title} {item.description.includes("Coming Soon") && <span className="ml-1 text-xs text-pyn-blue">(Coming Soon)</span>}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Remaining Mobile Navigation Items */}
        <Link to="/clients" className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-pyn-gray" onClick={onClose}>
          Our Clients
        </Link>
        
        <Link to="/blogs" className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-pyn-gray" onClick={onClose}>
          Blogs
        </Link>
        
        <Link to="/contact" className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-pyn-gray" onClick={onClose}>
          Contact
        </Link>
        
        <div className="px-4 py-2">
          <Button 
            className="w-full bg-pyn-dark hover:bg-pyn-darkBlue" 
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-contact'));
              onClose();
            }}
          >
            Let's Talk
          </Button>
        </div>
        
        {/* Add padding at the bottom to ensure last items are visible when scrolled */}
        <div className="h-4"></div>
      </div>
    </div>
  );
};

export default MobileNav;
