
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavDropdownMenu from './NavDropdownMenu';
import { aiSolutions, webServices, productItems } from './navItems';

// Reusable NavLink component for DRY code
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-pyn-gray hover:text-pyn-darkBlue"
    aria-label={children as string}
  >
    {children}
  </Link>
);

const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center justify-center flex-1 relative" aria-label="Main navigation">
      <div className="flex items-center space-x-1">
        <NavDropdownMenu title="AI Solutions" items={aiSolutions} />
        <NavDropdownMenu title="Web Services" items={webServices} />
        <NavDropdownMenu title="Products" items={productItems} />
        <NavLink to="/clients">Our Clients</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <Button
        className="absolute right-4 bg-pyn-dark hover:bg-pyn-darkBlue text-white shadow-sm"
        onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
        aria-label="Open contact form"
      >
        Let's Talk
      </Button>
    </nav>
  );
};

export default DesktopNav;
