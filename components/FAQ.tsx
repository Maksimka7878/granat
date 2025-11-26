
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    { 
        q: "Нужно ли записываться заранее?", 
        a: "Мы рекомендуем записываться за 2-3 дня, чтобы выбрать удобное время. К топ-мастерам запись может вестись за неделю." 
    },
    { 
        q: "Есть ли у вас парковка?", 
        a: "Да, для гостей студии предусмотрен бесплатный подземный паркинг. Пожалуйста, сообщите номер автомобиля при записи." 
    },
    { 
        q: "Какие бренды косметики вы используете?", 
        a: "Мы работаем только на премиальных брендах: Dyson, Kevin.Murphy, Davines, Luxio, Christina, Babor. Вся косметика сертифицирована." 
    },
    { 
        q: "Можно ли приобрести подарочный сертификат?", 
        a: "Конечно. Мы предлагаем электронные и физические сертификаты в фирменной упаковке «Гранат» на любую сумму или услугу." 
    },
    {
        q: "Как отменить запись?",
        a: "Вы можете отменить или перенести запись по телефону или через мессенджеры не позднее чем за 24 часа до визита."
    }
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <div className="text-center mb-12">
                    <span className="text-flint font-sans uppercase tracking-[0.2em] text-xs">Info</span>
                    <h2 className="text-3xl md:text-4xl font-display text-white mt-2">Частые Вопросы</h2>
                </div>
                
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-white/10">
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                            >
                                <span className={`font-display text-lg md:text-xl transition-colors duration-300 ${activeIndex === i ? 'text-cab-sav' : 'text-napa group-hover:text-white'}`}>
                                    {faq.q}
                                </span>
                                <span className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
                                    {activeIndex === i ? <Minus className="text-cab-sav" /> : <Plus className="text-napa group-hover:text-white" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-flint font-sans leading-relaxed text-sm md:text-base pr-8">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
