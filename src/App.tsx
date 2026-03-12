import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <AnimatedBackground />
      <ScrollProgress />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
