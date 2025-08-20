import React, { useState, useEffect } from 'react';
import { LogoIcon } from './icons';

const Header: React.FC<{ onConnectClick: () => void }> = ({ onConnectClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#solution', label: 'Решения' },
    { href: '#how-it-works', label: 'Как это работает' },
    { href: '#results', label: 'Результаты' },
    { href: '#pricing', label: 'Тарифы' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' 
        : 'bg-brand-light/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + brand */}
          <a href="#" className="flex items-center group">
            <LogoIcon className="h-20 w-auto text-brand-blue-900 mr-1 transition-transform duration-300 group-hover:scale-105" />
            <span className="text-2xl font-bold text-brand-blue-900 transition-colors duration-300 group-hover:text-brand-accent">
              Motor Mind
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-slate-600 hover:text-brand-accent transition-all duration-300 font-medium rounded-lg hover:bg-slate-50 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-1/2 transform -translate-x-1/2"></span>
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="relative px-4 py-2 text-slate-600 hover:text-brand-blue-900 font-medium transition-all duration-300 rounded-lg hover:bg-slate-50 group">
              Войти
              <span className="absolute inset-0 rounded-lg border border-transparent group-hover:border-slate-200 transition-colors duration-300"></span>
            </button>
            <button
              onClick={onConnectClick}
              className="relative bg-brand-accent text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Подключить</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 text-brand-blue-900 focus:outline-none rounded-lg hover:bg-slate-100 transition-colors duration-300 flex items-center justify-center"
              aria-label="Меню"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : ''
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-3.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-6">
            <nav className="flex flex-col space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-slate-600 hover:text-brand-accent hover:bg-slate-50 transition-all duration-300 font-medium rounded-lg group"
                >
                  <span>{link.label}</span>
                  <svg 
                    className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-4 py-3 text-slate-600 hover:text-brand-blue-900 font-medium transition-all duration-300 rounded-lg hover:bg-slate-50 text-left"
              >
                Войти
              </button>
              <button
                onClick={() => {
                  onConnectClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-brand-accent text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Подключить</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;