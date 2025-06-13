import NavBar from '../components/NavBar';
import { useState } from 'react';

const photos = [
  '/portfolio/af.png',
  '/portfolio/bem.png',
  '/portfolio/gu.png',
  '/portfolio/gri.png',
  '/portfolio/por.png',
  '/portfolio/trey.png',
  '/portfolio/werq.png',
  '/portfolio/uie.png',
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + photos.length) % photos.length);
  const next = () => setIndex((index + 1) % photos.length);

  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <NavBar />
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Портфолио</h2>
      <div className="relative w-full max-w-3xl aspect-video mb-6">
        <img src={photos[index]} className="w-full h-full object-cover rounded" />
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full">
          ◀
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full">
          ▶
        </button>
      </div>
      <p className="text-center text-sm text-gray-400">{index + 1} / {photos.length}</p>
    </div>
  );
}
