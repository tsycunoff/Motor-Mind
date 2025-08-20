
import React from 'react';

const resultsData = [
  { value: '×3', label: 'рост числа отзывов', description: 'на Яндекс.Картах и 2ГИС в первый же месяц.' },
  { value: '+1.2', label: 'пункта к рейтингу', description: 'в среднем, что выводит сервис в топ выдачи.' },
  { value: '54-68%', label: 'клиентов отвечают', description: 'на запрос в WhatsApp, в отличие от 5% в email.' },
  { value: '+36%', label: 'возвратов на ТО', description: 'за счёт доверия и автоматических напоминаний.' },
];

const Results: React.FC = () => {
  return (
    <section id="results" className="py-20 md:py-24 bg-brand-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Результаты, которые говорят сами за себя
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Наши клиенты видят рост ключевых показателей уже в первый месяц использования Motor Mind.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resultsData.map((result, index) => (
            <div key={index} className="bg-brand-blue-800 p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
              <p className="text-5xl md:text-6xl font-extrabold text-amber-300">{result.value}</p>
              <h3 className="mt-4 text-xl font-bold text-white">{result.label}</h3>
              <p className="mt-2 text-blue-200">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
