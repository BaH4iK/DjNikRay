import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/services', label: 'Услуги' },
  { path: '/portfolio', label: 'Портфолио' },
  { path: '/testimonials', label: 'Отзывы' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contacts', label: 'Контакты' },
];

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <nav className="flex flex-wrap justify-center gap-3 py-4">
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`px-3 py-1 rounded text-sm md:text-base ${pathname === path ? 'bg-accent text-black' : 'hover:text-accent'}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
