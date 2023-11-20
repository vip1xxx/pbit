import { Routes, Route } from 'react-router-dom';
import { About, Homepage, Login, Register, Terms } from './pages';
import { Footer, Header } from "./components";
import { useEffect, useState } from "react";


function App() {
  const [darkToggle, setDarkToggle] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkToggle(storedTheme);
    } else {
      // If there's no stored theme in localStorage, check the browser's default preference for dark mode
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkToggle(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  const toggleSwitch = () => {
    const newTheme = darkToggle === 'dark' ? 'light' : 'dark';
    setDarkToggle(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
      <div className={`dark:bg-midnight text-sm lg:text-base text-mid_gray dark:text-light_gray transitionClass 
        ${darkToggle === 'dark' ? 'dark' : ''}`}>

        <Routes>
          <Route path="/" element={
            <>
              <Header toggleSwitch={toggleSwitch} />
              <Homepage />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header toggleSwitch={toggleSwitch} />
              <About />
              <Footer />
            </>
          } />
          <Route path="/terms" element={
            <>
              <Header toggleSwitch={toggleSwitch} />
              <Terms />
              <Footer />
            </>
          } />
          <Route path="/login" element={
            <>
              <Header toggleSwitch={toggleSwitch} />
              <Login />
              <Footer />
            </>
          } />
          <Route path="/register" element={
            <>
              <Header toggleSwitch={toggleSwitch} />
              <Register />
              <Footer />
            </>
          } />
        </Routes>
      </div>
  );
}

export default App;
