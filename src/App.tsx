import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navigation Menu */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Welcome Section */}
        <Hero />

        {/* Biography Section */}
        <About />

        {/* Technical Stack Section */}
        <Skills />

        {/* Project Cards Section */}
        <Projects />

        {/* Form and Social Section */}
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}

export default App;
