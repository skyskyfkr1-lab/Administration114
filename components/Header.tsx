
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, BRAND } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span style={{ 
            fontSize: '14px', 
            fontWeight: '400', 
            color: '#666666', 
            marginBottom: '4px' 
          }}>
            {BRAND.parent}
          </span>
          <span style={{ 
            fontSize: '28px', 
            fontWeight: '800', 
            color: '#002C5F', 
            letterSpacing: '-0.5px',
            lineHeight: '1.2'
          }} className="font-serif">
            {BRAND.main}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-semibold transition-colors ${
                location.pathname === item.path ? 'text-[#002C5F]' : 'text-[#666666] hover:text-[#002C5F]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute w-full left-0 animate-in slide-in-from-top duration-300 shadow-xl">
          <nav className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[#333333] font-medium py-2 border-b border-gray-50"
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
