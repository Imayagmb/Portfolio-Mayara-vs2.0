import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('fontSize');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [isDarkMode, fontSize]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const increaseFontSize = () => {
    if (fontSize < 20) {
      const newSize = fontSize + 1;
      setFontSize(newSize);
      localStorage.setItem('fontSize', newSize.toString());
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 14) {
      const newSize = fontSize - 1;
      setFontSize(newSize);
      localStorage.setItem('fontSize', newSize.toString());
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
      />
      <Hero isDarkMode={isDarkMode} />
      <Sobre isDarkMode={isDarkMode} />
      <Experiencia isDarkMode={isDarkMode} />
      <Projetos isDarkMode={isDarkMode} />
      <Contato isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;