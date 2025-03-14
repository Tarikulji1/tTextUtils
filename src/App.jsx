import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import SharePage from './components/SharePage';
import Feedback from './components/Feedback';
import "./App.css"


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('dark-mode', newMode);
    document.body.classList.toggle('dark-mode', newMode);
  };

  return (
    <>
    <div>
      <Navbar title="tTextUtils" aboutText="About" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text below" />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
