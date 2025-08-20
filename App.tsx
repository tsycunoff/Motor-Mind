
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Results from './components/Results';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';

const RequestFormModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle form submission, e.g., send data to a server
        console.log("Form submitted!");
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" 
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold text-brand-blue-900 mb-2">Заявка на подключение</h2>
                <p className="text-slate-600 mb-6">Оставьте ваши данные, и мы свяжемся с вами в ближайшее время.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Имя *</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Номер телефона *</label>
                        <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Почта</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition" />
                    </div>
                    <div>
                        <label htmlFor="telegram" className="block text-sm font-medium text-slate-700 mb-1">Telegram</label>
                        <input type="text" id="telegram" name="telegram" placeholder="@username" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition" />
                    </div>
                    <button type="submit" className="w-full bg-brand-accent text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                        Отправить заявку
                    </button>
                </form>
            </div>
             <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-brand-light font-sans text-slate-800 antialiased">
      <Header onConnectClick={openModal} />
      <main>
        <Hero onTryFreeClick={openModal} />
        <Problems />
        <Solution />
        <HowItWorks />
        <Results />
        <Features />
        <Pricing onConnectClick={openModal} />
        <CallToAction onConnectClick={openModal} />
      </main>
      <Footer />
      {isModalOpen && <RequestFormModal onClose={closeModal} />}
    </div>
  );
};

export default App;
