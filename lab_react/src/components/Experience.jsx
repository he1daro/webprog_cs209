function Experience() {
  return (
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-3">
          Загальний досвід
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Забезпечення інформаційної безпеки систем та мереж. Програмування мовами Python і C#. 
          Базові знання криптографії та захисту даних.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
          Досвід роботи
        </h3>

        <ul className="space-y-6 list-none p-0 m-0">
          <li className="border-l-4 border-sky-600 pl-4 space-y-1">
            <h4 className="text-lg font-bold text-slate-900">ТОВ «ІнфоБезпека»</h4>
            <p className="text-sm font-medium text-slate-500">
              Травень 2028 р. — до сьогодні
            </p>
            <p className="text-slate-700">
              Надання послуг з кібербезпеки та захисту.
            </p>
            <p className="text-slate-900 font-semibold">
              Молодший аналітик з кібербезпеки
            </p>
            <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 pt-1 pl-1">
              <li>Проведення моніторингу безпеки корпоративної мережі</li>
              <li>Виявлення та усунення загроз</li>
            </ul>
          </li>

          <li className="border-l-4 border-sky-600 pl-4 space-y-1">
            <h4 className="text-lg font-bold text-slate-900">ПП «СофтЛаб»</h4>
            <p className="text-sm font-medium text-slate-500">
              Квітень 2027 р. — листопад 2027 р.
            </p>
            <p className="text-slate-700">
              Розроблення програмного забезпечення.
            </p>
            <p className="text-slate-900 font-semibold">
              Програміст
            </p>
            <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 pt-1 pl-1">
              <li>Розроблення програмних модулів на C#</li>
              <li>Тестування та оптимізація коду</li>
            </ul>
          </li>

          <li className="border-l-4 border-sky-600 pl-4 space-y-1">
            <h4 className="text-lg font-bold text-slate-900">ФОП «Вебсервіс»</h4>
            <p className="text-sm font-medium text-slate-500">
              Червень 2026 р. — грудень 2026 р.
            </p>
            <p className="text-slate-700">
              Надання різних послуг в IT-сфері.
            </p>
            <p className="text-slate-900 font-semibold">
              Стажер-програміст
            </p>
            <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 pt-1 pl-1">
              <li>Розроблення простих вебзастосунків</li>
              <li>Підтримка клієнтських проєктів</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;