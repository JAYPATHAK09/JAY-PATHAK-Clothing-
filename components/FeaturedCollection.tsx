import React from 'react';
import { ArrowRight } from 'lucide-react';

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
    name: "Heavyweight Boxy Tee",
    price: "$45.00",
    image: "https://picsum.photos/id/1060/800/1000",
    color: "Off-Black"
  },
  {
    id: 2,
    name: "Oversized Basic",
    price: "$38.00",
    image: "https://picsum.photos/id/117/800/1000",
    color: "Cloud Gray"
  },
  {
    id: 3,
    name: "Structured Mock Neck",
    price: "$52.00",
    image: "https://picsum.photos/id/1059/800/1000",
    color: "Charcoal"
  },
  {
    id: 4,
    name: "Vintage Wash Crew",
    price: "$42.00",
    image: "https://picsum.photos/id/103/800/1000",
    color: "Bone"
  }
];

const FeaturedCollection: React.FC = () => {
  return (
    <section id="collection" className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Latest Drop</h2>
            <p className="text-zinc-400">Engineered for everyday longevity.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-sm font-medium text-white hover:text-zinc-300 group">
            View All 
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors">{product.name}</h3>
                  <p className="text-sm text-zinc-500">{product.color}</p>
                </div>
                <span className="text-lg font-light text-white">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
          <a href="#" className="inline-flex items-center text-sm font-medium text-white border-b border-white pb-1">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;