
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const HeroTitle = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.7
  }}>
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pyn-blue/10 text-pyn-darkBlue font-medium text-sm mb-6">
        
        <span>AI Innovation</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-pyn-blue">
        Custom AI Solutions for <span className="text-pyn-blue">Business Transformation</span>
      </h1>
      
      <p className="text-lg mb-8 max-w-xl leading-relaxed md:text-lg text-gray-700">
        Harness the power of artificial intelligence with tailor-made solutions that solve your unique 
        business challenges and create sustainable competitive advantages.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-12">
        <Button size="lg" onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} className="bg-pyn-blue hover:bg-pyn-darkBlue text-white">
          Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Stats removed to maintain consistency with other AI solution pages */}
      </div>
    </motion.div>;
};
