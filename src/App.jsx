import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MoodboardVisualizer from './components/MoodboardVisualizer';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import AmbientTwinkle from './components/AmbientTwinkle';

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleOpenBooking = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookStyle = (styleTitle) => {
    setSelectedStyle(styleTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-noir-950 text-stone-100 flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Subtle floating gold bokeh twinkle */}
      <AmbientTwinkle />

      {/* Sticky Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Experience */}
      <main className="flex-1 relative z-10">
        <Hero onOpenBooking={handleOpenBooking} />
        
        {/* About Us */}
        <About onOpenBooking={handleOpenBooking} />

        {/* Our Services */}
        <Services onSelectService={handleBookStyle} />

        {/* Interactive Concept Visualizer / Moodboards */}
        <MoodboardVisualizer onSelectConcept={handleBookStyle} />

        {/* Portfolio / Previous Works */}
        <Portfolio onBookStyle={handleBookStyle} />

        {/* Why Choose Us */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* Our Process */}
        <Process onOpenBooking={handleOpenBooking} />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact and Booking Section */}
        <BookingSection 
          initialStyle={selectedStyle} 
          onCloseStyle={() => setSelectedStyle('')} 
        />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloating />
    </div>
  );
}
