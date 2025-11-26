
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '../types';
import { X, Star } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const works: PortfolioItem[] = [
  { id: '1', title: 'Ruby Shine', category: 'Hair', image: 'https://picsum.photos/600/800?random=20', review: 'Восторг! Цвет невероятно глубокий.', author: 'Анна' },
  { id: '2', title: 'Velvet Touch', category: 'Nails', image: 'https://picsum.photos/600/800?random=21', review: 'Самый аккуратный маникюр в моей жизни.', author: 'Ирина' },
  { id: '3', title: 'Evening Glow', category: 'Makeup', image: 'https://picsum.photos/600/800?random=22', review: 'Чувствовала себя звездой весь вечер.', author: 'Марина' },
  { id: '4', title: 'Natural Wave', category: 'Hair', image: 'https://picsum.photos/600/800?random=23', review: 'Локоны держались 2 дня!', author: 'Ольга' },
  { id: '5', title: 'Granat Style', category: 'Total Look', image: 'https://picsum.photos/600/800?random=24', review: 'Полное преображение, спасибо команде.', author: 'Екатерина' },
  { id: '6', title: 'Deep Care', category: 'Spa', image: 'https://picsum.photos/600/800?random=25', review: 'Релакс на 100%.', author: 'Светлана' },
];

const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { openBooking } = useBooking();

  const selectedItem = works.find(w => w.id === selectedId);

  const handleBooking = () => {
      if (selectedItem) {
          // Map category to service if possible, or just pass generic
          openBooking(selectedItem.category === 'Makeup' ? 'Visage & Brows' : selectedItem.category === 'Nails' ? 'Nail Artistry' : 'Hair Couture');
          setSelectedId(null);
      }
  };

  return (
    <section id="portfolio" className="py-24 bg-tamarind">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-display text-white">Портфолио</h2>
            <div className="hidden md:flex gap-4">
                <span className="text-roman-coffee font-sans text-sm cursor-pointer border-b border-roman-coffee">Все</span>
                <span className="text-flint font-sans text-sm cursor-pointer hover:text-white transition-colors">Волосы</span>
                <span className="text-flint font-sans text-sm cursor-pointer hover:text-white transition-colors">Ногти</span>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {works.map((work) => (
            <motion.div
              layoutId={work.id}
              key={work.id}
              onClick={() => setSelectedId(work.id)}
              className="relative aspect-[3/4] cursor-pointer group overflow-hidden"
              whileHover={{ scale: 0.98 }}
            >
              <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-cab-sav/40 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                    <span className="text-white text-xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div 
                className="absolute inset-0 bg-tamarind/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              />
              
              <motion.div 
                layoutId={selectedId}
                className="relative bg-granat-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none border border-roman-coffee shadow-2xl flex flex-col md:flex-row"
              >
                 <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 z-10 text-white hover:text-roman-coffee p-2 bg-black/50 rounded-full"
                 >
                    <X size={24} />
                 </button>

                 <div className="w-full md:w-1/2 h-[400px] md:h-auto">
                    <img src={selectedItem.image} className="w-full h-full object-cover" alt={selectedItem.title} />
                 </div>

                 <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-roman-coffee text-sm uppercase tracking-widest mb-2">{selectedItem.category}</span>
                    <h3 className="text-3xl font-display text-white mb-6">{selectedItem.title}</h3>
                    
                    <div className="bg-black/20 p-6 border-l-2 border-roman-coffee mb-8">
                        <div className="flex text-roman-coffee mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-napa italic mb-4">"{selectedItem.review}"</p>
                        <p className="text-white font-bold text-sm">— {selectedItem.author}</p>
                    </div>

                    <button 
                        onClick={handleBooking}
                        className="w-full py-4 bg-cab-sav text-white uppercase tracking-widest hover:bg-roman-coffee transition-colors"
                    >
                        Хочу так же
                    </button>
                 </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
