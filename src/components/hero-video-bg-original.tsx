'use client';

import React, { useEffect, useRef, useCallback } from 'react';

/* ================================================================
   HERO VIDEO BACKGROUND - Ultra-premium multi-layer animated canvas
   10 Layers of animation for maximum visual impact:
   1. Rich flowing gradient background
   2. Dramatic aurora/wave effects  
   3. Wide diagonal light beams
   4. Hexagonal mesh network with glowing nodes
   5. Floating geometric shapes with glow
   6. High-density particle network with bright connections
   7. Code snippet rain (Matrix-style)
   8. Flowing data streams
   9. Mouse interaction glow
   10. Grid pattern + vignette
   ================================================================ */

interface NetParticle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  isGlow: boolean;
  phase: number; speed: number;
  hue: number;
}

interface HexNode {
  x: number; y: number;
  size: number; opacity: number;
  rotation: number; rotSpeed: number;
  pulsePhase: number; pulseSpeed: number;
}

interface GeoShape {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  rotation: number; rotSpeed: number;
  sides: number; filled: boolean;
  pulsePhase: number;
  color: string;
}

interface CodeDrop {
  x: number; y: number;
  text: string;
  opacity: number; speed: number;
  fontSize: number;
}

interface LightBeam {
  x: number; angle: number;
  width: number; length: number;
  opacity: number; speed: number;
  phase: number;
  color: [number, number, number];
}

interface DataStream {
  x: number; y: number;
  speed: number; length: number;
  opacity: number;
  particles: { y: number; opacity: number }[];
}

const CODE_SNIPPETS = [
  'const app = express()',
  'async function run()',
  'import { React }',
  'git push origin',
  'npm run build',
  'docker-compose up',
  'kubectl apply -f',
  'SELECT * FROM',
  'class Service {',
  'export default App',
  'useEffect(() => {})',
  'const [state, set]',
  'return <Comp />',
  'interface Props {',
  'deploy()',
  'pipeline.run()',
  'await fetch()',
  'Promise.all([])',
  'GraphQL query {',
  'CI/CD deploy',
  '{ "status": 200 }',
  'function App()',
  'process.env.NODE',
  'module.exports =',
  'import axios from',
];

const SHAPE_COLORS = [
  [0, 102, 255],
  [51, 138, 255],
  [80, 200, 240],
  [100, 160, 255],
  [60, 180, 220],
];

