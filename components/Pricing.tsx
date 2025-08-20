import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon } from './icons';

const Pricing: React.FC<{ onConnectClick: () => void }> = ({ onConnectClick }) => {
  const [isInView, setIsInView] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
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

  const Check = () => <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />;
  const XMark = () => (
    <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const startFeatures = [
    { text: 'Запрос отзывов через WhatsApp', included: true },
    { text: 'Перехват негатива в чат', included: true },
    { text: 'Ссылки на отзывы: Google / Яндекс / 2ГИС', included: true },
    { text: 'Настройка шаблонов сообщений', included: true },
    { text: 'Доступ к панели аналитики', included: true },
    { text: 'Сервисные уведомления по этапам', included: false },
    { text: 'Интеграция с CRM / 1С', included: false },
    { text: 'Триггерные рассылки (ТО, winback)', included: false },
  ];

  const proFeatures = startFeatures.map(f => ({...f, included: true}));

  const plans = [
    {
      name: 'Start',
      description: 'Для быстрого старта и сбора отзывов.',
      price: { monthly: 3990, yearly: 35880 },
      monthlyPrice: 2990,
      features: startFeatures,
      popular: false,
      buttonText: 'Выбрать Start',
      buttonStyle: 'bg-slate-100 text-brand-accent hover:bg-slate-200',
      borderStyle: 'border-slate-200',
      bgStyle: 'bg-white'
    },
    {
      name: 'Pro',
      description: 'Для максимального возврата клиентов.',
      price: { monthly: 5990, yearly: 53880 },
      monthlyPrice: 4490,
      features: proFeatures,
      popular: true,
      buttonText: 'Выбрать Pro',
      buttonStyle: 'bg-brand-accent text-white hover:bg-blue-700',
      borderStyle: 'border-brand-accent',
      bgStyle: 'bg-white'
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-green-50 border border-green-200/50 rounded-full text-sm font-medium text-green-700 mb-8 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Прозрачное ценообразование
          </div>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-900 leading-tight mb-6 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '100ms' }}>
            Прозрачные тарифы
            <br />
            <span className="text-green-600">без скрытых платежей</span>
          </h2>

          <p className={`text-lg md:text-xl text-slate-600 leading-relaxed mb-8 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Выберите план, который подходит вашему бизнесу. Запуск за 24 часа, 
            без долгосрочных обязательств.
          </p>

          {/* Billing toggle */}
          <div className={`inline-flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-sm transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-brand-accent text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-brand-accent text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Ежегодно
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                -25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative transition-all duration-700 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${plan.popular ? 'lg:scale-105' : ''}`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-brand-accent to-blue-700 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    🏆 Рекомендуем
                  </div>
                </div>
              )}

              {/* Main card */}
              <div className={`relative ${plan.bgStyle} p-8 lg:p-10 rounded-3xl border-2 ${plan.borderStyle} shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden ${
                plan.popular ? 'shadow-blue-500/10' : ''
              }`}>
                
                {/* Background gradient for popular */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl"></div>
                )}

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-blue-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      {billingCycle === 'yearly' ? (
                        <>
                          <span className="text-5xl lg:text-6xl font-extrabold text-brand-blue-900">
                            {plan.monthlyPrice.toLocaleString()}₽
                          </span>
                          <span className="text-lg font-medium text-slate-500 ml-2">/ мес.</span>
                        </>
                      ) : (
                        <>
                          <span className="text-5xl lg:text-6xl font-extrabold text-brand-blue-900">
                            {plan.price.monthly.toLocaleString()}₽
                          </span>
                          <span className="text-lg font-medium text-slate-500 ml-2">/ мес.</span>
                        </>
                      )}
                    </div>
                    
                    {billingCycle === 'yearly' && (
                      <div className="mt-2">
                        <div className="text-sm text-green-600 font-medium">
                          {plan.price.yearly.toLocaleString()}₽ в год • Экономия {((plan.price.monthly * 12 - plan.price.yearly) / 1000).toFixed(0)}К₽
                        </div>
                      </div>
                    )}

                    {billingCycle === 'monthly' && (
                      <div className="mt-2">
                        <span className="text-sm text-slate-500">
                          При годовой оплате: {plan.monthlyPrice.toLocaleString()}₽/мес ({plan.price.yearly.toLocaleString()}₽/год)
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          {feature.included ? <Check /> : <XMark />}
                          <span className={`text-sm leading-relaxed ${
                            feature.included 
                              ? 'text-slate-700' 
                              : 'text-slate-400 line-through'
                          }`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={onConnectClick} 
                    className={`w-full ${plan.buttonStyle} font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md relative overflow-hidden group`}
                  >
                    <span className="relative z-10">{plan.buttonText}</span>
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>

                  {/* Additional info */}
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center text-sm text-slate-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Отмена в любое время
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className={`text-center space-y-6 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          
          {/* Setup cost */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm inline-block">
            <div className="flex items-center justify-center text-slate-600 mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Единоразовая настройка</span>
            </div>
            <p className="text-2xl font-bold text-brand-blue-900 mb-1">от 3 000₽</p>
            <p className="text-sm text-slate-500">(опционально, при необходимости сложной интеграции)</p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-brand-blue-900 mb-2">Быстрый запуск</h4>
              <p className="text-sm text-slate-600">Настройка и интеграция за 24 часа</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 21V12m0 0V3m0 9l9-9m-9 9L3 3" />
                </svg>
              </div>
              <h4 className="font-semibold text-brand-blue-900 mb-2">Техподдержка 24/7</h4>
              <p className="text-sm text-slate-600">Помощь в настройке и обучение команды</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-brand-blue-900 mb-2">Гарантия результата</h4>
              <p className="text-sm text-slate-600">Или возврат денег в течение 30 дней</p>
            </div>
          </div>

          {/* FAQ link */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 className="font-semibold text-brand-blue-900 mb-2">Остались вопросы?</h4>
            <p className="text-slate-600 mb-4">
              Мы поможем выбрать подходящий тариф и расскажем о всех возможностях платформы
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={onConnectClick}
                className="bg-brand-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Получить консультацию
              </button>
              <button className="text-brand-accent font-semibold py-3 px-6 rounded-lg border border-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-300">
                Смотреть демо
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;