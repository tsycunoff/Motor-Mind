
import React from 'react';
import { WhatsAppIcon } from './icons';

const Hero: React.FC<{ onTryFreeClick: () => void }> = ({ onTryFreeClick }) => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue-900 leading-tight">
          Повысьте рейтинг автосервиса <br className="hidden md:block" /> и верните до <span className="text-brand-accent">50%</span> клиентов
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Motor Mind — автоматизированный сервис на базе WhatsApp для сбора отзывов, перехвата негатива и возврата клиентов на повторное обслуживание.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button onClick={onTryFreeClick} className="w-full sm:w-auto bg-brand-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            Попробовать бесплатно
          </button>
          <a href="#how-it-works" className="w-full sm:w-auto bg-slate-200 text-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-slate-300 transform hover:scale-105 transition-all duration-300">
            Как это работает
          </a>
        </div>
        <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-sm">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative bg-white/60 backdrop-blur-lg p-4 rounded-3xl shadow-2xl">
                    <div className="bg-green-600 text-white p-3 rounded-t-2xl flex items-center gap-2">
                        <WhatsAppIcon className="w-6 h-6"/>
                        <p className="font-semibold">Чат с клиентом</p>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="bg-slate-100 p-3 rounded-lg self-start max-w-xs">
                            <p className="text-sm text-left">Добрый день! Спасибо, что выбрали [Название сервиса]. Оцените, пожалуйста, наш сервис 🙏</p>
                        </div>
                        <div className="flex justify-center space-x-1">
                            {[1,2,3,4,5].map(i => (
                                <button key={i} className={`p-2 rounded-full transition-transform duration-200 ${i === 5 ? 'bg-amber-400 text-white scale-110 shadow-lg' : 'bg-slate-200 hover:bg-slate-300'}`}>
                                    ⭐
                                </button>
                            ))}
                        </div>
                         <div className="bg-blue-500 text-white p-3 rounded-lg self-end ml-auto max-w-xs">
                            <p className="text-sm text-left">⭐ 5</p>
                        </div>
                        <div className="bg-slate-100 p-3 rounded-lg self-start max-w-xs">
                            <p className="text-sm text-left">Спасибо! Будем рады, если оставите отзыв на Яндекс.Картах. Это займет всего минуту 😊</p>
                            <a href="#" className="text-blue-600 font-semibold text-sm block mt-1 text-left">Перейти к отзыву &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
