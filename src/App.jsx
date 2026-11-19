import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function App() {
  // Which gallery filter is active. Lives here so a service card can set it.
  const [category, setCategory] = useState('all');
  // The photo or style a visitor asked about, carried into the contact form.
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleViewCategory = (categoryId) => {
    setCategory(categoryId);
    scrollToSection('work');
  };

  const handleAskAbout = (styleTitle) => {
    setSelectedStyle(styleTitle);
    scrollToSection('contact');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Services onViewCategory={handleViewCategory} />
        <Portfolio
          category={category}
          onCategoryChange={setCategory}
          onAskAbout={handleAskAbout}
        />
        <About />
        <Process />
        <Testimonials />
        <BookingSection
          selectedStyle={selectedStyle}
          onClearStyle={() => setSelectedStyle('')}
        />
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
