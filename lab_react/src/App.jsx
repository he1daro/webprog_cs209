import { useState, useEffect } from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-8 px-4 sm:px-6 transition-colors duration-300">
      <ContactForm />
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="p-6 sm:p-8 space-y-6">
          <Experience />
          <Reviews />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Education />
            <Skills />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;