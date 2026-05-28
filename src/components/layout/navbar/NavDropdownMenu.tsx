
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

type DropdownItem = {
  title: string;
  description: string;
  link: string;
};

type NavDropdownMenuProps = {
  title: string;
  items: DropdownItem[];
};

const NavDropdownMenu: React.FC<NavDropdownMenuProps> = ({ title, items }) => {
  return (
    <div className="dropdown relative group">
      <button className="flex items-center rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-pyn-gray hover:text-pyn-darkBlue">
        {title} <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className="dropdown-menu absolute left-0 mt-3 w-72 overflow-hidden rounded-lg border border-pyn-blue/10 bg-white shadow-xl z-20">
        <div className="grid grid-cols-1 gap-1 p-2">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={item.link} 
              className="rounded-md p-3 transition-colors hover:bg-pyn-gray"
            >
              <div className="font-medium text-pyn-dark">{item.title}</div>
              <div className="text-xs text-slate-500">{item.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdownMenu;
