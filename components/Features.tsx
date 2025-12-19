import React from 'react';
import { Shirt, Ruler, Truck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm">
              <Shirt className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Ethically Sourced</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              We partner with factories that prioritize fair wages and safe working environments. 
              100% organic cotton grown without harmful chemicals.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm">
              <Ruler className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Perfect Fit</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Countless iterations to achieve the ideal boxy, relaxed silhouette. 
              Pre-shrunk to ensure the fit stays consistent wash after wash.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Global Shipping</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Free worldwide shipping on all orders over $150. 
              Sustainable, plastic-free packaging that looks good and does good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;