
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Palette, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-pyn-gray to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-darkBlue rounded-full text-sm font-medium mb-2">
              UI/UX Design
            </div>
            
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pyn-blue to-pyn-darkBlue text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Design Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-pyn-blue to-pyn-darkBlue">Delight</span> & Convert
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Our strategic UI/UX design transforms digital products into intuitive, enjoyable experiences 
              that solve real user problems and drive business growth.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-pyn-blue hover:bg-pyn-darkBlue text-white" 
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10">
              {/* Design mockup with increased size */}
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-gray-800 p-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-xs ml-2">designproject.fig</div>
                </div>
                
                <div className="p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=2070"
                    alt="UI/UX Design Preview" 
                    className="rounded-lg shadow-lg w-full h-auto max-h-[300px] object-cover mx-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pyn-lightBlue/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pyn-lightBlue/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        {/* Feature cards in a single row */}
        <div className="grid grid-cols-4 gap-4 mt-16">
          {[{
            icon: Users,
            title: "User-Centered",
            description: "Research-driven solutions"
          }, {
            icon: Palette,
            title: "Visual Design",
            description: "Beautiful & functional UI"
          }, {
            icon: Sparkles,
            title: "Interactive",
            description: "Engaging experiences"
          }, {
            icon: Zap,
            title: "Conversion",
            description: "Results-oriented design"
          }].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all duration-300" style={{
              animationDelay: `${0.2 + index * 0.1}s`
            }}>
              <div className="w-12 h-12 bg-pyn-blue/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-pyn-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
