import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import Features from './components/Features';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollection />
        <Features />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;