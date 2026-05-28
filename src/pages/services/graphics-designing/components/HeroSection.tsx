
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenTool, Layers, Image, Palette } from "lucide-react";

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
            <span className="inline-block px-3 py-1 bg-pyn-blue/10 text-pyn-darkBlue rounded-full text-sm font-medium mb-2 animate-fade-in">
              Graphics Design
            </span>
            
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pyn-blue to-pyn-darkBlue text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Visuals That <span className="text-transparent bg-clip-text bg-gradient-to-r from-pyn-blue to-pyn-darkBlue">Captivate</span> & Inspire
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Our creative design studio transforms ideas into compelling visual stories that connect with your audience and elevate your brand's presence.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-pyn-blue hover:bg-pyn-darkBlue text-white" 
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
              >
                Start Your Graphics Project <ArrowRight className="ml-2 h-5 w-5" />
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
              {/* Design showcase with reduced size */}
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-6">
                {/* Design showcase grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-lg overflow-hidden aspect-square shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-pyn-blue/30 to-pyn-lightBlue/30 mix-blend-multiply" />
                    <img 
                      src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" 
                      alt="Branding Design" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative rounded-lg overflow-hidden aspect-square shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-pyn-blue/50 to-pyn-blue/50 mix-blend-multiply" />
                    <img 
                      src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" 
                      alt="Creative Design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Design tools showcase */}
                <div className="mt-6 grid grid-cols-4 gap-2 pt-4 border-t border-gray-100">
                  <div className="flex flex-col items-center p-2 bg-pyn-blue/10 rounded-lg">
                    <div className="text-xs font-semibold text-pyn-darkBlue">Photoshop</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-pyn-gray rounded-lg">
                    <div className="text-xs font-semibold text-pyn-darkBlue">Illustrator</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-pyn-lightBlue/10 rounded-lg">
                    <div className="text-xs font-semibold text-pyn-darkBlue">InDesign</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-pyn-lightBlue/10 rounded-lg">
                    <div className="text-xs font-semibold text-pyn-blue">Figma</div>
                  </div>
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
            icon: PenTool,
            title: "Custom Illustrations",
            description: "Unique artwork for your brand"
          }, {
            icon: Layers,
            title: "Brand Identity",
            description: "Cohesive visual language"
          }, {
            icon: Image,
            title: "Print & Digital",
            description: "Cross-media visual solutions"
          }, {
            icon: Palette,
            title: "Art Direction",
            description: "Strategic visual guidance"
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
