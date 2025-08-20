
import React from 'react';
import { CheckIcon } from './icons';

const Check = () => <CheckIcon className="w-5 h-5 text-green-500" />;
const XMark = () => (
    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Pricing: React.FC<{ onConnectClick: () => void }> = ({ onConnectClick }) => {
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

  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900">
            Прозрачные тарифы без скрытых платежей
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Выберите план, который подходит вашему бизнесу. Запуск за 24 часа.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Start Plan */}
          <div className="border border-slate-200 rounded-2xl p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-brand-blue-900">Start</h3>
            <p className="mt-2 text-slate-500">Для быстрого старта и сбора отзывов.</p>
            <p className="mt-6 text-4xl font-extrabold text-brand-blue-900">3 990₽ <span className="text-lg font-medium text-slate-500">/ мес.</span></p>
            <ul className="mt-8 space-y-4 flex-grow">
              {startFeatures.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {feature.included ? <Check /> : <XMark />}
                  <span className={`${feature.included ? 'text-slate-700' : 'text-slate-400 line-through'}`}>{feature.text}</span>
                </li>
              ))}
            </ul>
            <button onClick={onConnectClick} className="mt-8 w-full text-center bg-slate-100 text-brand-accent font-bold py-3 px-6 rounded-lg hover:bg-slate-200 transition-colors duration-300">
              Выбрать Start
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative border-2 border-brand-accent rounded-2xl p-8 flex flex-col bg-white shadow-2xl shadow-blue-500/10">
            <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Рекомендуем</span>
            <h3 className="text-2xl font-bold text-brand-blue-900">Pro</h3>
            <p className="mt-2 text-slate-500">Для максимального возврата клиентов.</p>
            <p className="mt-6 text-4xl font-extrabold text-brand-blue-900">5 990₽ <span className="text-lg font-medium text-slate-500">/ мес.</span></p>
            <ul className="mt-8 space-y-4 flex-grow">
                {proFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                    <Check />
                    <span className="text-slate-700">{feature.text}</span>
                    </li>
                ))}
            </ul>
            <button onClick={onConnectClick} className="mt-8 w-full text-center bg-brand-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Выбрать Pro
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-500">
            <p>💡 Единоразовая настройка и внедрение — от 3 000₽ (опционально).</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
