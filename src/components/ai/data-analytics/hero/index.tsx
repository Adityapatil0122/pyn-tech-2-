
import React, { useState, useEffect } from 'react';
import { ParallaxBackground } from './ParallaxBackground';
import { HeroContent } from './HeroContent';
import { AnalyticsDashboard } from './AnalyticsDashboard';

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
          <AnalyticsDashboard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
