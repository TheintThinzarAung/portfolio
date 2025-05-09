import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-purple-950 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;