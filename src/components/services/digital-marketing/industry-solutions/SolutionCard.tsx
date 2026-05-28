
import React from 'react';
import { motion } from 'framer-motion';
import { Solution } from './types';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Building, Briefcase, Hotel, Stethoscope, GraduationCap } from "lucide-react";

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution, index }) => {
  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'shopping-bag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'building':
        return <Building className="w-5 h-5" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'hotel':
        return <Hotel className="w-5 h-5" />;
      case 'stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <ShoppingBag className="w-5 h-5" />; // Default icon
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pyn-amber/20">
            {renderIcon(solution.icon)}
          </div>
          <Badge variant="secondary" className="ml-2">Solution</Badge>
        </div>
        <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
        <p className="text-gray-600">{solution.description}</p>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
