
import React from 'react';
import { Industry } from './types';

interface IndustryNavigationProps {
  industries: Industry[];
  activeIndustry: string;
  setActiveIndustry: (id: string) => void;
}

const IndustryNavigation: React.FC<IndustryNavigationProps> = ({ 
  industries, 
  activeIndustry, 
  setActiveIndustry 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {industries.map((industry) => (
        <button
          key={industry.id}
          onClick={() => setActiveIndustry(industry.id)}
          className={`px-4 py-2 rounded-md transition-all ${
            activeIndustry === industry.id
              ? "bg-pyn-blue text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span>{industry.name}</span>
        </button>
      ))}
    </div>
  );
};

export default IndustryNavigation;
