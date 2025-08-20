
import React from 'react';
import { WhatsAppIcon, StarIcon, MessageSquareIcon } from './icons';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900">
            Как это работает? Проще некуда!
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Весь процесс полностью автоматизирован и занимает у клиента не больше минуты.
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200" aria-hidden="true"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="relative z-10 w-16 h-16 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center">
                    <WhatsAppIcon className="w-8 h-8 text-green-500"/>
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-900">1. Запрос в WhatsApp</h3>
              <p className="mt-2 text-slate-600">
                После обслуживания клиент получает автоматическое сообщение с просьбой оценить визит.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="relative z-10 w-16 h-16 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center">
                    <StarIcon className="w-8 h-8 text-amber-400"/>
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-900">2. Клиент ставит оценку</h3>
              <p className="mt-2 text-slate-600">
                Простым нажатием на кнопку от 1 до 5 звёзд.
              </p>
            </div>

            <div className="text-center">
                <div className="flex justify-center mb-4">
                    <div className="relative z-10 w-16 h-16 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center">
                        <MessageSquareIcon className="w-8 h-8 text-brand-accent"/>
                    </div>
                </div>
              <h3 className="text-xl font-bold text-brand-blue-900">3. Магия Motor Mind</h3>
              <div className="mt-2 text-slate-600 space-y-2 text-left bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <p><span className="font-bold text-green-600">5★:</span> Клиент получает ссылку для публикации отзыва на картах.</p>
                <p><span className="font-bold text-red-600">1-4★:</span> Клиент попадает в чат с менеджером для решения проблемы.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
