function Header() {
  return (
    <header className="bg-slate-900 text-white p-6 sm:p-8 rounded-t-xl border-b border-slate-800 shadow-md">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
        Резюме
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-6">
        Ілля Пенцак
      </h2>

      <ul className="flex flex-col gap-x-6 gap-y-2 text-sm text-slate-300 border-t border-slate-800/80 pt-4 list-none p-0 m-0">
        <li>Дата народження: 2 серпня 2008р.</li>
        <li>Місто: Львів</li>
        <li>
          тел.{" "}
          <a
            href="tel:+380678401368"
            className="text-sky-300 hover:text-white transition-colors duration-200 underline underline-offset-2"
          >
            (067) 840-13-68
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