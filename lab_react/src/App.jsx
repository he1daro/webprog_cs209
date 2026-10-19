import Header from './components/Header';
import Goal from './components/Goal';
import Experience from './components/Experience';
import OtherSkills from './components/OtherSkills';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
        <Header />
        <main className="p-6 sm:p-8 space-y-6">
          <Goal />
          <Experience />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Education />
            <OtherSkills />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
