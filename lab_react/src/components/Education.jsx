function Education() {
  return (
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
          Освіта
        </h3>
        <div className="border-l-4 border-sky-600 pl-4 space-y-1">
          <p className="text-sm font-medium text-slate-500">2025–2029 рр.</p>
          <h4 className="text-lg font-bold text-slate-900">
            Національний університет «Львівська політехніка»
          </h4>
          <p className="text-slate-700">
            Інститут комп’ютерних технологій, автоматики та метрології.
          </p>
          <p className="text-slate-700">
            <strong className="text-slate-900 font-semibold">Спеціальність:</strong> Кібербезпека та захист інформації.
          </p>
          <p className="text-slate-700">
            <strong className="text-slate-900 font-semibold">Освітній ступінь:</strong> Бакалавр.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
          Додаткова освіта
        </h3>
        <div className="border-l-4 border-sky-600 pl-4 space-y-1">
          <p className="text-sm font-medium text-slate-500">2027–2028 рр.</p>
          <p className="text-slate-700 font-medium">Курси англійської мови.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;