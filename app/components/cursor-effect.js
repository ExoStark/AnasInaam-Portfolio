'use client';

import { useEffect, useState } from 'react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if element is clickable
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      );
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-indigo-500/20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-100 ease-out mix-blend-difference hidden md:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          scale: isPointer ? 1.5 : 1,
        }}
      />
      <div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-indigo-500 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-75 ease-out hidden md:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          scale: isPointer ? 2 : 1,
        }}
      />
    </>
  );
}
