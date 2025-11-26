
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tamarind">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cab-sav/20 via-tamarind to-black opacity-80 z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cab-sav rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-roman-coffee rounded-full blur-[140px] opacity-10"></div>

      {/* Floating Seeds Background */}
      {seeds.map((seed) => (
        <motion.div
          key={seed.id}
          className="absolute rounded-full bg-cab-sav opacity-30 shadow-[0_0_10px_rgba(77,10,24,0.5)] z-0"
          style={{
            left: `${seed.x}%`,
            top: `${seed.y}%`,
            width: seed.size,
            height: seed.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
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
            <h2 className="text-napa font-sans tracking-[0.3em] text-sm uppercase mb-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="w-12 h-[1px] bg-roman-coffee"></span>
              Since 2024
            </h2>
            <h1 className="text-5xl md:text-7xl font-display text-white leading-tight mb-6">
              Красота, <br />
              <span className="italic text-roman-coffee">достойная</span> <br />
              Королевы
            </h1>
            <p className="text-napa/70 text-lg md:text-xl font-sans max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Открой для себя гранатовый стиль. Глубокие оттенки, безупречный сервис и атмосфера истинной роскоши.
            </p>

            <motion.button
              onClick={() => openBooking()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group px-8 py-4 bg-cab-sav text-white font-sans uppercase tracking-widest text-sm rounded-none border border-roman-coffee shadow-[0_0_30px_rgba(77,10,24,0.3)]"
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
             {/* Decorative Circle Rings */}
             <div className="absolute inset-0 border border-cab-sav/30 rounded-full animate-spin-slow"></div>
             <div className="absolute inset-4 border border-napa/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
             
             {/* Abstract Face & Seeds SVG Construction */}
             <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_40px_rgba(77,10,24,0.5)]">
                <defs>
                  <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#795d4c" stopOpacity="0.8" /> {/* Roman Coffee */}
                    <stop offset="100%" stopColor="#4d0a18" stopOpacity="0.95" /> {/* Cab Sav */}
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Abstract Stylized Profile */}
                <motion.path 
                  d="M100,30 C70,30 50,60 50,90 C50,130 80,170 100,170 C120,170 150,130 150,90 C150,60 130,30 100,30 Z" 
                  fill="url(#faceGrad)" 
                  stroke="#aca494" 
                  strokeWidth="0.5"
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
                            stroke="#aca494" // Napa
                            strokeWidth="0.5"
                            filter="url(#glow)"
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
                    stroke="rgba(172, 164, 148, 0.2)" // Napa transparent
                    strokeWidth="1"
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
        <span className="text-[10px] uppercase tracking-widest text-napa">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-roman-coffee to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
