import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-zinc-500 uppercase border border-zinc-800 rounded-full">
          New Collection 2024
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
          ESSENTIAL <br />
          MINIMALISM.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
          Premium heavyweight cotton t-shirts designed for the modern aesthetic. 
          Unbranded, understated, and uncompromising on quality.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#collection" 
            className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300"
          >
            Shop Collection
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3 border border-zinc-800 text-white font-medium hover:border-white transition-all duration-300"
          >
            Custom Orders
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#collection" className="text-zinc-500 hover:text-white transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;