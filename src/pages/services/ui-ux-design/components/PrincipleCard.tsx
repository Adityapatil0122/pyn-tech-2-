
import React from 'react';
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PrincipleCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color?: string;
}

const PrincipleCard = ({ icon: Icon, title, subtitle, description, color = "from-pyn-blue to-pyn-darkBlue" }: PrincipleCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative h-full"
      whileHover={{ y: -5 }}
    >
      {/* Colored top strip */}
      <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${color}`}></div>
      
      <div className="p-4 sm:p-6 h-full flex flex-col">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 bg-gradient-to-r ${color}`}>
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900">{title}</h3>
          <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">{subtitle}</p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrincipleCard;
