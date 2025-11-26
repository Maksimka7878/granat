
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { useBooking } from '../context/BookingContext';

const services: Service[] = [
  {
    id: '1',
    title: 'Hair Couture',
    description: 'Стрижки, окрашивание и уходы на премиальных линейках.',
    price: 'от 3 500 ₽',
    image: 'https://picsum.photos/600/800?random=1',
  },
  {
    id: '2',
    title: 'Nail Artistry',
    description: 'Маникюр и педикюр с покрытием lux-класса. Стерильно.',
    price: 'от 2 200 ₽',
    image: 'https://picsum.photos/600/800?random=2',
  },
  {
    id: '3',
    title: 'Visage & Brows',
    description: 'Вечерний макияж и архитектура бровей для вашего идеального образа.',
    price: 'от 1 800 ₽',
    image: 'https://picsum.photos/600/800?random=3',
  },
  {
    id: '4',
    title: 'Granat Spa',
    description: 'Расслабляющие ритуалы и массаж для тела и души.',
    price: 'от 4 000 ₽',
    image: 'https://picsum.photos/600/800?random=4',
  },
];

const Services: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section id="services" className="py-24 bg-tamarind relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-roman-coffee font-sans uppercase tracking-[0.2em] text-xs"
          >
            Наши Услуги
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display text-white mt-4"
          >
            Меню Красоты
          </motion.h2>
          <div className="w-24 h-1 bg-cab-sav mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => openBooking(service.title)}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-50 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tamarind via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-4 border border-napa/30 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-display text-white mb-2">{service.title}</h3>
                <p className="text-napa/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                </p>
                <div className="flex justify-between items-center border-t border-white/20 pt-4">
                    <span className="text-roman-coffee font-sans font-bold">{service.price}</span>
                    <motion.div 
                        className="w-8 h-8 rounded-full bg-cab-sav flex items-center justify-center text-white text-xs"
                        whileHover={{ rotate: 90 }}
                    >
                        →
                    </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
