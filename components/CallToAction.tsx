import React, { useState, useEffect, useRef } from 'react';

const CallToAction: React.FC<{ onConnectClick: () => void }> = ({ onConnectClick }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: '🚀', text: 'Запуск за 24 часа' },
    { icon: '💰', text: 'Первые результаты через неделю' },
    { icon: '🔒', text: 'Без долгих договоров' },
    { icon: '📞', text: 'Поддержка 24/7' }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className={`relative transition-all duration-1000 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-indigo-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden">
            
            {/* Background decorations */}
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/20 rounded-full filter blur-2xl animate-pulse"></div>
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-indigo-500/20 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl"></div>
            
            {/* Floating elements */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-amber-400 rounded-full animate-float"></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-green-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-12 w-5 h-5 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-12 right-8 w-2 h-2 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>

            <div className="relative z-10">
              {/* Badge */}
              <div className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-8 transition-all duration-700 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
                Последний шаг до успеха
              </div>

              {/* Main heading */}
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-700 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                Готовы увеличить прибыль
                <br />
                вашего автосервиса?
              </h2>

              {/* Subheading */}
              <p className={`text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-700 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                Запустите Motor Mind за 24 часа и начните превращать каждого клиента в постоянного. 
                Без рисков и сложных интеграций.
              </p>

              {/* Benefits grid */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 transition-all duration-700 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '500ms' }}>
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <p className="text-blue-200 text-sm font-medium leading-tight">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className={`transition-all duration-700 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <button 
                  onClick={onConnectClick} 
                  className="group relative bg-gradient-to-r from-amber-400 to-yellow-500 text-brand-blue-900 font-bold py-4 px-10 lg:py-5 lg:px-12 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg lg:text-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Подключить за 5 минут
                    <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  
                  {/* Button animations */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                </button>
              </div>

              {/* Trust indicators */}
              <div className={`mt-8 transition-all duration-700 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '700ms' }}>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200">
                  
                  {/* Clients */}
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium">150+ довольных клиентов</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center">
                    <div className="flex space-x-1 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 text-amber-400">⭐</div>
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.9/5 рейтинг сервиса</span>
                  </div>

                  {/* Security */}
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm font-medium">Гарантия безопасности</span>
                  </div>
                </div>
              </div>

              {/* Final note */}
              <div className={`mt-6 transition-all duration-700 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '800ms' }}>
                <p className="text-blue-300 text-sm">
                  ⚡ Специальное предложение: <strong>первый месяц бесплатно</strong> при годовой подписке
                </p>
              </div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div className={`mt-12 bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-slate-200 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '900ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-brand-blue-900 mb-1 group-hover:text-brand-accent transition-colors duration-300">24ч</div>
                <div className="text-slate-600 text-sm">до полного запуска</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-brand-blue-900 mb-1 group-hover:text-brand-accent transition-colors duration-300">×3</div>
                <div className="text-slate-600 text-sm">больше отзывов</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-brand-blue-900 mb-1 group-hover:text-brand-accent transition-colors duration-300">78%</div>
                <div className="text-slate-600 text-sm">решённых конфликтов</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-brand-blue-900 mb-1 group-hover:text-brand-accent transition-colors duration-300">150+</div>
                <div className="text-slate-600 text-sm">довольных сервисов</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;