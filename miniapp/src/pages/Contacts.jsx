import NavBar from '../components/NavBar';

export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <NavBar />
      <h2 className="text-2xl md:text-4xl font-bold mb-6">Контакты</h2>
      <a
        href="https://t.me/djnikray" target="_blank"
        className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 shadow-lg mb-4"
      >
        Написать в Telegram
      </a>
      <a href="https://www.instagram.com/dj_nik_ray_?igsh=MTlscmRybG9sc250dw==" target="_blank" className="underline text-accent">Instagram</a>
    </div>
  );
}
