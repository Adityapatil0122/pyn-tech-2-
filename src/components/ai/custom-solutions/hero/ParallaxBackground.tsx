
import React from 'react';

interface ParallaxBackgroundProps {
  scrollY: number;
}

export const ParallaxBackground = ({
  scrollY
}: ParallaxBackgroundProps) => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-pyn-gray via-white to-pyn-blue/10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div 
          className="absolute top-10 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-pyn-lightBlue to-pyn-amber/30 opacity-20 blur-3xl" 
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        ></div>
        <div 
          className="absolute top-40 right-[15%] w-80 h-80 rounded-full bg-gradient-to-r from-pyn-lightBlue to-pyn-amber/30 opacity-20 blur-3xl" 
          style={{
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-[30%] w-96 h-96 rounded-full bg-gradient-to-r from-pyn-blue to-pyn-lightBlue opacity-10 blur-3xl" 
          style={{
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        ></div>
      </div>
    </>
  );
};
