
import React from 'react';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light border-t border-slate-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-1">
                <LogoIcon className="h-20 w-auto text-brand-blue-900" />
                <span className="text-xl font-bold text-brand-blue-900">Motor Mind</span>
            </div>
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} motor-mind.ru. Все права защищены.
            </p>
            <div className="flex items-center space-x-6">
                <a href="#" className="text-sm text-slate-500 hover:text-brand-accent transition-colors">Политика конфиденциальности</a>
                <a href="#" className="text-sm text-slate-500 hover:text-brand-accent transition-colors">Оферта</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
