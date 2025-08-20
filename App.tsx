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
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        telegram: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Симуляция отправки
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSuccess(true);
        
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (isSuccess) {
        return (
            <div 
                className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" 
                onClick={onClose}
                aria-modal="true"
                role="dialog"
            >
                <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in-up text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-brand-blue-900 mb-2">Заявка отправлена!</h2>
                    <p className="text-slate-600">Мы свяжемся с вами в ближайшее время</p>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in-up overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 transform translate-x-16 -translate-y-16"></div>
                
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 w-8 h-8 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full flex items-center justify-center transition-all duration-200"
                    aria-label="Close modal"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative z-10">
                    <div className="text-center mb-6">
                        <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-brand-blue-900 mb-2">Заявка на подключение</h2>
                        <p className="text-slate-600">Оставьте ваши данные, и мы свяжемся с вами в ближайшее время</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Имя *</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 bg-slate-50 focus:bg-white" 
                                placeholder="Ваше имя"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Номер телефона *</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                required 
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 bg-slate-50 focus:bg-white" 
                                placeholder="+7 (999) 123-45-67"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 bg-slate-50 focus:bg-white" 
                                placeholder="your@email.com"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="telegram" className="block text-sm font-semibold text-slate-700 mb-2">Telegram</label>
                            <input 
                                type="text" 
                                id="telegram" 
                                name="telegram" 
                                value={formData.telegram}
                                onChange={handleInputChange}
                                placeholder="@username" 
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 bg-slate-50 focus:bg-white" 
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-brand-accent to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Отправляем...
                                </div>
                            ) : (
                                <span className="relative z-10">Отправить заявку</span>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-center text-xs text-slate-500">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Ваши данные защищены и не передаются третьим лицам
                    </div>
                </div>
            </div>
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

export default App;