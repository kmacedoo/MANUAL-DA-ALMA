import React from 'react';

export const AnimatedSparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <style>{`
      .sparkle {
        animation: sparkle-anim 2s infinite ease-in-out;
        transform-origin: center;
      }
      @keyframes sparkle-anim {
        0%, 100% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1); opacity: 1; }
      }
      .s1 { animation-delay: 0s; }
      .s2 { animation-delay: 0.2s; }
      .s3 { animation-delay: 0.4s; }
      .s4 { animation-delay: 0.6s; }
      .s5 { animation-delay: 0.8s; }
      .s6 { animation-delay: 1s; }
    `}</style>
    <g fill="currentColor">
      {/* Main Sparkle */}
      <path className="sparkle s1" d="M50 0 L58.66 21.34 L80 25 L65 42.18 L67.32 65 L50 55 L32.68 65 L35 42.18 L20 25 L41.34 21.34 Z" transform="scale(0.7) translate(21, 21)"/>
      
      {/* Smaller Sparkles */}
      <path className="sparkle s2" d="M20 10 L23 17 L30 18 L24 23 L26 30 L20 26 L14 30 L16 23 L10 18 L17 17 Z" transform="scale(0.5) translate(10, 10)"/>
      <path className="sparkle s3" d="M80 30 L83 37 L90 38 L84 43 L86 50 L80 46 L74 50 L76 43 L70 38 L77 37 Z" transform="scale(0.4) translate(20, 10)"/>
      <path className="sparkle s4" d="M85 70 L88 77 L95 78 L89 83 L91 90 L85 86 L79 90 L81 83 L75 78 L82 77 Z" transform="scale(0.6) translate(10, 5)"/>
      <path className="sparkle s5" d="M15 75 L18 82 L25 83 L19 88 L21 95 L15 91 L9 95 L11 88 L5 83 L12 82 Z" transform="scale(0.45) translate(5, 5)"/>
    </g>
  </svg>
);