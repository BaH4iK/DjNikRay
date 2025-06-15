const message = `Здравствуйте!%0AМеня заинтересовал ваш проект: мини-приложение для Telegram — DJ NikRay.%0AХотел бы узнать детали разработки, сроки, стоимость такого приложения для себя.`;

export default function DeveloperCTA() {
  return (
    <div className="fixed bottom-4 right-4 md:right-6 z-40 text-center space-y-1">
      <p className="text-xs md:text-sm bg-gray-800/80 px-2 py-1 rounded">
        Хочешь такое приложение?
      </p>
      <a
        href={`https://t.me/BaH4iK?text=${message}`}
        target="_blank"
        className="bg-accent text-black px-4 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-150"
      >
        Написать
      </a>
    </div>
  );
}
