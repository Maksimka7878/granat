
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
    { 
      id: 1, 
      name: "Виктория С.", 
      text: "Атмосфера просто королевская. Чувствовала себя звездой с момента, как вошла. Мастера — настоящие художники.", 
      rating: 5,
      role: "Постоянный клиент"
    },
    { 
      id: 2, 
      name: "Елена М.", 
      text: "Лучшее окрашивание в городе. Цвет глубокий, волосы живые. Команда 'Гранат' знает, что такое роскошь.", 
      rating: 5,
      role: "Гость студии"
    },
    { 
      id: 3, 
      name: "Мария К.", 
      text: "Сервис на высоте. Шампанское, забота, уют. Спа-ритуалы — это отдельный вид искусства.", 
      rating: 5,
      role: "Influencer"
    },
    { 
        id: 4, 
        name: "Анна Д.", 
        text: "Идеальный маникюр, который держится месяц. Стерильность 100%, для меня это важно.", 
        rating: 5,
        role: "Бизнес-леди"
      },
];

const Testimonials: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
    const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-tamarind relative overflow-hidden">
             {/* Background Decor */}
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(77,10,24,0.15),_transparent_50%)]"></div>
             
             <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-roman-coffee font-sans uppercase tracking-[0.2em] text-xs"
                    >
                        Love Letters
                    </motion.span>
                    <motion.h2 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         className="text-4xl md:text-5xl font-display text-white mt-4"
                    >
                        Отзывы Клиентов
                    </motion.h2>
                    <div className="w-16 h-1 bg-cab-sav mx-auto mt-6 rounded-full opacity-50"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-white/5 backdrop-blur-md border border-napa/10 p-8 md:p-16 text-center relative"
                        >
                            <Quote className="absolute top-8 left-8 text-cab-sav/30 w-16 h-16 transform -scale-x-100" />
                            
                            <div className="flex justify-center gap-1 mb-8 text-roman-coffee">
                                {[...Array(reviews[current].rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                            </div>
                            
                            <p className="text-xl md:text-3xl font-display text-napa italic mb-10 leading-relaxed">
                                "{reviews[current].text}"
                            </p>
                            
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cab-sav to-roman-coffee mb-4"></div>
                                <p className="text-white font-sans font-bold tracking-widest uppercase text-sm mb-1">
                                    {reviews[current].name}
                                </p>
                                <p className="text-flint text-xs font-sans uppercase tracking-wider">
                                    {reviews[current].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button 
                        onClick={prev} 
                        className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 text-napa/50 hover:text-white transition-all hover:scale-110"
                    >
                        <ChevronLeft size={40} strokeWidth={1} />
                    </button>
                    <button 
                        onClick={next} 
                        className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 text-napa/50 hover:text-white transition-all hover:scale-110"
                    >
                        <ChevronRight size={40} strokeWidth={1} />
                    </button>
                    
                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {reviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    current === idx ? 'bg-cab-sav w-6' : 'bg-napa/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Testimonials;
