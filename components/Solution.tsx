import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon, AlertTriangleIcon } from './icons';

const Solution: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      icon: CheckCircleIcon,
      iconColor: 'text-green-600',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      accentColor: 'bg-green-500',
      title: 'Собирайте 5★ отзывы автоматически',
      description: 'Клиенты, поставившие 5 звёзд, автоматически получают прямую ссылку на Яндекс.Карты, 2ГИС или Google Maps. Никаких лишних шагов — только реальные положительные отзывы от довольных клиентов.',
      benefits: [
        'Рост числа отзывов в 3-5 раз',
        'Повышение рейтинга на 0.5-1.5 пункта',
        'Топовые позиции в поиске картах'
      ],
      metrics: '+87% положительных отзывов'
    },
    {
      icon: AlertTriangleIcon,
      iconColor: 'text-red-600',
      bgColor: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200',
      accentColor: 'bg-red-500',
      title: 'Перехватывайте негатив до публикации',
      description: 'Если оценка ниже 5 звёзд, система не отправляет клиента на карты, а инициирует приватный чат с менеджером. Вы сможете решить проблему до того, как она станет публичной, и вернуть лояльность клиента.',
      benefits: [
        'Предотвращение негативных отзывов',
        'Возврат до 40% недовольных клиентов',
        'Улучшение качества сервиса'
      ],
      metrics: '78% успешных решений конфликтов'
    }
  ];

  return (
    <section ref={sectionRef} id="solution" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-8 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            Умная система управления отзывами
          </div>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-900 leading-tight mb-6 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '100ms' }}>
            Превратите обратную связь
            <br />
            в <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">инструмент роста</span>
          </h2>

          <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Motor Mind автоматизирует общение с клиентами, чтобы вы получали больше положительных отзывов 
            и мгновенно решали конфликтные ситуации.
          </p>
        </div>

        {/* Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className={`group relative transition-all duration-700 transform ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Main card */}
                <div className={`relative bg-gradient-to-br ${solution.bgColor} p-8 lg:p-10 rounded-3xl border-2 ${solution.borderColor} shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden`}>
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg border-2 ${solution.borderColor} group-hover:scale-110 transition-all duration-500`}>
                      <Icon className={`w-8 h-8 ${solution.iconColor}`} />
                    </div>
                    
                    {/* Floating indicator */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 ${solution.accentColor} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100`}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-blue-900 mb-4 leading-tight">
                      {solution.title}
                    </h3>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {solution.benefits.map((benefit, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center transition-all duration-300 transform ${
                            activeCard === index ? 'translate-x-2' : ''
                          }`}
                          style={{ transitionDelay: `${i * 100}ms` }}
                        >
                          <div className={`w-2 h-2 ${solution.accentColor} rounded-full mr-3 flex-shrink-0`}></div>
                          <span className="text-slate-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${solution.accentColor} rounded-full mr-3 animate-pulse`}></div>
                        <span className="text-sm font-semibold text-slate-700">{solution.metrics}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
                </div>

                {/* Success indicator */}
                <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                  activeCard === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  <div className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-lg">
                    <div className="flex items-center text-sm text-slate-600">
                      <div className={`w-2 h-2 ${solution.accentColor} rounded-full mr-2`}></div>
                      <span className="font-medium">Проверено на практике</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className={`text-center mt-20 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '700ms' }}>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 lg:p-12 rounded-3xl border border-blue-200/50 shadow-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-blue-900 mb-4">
              Результат: довольные клиенты и высокий рейтинг
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Система работает 24/7, автоматически направляя положительные отзывы на карты, 
              а негативные — в приватный чат для решения проблем.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">5★</div>
                <div className="text-sm text-slate-600">средний рейтинг клиентов Motor Mind</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">автоматическая работа системы</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">2 мин</div>
                <div className="text-sm text-slate-600">среднее время ответа клиента</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;