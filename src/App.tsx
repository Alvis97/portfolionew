import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import './styles/globals.scss';
import HomeSection from './components/HomeSection';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [isDarkmodeSelected, setIsDarkmodeSelected] = useState(false);

  useEffect(() => {
    const saveTheme = localStorage.getItem(`theme`);
    if (saveTheme === `dark`) {
      setIsDarkmodeSelected(true);
      document.body.classList.add(`dark`);
    }
  }, []);

  const handleThemeClick = () => {
    setIsDarkmodeSelected(prev => {
      const newMode = !prev;
      document.body.classList.toggle(`dark`, newMode);
      localStorage.setItem(`theme`, newMode ? 'dark' : 'light');
      return newMode;
    })
  }


  return (
    <div className="App">
      <header className="App-header">
       <NavBar
       isDarkmodeSelected={isDarkmodeSelected}
       handleThemeClick={handleThemeClick}
       />
      </header>
      <main className="App-body">
        <HomeSection isDarkmodeSelected={isDarkmodeSelected}/>
        <About/>
        <Projects/>
      </main>
     <Footer
     isDarkmodeSelected={isDarkmodeSelected}
     /> 
    </div>
  );
}

export default App;
