import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import HorizontalScrollWrapper from './components/HorizontalScrollWrapper';

import './App.css';
import './components/HorizontalLayout.css';

function App() {
  // Always use dark mode
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Always apply dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleDarkMode = () => {
    // Keep it dark, no toggling
    return;
  };

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Horizontal Scroll Section */}
      <HorizontalScrollWrapper>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
      </HorizontalScrollWrapper>

      {/* Vertical Scroll Section */}
      <Footer />
    </div>
  );
}

export default App;
