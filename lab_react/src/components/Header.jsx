function Header() {
  return (
    <header className="bg-slate-900 text-white p-6 sm:p-8 rounded-t-xl border-b border-slate-800 shadow-md">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
        Резюме
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-3">
        Ілля Пенцак
      </h2>
      <p className="text-slate-300 font-medium text-sm sm:text-base mb-4">
        <strong>Молодший спеціаліст з кібербезпеки зі знаннями Python, C#</strong>
      </p>

      <ul className="flex flex-col gap-2 text-sm text-slate-300 border-t border-slate-800/80 pt-4 list-none p-0 m-0">
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