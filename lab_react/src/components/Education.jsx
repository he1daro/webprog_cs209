function Education() {
  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 transition-colors duration-300">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-3 transition-colors duration-300">
          Освіта
        </h3>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">2025 – дотепер</p>
        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
          Національний університет «Львівська політехніка»
        </h4>
        <p className="text-slate-700 dark:text-slate-300 mb-2">
          Інститут комп’ютерних технологій, автоматики та метрології.
        </p>
        <p className="text-slate-700 dark:text-slate-300 mb-1">
          <strong className="text-slate-900 dark:text-white font-semibold">Спеціальність:</strong> Кібербезпека та захист інформації.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          <strong className="text-slate-900 dark:text-white font-semibold">Освітній ступінь:</strong> Бакалавр.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-3 transition-colors duration-300">
          Додаткова освіта
        </h3>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">2025–2026 рр.</p>
        <p className="text-slate-700 dark:text-slate-300">Курси англійської мови.</p>
      </div>
    </section>
  );
}

export default Education;