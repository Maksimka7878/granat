import React from 'react';
import { MapPin, Phone, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="text-3xl font-display text-gold-300 tracking-widest uppercase">
                        <span className="text-granat-500">G</span>ranat
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Студия красоты, где рождается ваш совершенный образ. Почувствуйте себя королевой в атмосфере абсолютной роскоши.
                    </p>
                    <div className="flex gap-4">
                        <motion.a whileHover={{ scale: 1.2, color: '#C21807' }} href="#" className="text-white transition-colors"><Instagram size={20} /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#C21807' }} href="#" className="text-white transition-colors"><Send size={20} /></motion.a>
                    </div>
                </div>

                {/* Contacts */}
                <div className="space-y-6">
                    <h4 className="text-lg font-display text-white">Контакты</h4>
                    <div className="flex items-start gap-4 text-gray-400 text-sm">
                        <MapPin className="text-granat-500 shrink-0" size={18} />
                        <span>Москва, ул. Петровка, 12<br/>Элитный квартал</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <Phone className="text-granat-500 shrink-0" size={18} />
                        <span>+7 (495) 000-00-00</span>
                    </div>
                </div>

                {/* Hours */}
                <div className="space-y-6">
                    <h4 className="text-lg font-display text-white">Время работы</h4>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li className="flex justify-between"><span>Пн - Пт</span> <span>10:00 - 22:00</span></li>
                        <li className="flex justify-between"><span>Сб - Вс</span> <span>11:00 - 21:00</span></li>
                    </ul>
                </div>

                {/* Map placeholder */}
                <div className="h-48 bg-granat-900/50 border border-white/10 rounded-sm relative overflow-hidden group">
                     {/* Simulating a map */}
                     <div className="absolute inset-0 bg-[radial-gradient(circle,_#333_1px,_transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <MapPin className="text-granat-500 animate-bounce" size={32} />
                     </div>
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="uppercase text-xs tracking-widest text-white border-b border-white">Открыть карту</span>
                     </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
                <p>&copy; 2024 Granat Studio. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Contact;