import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Clock, Sparkles, Heart } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  { id: '1', title: 'Premium Materials', description: 'Только проверенные бренды lux-сегмента.', icon: Gem },
  { id: '2', title: 'Top Masters', description: 'Опыт работы каждого стилиста от 5 лет.', icon: Sparkles },
  { id: '3', title: 'Comfort & Time', description: 'Ценим ваше время. Услуги в 4 руки.', icon: Clock },
  { id: '4', title: 'Atmosphere', description: 'Уют, шампанское и забота в каждой детали.', icon: Heart },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-granat-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-sm text-center group hover:bg-granat-900/50 transition-colors duration-300"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-granat-900 mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                        <div className="absolute inset-0 rounded-full border border-granat-500 opacity-50 animate-pulse"></div>
                        <benefit.icon className="text-gold-300 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-display text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm font-sans">{benefit.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;