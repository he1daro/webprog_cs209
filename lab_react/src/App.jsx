import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
        <Header />
        <main className="p-6 sm:p-8 space-y-6">
          <Experience />
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