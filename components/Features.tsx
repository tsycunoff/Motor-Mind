
import React from 'react';
import { NotificationIcon, CrmIcon, BirthdayIcon, ChartIcon } from './icons';

const features = [
  {
    icon: NotificationIcon,
    title: 'Сервисные уведомления',
    description: 'Автоматически информируйте клиентов о статусе ремонта: "Машина принята", "Запчасти заказаны", "Машина готова" и т.д.',
    color: 'blue'
  },
  {
    icon: CrmIcon,
    title: 'Интеграция с CRM / 1С',
    description: 'Полная синхронизация с вашей системой учёта (1С, AmoCRM, Bitrix24) для бесшовной работы.',
    color: 'green'
  },
  {
    icon: BirthdayIcon,
    title: 'Триггерные рассылки',
    description: 'Напоминайте о ТО, поздравляйте с днём рождения и возвращайте "потерянных" клиентов с помощью умных сценариев.',
    color: 'purple'
  },
  {
    icon: ChartIcon,
    title: 'Панель аналитики',
    description: 'Отслеживайте ключевые метрики: количество отзывов, рейтинг, процент перехваченного негатива и возвраты клиентов.',
    color: 'yellow'
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900">
            Больше, чем просто отзывы (тариф Pro)
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Motor Mind Pro — это полноценная платформа для удержания и возврата клиентов, которая работает на вас 24/7.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
             const colors = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                yellow: 'bg-yellow-100 text-yellow-600'
            };
            const selectedColor = colors[feature.color as keyof typeof colors];

            return (
                <div key={index} className="flex items-start space-x-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className={`flex-shrink-0 w-12 h-12 ${selectedColor} rounded-lg flex items-center justify-center`}>
                    <feature.icon className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-brand-blue-900">{feature.title}</h3>
                    <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
