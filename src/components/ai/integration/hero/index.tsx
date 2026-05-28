
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ParallaxBackground } from './ParallaxBackground';
import { HeroContent } from './HeroContent';

export const Hero = () => {
  // Parallax effect for background elements
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background */}
      <ParallaxBackground scrollY={scrollY} />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <HeroContent />
          
          {/* Animated Image Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.21, 1.11, 0.81, 0.99]
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pyn-blue/10 to-pyn-lightBlue/10 rounded-2xl blur-xl"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
              alt="AI Integration Technology" 
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-gray-100 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-pyn-blue/20 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div 
              className="absolute -top-4 -left-4 w-32 h-32 bg-pyn-lightBlue/10 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-pyn-blue to-pyn-lightBlue rounded-full opacity-20 blur-xl"
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 -right-6 w-12 h-12 bg-gradient-to-r from-pyn-lightBlue to-pyn-amber rounded-full opacity-25 blur-lg"
              animate={{
                y: [10, -10, 10],
                x: [5, -5, 5],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
