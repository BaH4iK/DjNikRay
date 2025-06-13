import NavBar from '../components/NavBar';

const testimonials = [
  {
    quote: 'Невероятная атмосфера! Все гости были в восторге.',
    author: 'Анна, невеста',
  },
  {
    quote: 'Отличный подбор треков, идеально почувствовал публику.',
    author: 'Игорь, организатор фестиваля',
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen px-4">
      <NavBar />
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Отзывы</h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.author} className="border border-accent p-4 rounded">
            <p className="italic mb-2">“{t.quote}”</p>
            <p className="text-right text-accent">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
