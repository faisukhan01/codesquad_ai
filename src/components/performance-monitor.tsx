'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
        }
      }
    });

    observer.observe({ entryTypes: ['measure'] });

    // Monitor FPS
    let frames = 0;
    let lastTime = performance.now();
    
    function countFrames() {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime));
        if (fps < 30) {
          console.warn(`Low FPS detected: ${fps} fps`);
        }
        frames = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    }
    
    requestAnimationFrame(countFrames);

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}