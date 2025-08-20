import React, { useState, useEffect, useRef } from 'react';
import { NotificationIcon, CrmIcon, BirthdayIcon, ChartIcon } from './icons';

const Features: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
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

  const features = [
    {
      icon: NotificationIcon,
      title: 'Сервисные уведомления',
      description: 'Автоматически информируйте клиентов о статусе ремонта: "Машина принята", "Запчасти заказаны", "Машина готова" и т.д.',
      color: 'blue',
      benefits: ['Повышение лояльности клиентов', 'Снижение числа звонков в сервис', 'Прозрачность процесса ремонта'],
      example: 'Ваша машина готова к выдаче! 🚗✨'
    },
    {
      icon: CrmIcon,
      title: 'Интеграция с CRM / 1С',
      description: 'Полная синхронизация с вашей системой учёта (1С, AmoCRM, Bitrix24) для бесшовной работы.',
      color: 'green',
      benefits: ['Автоматический импорт клиентов', 'Синхронизация данных в реальном времени', 'Единая база клиентов'],
      example: 'API интеграция за 24 часа'
    },
    {
      icon: BirthdayIcon,
      title: 'Триггерные рассылки',
      description: 'Напоминайте о ТО, поздравляйте с днём рождения и возвращайте "потерянных" клиентов с помощью умных сценариев.',
      color: 'purple',
      benefits: ['Автоматические напоминания о ТО', 'Персонализированные предложения', 'Возврат неактивных клиентов'],
      example: 'Пора на ТО! Скидка 15% в этом месяце 🎁'
    },
    {
      icon: ChartIcon,
      title: 'Панель аналитики',
      description: 'Отслеживайте ключевые метрики: количество отзывов, рейтинг, процент перехваченного негатива и возвраты клиентов.',
      color: 'orange',
      benefits: ['Детальная аналитика по отзывам', 'Трекинг эффективности мастеров', 'ROI от удержания клиентов'],
      example: 'Рейтинг: 4.8★ (+0.3 за месяц)'
    },
  ];

  const colorVariants = {
    blue: {
      bg: 'from-blue-50 to-indigo-50',
      border: 'border-blue-200',
      icon: 'bg-blue-100 text-blue-600',
      accent: 'bg-blue-500',
      hover: 'hover:border-blue-300'
    },
    green: {
      bg: 'from-green-50 to-emerald-50',
      border: 'border-green-200',
      icon: 'bg-green-100 text-green-600',
      accent: 'bg-green-500',
      hover: 'hover:border-green-300'
    },
    purple: {
      bg: 'from-purple-50 to-pink-50',
      border: 'border-purple-200',
      icon: 'bg-purple-100 text-purple-600',
      accent: 'bg-purple-500',
      hover: 'hover:border-purple-300'
    },
    orange: {
      bg: 'from-orange-50 to-yellow-50',
      border: 'border-orange-200',
      icon: 'bg-orange-100 text-orange-600',
      accent: 'bg-orange-500',
      hover: 'hover:border-orange-300'
    }
  };

  return (
    <section ref={sectionRef} id="features" className="py-20 md:py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-10-40c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-8 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></div>
            Расширенные возможности
          </div>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-900 leading-tight mb-6 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '100ms' }}>
            Больше, чем просто отзывы
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">(тариф Pro)</span>
          </h2>

          <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Motor Mind Pro — это полноценная платформа для удержания и возврата клиентов, 
            которая работает на вас 24/7 и интегрируется с вашими существующими системами.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const colors = colorVariants[feature.color as keyof typeof colorVariants];
            const Icon = feature.icon;
            const isActive = activeFeature === index;

            return (
              <div 
                key={index}
                className={`group relative transition-all duration-700 transform ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } hover:-translate-y-2`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Main card */}
                <div className={`relative bg-gradient-to-br ${colors.bg} p-8 lg:p-10 rounded-3xl border-2 ${colors.border} ${colors.hover} shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                  
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full ${colors.accent} rounded-full blur-2xl transform translate-x-8 -translate-y-8`}></div>
                  </div>

                  {/* Icon section */}
                  <div className="flex items-start space-x-6 relative">
                    <div className={`flex-shrink-0 relative group-hover:scale-110 transition-transform duration-500`}>
                      <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center shadow-lg border-2 border-white`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className={`absolute inset-0 ${colors.accent} rounded-2xl animate-ping opacity-30`}></div>
                      )}
                      
                      {/* Badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xs text-white font-bold">✨</span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-accent transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {feature.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-3 mb-6">
                        {feature.benefits.map((benefit, i) => (
                          <div 
                            key={i}
                            className={`flex items-center transition-all duration-300 transform ${
                              isActive ? 'translate-x-2' : ''
                            }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <div className={`w-2 h-2 ${colors.accent} rounded-full mr-3 flex-shrink-0`}></div>
                            <span className="text-slate-700 font-medium text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Example */}
                      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/60 shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className={`w-2 h-2 ${colors.accent} rounded-full mr-2 animate-pulse`}></div>
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Пример</span>
                        </div>
                        <p className="text-sm text-slate-700 font-medium italic">"{feature.example}"</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                </div>

                {/* Floating status */}
                <div className={`absolute -bottom-3 right-6 transition-all duration-300 transform ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  <div className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-lg">
                    <div className="flex items-center text-xs text-slate-600">
                      <div className={`w-1.5 h-1.5 ${colors.accent} rounded-full mr-2`}></div>
                      <span className="font-medium">Pro функция</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className={`mt-20 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '900ms' }}>
          <div className="bg-gradient-to-r from-brand-blue-900 to-brand-blue-800 p-8 lg:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Готовы получить все возможности Motor Mind Pro?
              </h3>
              <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
                Полная автоматизация работы с клиентами, интеграции с вашими системами и продвинутая аналитика. 
                Всё для максимального удержания клиентов.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-300 mb-1">150+</div>
                  <div className="text-blue-200 text-sm">автосервисов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-300 mb-1">24/7</div>
                  <div className="text-blue-200 text-sm">автоматизация</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-300 mb-1">API</div>
                  <div className="text-blue-200 text-sm">интеграции</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-300 mb-1">∞</div>
                  <div className="text-blue-200 text-sm">возможности</div>
                </div>
              </div>

              <div className="inline-flex items-center text-sm text-blue-200">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Настройка и интеграция за 24 часа
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;