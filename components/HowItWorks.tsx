import React, { useState, useEffect, useRef } from 'react';
import { WhatsAppIcon, StarIcon, MessageSquareIcon } from './icons';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          const timer = setInterval(() => {
            setActiveStep(prev => (prev + 1) % 3);
          }, 4000);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      icon: WhatsAppIcon,
      iconColor: 'text-green-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      title: 'Запрос в WhatsApp',
      description: 'После обслуживания клиент получает автоматическое сообщение с просьбой оценить визит.',
      details: [
        'Отправка через 30 минут после завершения работ',
        'Персонализированное сообщение с именем клиента',
        'Простой интерфейс для быстрой оценки'
      ],
      timing: '~30 сек'
    },
    {
      id: 2,
      icon: StarIcon,
      iconColor: 'text-amber-400',
      bgColor: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200',
      title: 'Клиент ставит оценку',
      description: 'Простым нажатием на кнопку от 1 до 5 звёзд.',
      details: [
        'Интуитивно понятный интерфейс',
        'Быстрая реакция без длинных форм',
        'Мгновенная обработка оценки'
      ],
      timing: '~10 сек'
    },
    {
      id: 3,
      icon: MessageSquareIcon,
      iconColor: 'text-brand-accent',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      title: 'Магия Motor Mind',
      description: 'Система автоматически определяет дальнейший сценарий.',
      details: [
        '5★ → Ссылка на публикацию отзыва',
        '1-4★ → Чат с менеджером для решения',
        'Автоматическое уведомление команды'
      ],
      timing: 'мгновенно'
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className={`inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-8 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            Простой процесс в 3 шага
          </div>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-900 leading-tight mb-6 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '100ms' }}>
            Как это работает?
            <br />
            <span className="text-brand-accent">Проще некуда!</span>
          </h2>

          <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Весь процесс полностью автоматизирован и занимает у клиента не больше минуты. 
            Никаких сложных интеграций или длительного обучения персонала.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-amber-200 to-blue-200 rounded-full transform -translate-y-1/2" style={{ zIndex: 1 }}></div>
          
          <div 
            className="hidden lg:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-green-500 via-amber-500 to-blue-500 rounded-full transform -translate-y-1/2 transition-all duration-1000 ease-out"
            style={{ 
              zIndex: 2,
              width: `${((activeStep + 1) / 3) * 100}%`
            }}
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative" style={{ zIndex: 10 }}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div 
                  key={step.id}
                  className={`relative transition-all duration-500 transform ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  } ${isActive ? 'scale-102' : 'scale-100'}`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`bg-gradient-to-br ${step.bgColor} p-8 rounded-3xl border-2 ${step.borderColor} shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group`}>
                    


                    <div className="flex justify-center mb-6 relative">
                      <div className={`relative w-20 h-20 bg-white border-4 ${step.borderColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ${
                        isActive ? 'animate-pulse' : ''
                      }`}>
                        <Icon className={`w-10 h-10 ${step.iconColor}`}/>
                        
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                          {step.id}
                        </div>
                        
                        {isActive && (
                          <div className="absolute inset-0 border-4 border-brand-accent rounded-2xl animate-ping"></div>
                        )}
                      </div>
                    </div>

                    <div className="text-center relative">
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-blue-900 mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {step.details.map((detail, i) => (
                          <div 
                            key={i} 
                            className={`flex items-center justify-center text-sm text-slate-600 transition-all duration-300 ${
                              isActive ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-70'
                            }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <div className={`w-1.5 h-1.5 ${step.iconColor === 'text-green-500' ? 'bg-green-500' : step.iconColor === 'text-amber-400' ? 'bg-amber-400' : 'bg-blue-500'} rounded-full mr-2 flex-shrink-0`}></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/50 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                        <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.timing}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-1 h-12 bg-gradient-to-b from-slate-200 to-slate-300 rounded-full relative">
                        <div className="absolute inset-0 w-1 bg-gradient-to-b from-brand-accent to-brand-accent rounded-full transform scale-y-0 origin-top animate-pulse"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={`mt-16 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '900ms' }}>
          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-blue-900 mb-6 text-center">
              Что происходит после оценки?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-green-700">Отличная оценка</span>
                </div>
                <p className="text-slate-700 mb-4">
                  Клиент получает ссылку для публикации отзыва на картах с благодарностью за выбор вашего сервиса.
                </p>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Публичный отзыв на картах
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-2 border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(3)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-amber-400" />
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <StarIcon key={i + 3} className="w-5 h-5 text-slate-300" />
                    ))}
                  </div>
                  <span className="font-bold text-orange-700">Есть что улучшить</span>
                </div>
                <p className="text-slate-700 mb-4">
                  Клиент попадает в приватный чат с менеджером для выяснения и решения проблемы.
                </p>
                <div className="flex items-center text-sm text-orange-600 font-medium">
                  <MessageSquareIcon className="w-4 h-4 mr-2" />
                  Приватное решение проблемы
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-12 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <p className="text-lg text-slate-600 mb-4">
            <strong className="text-brand-blue-900">Простой процесс —</strong> максимальный результат
          </p>
          <div className="inline-flex items-center text-brand-accent font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Средняя скорость ответа клиента: 40 секунд
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;