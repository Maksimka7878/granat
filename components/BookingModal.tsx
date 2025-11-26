import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, User, Phone, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking, preselectedService } = useBooking();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isLoading, setIsLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: ''
  });

  // Standard Categories for the dropdown
  const categories = [
    "Hair Couture",
    "Nail Artistry",
    "Visage & Brows",
    "Granat Spa",
    "Total Look",
    "Подарочный Сертификат"
  ];

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    } else {
      setFormData(prev => ({ ...prev, service: '' }));
    }
    
    if (isBookingOpen) {
      setStep('form');
      setIsLoading(false);
    }
  }, [preselectedService, isBookingOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Determine if the current service is a custom one (not in the standard list)
  const isCustomService = formData.service && !categories.includes(formData.service);

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-granat-900/50 backdrop-blur-md"
          />

          {/* Modal Content - Beige Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-beige border border-white shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closeBooking}
              className="absolute top-4 right-4 text-roman-coffee hover:text-cab-sav transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Decorative Top Line */}
            <div className="h-1 w-full bg-gradient-to-r from-roman-coffee via-cab-sav to-roman-coffee"></div>

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {step === 'form' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="text-center mb-8">
                      <span className="text-cab-sav font-sans text-xs uppercase tracking-[0.2em] font-bold">Online Booking</span>
                      <h3 className="text-3xl font-display text-granat-900 mt-2">Запись в <span className="text-cab-sav italic">Granat</span></h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-1">
                        <label className="text-xs text-roman-coffee uppercase tracking-wider ml-1">Имя</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-flint w-4 h-4" />
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ваше имя"
                            className="w-full bg-white border border-roman-coffee/20 rounded-none py-3 pl-10 pr-4 text-granat-900 placeholder-flint/70 focus:outline-none focus:border-cab-sav transition-colors font-sans"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-roman-coffee uppercase tracking-wider ml-1">Телефон</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-flint w-4 h-4" />
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+7 (999) 000-00-00"
                            className="w-full bg-white border border-roman-coffee/20 rounded-none py-3 pl-10 pr-4 text-granat-900 placeholder-flint/70 focus:outline-none focus:border-cab-sav transition-colors font-sans"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-roman-coffee uppercase tracking-wider ml-1">Услуга</label>
                        <div className="relative">
                          <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 text-flint w-4 h-4" />
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-white border border-roman-coffee/20 rounded-none py-3 pl-10 pr-4 text-granat-900 focus:outline-none focus:border-cab-sav transition-colors font-sans appearance-none truncate"
                          >
                            <option value="" disabled className="text-flint">Выберите услугу</option>
                            
                            {/* Dynamically add the preselected service if it's not a standard category */}
                            {isCustomService && (
                                <option value={formData.service}>{formData.service}</option>
                            )}
                            
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-roman-coffee uppercase tracking-wider ml-1">Желаемая дата</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-flint w-4 h-4" />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-white border border-roman-coffee/20 rounded-none py-3 pl-10 pr-4 text-granat-900 placeholder-flint focus:outline-none focus:border-cab-sav transition-colors font-sans"
                          />
                        </div>
                      </div>

                      <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full py-4 bg-cab-sav hover:bg-granat-900 text-white uppercase tracking-widest font-sans text-sm transition-all duration-300 relative overflow-hidden group mt-4 disabled:opacity-70 shadow-lg"
                      >
                         <span className={`relative z-10 flex items-center justify-center gap-2 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                           Подтвердить запись
                         </span>
                         {isLoading && (
                           <div className="absolute inset-0 flex items-center justify-center z-20">
                             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                           </div>
                         )}
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-cab-sav rounded-full flex items-center justify-center mx-auto mb-6 relative">
                        <div className="absolute inset-0 border border-cab-sav/30 rounded-full animate-ping opacity-20"></div>
                        <Check className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-display text-granat-900 mb-4">Заявка принята!</h3>
                    <p className="text-flint font-sans mb-8">
                      Мы свяжемся с вами в ближайшее время для подтверждения записи.
                    </p>
                    <button
                      onClick={closeBooking}
                      className="px-8 py-3 border border-roman-coffee text-roman-coffee hover:bg-roman-coffee hover:text-white transition-all uppercase text-xs tracking-widest"
                    >
                      Отлично
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Background Grain/Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;