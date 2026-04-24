'use client';

import React, { useEffect, useRef, useCallback } from 'react';

/* ================================================================
   OPTIMIZED HERO VIDEO BACKGROUND - Performance-focused version
   Reduced from 10 layers to 3 essential layers for better performance:
   1. Gradient background with subtle animation
   2. Minimal particle network (reduced density)
   3. Simple grid pattern overlay
   ================================================================ */

interface NetParticle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  phase: number; speed: number;
}

export default function HeroVideoBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const timeRef = useRef(0);
  const particlesRef = useRef<NetParticle[]>([]);

  const initParticles = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    // Drastically reduced particle count for performance
    const particles: NetParticle[] = [];
    const nodeCount = Math.floor(isMobile ? 15 : 25); // Reduced from 90 to 25
    
    for (let i = 0; i < nodeCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.01 + 0.005, // Slower animation
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Limit DPR for performance
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(W, H);
    }

    resize();
    window.addEventListener('resize', resize);

    function onMouseMove(e: MouseEvent) {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    function onMouseLeave() { mouseRef.current = null; }
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    function animate() {
      if (!W || !H) { animRef.current = requestAnimationFrame(animate); return; }
      ctx.clearRect(0, 0, W, H);
      timeRef.current++;
      const t = timeRef.current;

      // ========== LAYER 1: Optimized Gradient Background ==========
      const grad1 = ctx.createLinearGradient(0, 0, W, H);
      const hs1 = Math.sin(t * 0.002) * 5; // Reduced animation intensity
      grad1.addColorStop(0, `hsl(${218 + hs1}, 65%, 7%)`);
      grad1.addColorStop(0.5, `hsl(${224}, 58%, 9%)`);
      grad1.addColorStop(1, `hsl(${212 + hs1}, 70%, 6%)`);
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, W, H);

      // Simple center glow
      const centerGlow = ctx.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.4, W * 0.4);
      centerGlow.addColorStop(0, 'rgba(0, 60, 150, 0.1)');
      centerGlow.addColorStop(1, 'rgba(0, 20, 60, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, W, H);

      // ========== LAYER 2: Minimal Particle Network ==========
      const particles = particlesRef.current;
      const connDist = 150; // Reduced connection distance

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Simplified mouse interaction
        if (mouseRef.current) {
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 100 && mDist > 0) {
            const force = (100 - mDist) / 100 * 0.1;
            p.vx += (mdx / mDist) * force;
            p.vy += (mdy / mDist) * force;
          }
        }
        
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off edges
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        p.x = Math.max(0, Math.min(W, p.x));
        p.y = Math.max(0, Math.min(H, p.y));

        p.phase += p.speed;
        const pf = 0.8 + 0.2 * Math.sin(p.phase);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 180, 255, ${p.opacity * pf})`;
        ctx.fill();

        // Reduced connections (only every other particle)
        if (i % 2 === 0) {
          for (let j = i + 2; j < particles.length; j += 2) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < connDist) {
              const lo = (1 - dist / connDist) * 0.2;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(80, 160, 255, ${lo})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      // ========== LAYER 3: Simple Grid Pattern ==========
      ctx.strokeStyle = 'rgba(80, 150, 255, 0.02)';
      ctx.lineWidth = 0.5;
      const gs = 80; // Larger grid for fewer lines
      for (let x = 0; x < W; x += gs) {
        ctx.beginPath(); 
        ctx.moveTo(x, 0); 
        ctx.lineTo(x, H); 
        ctx.stroke();
      }
      for (let y = 0; y < H; y += gs) {
        ctx.beginPath(); 
        ctx.moveTo(0, y); 
        ctx.lineTo(W, y); 
        ctx.stroke();
      }

      // Simple vignette
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.8);
      vig.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vig.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto' }}
    />
  );
}