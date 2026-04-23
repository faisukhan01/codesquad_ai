'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, Zap, ChevronRight, Hexagon, Triangle, Code2, Database, Cloud, Layers, CircuitBoard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroVideoBg from '@/components/hero-video-bg';

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Global Clients' },
  { value: 8, suffix: '+', label: 'Years of Excellence' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const headingWords = ['Engineering', 'Digital', 'Excellence'];
const subtitleText = 'We build world-class software solutions that transform businesses and drive innovation across industries.';

function useTypewriter(text: string, speed = 32, startDelay = 1500) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) { setDisplayed(text.slice(0, i)); i++; }
      else clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, started]);
  return displayed;
}

function easeOutQuad(t: number) { return t * (2 - t); }

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      setCount(Math.round(easeOutQuad(progress) * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center px-3 sm:px-5 group cursor-default">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white counter-glow">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }}>{count}</motion.span>
        <span className="text-[#338AFF]">{suffix}</span>
      </div>
      <div className="text-[10px] sm:text-xs text-blue-200/50 mt-1.5 font-semibold tracking-[0.15em] uppercase">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  const typedText = useTypewriter(subtitleText);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ===== LAYER 1: Canvas Animated Background (particles, code, beams) ===== */}
      <HeroVideoBg />

      {/* ===== LAYER 2: CSS Background Enhancements (always visible) ===== */}
      
      {/* Tech circuit grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 102, 255, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 102, 255, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      
      {/* Dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(100, 180, 255, 0.08) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Large gradient orbs (3 layers for depth) */}
      <div className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none animate-float" style={{
        background: 'radial-gradient(circle, rgba(0, 80, 255, 0.15) 0%, rgba(0, 60, 200, 0.06) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div className="absolute bottom-[-5%] right-[-5%] w-[550px] h-[550px] rounded-full pointer-events-none animate-float-delayed" style={{
        background: 'radial-gradient(circle, rgba(51, 138, 255, 0.12) 0%, rgba(30, 100, 220, 0.05) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div className="absolute top-[30%] left-[30%] w-[500px] h-[500px] rounded-full pointer-events-none animate-float-slow" style={{
        background: 'radial-gradient(circle, rgba(0, 50, 150, 0.1) 0%, transparent 60%)',
        filter: 'blur(60px)',
      }} />

      {/* ===== LAYER 3: CSS Animated Decorative Elements ===== */}

      {/* Large floating hexagons (clearly visible) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] right-[8%] pointer-events-none"
      >
        <Hexagon className="w-28 h-28 sm:w-40 sm:h-40 text-blue-400/10" strokeWidth={0.8} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[18%] left-[5%] pointer-events-none"
      >
        <Hexagon className="w-20 h-20 sm:w-32 sm:h-32 text-blue-300/8" strokeWidth={0.8} />
      </motion.div>

      {/* Large floating triangles */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[22%] left-[10%] pointer-events-none"
      >
        <Triangle className="w-20 h-20 sm:w-28 sm:h-28 text-cyan-400/8" strokeWidth={0.8} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[28%] right-[12%] pointer-events-none"
      >
        <Triangle className="w-16 h-16 sm:w-24 sm:h-24 text-blue-300/8" strokeWidth={0.8} />
      </motion.div>

      {/* Spinning ring circles */}
      <div className="absolute top-[18%] right-[22%] w-44 h-44 rounded-full border border-blue-400/8 pointer-events-none animate-[spin_30s_linear_infinite]" />
      <div className="absolute top-[18%] right-[22%] w-44 h-44 rounded-full border border-dashed border-blue-300/5 pointer-events-none animate-[spin_20s_linear_infinite_reverse]" />
      <div className="absolute bottom-[12%] left-[14%] w-60 h-60 rounded-full border border-blue-400/6 pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
      <div className="absolute bottom-[12%] left-[14%] w-60 h-60 rounded-full border border-dashed border-blue-300/4 pointer-events-none animate-[spin_30s_linear_infinite]" />

      {/* Floating tech icons */}
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[16%] left-[22%] pointer-events-none">
        <Code2 className="w-7 h-7 text-blue-400/15" />
      </motion.div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[38%] right-[15%] pointer-events-none">
        <Database className="w-6 h-6 text-blue-300/12" />
      </motion.div>
      <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-[22%] left-[22%] pointer-events-none">
        <Cloud className="w-8 h-8 text-cyan-400/12" />
      </motion.div>
      <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute top-[48%] left-[6%] pointer-events-none">
        <Layers className="w-6 h-6 text-blue-300/10" />
      </motion.div>
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 4 }} className="absolute top-[28%] right-[5%] pointer-events-none">
        <CircuitBoard className="w-7 h-7 text-blue-400/10" />
      </motion.div>

      {/* Decorative corner brackets */}
      <div className="absolute top-6 left-6 w-20 h-20 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-blue-400/25 to-transparent" />
        <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-blue-400/25 to-transparent" />
      </div>
      <div className="absolute top-6 right-6 w-20 h-20 pointer-events-none hidden md:block">
        <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-blue-400/25 to-transparent" />
        <div className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-blue-400/25 to-transparent" />
      </div>
      <div className="absolute bottom-6 left-6 w-20 h-20 pointer-events-none hidden md:block">
        <div className="absolute bottom-0 left-0 w-16 h-px bg-gradient-to-r from-blue-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 h-16 w-px bg-gradient-to-t from-blue-400/20 to-transparent" />
      </div>
      <div className="absolute bottom-6 right-6 w-20 h-20 pointer-events-none hidden md:block">
        <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-blue-400/20 to-transparent" />
        <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-blue-400/20 to-transparent" />
      </div>

      {/* Bottom gradient fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#0A1628]/95 to-transparent pointer-events-none z-[2]" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.1] mb-8 shadow-xl shadow-black/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-sm text-blue-100/80 font-medium">Trusted by 50+ companies worldwide</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-300/70" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-7xl font-extrabold leading-[1.08] mb-8 tracking-tight">
            {headingWords.map((word, i) => (
              <span key={word}>
                {i === 2 ? (
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
                    className="gradient-text"
                    style={{
                      background: 'linear-gradient(135deg, #338AFF 0%, #66B2FF 35%, #99CCFF 70%, #B3D9FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {word}
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
                    className="text-white"
                  >
                    {word}
                  </motion.span>
                )}
                {i < headingWords.length - 1 && ' '}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-base sm:text-lg lg:text-xl text-blue-100/60 max-w-2xl mx-auto mb-10 leading-relaxed min-h-[3.5rem] font-light"
          >
            <span>{typedText}</span>
            {typedText.length < subtitleText.length && (
              <span className="inline-block w-[2px] h-[1.1em] bg-[#338AFF] ml-0.5 align-middle animate-[blink-cursor_1s_step-end_infinite]" />
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0040A0] text-white rounded-xl px-8 h-13 text-base shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 group animate-pulse-glow font-semibold"
            >
              <Zap className="w-4 h-4 mr-2" />
              Explore Our Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-xl px-8 h-13 text-base backdrop-blur-sm transition-all duration-300 font-medium group"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform opacity-60" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="glass rounded-2xl px-4 sm:px-6 py-7 border border-white/[0.06]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
                {stats.map((stat) => (
                  <CounterStat key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px animated-gradient-line z-[3]" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[4]"
      >
        <motion.button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-3 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-[10px] text-blue-200/30 uppercase tracking-[0.3em] font-medium group-hover:text-blue-200/60 transition-colors duration-300">Scroll</span>
          <div className="relative w-6 h-10 rounded-full border border-blue-200/15 flex justify-center pt-2 group-hover:border-blue-300/30 transition-all duration-300">
            <div className="absolute inset-0 rounded-full bg-blue-400/3 group-hover:bg-blue-400/8 transition-colors duration-300" />
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-1 h-2 rounded-full bg-gradient-to-b from-blue-300/80 to-blue-400/30"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
