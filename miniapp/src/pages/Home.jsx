import NavBar from '../components/NavBar';
import logo from '/logo.png';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <NavBar />
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        src={logo}
        alt="DJ Nik Ray Logo"
        className="w-40 h-auto mt-8 mb-4"
      />
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-accent">DJ NIK RAY</h1>
      <p className="text-center max-w-xl mb-10">
        Профессиональный DJ для свадеб, корпоративов и масштабных фестивалей. Более 10 лет опыта и сотни успешных мероприятий.
      </p>
      {/* Clients / Major Projects */}
      <div className="w-full overflow-x-auto mb-10 py-4 flex justify-center gap-8 clients-scroll">
        {[
          { name: 'Газпром', src: '/clients/gazprom.png' },
          { name: 'Сбер', src: '/clients/sber.svg' },
          { name: 'Таврида Арт', src: '/clients/tavrida_art.svg' },
          { name: 'Россия – Страна возможностей', src: '/clients/rsv.png' },
        ].map((c) => (
          <div key={c.name} className="h-20 w-40 flex items-center justify-center">
            <img
              src={c.src}
              alt={c.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      {/* About Me micro-block */}
      <p className="text-center max-w-2xl mb-8 text-lg italic">
        Раскачаю любой танцпол — от камерных вечеринок до федеральных форумов.<br />
        Индивидуальный плейлист, живые лайв-сеты, только лучшие эмоции и топовый звук!
      </p>
      {/* Work Formats moved to Services page */}
      {/* CTA Button */}
      <a
        href="https://t.me/djnikray"
        target="_blank"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 w-11/12 md:static md:w-auto md:translate-x-0 bg-accent text-black px-6 py-4 md:px-8 md:py-4 rounded-lg font-semibold border border-accent hover:opacity-90 hover:scale-105 transition-transform duration-200 shadow-lg z-50"
      >
        Написать в Telegram
      </a>

      {/* Why choose me */}
      <h3 className="text-xl font-semibold mb-4 mt-6">Почему выбирают меня</h3>
      <ul className="flex flex-wrap justify-center gap-3 mb-10 text-xs md:text-sm">
        {[
          '10+ лет в индустрии',
          '500+ мероприятий',
          'Федеральные проекты',
          'Живые выступления и лайв-шоу',
          'Топовый звук, индивидуальный подход',
          'Партнёр крупных брендов',
        ].map((fact) => (
          <li key={fact} className="bg-gray-800 border border-accent rounded-full py-2 px-4">{fact}</li>
        ))}
      </ul>

    </div>
  );
}
