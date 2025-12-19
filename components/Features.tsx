import React from 'react';
import { Shirt, Ruler, Truck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-none group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:-translate-y-2">
              <Shirt className="w-6 h-6 text-white group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">450GSM Organic</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs">
              Sourced from sustainable farms. Our cotton is twice the weight of standard tees, providing a structured drape that lasts years.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-none group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:-translate-y-2">
              <Ruler className="w-6 h-6 text-white group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">The Master Cut</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs">
              Every seam is reinforced with double-needle stitching. Pre-shrunk via industrial enzyme washing to guarantee fit integrity.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-none group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:-translate-y-2">
              <Truck className="w-6 h-6 text-white group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Express Global</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs">
              Wrapped in recycled heavy-gauge card. Shipped via carbon-neutral logistics to 190+ countries within 3-5 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;