import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Clock, Sparkles, Heart } from 'lucide-react';
import { Benefit } from '../types';
import BackgroundBubbles from './BackgroundBubbles';

const benefits: Benefit[] = [
  { id: '1', title: 'Premium Materials', description: 'Только проверенные бренды lux-сегмента.', icon: Gem },
  { id: '2', title: 'Top Masters', description: 'Опыт работы каждого стилиста от 5 лет.', icon: Sparkles },
  { id: '3', title: 'Comfort & Time', description: 'Ценим ваше время. Услуги в 4 руки.', icon: Clock },
  { id: '4', title: 'Atmosphere', description: 'Уют, шампанское и забота в каждой детали.', icon: Heart },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-beige to-white relative overflow-hidden">
      <BackgroundBubbles count={8} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="p-8 border border-roman-coffee/10 bg-white/60 backdrop-blur-sm rounded-sm text-center group hover:bg-white hover:border-cab-sav/40 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige mb-6 group-hover:scale-110 transition-transform duration-300 relative border border-roman-coffee/20 group-hover:border-cab-sav/40">
                        <div className="absolute inset-0 rounded-full border border-cab-sav opacity-20 animate-pulse"></div>
                        <benefit.icon className="text-cab-sav w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-display text-granat-900 mb-3 group-hover:text-cab-sav transition-colors">{benefit.title}</h3>
                    <p className="text-flint text-sm font-sans">{benefit.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;