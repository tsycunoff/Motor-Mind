import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './icons';

const Hero: React.FC<{ onTryFreeClick: () => void }> = ({ onTryFreeClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Анимация чата
    const timer = setInterval(() => {
      setChatStep(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "✅ Настройка за 24 часа",
    "✅ Первые результаты через неделю", 
    "✅ Без долгих договоров"
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Инновационное решение для автосервисов
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-blue-900 leading-tight mb-6">
              Повысьте рейтинг
              <br />
              автосервиса и верните
              <br />
              до <span className="relative text-brand-accent">
                50%
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 120 8" fill="none">
                  <path d="M2 6C40 2 80 2 118 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span> клиентов
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Motor Mind — автоматизированный сервис на базе WhatsApp для сбора отзывов, 
              перехвата негатива и возврата клиентов на повторное обслуживание.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 gap-3 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-center text-slate-700 transition-all duration-700 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <span className="text-green-600 mr-2">{benefit.split(' ')[0]}</span>
                  <span className="font-medium">{benefit.substring(2)}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={onTryFreeClick} 
                className="group relative bg-brand-accent text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Попробовать бесплатно
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <a 
                href="#how-it-works" 
                className="group flex items-center justify-center bg-white text-slate-700 font-semibold py-4 px-8 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Как это работает
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center text-sm text-slate-500">
              <div className="flex -space-x-2 mr-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>Присоединились <strong>150+ автосервисов</strong></span>
            </div>
          </div>

          {/* Right content - WhatsApp Demo */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg rotate-12 animate-float">
              <WhatsAppIcon className="w-10 h-10 text-green-600" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center shadow-lg -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-2xl">⭐</span>
            </div>

            <div className="relative w-full max-w-sm mx-auto">
              {/* Background blobs */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: '2s' }}></div>
              
              {/* Phone mockup */}
              <div className="relative bg-white/80 backdrop-blur-xl p-1 rounded-[2.5rem] shadow-2xl border border-slate-200/50">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  
                  {/* WhatsApp header */}
                  <div className="bg-green-600 text-white p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <WhatsAppIcon className="w-6 h-6"/>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Автосервис "Мотор"</p>
                      <p className="text-xs text-green-100">онлайн</p>
                    </div>
                  </div>
                  
                  {/* Chat content */}
                  <div className="p-4 space-y-4 bg-gradient-to-b from-green-50/20 to-white min-h-[400px]">
                    
                    {/* Bot message */}
                    <div className={`transform transition-all duration-500 ${
                      chatStep >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-md max-w-[85%] shadow-sm">
                        <p className="text-sm text-slate-800">Добрый день! Спасибо, что выбрали наш автосервис. Оцените, пожалуйста, качество обслуживания 🙏</p>
                      </div>
                    </div>

                    {/* Star rating */}
                    <div className={`flex justify-center space-x-2 py-2 transform transition-all duration-500 ${
                      chatStep >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      {[1,2,3,4,5].map(i => (
                        <button 
                          key={i} 
                          className={`w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center text-xl ${
                            chatStep >= 2 && i === 5 
                              ? 'bg-amber-400 text-white scale-110 shadow-lg animate-pulse' 
                              : 'bg-slate-200 hover:bg-slate-300'
                          }`}
                        >
                          ⭐
                        </button>
                      ))}
                    </div>

                    {/* User response */}
                    <div className={`flex justify-end transform transition-all duration-500 ${
                      chatStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <div className="bg-green-500 text-white p-3 rounded-2xl rounded-tr-md shadow-sm">
                        <p className="text-sm font-medium">⭐ 5 звёзд</p>
                      </div>
                    </div>

                    {/* Response message */}
                    <div className={`transform transition-all duration-500 ${
                      chatStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-md max-w-[85%] shadow-sm">
                        <p className="text-sm text-slate-800 mb-2">Спасибо! 🎉 Будем рады, если оставите отзыв на Яндекс.Картах</p>
                        <div className="bg-blue-500 text-white text-xs px-3 py-2 rounded-lg inline-flex items-center font-medium hover:bg-blue-600 transition-colors cursor-pointer">
                          Оставить отзыв →
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;