import React, { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Heavyweight Boxy",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    color: "Jet Black"
  },
  {
    id: 2,
    name: "Architect Tee",
    price: "$58.00",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop",
    color: "Asphalt"
  },
  {
    id: 3,
    name: "Studio Crew",
    price: "$72.00",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    color: "Charcoal"
  },
  {
    id: 4,
    name: "Raw Canvas",
    price: "$62.00",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
    color: "Bone"
  }
];

const FeaturedCollection: React.FC = () => {
  const [addingId, setAddingId] = useState<number | null>(null);

  const handleAddToCart = (id: number) => {
    setAddingId(id);
    
    // Update logic
    const currentCount = parseInt(localStorage.getItem('noir_cart_count') || '0');
    localStorage.setItem('noir_cart_count', (currentCount + 1).toString());
    
    // Dispatch event for Navbar
    window.dispatchEvent(new Event('noir_cart_updated'));

    setTimeout(() => {
      setAddingId(null);
    }, 800);
  };

  return (
    <section id="collection" className="py-32 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tight uppercase leading-none">The Permanent<br/>Collection</h2>
            <div className="h-1 w-20 bg-white"></div>
          </div>
          <p className="max-w-xs text-zinc-500 text-sm font-light leading-relaxed">
            Season-less essentials crafted with precision. Our most requested silhouettes, restocked in limited quantities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 transition-all duration-700">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                
                <button 
                  onClick={() => handleAddToCart(product.id)}
                  className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] ${addingId === product.id ? 'bg-white/90 text-black opacity-100' : 'bg-black/40 text-white'}`}
                >
                  <div className={`flex items-center space-x-2 px-6 py-3 border border-white/20 uppercase text-[10px] font-bold tracking-[0.2em] ${addingId === product.id ? 'border-black' : ''}`}>
                    {addingId === product.id ? (
                      <span className="animate-pulse">Added to Cart</span>
                    ) : (
                      <>
                        <Plus className="w-3 h-3" />
                        <span>Quick Add</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
              
              <div className="mt-6 flex flex-col space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">{product.name}</h3>
                  <span className="text-sm font-light text-zinc-500">{product.price}</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">{product.color}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;