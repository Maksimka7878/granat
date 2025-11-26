
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Мастера', href: '#team' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Контакты', href: '#contact' },
  ];

  const handleBooking = () => {
    setIsMobileMenuOpen(false);
    openBooking();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-4 glass-panel shadow-2xl shadow-tamarind/50' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-display font-bold text-napa tracking-widest uppercase cursor-pointer flex items-center gap-2">
            <span className="text-cab-sav text-3xl">G</span>ranat
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gold-100 hover:text-napa transition-colors font-sans text-sm tracking-widest uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cab-sav transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={() => openBooking()}
              className="px-6 py-2 border border-roman-coffee text-napa font-sans text-xs uppercase tracking-widest hover:bg-cab-sav hover:border-cab-sav hover:text-white transition-all duration-300 rounded-full"
            >
              Записаться
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-napa">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-50 bg-tamarind flex flex-col items-center justify-center space-y-8"
          >
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 text-napa"
            >
                <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display text-gold-100 hover:text-roman-coffee"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleBooking}
              className="mt-8 px-8 py-3 bg-cab-sav text-white font-sans text-sm uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(77,10,24,0.4)]"
            >
              Записаться
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
