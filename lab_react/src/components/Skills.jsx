function Skills() {
  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 transition-colors duration-300">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-3 transition-colors duration-300">
          Знання ПК та навички:
        </h3>
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0 mb-4">
          <li className="bg-sky-50 dark:bg-slate-700 border border-sky-200 dark:border-slate-600 text-slate-800 dark:text-sky-300 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-300">
            C#
          </li>
          <li className="bg-sky-50 dark:bg-slate-700 border border-sky-200 dark:border-slate-600 text-slate-800 dark:text-sky-300 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-300">
            Python
          </li>
          <li className="bg-sky-50 dark:bg-slate-700 border border-sky-200 dark:border-slate-600 text-slate-800 dark:text-sky-300 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-300">
            HTML
          </li>
          <li className="bg-sky-50 dark:bg-slate-700 border border-sky-200 dark:border-slate-600 text-slate-800 dark:text-sky-300 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-300">
            CSS
          </li>
          <li className="bg-sky-50 dark:bg-slate-700 border border-sky-200 dark:border-slate-600 text-slate-800 dark:text-sky-300 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-300">
            JavaScript
          </li>
        </ul>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
          Базові знання зі забезпечення інформаційної безпеки систем та мереж.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-3 transition-colors duration-300">
          Іноземні мови:
        </h3>
        <p className="text-slate-700 dark:text-slate-300">
          Англійська мова — рівень В2.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-3 transition-colors duration-300">
          Додаткова інформація:
        </h3>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 pl-1">
          <li>Сімейний стан – неодружений, дітей немає</li>
          <li>Наявність закордонного паспорта</li>
          <li>Водійські права категорії «В»</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;