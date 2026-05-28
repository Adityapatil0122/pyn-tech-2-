
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bot, BrainCircuit, Database, Globe, Lock } from 'lucide-react';
import { SolutionCard } from './SolutionCard';

export const SolutionCards = () => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
        x: 20
      }} 
      animate={{
        opacity: 1,
        x: 0
      }} 
      transition={{
        duration: 0.8,
        delay: 0.3
      }} 
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pyn-darkBlue to-pyn-blue rounded-3xl blur-xl opacity-10"></div>
      
      {/* Modified to create smaller cards */}
      <div className="relative grid grid-cols-2 gap-4">
        <motion.div 
          initial={{
            opacity: 0,
            y: 10
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.5,
            delay: 0.4
          }} 
          className="space-y-4"
        >
          <SolutionCard 
            title="Predictive Analytics"
            description="Forecasting with 94% accuracy"
            icon={BarChart}
            status={{ text: "Active", color: "bg-emerald-400" }}
            variant="dark"
            iconBgClass="bg-white/20 backdrop-blur-sm"
          />
          
          <SolutionCard 
            title="NLP Engine"
            description="Understanding context from text"
            icon={Bot}
            status={{ text: "Processing", color: "bg-pyn-amber" }}
            variant="light"
            iconBgClass="bg-pyn-amber/20"
          />
        </motion.div>
        
        <motion.div 
          initial={{
            opacity: 0,
            y: 10
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.5,
            delay: 0.5
          }} 
          className="space-y-4 mt-4 md:mt-8"
        >
          <SolutionCard 
            title="Neural Network"
            description="Adaptive deep learning models"
            icon={BrainCircuit}
            status={{ text: "Learning", color: "bg-pyn-blue" }}
            variant="light"
            iconBgClass="bg-pyn-blue/10"
          />
          
          <SolutionCard 
            title="Data Platform"
            description="Unified AI/ML workflows"
            icon={Database}
            status={{ text: "Deployed", color: "bg-emerald-400" }}
            variant="dark"
            iconBgClass="bg-white/20"
          />
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0,
          y: 20
        }} 
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} 
        transition={{
          duration: 0.6,
          delay: 0.8
        }} 
        className="absolute -bottom-6 -right-6 p-2 bg-white rounded-lg shadow-lg"
      >
        <Globe className="h-4 w-4 text-pyn-blue" />
      </motion.div>
      
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0,
          y: -20
        }} 
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} 
        transition={{
          duration: 0.6,
          delay: 1
        }} 
        className="absolute -top-6 right-8 p-2 bg-white rounded-lg shadow-lg"
      >
        <Lock className="h-4 w-4 text-pyn-blue" />
      </motion.div>
    </motion.div>
  );
};
