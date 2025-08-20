
import React, { useState } from 'react';
import { LogoIcon } from './icons';

const Header: React.FC<{ onConnectClick: () => void }> = ({ onConnectClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#solution', label: 'Решения' },
    { href: '#how-it-works', label: 'Как это работает' },
    { href: '#results', label: 'Результаты' },
    { href: '#pricing', label: 'Тарифы' },
  ];

  return (
    <header className="bg-brand-light/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + brand */}
          <a href="#" className="flex items-center">
            {/* h-14 = 3.5rem (~56px), mr-1 = 0.25rem (4px) */}
            <LogoIcon className="h-20 w-auto text-brand-blue-900 mr-1" />
            <span className="text-2xl font-bold text-brand-blue-900">
              Motor Mind
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-brand-accent transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={onConnectClick}
            className="hidden lg:inline-block bg-brand-accent text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Подключить
          </button>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-blue-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu links */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 hover:text-brand-accent transition-colors duration-300 font-medium pb-2 border-b border-slate-200"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onConnectClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-brand-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 text-center"
              >
                Подключить
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
