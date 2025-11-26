
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
    const handleAnchorClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      
      if (href) {
        e.preventDefault();
        
        // Handle "Scroll to Top" for simple '#' links (like the logo)
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        // Handle anchor links
        if (href.startsWith('#') && href.length > 1) {
            try {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.warn("Smooth scroll target not found or invalid:", href);
            }
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
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
