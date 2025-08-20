
import React from 'react';

const CallToAction: React.FC<{ onConnectClick: () => void }> = ({ onConnectClick }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="bg-brand-blue-900 rounded-2xl p-10 md:p-16 text-center shadow-xl overflow-hidden relative">
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/20 rounded-full filter blur-2xl"></div>
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-indigo-500/20 rounded-full filter blur-2xl"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Готовы увеличить прибыль вашего автосервиса?
                </h2>
                <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
                    Запустите Motor Mind за 24 часа и начните превращать каждого клиента в постоянного. Без рисков и сложных интеграций.
                </p>
                <div className="mt-8">
                    <button onClick={onConnectClick} className="bg-amber-400 text-brand-blue-900 font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-amber-500 transform hover:scale-105 transition-all duration-300">
                        Подключить за 5 минут
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
