
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, BRAND } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-[10px] md:text-sm font-normal text-gray-500 mb-0.5 md:mb-1">
            {BRAND.parent}
          </span>
          <span className="text-xl md:text-2xl lg:text-3xl font-black text-[#002C5F] letter-tight md:tracking-tighter leading-tight font-serif">
            {BRAND.main}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold transition-colors ${
                location.pathname === item.path ? 'text-[#002C5F]' : 'text-[#666666] hover:text-[#002C5F]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-[#002C5F]" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute w-full left-0 animate-in slide-in-from-top duration-300 shadow-2xl z-50">
          <nav className="flex flex-col p-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-bold py-4 text-lg border-b border-gray-50 last:border-0 ${
                  location.pathname === item.path ? 'text-[#002C5F]' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
