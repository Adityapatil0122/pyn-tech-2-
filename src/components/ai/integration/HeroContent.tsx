import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export const HeroContent = () => {
  return <motion.div className="md:w-1/2 p-8 md:pr-12" initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.5
  }}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-pyn-blue">
        AI Integration & API Services
      </h1>
      <p className="mb-8 text-gray-700 max-w-2xl leading-relaxed text-lg">
        Connect your systems seamlessly with our powerful AI integration platform. Build scalable, secure, and intelligent connections between your applications and AI services.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button size="lg" className="bg-pyn-blue hover:bg-pyn-darkBlue" onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}>
          Request Integration Consultation
        </Button>
      </div>
    </motion.div>;
};