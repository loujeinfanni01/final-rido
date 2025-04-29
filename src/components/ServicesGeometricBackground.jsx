import React from 'react';
import { useState, useEffect, useRef } from 'react';

const CirclesGeometricBackground = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollOffset, setScrollOffset] = useState(0);
  const animationRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation effect
  useEffect(() => {
    // Slow oscillating animation
    let direction = 1;
    let position = 0;
    
    const animate = () => {
      // Move in specified direction
      position += 0.3 * direction;
      
      // Reverse direction at limits (oscillating between -20 and 20)
      if (position > 20) direction = -1;
      if (position < -20) direction = 1;
      
      setScrollOffset(position);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Calculate responsive dimensions
  const isMobile = windowWidth < 768;
  const width = isMobile ? 300 : 400;
  const height = isMobile ? 900 : 1200;
  const gridSize = isMobile ? 100 : 120;
  
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="relative">
        <svg 
          viewBox={`0 0 ${width} ${height}`}
          className="max-w-full transform transition-transform duration-300"
          style={{ transform: `translateY(${scrollOffset}px)` }}
        >
          {/* Background */}
          <rect x="0" y="0" width={width} height={height} fill="black" />
          
          {/* Vertical center line */}
          <line x1={width/2} y1="0" x2={width/2} y2={height} stroke="#535555" strokeWidth="1" />
          
          {/* Horizontal grid lines */}
          {Array(Math.ceil(height/gridSize)).fill().map((_, i) => (
            <line 
              key={`h-line-${i}`}
              x1="0" 
              y1={i * gridSize} 
              x2={width} 
              y2={i * gridSize} 
              stroke="#535555" 
              strokeWidth="1" 
            />
          ))}
          
          {/* Left and right vertical boundary lines */}
          <line x1="0" y1="0" x2="0" y2={height} stroke="#535555" strokeWidth="1" />
          <line x1={width} y1="0" x2={width} y2={height} stroke="#535555" strokeWidth="1" />
          
          {/* Full circles with slight vertical offset based on animation */}
          <circle 
            cx={width/2} 
            cy={gridSize*3} 
            r={width/2} 
            fill="none" 
            stroke="#535555" 
            strokeWidth="1" 
          />
          
          <circle 
            cx={width/2} 
            cy={gridSize*6} 
            r={width/2} 
            fill="none" 
            stroke="#535555" 
            strokeWidth="1" 
          />
          
          <circle 
            cx={width/2} 
            cy={gridSize*9} 
            r={width/2} 
            fill="none" 
            stroke="#535555" 
            strokeWidth="1" 
          />
        </svg>
      </div>
    </div>
  );
};

export default CirclesGeometricBackground;