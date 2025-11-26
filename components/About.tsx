
import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../types';
import { useBooking } from '../context/BookingContext';

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Елена Гранат',
    role: 'Арт-директор',
    bio: '10 лет создаю образы для обложек журналов.',
    image: 'https://picsum.photos/400/500?random=10',
  },
  {
    id: '2',
    name: 'Мария В.',
    role: 'Топ-стилист',
    bio: 'Эксперт по сложным окрашиваниям и блонду.',
    image: 'https://picsum.photos/400/500?random=11',
  },
  {
    id: '3',
    name: 'София К.',
    role: 'Косметолог',
    bio: 'Врач-дерматолог с подходом "не навреди".',
    image: 'https://picsum.photos/400/500?random=12',
  },
];

const About: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section id="team" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Granat Overlay */}
      <div className="absolute -right-20 top-20 w-96 h-96 bg-cab-sav rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 sticky top-24">
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-display text-white mb-6"
            >
              Команда <br /> <span className="text-roman-coffee">Мастеров</span>
            </motion.h2>
            <p className="text-flint mb-8 font-sans leading-relaxed">
              Мы собрали лучших специалистов, которые горят своим делом. Каждый мастер — художник, создающий ваш неповторимый стиль с любовью к деталям.
            </p>
            <button 
                onClick={() => openBooking()}
                className="px-8 py-3 border border-roman-coffee text-napa hover:bg-cab-sav hover:text-white transition-colors uppercase text-xs tracking-widest"
            >
              Записаться к мастеру
            </button>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
             {team.map((member, idx) => (
               <motion.div
                 key={member.id}
                 className={`relative group ${idx === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: idx * 0.2 }}
                 viewport={{ margin: "-100px" }}
               >
                 <div className="overflow-hidden relative h-[500px] border-b-4 border-cab-sav">
                   <div className="absolute inset-0 bg-tamarind opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-color"></div>
                   <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                   />
                   
                   <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 to-transparent w-full">
                     <p className="text-roman-coffee text-xs uppercase tracking-widest mb-1">{member.role}</p>
                     <h3 className="text-2xl font-display text-white">{member.name}</h3>
                     <p className="text-napa text-sm mt-2 font-sans">{member.bio}</p>
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
