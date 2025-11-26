import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import BackgroundBubbles from './BackgroundBubbles';

const Certificates: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section className="py-24 bg-gradient-to-b from-beige to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cab-sav/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-roman-coffee/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
      </div>
      <BackgroundBubbles />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-cab-sav font-sans uppercase tracking-[0.2em] text-xs flex items-center gap-2 font-bold">
                <Gift size={14} />
                Идеальный Подарок
              </span>
              <h2 className="text-4xl md:text-6xl font-display text-granat-900 mt-4 mb-6 leading-tight">
                Подарите <br/>
                <span className="text-cab-sav">Красоту и Роскошь</span>
              </h2>
              <p className="text-flint text-lg font-sans mb-8 leading-relaxed max-w-md">
                Подарочный сертификат Granat — это пропуск в мир заботы и эстетики. Доступен в электронном формате или в фирменном бархатном конверте.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full border border-cab-sav/30 flex items-center justify-center group-hover:bg-cab-sav/10 transition-colors">
                        <Sparkles className="text-cab-sav w-4 h-4" />
                    </div>
                    <div>
                        <h4 className="text-granat-900 font-display">Любой номинал</h4>
                        <p className="text-flint text-xs">От 5 000 ₽ до безлимита</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full border border-cab-sav/30 flex items-center justify-center group-hover:bg-cab-sav/10 transition-colors">
                        <Gift className="text-cab-sav w-4 h-4" />
                    </div>
                    <div>
                        <h4 className="text-granat-900 font-display">Срок действия</h4>
                        <p className="text-flint text-xs">12 месяцев с момента покупки</p>
                    </div>
                </div>
              </div>

              <button 
                onClick={() => openBooking('Подарочный Сертификат')}
                className="px-10 py-4 bg-cab-sav text-white font-sans uppercase tracking-widest text-sm hover:bg-granat-900 transition-all duration-300 shadow-lg shadow-cab-sav/20"
              >
                Оформить Сертификат
              </button>
            </motion.div>
          </div>

          {/* Visual Card */}
          <div className="lg:w-1/2 perspective-1000 w-full flex justify-center">
            <motion.div
               initial={{ rotateY: -15, rotateX: 5 }}
               whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05 }}
               animate={{ y: [0, -15, 0] }}
               transition={{ 
                   y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                   rotateY: { duration: 0.5 },
                   rotateX: { duration: 0.5 },
                   scale: { duration: 0.5 }
               }}
               className="relative w-full max-w-[500px] aspect-[1.6/1] rounded-xl shadow-2xl"
               style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Card Face - Kept Dark for premium contrast */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-tamarind via-[#451010] to-black border border-napa/20 overflow-hidden shadow-[0_20px_50px_rgba(77,10,24,0.3)]">
                    {/* Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-150%] animate-shimmer"></div>

                    {/* Logo/Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <div className="text-4xl font-display text-transparent bg-clip-text bg-gradient-to-b from-beige to-roman-coffee tracking-[0.2em] mb-2 drop-shadow-lg">
                            GRANAT
                        </div>
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-roman-coffee to-transparent mb-2"></div>
                        <div className="text-[10px] text-napa uppercase tracking-[0.4em]">Gift Card</div>
                    </div>

                    {/* Corners */}
                    <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-roman-coffee/30 rounded-tl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-roman-coffee/30 rounded-br-lg"></div>
                </div>

                {/* Reflection/Glow underneath */}
                <div className="absolute -bottom-10 left-10 right-10 h-8 bg-cab-sav/30 blur-2xl rounded-[100%]"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;