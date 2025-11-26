import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "DYSON", 
  "KEVIN.MURPHY", 
  "DAVINES", 
  "LUXIO", 
  "TOM FORD", 
  "ORIBE", 
  "CHRISTINA", 
  "BABOR",
  "LEBEL"
];

const Brands: React.FC = () => {
  return (
    <section className="py-12 bg-beige border-y border-roman-coffee/10 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap mask-image-linear-gradient">
        <motion.div
            className="flex gap-16 md:gap-32 px-8"
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {/* Tripled list for seamless looping */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-display text-roman-coffee/30 uppercase tracking-[0.2em] hover:text-cab-sav transition-colors duration-500 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;