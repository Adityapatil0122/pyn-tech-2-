
import React from 'react';
import { HeroTitle } from './HeroTitle';
import { SolutionCards } from './SolutionCards';
import { ParallaxBackground } from './ParallaxBackground';

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
    <section className="relative pt-16 pb-28 md:py-28 overflow-hidden">
      {/* Animated background */}
      <ParallaxBackground scrollY={scrollY} />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <HeroTitle />
          <SolutionCards />
        </div>
      </div>
    </section>
  );
};
