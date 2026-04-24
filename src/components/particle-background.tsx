'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  isGlow: boolean;
  pulsePhase: number;
  pulseSpeed: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const timeRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    // Significantly reduced particle count for better performance
    const count = Math.min(Math.floor((width * height) / 15000), 60); // Reduced from 160 to 60
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const isGlow = Math.random() < 0.1; // Reduced glow particles
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2, // Slower movement
        vy: (Math.random() - 0.5) * 0.2,
        radius: isGlow ? Math.random() * 2 + 1.5 : Math.random() * 1.5 + 0.5,
        opacity: isGlow ? Math.random() * 0.3 + 0.3 : Math.random() * 0.4 + 0.2,
        isGlow,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.015 + 0.008, // Slower pulse
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function animate() {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { width, height } = canvas;
      const displayWidth = canvas.offsetWidth;
      const displayHeight = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Vignette effect
      const vignette = ctx.createRadialGradient(
        displayWidth / 2, displayHeight / 2, displayHeight * 0.3,
        displayWidth / 2, displayHeight / 2, displayHeight * 0.9
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      const particles = particlesRef.current;
      const connectionDistance = 120; // Reduced from 180
      timeRef.current += 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Simplified mouse repulsion
        if (mouseRef.current) {
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 100 && mDist > 0) { // Reduced from 150
            const force = (100 - mDist) / 100 * 0.2; // Reduced force
            p.vx += (mdx / mDist) * force;
            p.vy += (mdy / mDist) * force;
          }
        }

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > displayWidth) p.vx *= -1;
        if (p.y < 0 || p.y > displayHeight) p.vy *= -1;

        // Clamp position
        p.x = Math.max(0, Math.min(displayWidth, p.x));
        p.y = Math.max(0, Math.min(displayHeight, p.y));

        // Pulse effect
        p.pulsePhase += p.pulseSpeed;
        const pulseFactor = p.isGlow
          ? 0.6 + 0.4 * Math.sin(p.pulsePhase)
          : 0.8 + 0.2 * Math.sin(p.pulsePhase);

        // Draw glow particles with a radial gradient
        if (p.isGlow) {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
          gradient.addColorStop(0, `rgba(100, 180, 255, ${p.opacity * pulseFactor * 0.8})`);
          gradient.addColorStop(0.4, `rgba(80, 150, 255, ${p.opacity * pulseFactor * 0.3})`);
          gradient.addColorStop(1, 'rgba(60, 120, 255, 0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Draw particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 175, 255, ${p.opacity * pulseFactor})`;
        ctx.fill();

        // Draw connections with reduced frequency
        if (i % 2 === 0) { // Only draw connections for every other particle
          for (let j = i + 2; j < particles.length; j += 2) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              const opacity = (1 - dist / connectionDistance) * 0.15; // Reduced opacity
              const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
              gradient.addColorStop(0, `rgba(80, 150, 255, ${opacity})`);
              gradient.addColorStop(1, `rgba(150, 200, 255, ${opacity * 0.5})`);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.4; // Thinner lines
              ctx.stroke();
            }
          }
        }

        // Simplified mouse connection lines
        if (mouseRef.current && i % 3 === 0) { // Only for every 3rd particle
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 120) { // Reduced from 200
            const opacity = (1 - mDist / 120) * 0.2; // Reduced opacity
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(100, 180, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Reduced random pulse effect frequency
      if (timeRef.current % 200 === 0 && particles.length > 0) { // Reduced frequency
        const randomIdx = Math.floor(Math.random() * particles.length);
        const rp = particles[randomIdx];
        const flashGrad = ctx.createRadialGradient(rp.x, rp.y, 0, rp.x, rp.y, 20); // Smaller flash
        flashGrad.addColorStop(0, 'rgba(150, 200, 255, 0.2)');
        flashGrad.addColorStop(0.4, 'rgba(100, 170, 255, 0.05)');
        flashGrad.addColorStop(1, 'rgba(80, 150, 255, 0)');
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = flashGrad;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      const dpr = window.devicePixelRatio;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      initParticles(canvas.offsetWidth, canvas.offsetHeight);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function handleMouseLeave() {
      mouseRef.current = null;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
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
