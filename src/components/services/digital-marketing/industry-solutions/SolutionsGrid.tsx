
import React from 'react';
import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';
import { Solution } from './types';

interface SolutionsGridProps {
  solutions: Solution[];
  activeIndustry: string;
}

const SolutionsGrid: React.FC<SolutionsGridProps> = ({ solutions, activeIndustry }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      key={activeIndustry}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {solutions.map((solution, index) => (
        <SolutionCard key={index} solution={solution} index={index} />
      ))}
    </motion.div>
  );
};

export default SolutionsGrid;
