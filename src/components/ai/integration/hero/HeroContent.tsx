
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export const HeroContent = () => {
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
        <span>API Solutions</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-pyn-blue">
        AI Integration & <span className="text-pyn-blue">API Services</span>
      </h1>
      
      <p className="text-lg mb-8 max-w-xl leading-relaxed md:text-lg text-gray-700">
        Connect your systems seamlessly with our powerful AI integration platform. Build scalable, secure, and intelligent connections between your applications and AI services.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-12">
        <Button size="lg" onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} className="bg-pyn-blue hover:bg-pyn-darkBlue text-white border-none">
          Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>;
};
