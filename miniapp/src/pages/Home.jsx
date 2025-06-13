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
          { name: 'Сбербанк', src: '/clients/sberbank.png' },
          { name: 'Таврида Арт', src: '/clients/tavrida.png' },
          { name: 'Россия – Страна возможностей', src: '/clients/rsv.png' },
        ].map((c) => (
          <img
            key={c.name}
            src={c.src}
            alt={c.name}
            className="h-12 w-auto"
          />
        ))}
      </div>
      {/* About Me micro-block */}
      <p className="text-center max-w-2xl mb-8 text-lg italic">
        Раскачаю любой танцпол — от камерных вечеринок до федеральных форумов.<br />
        Индивидуальный плейлист, живые лайв-сеты, только лучшие эмоции и топовый звук!
      </p>
      {/* Work Formats moved to Services page */}
      {/* Why choose me */}
      <h3 className="text-xl font-semibold mb-4">Почему выбирают меня</h3>
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
      <a
        href="https://t.me/djnikray" target="_blank"
        className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 shadow-lg"
      >
        Написать в Telegram
      </a>
    </div>
  );
}
