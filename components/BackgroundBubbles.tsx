import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundBubblesProps {
  count?: number;
  className?: string;
  colors?: string[];
}

const BackgroundBubbles: React.FC<BackgroundBubblesProps> = ({
  count = 15,
  className = "",
  colors = ["#4d0a18", "#795d4c", "#aca494"] // cab-sav, roman-coffee, napa
}) => {
  // Use a stable random seed generation approach or simple random for this visual effect
  const bubbles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 5, // 5px to 25px
    x: Math.random() * 100, // %
    y: Math.random() * 100, // %
    duration: Math.random() * 10 + 10, // Slow float
    delay: Math.random() * 10,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            filter: 'blur(1px)'
          }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={{
            y: [0, -150], // Float up
            scale: [0, 1, 1.2], // Grow then pop/fade
            opacity: [0, 0.4, 0] // Fade in then out
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBubbles;