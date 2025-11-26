
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import About from './components/About';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import BookingModal from './components/BookingModal';
import Certificates from './components/Certificates';
import { BookingProvider } from './context/BookingContext';

const App: React.FC = () => {
  // Simple smooth scroll implementation for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
      });
    });
  }, []);

  return (
    <BookingProvider>
      <main className="bg-tamarind min-h-screen text-white selection:bg-cab-sav selection:text-white">
        <CustomCursor />
        <Navigation />
        
        <Hero />
        <Brands />
        <Benefits />
        <Services />
        <About />
        <Portfolio />
        <Certificates />
        <Testimonials />
        <FAQ />
        <Contact />
        
        <BookingModal />
      </main>
    </BookingProvider>
  );
};

export default App;