export default function HeroVideoBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const timeRef = useRef(0);

  const particlesRef = useRef<NetParticle[]>([]);
  const hexNodesRef = useRef<HexNode[]>([]);
  const geoShapesRef = useRef<GeoShape[]>([]);
  const codeDropsRef = useRef<CodeDrop[]>([]);
  const lightBeamsRef = useRef<LightBeam[]>([]);
  const dataStreamsRef = useRef<DataStream[]>([]);

  const initAll = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    const s = isMobile ? 0.55 : 1;

    // --- Particles (high density) ---
    const particles: NetParticle[] = [];
    const nodeCount = Math.floor(90 * s);
    const glowCount = Math.floor(18 * s);
    for (let i = 0; i < nodeCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 1.2,
        opacity: Math.random() * 0.5 + 0.4,
        isGlow: false,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        hue: Math.random() * 40 + 200, // blue range
      });
    }
    for (let i = 0; i < glowCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 5 + 3.5,
        opacity: Math.random() * 0.4 + 0.4,
        isGlow: true,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.008,
        hue: Math.random() * 30 + 210,
      });
    }
    particlesRef.current = particles;

    // --- Hex Nodes ---
    const hexes: HexNode[] = [];
    for (let i = 0; i < Math.floor(14 * s); i++) {
      hexes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 35 + 16,
        opacity: Math.random() * 0.18 + 0.08,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.004,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.018 + 0.006,
      });
    }
    hexNodesRef.current = hexes;

    // --- Geometric Shapes ---
    const shapes: GeoShape[] = [];
    const sidesOpts = [3, 4, 5, 6, 8];
    for (let i = 0; i < Math.floor(12 * s); i++) {
      const c = SHAPE_COLORS[Math.floor(Math.random() * SHAPE_COLORS.length)];
      shapes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 40 + 14,
        opacity: Math.random() * 0.15 + 0.06,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.005,
        sides: sidesOpts[Math.floor(Math.random() * sidesOpts.length)],
        filled: Math.random() > 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        color: `${c[0]}, ${c[1]}, ${c[2]}`,
      });
    }
    geoShapesRef.current = shapes;

    // --- Code Drops (Matrix rain) ---
    const drops: CodeDrop[] = [];
    for (let i = 0; i < Math.floor(18 * s); i++) {
      drops.push({
        x: Math.random() * w,
        y: Math.random() * h,
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        opacity: Math.random() * 0.18 + 0.08,
        speed: Math.random() * 0.4 + 0.2,
        fontSize: Math.random() * 3 + 9,
      });
    }
    codeDropsRef.current = drops;

    // --- Light Beams ---
    const beams: LightBeam[] = [];
    const beamColors: [number, number, number][] = [
      [0, 102, 255],
      [51, 138, 255],
      [100, 200, 255],
      [80, 160, 240],
      [120, 140, 255],
      [60, 200, 220],
    ];
    for (let i = 0; i < Math.floor(6 * s); i++) {
      beams.push({
        x: Math.random() * w,
        angle: (Math.PI / 10) + Math.random() * (Math.PI / 2.5),
        width: Math.random() * 120 + 60,
        length: h * (0.7 + Math.random() * 0.6),
        opacity: Math.random() * 0.06 + 0.03,
        speed: (Math.random() - 0.5) * 0.001,
        phase: Math.random() * Math.PI * 2,
        color: beamColors[i % beamColors.length],
      });
    }
    lightBeamsRef.current = beams;

    // --- Data Streams ---
    const streams: DataStream[] = [];
    for (let i = 0; i < Math.floor(6 * s); i++) {
      const streamParticles = [];
      const streamLength = Math.floor(Math.random() * 12 + 6);
      const startY = Math.random() * h;
      for (let j = 0; j < streamLength; j++) {
        streamParticles.push({
          y: startY + j * 18,
          opacity: Math.max(0, 0.5 - j * 0.04),
        });
      }
      streams.push({
        x: Math.random() * w,
        y: startY,
        speed: Math.random() * 1.5 + 0.8,
        length: streamLength,
        opacity: Math.random() * 0.2 + 0.08,
        particles: streamParticles,
      });
    }
    dataStreamsRef.current = streams;
  }, []);

  function drawHexagon(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number, rotation: number) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = rotation + (Math.PI / 3) * i;
      const px = cx + size * Math.cos(angle);
      const py = cy + size * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function drawPolygon(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number, sides: number, rotation: number) {
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const angle = rotation + (Math.PI * 2 / sides) * i - Math.PI / 2;
      const px = cx + size * Math.cos(angle);
      const py = cy + size * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initAll(W, H);
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

      // ========== LAYER 1: Rich Gradient Background ==========
      const grad1 = ctx.createLinearGradient(0, 0, W, H);
      const hs1 = Math.sin(t * 0.003) * 10;
      const hs2 = Math.cos(t * 0.002) * 6;
      grad1.addColorStop(0, `hsl(${218 + hs1}, 65%, ${7 + Math.sin(t * 0.004) * 1.5}%)`);
      grad1.addColorStop(0.3, `hsl(${224 + hs2}, 58%, ${9 + Math.cos(t * 0.003) * 2}%)`);
      grad1.addColorStop(0.6, `hsl(${212 + hs1}, 70%, ${6 + Math.sin(t * 0.005) * 1}%)`);
      grad1.addColorStop(1, `hsl(${220 + hs2}, 60%, ${8 + Math.cos(t * 0.004) * 1.5}%)`);
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, W, H);

      // Subtle radial glow in center
      const centerGlow = ctx.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.4, W * 0.6);
      centerGlow.addColorStop(0, 'rgba(0, 60, 150, 0.15)');
      centerGlow.addColorStop(0.5, 'rgba(0, 40, 120, 0.08)');
      centerGlow.addColorStop(1, 'rgba(0, 20, 60, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, W, H);

      // ========== LAYER 2: Aurora / Wave Effect ==========
      for (let wave = 0; wave < 4; wave++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (let x = 0; x <= W; x += 3) {
          const y1 = Math.sin((x * 0.0025) + t * 0.007 + wave * 1.8) * 35;
          const y2 = Math.sin((x * 0.006) + t * 0.004 + wave * 0.8) * 25;
          const y3 = Math.cos((x * 0.0018) + t * 0.003 + wave * 2.5) * 20;
          ctx.lineTo(x, 50 + y1 + y2 + y3);
        }
        ctx.lineTo(W, 0);
        ctx.closePath();
        const ao = 0.07 + wave * 0.018;
        const auroraGrad = ctx.createLinearGradient(0, 0, W, 0);
        auroraGrad.addColorStop(0, `rgba(0, 80, 200, 0)`);
        auroraGrad.addColorStop(0.15, `rgba(0, 102, 255, ${ao})`);
        auroraGrad.addColorStop(0.35, `rgba(51, 138, 255, ${ao * 1.4})`);
        auroraGrad.addColorStop(0.55, `rgba(80, 200, 255, ${ao * 1.2})`);
        auroraGrad.addColorStop(0.75, `rgba(100, 160, 255, ${ao * 0.8})`);
        auroraGrad.addColorStop(1, `rgba(60, 80, 200, 0)`);
        ctx.fillStyle = auroraGrad;
        ctx.fill();
      }

      // Bottom aurora
      for (let wave = 0; wave < 2; wave++) {
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 3) {
          const y1 = Math.sin((x * 0.003) + t * 0.006 + wave * 3) * 30;
          const y2 = Math.cos((x * 0.005) + t * 0.004 + wave) * 20;
          ctx.lineTo(x, H - 60 + y1 + y2);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        const bo = 0.05 + wave * 0.012;
        const bottomGrad = ctx.createLinearGradient(0, H, 0, H - 80);
        bottomGrad.addColorStop(0, `rgba(0, 60, 180, ${bo})`);
        bottomGrad.addColorStop(0.5, `rgba(40, 100, 220, ${bo * 0.6})`);
        bottomGrad.addColorStop(1, `rgba(0, 40, 120, 0)`);
        ctx.fillStyle = bottomGrad;
        ctx.fill();
      }

      // ========== LAYER 3: Light Beams ==========
      for (const beam of lightBeamsRef.current) {
        beam.phase += beam.speed;
        beam.x += Math.sin(beam.phase) * 0.4;
        const bOp = beam.opacity * (0.6 + 0.4 * Math.sin(beam.phase * 2.5));

        ctx.save();
        ctx.translate(beam.x, 0);
        ctx.rotate(beam.angle);
        const beamGrad = ctx.createLinearGradient(0, 0, 0, beam.length);
        beamGrad.addColorStop(0, `rgba(${beam.color[0]}, ${beam.color[1]}, ${beam.color[2]}, ${bOp * 1.5})`);
        beamGrad.addColorStop(0.3, `rgba(${beam.color[0]}, ${beam.color[1]}, ${beam.color[2]}, ${bOp})`);
        beamGrad.addColorStop(0.7, `rgba(${beam.color[0]}, ${beam.color[1]}, ${beam.color[2]}, ${bOp * 0.3})`);
        beamGrad.addColorStop(1, `rgba(${beam.color[0]}, ${beam.color[1]}, ${beam.color[2]}, 0)`);
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(-beam.width / 2, 0);
        ctx.lineTo(beam.width / 2, 0);
        ctx.lineTo(beam.width * 0.6, beam.length);
        ctx.lineTo(-beam.width * 0.6, beam.length);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // ========== LAYER 4: Hexagonal Mesh ==========
      const hexes = hexNodesRef.current;
      // Connections
      for (let i = 0; i < hexes.length; i++) {
        for (let j = i + 1; j < hexes.length; j++) {
          const dx = hexes[i].x - hexes[j].x;
          const dy = hexes[i].y - hexes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 350) {
            const lo = (1 - dist / 350) * 0.3;
            ctx.beginPath();
            ctx.moveTo(hexes[i].x, hexes[i].y);
            ctx.lineTo(hexes[j].x, hexes[j].y);
            ctx.strokeStyle = `rgba(80, 160, 255, ${lo})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      // Hexagons
      for (const hex of hexes) {
        hex.rotation += hex.rotSpeed;
        hex.pulsePhase += hex.pulseSpeed;
        const pf = 0.6 + 0.4 * Math.sin(hex.pulsePhase);
        hex.x += Math.sin(t * 0.004 + hex.pulsePhase) * 0.12;
        hex.y += Math.cos(t * 0.003 + hex.pulsePhase * 1.3) * 0.1;
        if (hex.x < -60) hex.x = W + 60;
        if (hex.x > W + 60) hex.x = -60;
        if (hex.y < -60) hex.y = H + 60;
        if (hex.y > H + 60) hex.y = -60;

        // Outer hex
        drawHexagon(ctx, hex.x, hex.y, hex.size * (0.9 + 0.1 * pf), hex.rotation);
        ctx.strokeStyle = `rgba(100, 180, 255, ${hex.opacity * pf * 1.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner glow
        const innerGrad = ctx.createRadialGradient(hex.x, hex.y, 0, hex.x, hex.y, hex.size * 0.8);
        innerGrad.addColorStop(0, `rgba(80, 160, 255, ${hex.opacity * pf * 0.5})`);
        innerGrad.addColorStop(1, 'rgba(60, 140, 255, 0)');
        drawHexagon(ctx, hex.x, hex.y, hex.size * 0.6, hex.rotation);
        ctx.fillStyle = innerGrad;
        ctx.fill();

        // Center dot
        ctx.beginPath();
        ctx.arc(hex.x, hex.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 200, 255, ${hex.opacity * pf * 1.5})`;
        ctx.fill();
      }

      // ========== LAYER 5: Geometric Shapes ==========
      for (const shape of geoShapesRef.current) {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotSpeed;
        shape.pulsePhase += 0.012;
        const sp = 0.6 + 0.4 * Math.sin(shape.pulsePhase);
        if (shape.x < -80) shape.x = W + 80;
        if (shape.x > W + 80) shape.x = -80;
        if (shape.y < -80) shape.y = H + 80;
        if (shape.y > H + 80) shape.y = -80;

        ctx.save();
        ctx.globalAlpha = shape.opacity * sp * 1.3;
        drawPolygon(ctx, shape.x, shape.y, shape.size, shape.sides, shape.rotation);
        if (shape.filled) {
          ctx.fillStyle = `rgba(${shape.color}, ${shape.opacity * sp})`;
          ctx.fill();
        }
        ctx.strokeStyle = `rgba(${shape.color}, ${shape.opacity * sp * 1.5})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Glow around shape
        if (shape.size > 20) {
          const shapeGlow = ctx.createRadialGradient(shape.x, shape.y, 0, shape.x, shape.y, shape.size * 1.5);
          shapeGlow.addColorStop(0, `rgba(${shape.color}, ${shape.opacity * sp * 0.15})`);
          shapeGlow.addColorStop(1, `rgba(${shape.color}, 0)`);
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = shapeGlow;
          ctx.fill();
        }
        ctx.restore();
      }

      // ========== LAYER 6: Code Drops ==========
      for (const drop of codeDropsRef.current) {
        drop.y += drop.speed;
        if (drop.y > H + 30) {
          drop.y = -30;
          drop.x = Math.random() * W;
          drop.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
          drop.opacity = Math.random() * 0.12 + 0.04;
        }
        ctx.font = `${drop.fontSize}px "SF Mono", "Fira Code", "Courier New", monospace`;
        ctx.fillStyle = `rgba(100, 180, 255, ${drop.opacity})`;
        ctx.fillText(drop.text, drop.x, drop.y);
      }

      // ========== LAYER 7: Data Streams ==========
      for (const stream of dataStreamsRef.current) {
        stream.y += stream.speed;
        if (stream.y > H + stream.length * 18) {
          stream.y = -stream.length * 18;
          stream.x = Math.random() * W;
        }
        for (let j = 0; j < stream.particles.length; j++) {
          const py = stream.y + j * 18;
          if (py < 0 || py > H) continue;
          const pOp = Math.max(0, stream.opacity * (1 - j / stream.particles.length));
          ctx.beginPath();
          ctx.arc(stream.x, py, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(80, 180, 255, ${pOp})`;
          ctx.fill();
          // Trail
          ctx.beginPath();
          ctx.moveTo(stream.x, py);
          ctx.lineTo(stream.x, py - 8);
          ctx.strokeStyle = `rgba(60, 140, 255, ${pOp * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // ========== LAYER 8: Particle Network ==========
      const particles = particlesRef.current;
      const connDist = 200;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (mouseRef.current) {
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 220 && mDist > 0) {
            const force = (220 - mDist) / 220 * 0.2;
            p.vx += (mdx / mDist) * force;
            p.vy += (mdy / mDist) * force;
          }
        }
        p.vx *= 0.995;
        p.vy *= 0.995;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        p.x = Math.max(0, Math.min(W, p.x));
        p.y = Math.max(0, Math.min(H, p.y));

        p.phase += p.speed;
        const pf = p.isGlow ? 0.6 + 0.4 * Math.sin(p.phase) : 0.8 + 0.2 * Math.sin(p.phase);

        // Glow particles
        if (p.isGlow) {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
          grad.addColorStop(0, `rgba(100, 190, 255, ${p.opacity * pf * 0.7})`);
          grad.addColorStop(0.3, `rgba(80, 160, 255, ${p.opacity * pf * 0.25})`);
          grad.addColorStop(1, 'rgba(60, 120, 255, 0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 200, 255, ${p.opacity * pf})`;
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connDist) {
            const lo = (1 - dist / connDist) * 0.38;
            const lg = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            lg.addColorStop(0, `rgba(80, 160, 255, ${lo})`);
            lg.addColorStop(1, `rgba(150, 210, 255, ${lo * 0.4})`);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lg;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Mouse lines
        if (mouseRef.current) {
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 240) {
            const mo = (1 - mDist / 240) * 0.4;
            const mg = ctx.createLinearGradient(p.x, p.y, mouseRef.current.x, mouseRef.current.y);
            mg.addColorStop(0, `rgba(100, 200, 255, ${mo})`);
            mg.addColorStop(1, `rgba(180, 220, 255, ${mo * 0.15})`);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = mg;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // ========== LAYER 9: Mouse Glow ==========
      if (mouseRef.current) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const glow1 = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
        glow1.addColorStop(0, 'rgba(0, 102, 255, 0.1)');
        glow1.addColorStop(0.3, 'rgba(51, 138, 255, 0.05)');
        glow1.addColorStop(0.6, 'rgba(100, 180, 255, 0.02)');
        glow1.addColorStop(1, 'rgba(100, 180, 255, 0)');
        ctx.beginPath();
        ctx.arc(mx, my, 220, 0, Math.PI * 2);
        ctx.fillStyle = glow1;
        ctx.fill();
      }

      // ========== LAYER 10: Grid + Vignette ==========
      ctx.strokeStyle = 'rgba(80, 150, 255, 0.035)';
      ctx.lineWidth = 0.5;
      const gs = 55;
      for (let x = 0; x < W; x += gs) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gs) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Vignette
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H);
      vig.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vig.addColorStop(0.6, 'rgba(0, 0, 0, 0.12)');
      vig.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      // Random flash
      if (t % 80 === 0 && particles.length > 0) {
        const rp = particles[Math.floor(Math.random() * particles.length)];
        const fg = ctx.createRadialGradient(rp.x, rp.y, 0, rp.x, rp.y, 50);
        fg.addColorStop(0, 'rgba(150, 220, 255, 0.3)');
        fg.addColorStop(0.4, 'rgba(100, 180, 255, 0.1)');
        fg.addColorStop(1, 'rgba(80, 150, 255, 0)');
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, 50, 0, Math.PI * 2);
        ctx.fillStyle = fg;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [initAll]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto' }}
    />
  );
}
