
import React from "react";
import { motion } from "framer-motion";
import { Code, Network, Server } from "lucide-react";

export const AnimatedIcons = () => {
  return (
    <motion.div 
      className="md:w-1/2 p-8" 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative h-80 w-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-48 h-48 shadow-lg flex items-center justify-center">
          <Server className="h-16 w-16 text-pyn-blue" />
        </div>
        <motion.div 
          className="absolute top-1/4 left-1/4 bg-pyn-blue/10 p-4 rounded-lg shadow-md" 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code className="h-8 w-8 text-pyn-blue" />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 bg-pyn-blue/10 p-4 rounded-lg shadow-md" 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Network className="h-8 w-8 text-pyn-blue" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-pyn-blue/30 rounded-full" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
        />
      </div>
    </motion.div>
  );
};
