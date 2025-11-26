import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import Logo from './Logo';

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
          isScrolled ? 'py-2 glass-panel shadow-xl shadow-granat-900/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center group">
            <Logo className={`h-14 w-auto transition-colors duration-300 ${isScrolled ? 'text-granat-900 group-hover:text-cab-sav' : 'text-granat-900 group-hover:text-cab-sav'}`} />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-granat-900 hover:text-cab-sav transition-colors font-sans text-sm tracking-widest uppercase relative group font-medium"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cab-sav transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={() => openBooking()}
              className="px-6 py-2 border border-cab-sav text-cab-sav font-sans text-xs uppercase tracking-widest hover:bg-cab-sav hover:text-white transition-all duration-300 rounded-full font-bold"
            >
              Записаться
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-cab-sav">
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
            className="fixed inset-0 z-50 bg-beige flex flex-col items-center justify-center space-y-8"
          >
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 text-granat-900 hover:text-cab-sav"
            >
                <X size={32} />
            </button>
            
            <div className="mb-4">
               <Logo className="h-20 w-auto text-cab-sav" />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display text-granat-900 hover:text-cab-sav transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleBooking}
              className="mt-8 px-8 py-3 bg-cab-sav text-white font-sans text-sm uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(77,10,24,0.4)] hover:scale-105 transition-transform"
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