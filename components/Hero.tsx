import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

const Hero: React.FC = () => {
  const { openBooking } = useBooking();

  // Generate random seeds for background effect
  const seeds = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-beige">
      {/* Background Gradients - Adjusted for Light Mode */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-beige to-beige opacity-80 z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-roman-coffee/10 rounded-full blur-[120px] opacity-40 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cab-sav/5 rounded-full blur-[140px] opacity-30"></div>

      {/* Floating Seeds Background */}
      {seeds.map((seed) => (
        <motion.div
          key={seed.id}
          className="absolute rounded-full bg-cab-sav opacity-20 z-0"
          style={{
            left: `${seed.x}%`,
            top: `${seed.y}%`,
            width: seed.size,
            height: seed.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: seed.duration,
            repeat: Infinity,
            delay: seed.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-roman-coffee font-sans tracking-[0.3em] text-sm uppercase mb-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="w-12 h-[1px] bg-cab-sav"></span>
              Since 2024
            </h2>
            <h1 className="text-5xl md:text-7xl font-display text-granat-900 leading-tight mb-6">
              Красота, <br />
              <span className="italic text-cab-sav">достойная</span> <br />
              Королевы
            </h1>
            <p className="text-flint text-lg md:text-xl font-sans max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-medium">
              Открой для себя гранатовый стиль. Глубокие оттенки, безупречный сервис и атмосфера истинной роскоши.
            </p>

            <motion.button
              onClick={() => openBooking()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group px-8 py-4 bg-cab-sav text-white font-sans uppercase tracking-widest text-sm rounded-none border border-roman-coffee shadow-[0_10px_20px_rgba(77,10,24,0.15)]"
            >
              <span className="relative z-10">Записаться онлайн</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            </motion.button>
          </motion.div>
        </div>

        {/* Right: The Logo/Visual */}
        <div className="relative order-1 lg:order-2 flex justify-center perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          >
             {/* Decorative Circle Rings - Darker on light bg */}
             <div className="absolute inset-0 border border-cab-sav/10 rounded-full animate-spin-slow"></div>
             <div className="absolute inset-4 border border-roman-coffee/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
             
             {/* Abstract Face & Seeds SVG Construction */}
             <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_10px_30px_rgba(77,10,24,0.1)]">
                <defs>
                  <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.8" /> 
                    <stop offset="100%" stopColor="#F4F1EA" stopOpacity="0.95" /> 
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Abstract Stylized Profile - now outline based or filled with light color */}
                <motion.path 
                  d="M100,30 C70,30 50,60 50,90 C50,130 80,170 100,170 C120,170 150,130 150,90 C150,60 130,30 100,30 Z" 
                  fill="url(#faceGrad)" 
                  stroke="#4d0a18" 
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, fillOpacity: 0 }}
                  animate={{ pathLength: 1, fillOpacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* The "Curls" as Pomegranate Seeds */}
                {[...Array(12)].map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2;
                    const r = 65;
                    const x = 100 + r * Math.cos(angle);
                    const y = 90 + r * Math.sin(angle);
                    return (
                        <motion.circle
                            key={i}
                            cx={x}
                            cy={y}
                            r={4}
                            fill="#4d0a18" // Cab Sav
                            stroke="#F4F1EA" // Beige
                            strokeWidth="1"
                            animate={{
                                r: [4, 5, 4],
                                fill: ["#4d0a18", "#795d4c", "#4d0a18"] // Cab Sav -> Roman Coffee -> Cab Sav
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.5, fill: "#aca494" }}
                            className="cursor-pointer"
                        />
                    );
                })}

                 {/* Central Shimmer Path */}
                <motion.path
                    d="M100,30 Q120,60 100,90 T100,150"
                    fill="none"
                    stroke="#4d0a18" 
                    strokeWidth="0.5"
                    animate={{ strokeDasharray: ["0,100", "50,50", "0,100"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
             </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-roman-coffee">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cab-sav to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;