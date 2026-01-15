
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-[#0F4C81] p-1.5 rounded">
            <span className="text-white font-bold text-xl tracking-tighter">114</span>
          </div>
          <span className="text-[#0F4C81] font-bold text-xl font-serif">행정 114</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-semibold transition-colors ${
                location.pathname === item.path ? 'text-[#0F4C81]' : 'text-[#666666] hover:text-[#0F4C81]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#0F4C81] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#0c3c66] transition-all"
          >
            상담 신청하기
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute w-full left-0 animate-in slide-in-from-top duration-300">
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
            <Link
              to="/contact"
              className="bg-[#0F4C81] text-white py-3 rounded text-center font-bold"
              onClick={() => setIsOpen(false)}
            >
              상담 신청하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
