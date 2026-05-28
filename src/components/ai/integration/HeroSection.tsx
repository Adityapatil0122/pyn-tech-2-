
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Network, Server } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-28 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 relative overflow-hidden">
        {/* Background pattern with geometric shapes */}
        <div className="absolute inset-0 bg-pyn-gray z-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pyn-blue opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pyn-blue opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <motion.div className="md:w-1/2 p-8 md:pr-12" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-pyn-darkBlue">
              AI Integration & API Services
            </h1>
            <p className="text-xl mb-8 text-gray-700 max-w-2xl leading-relaxed">
              Connect your systems seamlessly with our powerful AI integration platform. Build scalable, secure, and intelligent connections between your applications and AI services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-pyn-blue hover:bg-pyn-darkBlue" onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}>
                Request Integration Consultation
              </Button>
            </div>
          </motion.div>
          
          <motion.div className="md:w-1/2 p-8" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
            <div className="relative h-80 w-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-48 h-48 shadow-lg flex items-center justify-center">
                <Server className="h-16 w-16 text-pyn-blue" />
              </div>
              <motion.div className="absolute top-1/4 left-1/4 bg-pyn-blue/10 p-4 rounded-lg shadow-md" animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <Code className="h-8 w-8 text-pyn-blue" />
              </motion.div>
              <motion.div className="absolute bottom-1/4 right-1/4 bg-pyn-blue/10 p-4 rounded-lg shadow-md" animate={{
              y: [0, 10, 0]
            }} transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}>
                <Network className="h-8 w-8 text-pyn-blue" />
              </motion.div>
              
              <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-pyn-blue/30 rounded-full" animate={{
              rotate: 360
            }} transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
