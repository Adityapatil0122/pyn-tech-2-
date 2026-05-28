
import React from 'react';
import { HeroContent } from './HeroContent';
import { ParallaxBackground } from './ParallaxBackground';
import { ChatInterface } from './ChatInterface';

export const Hero = () => {
  // Parallax effect for background elements
  const [scrollY, setScrollY] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative pt-16 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* Animated background */}
      <ParallaxBackground scrollY={scrollY} />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <HeroContent />
          <ChatInterface />
        </div>
      </div>
    </section>
  );
};

export default Hero;
