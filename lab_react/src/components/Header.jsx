function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-slate-900 dark:bg-slate-950 text-white p-6 sm:p-8 rounded-t-xl border-b border-slate-800 dark:border-slate-900 shadow-md relative transition-colors duration-300">
      <button 
        onClick={toggleTheme}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors border border-slate-700 dark:border-slate-700 shadow-sm"
      >
        {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
      </button>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 pr-32">
        Резюме
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-3">
        Ілля Пенцак
      </h2>
      <p className="text-slate-300 font-medium text-sm sm:text-base mb-4">
        <strong>Молодший спеціаліст з кібербезпеки зі знаннями Python, C#</strong>
      </p>

      <ul className="flex flex-col gap-2 text-sm text-slate-300 border-t border-slate-800/80 dark:border-slate-800 pt-4 list-none p-0 m-0 transition-colors duration-300">
        <li>Вік: 18 р.</li>
        <li>Місто: Львів</li>
        <li>
          тел.{" "}
          <a
            href="tel:+380674803168"
            className="text-sky-300 hover:text-white transition-colors duration-200 underline underline-offset-2"
          >
            (067) 480-31-68
          </a>
        </li>
        <li>
          e-mail:{" "}
          <a
            href="mailto:illia.pentsak.kb.2025@lpnu.ua"
            className="text-sky-300 hover:text-white transition-colors duration-200 underline underline-offset-2"
          >
            illia.pentsak.kb.2025@lpnu.ua
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;