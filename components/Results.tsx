import React, { useState, useEffect, useRef } from 'react';

const Results: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const resultsData = [
    { 
      value: '×3', 
      animatedValue: 3,
      label: 'рост числа отзывов', 
      description: 'на Яндекс.Картах и 2ГИС в первый же месяц.',
      icon: '📈',
      color: 'from-green-400 to-emerald-500'
    },
    { 
      value: '+1.2', 
      animatedValue: 1.2,
      label: 'пункта к рейтингу', 
      description: 'в среднем, что выводит сервис в топ выдачи.',
      icon: '⭐',
      color: 'from-amber-400 to-yellow-500'
    },
    { 
      value: '54-68%', 
      animatedValue: 61,
      label: 'клиентов отвечают', 
      description: 'на запрос в WhatsApp, в отличие от 5% в email.',
      icon: '💬',
      color: 'from-blue-400 to-indigo-500'
    },
    { 
      value: '+36%', 
      animatedValue: 36,
      label: 'возвратов на ТО', 
      description: 'за счёт доверия и автоматических напоминаний.',
      icon: '🔄',
      color: 'from-purple-400 to-pink-500'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          
          // Анимация чисел
          resultsData.forEach((result, index) => {
            let startValue = 0;
            const endValue = result.animatedValue;
            const duration = 2000;
            const increment = endValue / (duration / 16);
            
            const timer = setInterval(() => {
              startValue += increment;
              if (startValue >= endValue) {
                startValue = endValue;
                clearInterval(timer);
              }
              
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = startValue;
                return newValues;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatValue = (value: number, index: number) => {
    switch (index) {
      case 0: return `×${Math.round(value)}`;
      case 1: return `+${value.toFixed(1)}`;
      case 2: return `${Math.round(value)}%`;
      case 3: return `+${Math.round(value)}%`;
      default: return Math.round(value).toString();
    }
  };

  return (
    <section ref={sectionRef} id="results" className="py-20 md:py-24 bg-brand-blue-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-8 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
            Проверенные результаты
          </div>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '100ms' }}>
            Результаты, которые
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">говорят сами за себя</span>
          </h2>

          <p className={`text-lg md:text-xl text-blue-200 leading-relaxed transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Наши клиенты видят рост ключевых показателей уже в первый месяц использования Motor Mind. 
            Это не просто цифры — это реальные изменения в бизнесе.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {resultsData.map((result, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-700 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-white/30">
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {result.icon}
                </div>

                {/* Value */}
                <div className="relative">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-300 mb-4 leading-none">
                    {isInView ? formatValue(animatedValues[index], index) : '0'}
                  </p>
                  
                  {/* Animated underline */}
                  <div className={`h-1 bg-gradient-to-r ${result.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mb-4`}></div>
                </div>

                {/* Label */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                  {result.label}
                </h3>

                {/* Description */}
                <p className="text-blue-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {result.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                <div className="bg-white text-brand-blue-900 px-3 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                  Средний результат
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial section */}
        <div className={`transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '900ms' }}>
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-white/20 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 text-amber-400">⭐</div>
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl lg:text-2xl font-medium text-white mb-6 leading-relaxed italic">
              "За 3 месяца работы с Motor Mind мы поднялись с 3.8 до 4.7 звёзд на Яндекс.Картах. 
              Количество постоянных клиентов выросло на 40%. Лучшая инвестиция в развитие сервиса!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                А
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Александр Петров</div>
                <div className="text-blue-200 text-sm">Директор "Автосервис Премиум"</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '1100ms' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-300 mb-2">150+</div>
            <div className="text-blue-200">автосервисов доверяют Motor Mind</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-300 mb-2">50K+</div>
            <div className="text-blue-200">довольных клиентов ежемесячно</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-300 mb-2">24/7</div>
            <div className="text-blue-200">автоматическая работа системы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;