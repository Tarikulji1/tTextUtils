import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import "./App.css"


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <>
    <div>
      <Navbar title="tTextUtils" aboutText="About" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text below" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
