
import React from 'react';
import { CheckIcon } from './icons';

const problems = [
  'Низкий рейтинг на Яндекс.Картах, 2ГИС и других площадках',
  'Потеря клиентов из-за негатива, который уходит в онлайн',
  'Сложно собирать обратную связь после обслуживания',
  'Нет объективной оценки работы мастеров и приёмщиков',
  'Негатив становится публичным раньше, чем о нём узнаёт руководство',
  'Массовые рассылки об акциях попадают в спам или не читаются',
];

const Problems: React.FC = () => {
  return (
    <section id="problems" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900">
            Хватит терять клиентов и деньги из-за молчания
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Каждый недовольный клиент, оставшийся без внимания, — это не только потерянный отзыв, но и упущенная прибыль. Вот с какими задачами к нам приходят автосервисы.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 text-brand-accent rounded-full flex items-center justify-center">
                  <CheckIcon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <p className="text-slate-700 font-medium">{problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
