import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon } from './icons';

const problems = [
  {
    title: 'Низкий рейтинг на картах',
    description: 'Яндекс.Карты, 2ГИС и Google показывают 3-4 звезды вместо заслуженных 5',
    impact: 'До 40% потерянных клиентов'
  },
  {
    title: 'Негатив уходит в публичность',
    description: 'Недовольные клиенты сразу пишут отзывы, минуя возможность решить проблему',
    impact: 'Репутационные потери'
  },
  {
    title: 'Нет системы обратной связи',
    description: 'Сложно понять, довольны ли клиенты и что можно улучшить в работе',
    impact: 'Потеря конкурентных преимуществ'
  },
  {
    title: 'Субъективная оценка работы',
    description: 'Нет объективных данных о качестве работы мастеров и приёмщиков',
    impact: 'Снижение качества сервиса'
  },
  {
    title: 'Поздняя реакция на проблемы',
    description: 'Руководство узнаёт о проблемах после публикации негативных отзывов',
    impact: 'Упущенные возможности'
  },
  {
    title: 'Неэффективный маркетинг',
    description: 'Рассылки об акциях попадают в спам или игнорируются клиентами',
    impact: 'Низкий ROI рекламы'
  },
];

const Problems: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Анимация появления элементов по очереди
          problems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="problems" className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 bg-red-50 border border-red-200/50 rounded-full text-sm font-medium text-red-700 mb-8 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            Главные проблемы автосервисов
          </div>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-900 leading-tight mb-6 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '100ms' }}>
            Хватит терять клиентов и деньги
            <br />
            <span className="text-red-600">из-за молчания</span>
          </h2>
          
          <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Каждый недовольный клиент, оставшийся без внимания, — это не только потерянный отзыв, 
            но и упущенная прибыль. Вот с какими задачами к нам приходят автосервисы.
          </p>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">73%</div>
              <div className="text-sm text-slate-600">автосервисов теряют клиентов из-за негативных отзывов</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">1 из 5</div>
              <div className="text-sm text-slate-600">недовольных клиентов дают второй шанс сервису</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">12x</div>
              <div className="text-sm text-slate-600">дороже привлечь нового клиента, чем удержать существующего</div>
            </div>
          </div>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className={`group relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 transform ${
                visibleItems.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              } hover:-translate-y-1`}
            >
              {/* Problem indicator */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-xl flex items-center justify-center group-hover:border-red-300 transition-colors duration-300">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  
                  {/* Solution indicator */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-brand-blue-900 mb-2 group-hover:text-brand-accent transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {problem.description}
                  </p>
                  
                  {/* Impact badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-red-50 border border-red-200 rounded-full text-xs font-medium text-red-700">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                    {problem.impact}
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm inline-block">
            <p className="text-lg text-slate-600 mb-4">
              <strong className="text-brand-blue-900">Motor Mind решает все эти проблемы</strong> автоматически
            </p>
            <div className="flex items-center justify-center text-green-600 font-medium">
              <CheckIcon className="w-5 h-5 mr-2" />
              Узнайте как в следующей секции
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;