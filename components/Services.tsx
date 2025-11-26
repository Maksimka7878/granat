
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { Download, ChevronRight } from 'lucide-react';

// Data Structure
interface ServiceItem {
  name: string;
  price: string;
  description?: string;
  note?: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  introText?: string;
  items: ServiceItem[];
}

const serviceData: ServiceCategory[] = [
  {
    id: 'haircuts',
    title: 'Стрижки & Укладки',
    introText: 'Идеальная стрижка не требует долгих укладок и смотрится уместно в любом контексте.',
    items: [
      { name: 'Женская стрижка с укладкой', price: '3500 / 5000 / 6000 ₽', description: 'Стрижка, подобранная с учетом структуры ваших волос, пропорций лица.' },
      { name: 'Укладка', price: '2500 / 3000 / 4000 ₽', description: 'Небрежные волны или естественный объем.' },
      { name: 'Мужская стрижка', price: '3500 / 5000 / 6000 ₽', description: 'От классики до креатива.' },
      { name: 'Укладка с собранными волосами', price: '6000 ₽', description: 'Элегантный образ для особого случая.' },
      { name: 'Коррекция длины челки', price: '1500 / 1500 / 2000 ₽', description: 'Когда хочется освежить взгляд.' },
    ]
  },
  {
    id: 'coloring',
    title: 'Окрашивание',
    introText: 'Мы используем щадящие красители Davines и Redken, позволяющие добиться оттенков, приближенных к натуральным.',
    items: [
      { name: 'Окрашивание корней', price: '8000 – 9000 ₽', description: 'Изменение оттенка в прикорневой зоне.' },
      { name: 'Окрашивание в один тон', price: '8000 – 16000 ₽', description: 'Стойкое окрашивание, позволяющее закрасить седину.' },
      { name: 'Тонирование', price: '8000 – 14000 ₽', description: 'Интенсивное тонирование безаммиачным красителем.' },
      { name: 'Окрашивание с осветлением', price: '15000 – 30000 ₽', description: 'Различные техники осветления (Highlights, Balayage).' },
      { name: 'Многоэтапное окрашивание', price: '10000 – 20000 ₽', description: 'Без осветления. Shatush, AirTouch.' },
      { name: 'Total Blond', price: '15000 – 30000 ₽', description: 'То самое идеальное осветление от корней.' },
      { name: 'Выход из черного', price: '20000 – 50000 ₽', description: 'Сложная процедура возвращения к натуральному или светлому тону.' },
      { name: 'Добавка Olaplex в краситель', price: '2000 ₽', description: 'Защита волос во время окрашивания.' },
    ]
  },
  {
    id: 'care',
    title: 'Уходы для волос',
    introText: 'Когда привычная маска бессильна, за восстановление здоровья ваших волос берутся наши профессиональные уходы.',
    items: [
      { name: 'Advante Salon Treatment', price: '6000 ₽', description: 'Глубокое восстановление.' },
      { name: 'Advante Extra Damage', price: '8000 ₽', description: 'Для сильно поврежденных волос.' },
      { name: 'Экспресс-уход K18', price: '3000 ₽', description: 'Восстановление пептидами за 4 минуты.' },
      { name: 'Davines Purifying', price: '3000 ₽', description: 'Экспресс-уход от перхоти.' },
      { name: 'Davines Replumping', price: '4000 ₽', description: 'Уплотняющий уход для эластичности.' },
      { name: 'Davines Nourishing', price: '4000 ₽', description: 'Кератиновое чудо: интенсивно-восстанавливающий.' },
      { name: 'Davines Tailoring', price: '4000 ₽', description: 'Персональный коктейль для ваших волос.' },
      { name: 'Уход от Olaplex', price: '3000 ₽', description: 'Для осветленных и окрашенных волос.' },
    ]
  },
  {
    id: 'nails',
    title: 'Маникюр и Педикюр',
    introText: 'Мы за максимально естественные ногти, поэтому не делаем наращивание. Используем безопасные лаки Deborah Lippmann, Zoya, Smith&Cult.',
    items: [
      { name: 'Маникюр с покрытием Лак', price: '2700 ₽', description: 'Знаковый маникюр с бережной обработкой кутикулы и покрытием.' },
      { name: 'Маникюр P.Shine', price: '3000 ₽', description: 'Маникюр-уход. Глянцевание ногтевой пластины питательным составом.' },
      { name: 'Педикюр с покрытием Лак', price: '3800 ₽', description: 'Обработка стоп и покрытие ногтевой пластины лаком.' },
      { name: 'Педикюр P.Shine', price: '4000 ₽', description: 'Педикюр-уход. Делает ногти более крепкими и блестящими без лака.' },
      { name: 'Покрытие ногтей лаком (руки)', price: '1300 ₽', description: 'Включает коррекцию длины и формы.' },
      { name: 'SPA-уход для рук', price: '1500 ₽', description: 'Питание и увлажнение кожи рук.' },
      { name: 'Маникюр без покрытия', price: '2200 ₽', description: 'Классическая обработка без нанесения лака.' },
    ]
  },
  {
    id: 'visage',
    title: 'Брови и Ресницы',
    introText: 'Можно завидовать бровям Кары Делевинь, а можно прийти к нам. Подберем форму и оттенок, подходящие именно вам. Краситель Refectocil.',
    items: [
      { name: 'Коррекция и окрашивание бровей', price: '2300 ₽', description: 'Комплексное оформление взгляда.' },
      { name: 'Коррекция бровей', price: '1200 ₽', description: 'Создание идеальной формы.' },
      { name: 'Окрашивание бровей', price: '1300 ₽', description: 'Стойкий цвет на 3-4 недели.' },
      { name: 'Осветление бровей', price: '1300 ₽', description: 'Для мягкого и естественного образа.' },
      { name: 'Окрашивание ресниц', price: '1000 ₽', description: 'Глубокий цвет, избавляющий от необходимости туши.' },
      { name: 'Ламинирование бровей', price: '3500 ₽', description: 'Долговременная укладка.' },
      { name: 'Дневной макияж', price: '4000 ₽', description: 'Легкий и свежий образ.' },
      { name: 'Вечерний макияж', price: '6000 ₽', description: 'Стойкий макияж для особых случаев.' },
    ]
  }
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(serviceData[0].id);
  const { openBooking } = useBooking();

  const activeData = serviceData.find(c => c.id === activeCategory) || serviceData[0];

  return (
    <section id="services" className="py-24 bg-tamarind relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-napa/20 to-transparent"></div>
        <div className="absolute -left-20 top-40 w-96 h-96 bg-cab-sav/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-roman-coffee font-sans uppercase tracking-[0.2em] text-xs"
          >
            Price List
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display text-white mt-4"
          >
            Меню Услуг
          </motion.h2>
          <div className="w-24 h-1 bg-cab-sav mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Categories */}
            <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-2">
                    {serviceData.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`w-full text-left py-4 px-6 relative group transition-all duration-300 border-l-2 ${
                                activeCategory === category.id 
                                ? 'border-cab-sav bg-gradient-to-r from-cab-sav/10 to-transparent' 
                                : 'border-white/5 hover:border-roman-coffee hover:bg-white/5'
                            }`}
                        >
                            <span className={`font-display text-lg tracking-wide uppercase transition-colors ${
                                activeCategory === category.id ? 'text-white' : 'text-napa group-hover:text-roman-coffee'
                            }`}>
                                {category.title}
                            </span>
                            {activeCategory === category.id && (
                                <motion.div 
                                    layoutId="activeGlow"
                                    className="absolute inset-0 bg-cab-sav/5"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}

                    <div className="pt-8">
                         <a href="#" className="flex items-center gap-3 text-flint text-xs uppercase tracking-widest hover:text-white transition-colors group">
                            <Download size={16} />
                            <span className="border-b border-transparent group-hover:border-white transition-all">Скачать полный прайс (PDF)</span>
                         </a>
                    </div>
                </div>
            </div>

            {/* Right Column: Service List */}
            <div className="lg:w-2/3 min-h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="mb-8">
                          <h3 className="text-3xl font-display text-roman-coffee mb-4 hidden lg:block">
                              {activeData.title}
                          </h3>
                          {activeData.introText && (
                            <p className="text-napa/80 font-sans italic text-sm leading-relaxed border-l-2 border-cab-sav pl-4">
                              {activeData.introText}
                            </p>
                          )}
                        </div>

                        {activeData.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => openBooking(item.name)}
                                className="group relative p-6 border-b border-white/5 hover:border-roman-coffee/30 cursor-pointer transition-colors"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-white/5 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                
                                <div className="relative z-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                    <div className="flex-1">
                                        <h4 className="text-xl font-display text-white group-hover:text-gold-300 transition-colors">
                                            {item.name}
                                        </h4>
                                        {item.description && (
                                            <p className="text-flint text-sm mt-2 font-sans max-w-md group-hover:text-napa transition-colors">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="hidden md:block flex-1 h-px bg-white/10 w-24"></div>
                                        <span className="text-lg font-sans font-bold text-napa whitespace-nowrap group-hover:text-white transition-colors">
                                            {item.price}
                                        </span>
                                        <ChevronRight size={16} className="text-roman-coffee opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        
                        <div className="mt-8 p-4 bg-black/20 border border-white/5 rounded-sm">
                            <p className="text-flint text-xs font-sans leading-relaxed">
                                * Стоимость услуг может варьироваться в зависимости от категории мастера (Младший мастер / Мастер / Топ-мастер), длины и густоты волос. Окончательная стоимость определяется после консультации.
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
