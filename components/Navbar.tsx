import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Initialize cart count from localStorage
    const savedCart = localStorage.getItem('noir_cart_count');
    if (savedCart) setCartCount(parseInt(savedCart));

    // Listen for custom "addToCart" events
    const handleCartUpdate = () => {
      const newCount = parseInt(localStorage.getItem('noir_cart_count') || '0');
      setCartCount(newCount);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('noir_cart_updated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('noir_cart_updated', handleCartUpdate);
    };
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-zinc-800 py-4 shadow-xl'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-[0.2em] hover:opacity-80 transition-opacity uppercase">
          NOIR<span className="text-zinc-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase text-zinc-400 hover:text-white transition-all tracking-[0.3em]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="relative text-white hover:text-zinc-300 transition-transform hover:scale-110 active:scale-95">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          <a
            href="#contact"
            className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest bg-white text-black hover:bg-zinc-200 transition-all rounded-none"
          >
            Inquiry
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-zinc-800 p-8 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-4">
               <button className="flex items-center justify-center space-x-2 text-white border border-zinc-800 py-3">
                 <ShoppingBag className="w-4 h-4" />
                 <span>Cart ({cartCount})</span>
               </button>
               <a
                href="#contact"
                className="bg-white text-black py-4 font-bold uppercase tracking-widest text-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Inquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;