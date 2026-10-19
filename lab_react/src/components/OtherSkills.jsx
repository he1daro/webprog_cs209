function OtherSkills() {
  return (
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-3">
          Знання ПК:
        </h3>
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
          <li className="bg-sky-50 border border-sky-200 text-slate-800 text-sm font-medium px-3 py-1 rounded-md">
            C#
          </li>
          <li className="bg-sky-50 border border-sky-200 text-slate-800 text-sm font-medium px-3 py-1 rounded-md">
            Python
          </li>
          <li className="bg-sky-50 border border-sky-200 text-slate-800 text-sm font-medium px-3 py-1 rounded-md">
            HTML
          </li>
          <li className="bg-sky-50 border border-sky-200 text-slate-800 text-sm font-medium px-3 py-1 rounded-md">
            CSS
          </li>
          <li className="bg-sky-50 border border-sky-200 text-slate-800 text-sm font-medium px-3 py-1 rounded-md">
            JavaScript
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-3">
          Іноземні мови:
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Англійська мова — розмовний рівень.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-3">
          Додаткова інформація:
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-1 pl-1">
          <li>Сімейний стан — неодружений, дітей немає</li>
          <li>Наявність закордонного паспорта</li>
          <li>Водійські права категорії «В»</li>
        </ul>
      </div>
    </section>
  );
}

export default OtherSkills;