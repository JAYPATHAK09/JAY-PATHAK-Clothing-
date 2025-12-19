import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold tracking-tighter text-white mb-2">NOIR.</h2>
            <p className="text-zinc-500 text-sm">Minimal threads for the modern creative.</p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
          </div>

          <div className="flex space-x-6 mt-8 md:mt-0">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} NOIR Threads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;