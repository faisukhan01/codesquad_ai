'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';

/* -------------------------------------------------------------------------- */
/*  Professional SVG Brand Logos                                              */
/* -------------------------------------------------------------------------- */

function MicrosoftLogo({ size = 36 }: { size?: number }) {
  const s = size;
  const half = s / 2;
  const gap = 2;
  const q = (half - gap) / 2;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x={gap} y={gap} width={q} height={q} rx={1.5} fill="#F25022" />
      <rect x={half} y={gap} width={q} height={q} rx={1.5} fill="#7FBA00" />
      <rect x={gap} y={half} width={q} height={q} rx={1.5} fill="#00A4EF" />
      <rect x={half} y={half} width={q} height={q} rx={1.5} fill="#FFB900" />
    </svg>
  );
}

function GoogleCloudLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud body */}
      <path d="M30 24a6.5 6.5 0 0 0-1-3.4A8 8 0 1 0 12 18a6 6 0 0 0 0 12h18a5 5 0 0 0 0-10z" fill="#4285F4" />
      {/* Accent */}
      <circle cx="22" cy="22" r="4" fill="#34A853" opacity="0.7" />
      <circle cx="18" cy="18" r="3" fill="#FBBC05" opacity="0.6" />
      <circle cx="25" cy="18" r="2.5" fill="#EA4335" opacity="0.5" />
      {/* Arrow */}
      <path d="M28 18l4-2-1 4" stroke="#FF6D01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function AWSLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Smile arrow */}
      <path
        d="M5 28c6-12 18-18 32-16"
        stroke="#FF9900"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow tip */}
      <path
        d="M33 8l4.5 3.5L34 16"
        stroke="#FF9900"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Text "aws" */}
      <text x="18" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#232F3E" opacity="0.9">
        aws
      </text>
    </svg>
  );
}

function OracleLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="28" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="24" fill="#F80000" letterSpacing="-0.5">
        ORACLE
      </text>
    </svg>
  );
}

function SAPLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#0FAAFF" />
      <path d="M12 10h6l-6 10h6l-8 12 3-8h-6l6-14z" fill="white" />
    </svg>
  );
}

function SalesforceLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M33 20a5.5 5.5 0 0 1-4.2 5.3A7 7 0 1 1 17 11a7 7 0 0 1 12 5 5.5 5.5 0 0 1 4 4z"
        fill="#00A1E0"
      />
      <text x="14.5" y="23.5" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="white">cloud</text>
    </svg>
  );
}

function IBMLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size * 1.4} height={size} viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 5, 10, 15, 20, 25].map((y, i) => (
        <rect
          key={i}
          x="4"
          y={y + 3}
          width={i % 2 === 0 ? 42 : 34}
          height="2.5"
          rx="1"
          fill="#0530AD"
        />
      ))}
    </svg>
  );
}

function AdobeLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#FF0000" />
      <path d="M11 10h5l5 14 5-14h5L20 32h-3L11 10z" fill="white" />
    </svg>
  );
}

function VMwareLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 58 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stacked parallelograms */}
      <path d="M8 12h32l-6 6H14l-6-6z" fill="#607078" />
      <path d="M14 18h24l-6 6H8l6-6z" fill="#6D8B96" />
      <path d="M8 24h24l-6 6H2l6-6z" fill="#607078" />
      <text x="36" y="25" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="#607078">VMware</text>
    </svg>
  );
}

function CiscoLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 58 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Vertical bars */}
      {[12, 18, 24, 30, 36, 42, 48].map((x, i) => {
        const h = 8 + Math.sin(i * 0.9) * 12 + 6;
        return (
          <rect
            key={i}
            x={x}
            y={(36 - h) / 2}
            width="3"
            height={h}
            rx="1.5"
            fill={i === 3 ? '#049FD9' : '#049FD9'}
            opacity={0.5 + Math.sin(i * 0.9) * 0.4 + 0.3}
          />
        );
      })}
    </svg>
  );
}

function ReactLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Three elliptical orbits */}
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(0 20 20)" />
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 20 20)" />
      {/* Center dot */}
      <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
    </svg>
  );
}

function NextjsLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#171717" />
      <path
        d="M28 12L12 28h8V12l8 8v8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function NodejsLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon */}
      <polygon
        points="20,2 36,11 36,29 20,38 4,29 4,11"
        fill="#339933"
        stroke="#339933"
        strokeWidth="1"
      />
      <polygon
        points="20,8 30,14 30,26 20,32 10,26 10,14"
        fill="#339933"
        stroke="white"
        strokeWidth="1.2"
      />
      <text x="14" y="24" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="white">N</text>
    </svg>
  );
}

function PythonLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="py-top">
          <path d="M20 2c-8 0-7 3.5-7 7v3h7v1H9s-7-.5-7 7 3.5 7 6 7h2.5v-3.5S10 20 13 20h7s6.5.1 6.5-6.5V10s1-8-6.5-8zM16 7a1.2 1.2 0 1 1 0 2.4A1.2 1.2 0 0 1 16 7z" />
        </clipPath>
      </defs>
      <path d="M20 2c-8 0-7 3.5-7 7v3h7v1H9s-7-.5-7 7 3.5 7 6 7h2.5v-3.5S10 20 13 20h7s6.5.1 6.5-6.5V10s1-8-6.5-8zM16 7a1.2 1.2 0 1 1 0 2.4A1.2 1.2 0 0 1 16 7z" fill="#3776AB" />
      <path d="M20 38c8 0 7-3.5 7-7v-3h-7v-1h11s7 .5 7-7-3.5-7-6-7h-2.5v3.5S30 20 27 20h-7s-6.5-.1-6.5 6.5V30s-1 8 6.5 8zM24 33a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" fill="#FFD43B" />
    </svg>
  );
}

function TypeScriptLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="6" fill="#3178C6" />
      <text x="10" y="27" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" fill="white">TS</text>
    </svg>
  );
}

function DockerLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Whale body */}
      <path
        d="M4 24h4l2-4h4l2-4h4l2 4h2l-2 4h4l2-4 2 4h4c2 0 4-2 4-4s-2-4-4-4c0-2-2-4-5-4h-1l-1-3h-4l1 3h-3l-1-3h-4l1 3h-4l-1-3h-4l1 3c-4 1-7 4-7 8 0 2 1 3 3 4z"
        fill="#2496ED"
      />
      {/* Container boxes */}
      <rect x="14" y="16" width="3" height="3" rx="0.5" fill="#fff" opacity="0.5" />
      <rect x="18" y="16" width="3" height="3" rx="0.5" fill="#fff" opacity="0.5" />
      <rect x="22" y="16" width="3" height="3" rx="0.5" fill="#fff" opacity="0.5" />
      <rect x="14" y="20" width="3" height="3" rx="0.5" fill="#fff" opacity="0.5" />
      <rect x="18" y="20" width="3" height="3" rx="0.5" fill="#fff" opacity="0.5" />
    </svg>
  );
}

function KubernetesLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="20" cy="20" r="17" stroke="#326CE5" strokeWidth="2" fill="none" />
      {/* Inner ring */}
      <circle cx="20" cy="20" r="7" stroke="#326CE5" strokeWidth="1.5" fill="none" />
      {/* Center */}
      <circle cx="20" cy="20" r="2" fill="#326CE5" />
      {/* 7 spokes */}
      {Array.from({ length: 7 }).map((_, i) => {
        const angle = (i * 360) / 7 - 90;
        const rad = (angle * Math.PI) / 180;
        const x1 = 20 + 9 * Math.cos(rad);
        const y1 = 20 + 9 * Math.sin(rad);
        const x2 = 20 + 15 * Math.cos(rad);
        const y2 = 20 + 15 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#326CE5"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function TensorFlowLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* T shape */}
      <rect x="6" y="6" width="28" height="8" rx="2" fill="#FF6F00" />
      <rect x="6" y="6" width="8" height="28" rx="2" fill="#FF6F00" />
      <rect x="6" y="26" width="28" height="8" rx="2" fill="#F44336" />
      {/* Angle cuts */}
      <rect x="26" y="6" width="8" height="14" rx="2" fill="#F44336" opacity="0.8" />
    </svg>
  );
}

function FlutterLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Diamond / kite shape */}
      <path
        d="M8 4l14 16-8 8L8 4z"
        fill="#02569B"
      />
      <path
        d="M22 20l-8 8 14 14 8-8-14-14z"
        fill="#02569B"
      />
      <path
        d="M22 20l14 14 2-2L24 18"
        fill="#54C5F8"
      />
      {/* Bird accent */}
      <path
        d="M14 12l8 8-4 4-8-8z"
        fill="#54C5F8"
        opacity="0.6"
      />
    </svg>
  );
}

function PostgreSQLLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Elephant simplified body */}
      <ellipse cx="20" cy="24" rx="12" ry="10" fill="#4169E1" />
      {/* Head */}
      <circle cx="20" cy="16" r="8" fill="#4169E1" />
      {/* Trunk */}
      <path d="M20 22c-2 4-1 8 1 10s3 2 4 0" stroke="#4169E1" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Ears */}
      <ellipse cx="13" cy="14" rx="4" ry="5" fill="#5B8DEF" />
      <ellipse cx="27" cy="14" rx="4" ry="5" fill="#5B8DEF" />
      {/* Eye */}
      <circle cx="18" cy="15" r="1.5" fill="white" />
      {/* Tusk */}
      <path d="M17 20l-2 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Logo Registry                                                             */
/* -------------------------------------------------------------------------- */

interface LogoItem {
  name: string;
  component: React.FC<{ size?: number }>;
  textWidth?: number; // wider logos need extra width
}

const enterpriseLogos: LogoItem[] = [
  { name: 'Microsoft', component: MicrosoftLogo },
  { name: 'Google Cloud', component: GoogleCloudLogo },
  { name: 'AWS', component: AWSLogo, textWidth: 56 },
  { name: 'Oracle', component: OracleLogo, textWidth: 54 },
  { name: 'SAP', component: SAPLogo },
  { name: 'Salesforce', component: SalesforceLogo },
  { name: 'IBM', component: IBMLogo, textWidth: 50 },
  { name: 'Adobe', component: AdobeLogo },
  { name: 'VMware', component: VMwareLogo, textWidth: 58 },
  { name: 'Cisco', component: CiscoLogo, textWidth: 58 },
];

const techStackLogos: LogoItem[] = [
  { name: 'React', component: ReactLogo },
  { name: 'Next.js', component: NextjsLogo },
  { name: 'Node.js', component: NodejsLogo },
  { name: 'Python', component: PythonLogo },
  { name: 'TypeScript', component: TypeScriptLogo },
  { name: 'Docker', component: DockerLogo },
  { name: 'Kubernetes', component: KubernetesLogo },
  { name: 'TensorFlow', component: TensorFlowLogo },
  { name: 'Flutter', component: FlutterLogo },
  { name: 'PostgreSQL', component: PostgreSQLLogo },
];

/* -------------------------------------------------------------------------- */
/*  Logo Card                                                                 */
/* -------------------------------------------------------------------------- */

function LogoCard({ item }: { item: LogoItem }) {
  const Logo = item.component;
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="flex items-center gap-4 mx-4 sm:mx-6 lg:mx-8 cursor-default group"
    >
      <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.02)] group-hover:shadow-[0_4px_12px_rgba(0,102,255,0.08),0_8px_24px_rgba(0,0,0,0.06)] group-hover:border-blue-100 transition-all duration-300">
        <Logo size={32} />
      </div>
      <span className="text-sm sm:text-base font-semibold text-gray-400 group-hover:text-gray-700 transition-colors duration-300 select-none whitespace-nowrap tracking-tight">
        {item.name}
      </span>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Marquee Row                                                               */
/* -------------------------------------------------------------------------- */

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: LogoItem[];
  reverse?: boolean;
}) {
  // Triple the items for seamless infinite loop
  const tripled = [...items, ...items, ...items];

  return (
    <div className="marquee-container overflow-hidden">
      <div
        className="flex animate-marquee-slow whitespace-nowrap"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {tripled.map((item, i) => (
          <LogoCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Clients Section                                                           */
/* -------------------------------------------------------------------------- */

export default function Clients() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/60 overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection
          variant="fade-up"
          className="text-center mb-14 md:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-blue-600 tracking-wide uppercase">
              Trusted Partners
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Trusted by{' '}
            <span className="gradient-text">Industry Leaders</span>{' '}
            Worldwide
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Powering innovation with the world&apos;s leading technologies.
            Join thousands of teams building the future.
          </p>
        </AnimatedSection>
      </div>

      {/* Row 1 – Enterprise / Cloud logos scrolling left */}
      <AnimatedSection variant="fade-up" delay={0.15}>
        <MarqueeRow items={enterpriseLogos} />
      </AnimatedSection>

      {/* Divider */}
      <div className="h-6" />

      {/* Row 2 – Tech Stack logos scrolling right */}
      <AnimatedSection variant="fade-up" delay={0.3}>
        <MarqueeRow items={techStackLogos} reverse />
      </AnimatedSection>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-60" />
    </section>
  );
}
