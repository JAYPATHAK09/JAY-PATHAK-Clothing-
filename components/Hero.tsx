import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100svh] flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#18181b_0%,_#000_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        <div className="overflow-hidden">
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase border border-zinc-800/50 rounded-full animate-fade-in">
            EST. 2024 / SEOUL / LONDON
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.05em] text-white leading-[0.85] uppercase transition-all duration-1000 transform scale-95 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
          RARE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">FABRICS</span>
        </h1>

        <div className="max-w-xl mx-auto animate-[fadeIn_1s_ease-out_0.5s_forwards] opacity-0">
          <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed tracking-wide">
            Sculpted silhouettes. 450GSM heavyweight cotton. <br />
            An obsession with the tactile and the timeless.
          </p>
        </div>
        
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-[fadeIn_1s_ease-out_0.8s_forwards] opacity-0">
          <a 
            href="#collection" 
            className="group relative w-full sm:w-64 px-8 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-zinc-200 overflow-hidden"
          >
            <span className="relative z-10">Explore Drop</span>
            <div className="absolute inset-0 bg-zinc-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-64 px-8 py-5 border border-zinc-800 text-white text-xs font-bold uppercase tracking-[0.2em] hover:border-white transition-all duration-500"
          >
            Custom Inquiries
          </a>
        </div>
      </div>

      {/* Aesthetic Scroll Prompt */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.5em] vertical-rl font-bold rotate-180">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;