
import React from 'react';
import { CheckCircleIcon, AlertTriangleIcon } from './icons';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900">
            Превратите обратную связь в инструмент роста
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Motor Mind автоматизирует общение с клиентами, чтобы вы получали больше положительных отзывов и мгновенно решали конфликтные ситуации.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-200/50">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-brand-blue-900">
              Собирайте 5★ отзывы автоматически
            </h3>
            <p className="mt-4 text-slate-600">
              Клиенты, поставившие 5 звёзд, автоматически получают прямую ссылку на Яндекс.Карты, 2ГИС или Google Maps. Никаких лишних шагов — только реальные положительные отзывы от довольных клиентов.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-200/50">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
                <AlertTriangleIcon className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-brand-blue-900">
              Перехватывайте негатив до публикации
            </h3>
            <p className="mt-4 text-slate-600">
              Если оценка ниже 5 звёзд, система не отправляет клиента на карты, а инициирует приватный чат с менеджером. Вы сможете решить проблему до того, как она станет публичной, и вернуть лояльность клиента.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
