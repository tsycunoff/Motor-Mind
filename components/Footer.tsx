import React, { useState } from 'react';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const navigationLinks = [
    { href: '#solution', label: 'Решения' },
    { href: '#how-it-works', label: 'Как это работает' },
    { href: '#results', label: 'Результаты' },
    { href: '#pricing', label: 'Тарифы' },
  ];

  const legalLinks = [
    { href: '#', label: 'Политика конфиденциальности' },
    { href: '#', label: 'Пользовательское соглашение' },
    { href: '#', label: 'Публичная оферта' },
    { href: '#', label: 'Обработка данных' },
  ];

  const supportLinks = [
    { href: '#', label: 'Центр поддержки' },
    { href: '#', label: 'База знаний' },
    { href: '#', label: 'API документация' },
    { href: '#', label: 'Статус системы' },
  ];

  const socialLinks = [
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.608 7.584c-.121.576-.441.72-.892.448l-2.465-1.824-1.189 1.148c-.132.132-.244.244-.5.244l.18-2.544 4.663-4.212c.204-.18-.044-.28-.316-.1L8.804 11.48l-2.4-.756c-.528-.164-.54-.528.108-.78L19.584 6.32c.444-.164.832.108.688.84z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-light via-white to-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6 group">
              <LogoIcon className="h-20 w-auto text-brand-blue-900 mr-2 transition-transform duration-300 group-hover:scale-105" />
              <span className="text-2xl font-bold text-brand-blue-900 transition-colors duration-300 group-hover:text-brand-accent">Motor Mind</span>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6 max-w-md">
              Автоматизированный сервис для автосервисов по работе с отзывами и удержанию клиентов. 
              Превращаем каждое взаимодействие в возможность для роста бизнеса.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-brand-blue-900 mb-3">Новости и обновления</h4>
              <form onSubmit={handleSubscribe} className="flex max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-l-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors text-sm"
                  disabled={isSubscribed}
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className={`px-4 py-3 rounded-r-lg font-medium transition-all duration-300 text-sm ${
                    isSubscribed
                      ? 'bg-green-500 text-white'
                      : 'bg-brand-accent text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubscribed ? '✓' : '→'}
                </button>
              </form>
              {isSubscribed && (
                <p className="text-green-600 text-sm mt-2 font-medium">Спасибо за подписку!</p>
              )}
            </div>

            <div>
              <h4 className="font-semibold text-brand-blue-900 mb-3">Мы в социальных сетях</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-brand-blue-900 mb-6">Навигация</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-brand-accent transition-colors duration-300 group flex items-center"
                  >
                    <span>{link.label}</span>
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold text-brand-blue-900 mb-6">Поддержка</h4>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-brand-accent transition-colors duration-300 group flex items-center"
                  >
                    <span>{link.label}</span>
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 className="font-semibold text-brand-blue-900 mb-3 text-sm">Связаться с нами</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-slate-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>hello@motor-mind.ru</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold text-brand-blue-900 mb-6">Правовая информация</h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-brand-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
              <h5 className="font-semibold text-brand-blue-900 mb-2 text-sm">ООО "Мотор Майнд"</h5>
              <div className="text-xs text-slate-600 space-y-1">
                <p>ИНН: 1234567890</p>
                <p>ОГРН: 1234567890123</p>
                <p>Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Motor Mind. Все права защищены.</p>
            </div>

            <div className="flex items-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>150+ активных клиентов</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>99.9% uptime</span>
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center text-slate-600 hover:text-brand-accent transition-colors duration-300 text-sm font-medium"
            >
              <span>Наверх</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute top-8 right-8 w-3 h-3 bg-brand-accent rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-2 h-2 bg-green-500 rounded-full opacity-30 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;