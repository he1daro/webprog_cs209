function Education() {
  return (
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-3">
          Освіта
        </h3>
        <p className="text-sm font-medium text-slate-500 mb-1">2025 – дотепер</p>
        <h4 className="text-lg font-bold text-slate-900 mb-1">
          Національний університет «Львівська політехніка»
        </h4>
        <p className="text-slate-700 mb-2">
          Інститут комп’ютерних технологій, автоматики та метрології.
        </p>
        <p className="text-slate-700 mb-1">
          <strong className="text-slate-900 font-semibold">Спеціальність:</strong> Кібербезпека та захист інформації.
        </p>
        <p className="text-slate-700">
          <strong className="text-slate-900 font-semibold">Освітній ступінь:</strong> Бакалавр.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-3">
          Додаткова освіта
        </h3>
        <p className="text-sm font-medium text-slate-500 mb-1">2025–2026 рр.</p>
        <p className="text-slate-700">Курси англійської мови.</p>
      </div>
    </section>
  );
}

export default Education;