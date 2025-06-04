import React, { useEffect, useState } from 'react'
import DarkmodeStyle from "../styles/darkmode.module.scss"
import { Moon, Sun} from "lucide-react";

function DarkMode() {
    const [isDarkmodeSelected, setIsDarkmodeSelected] = useState(false);

    const handleThemeClick = () => {
        setIsDarkmodeSelected(prev => {
          const newMode = !prev;
          document.body.classList.toggle('dark', newMode); 
          localStorage.setItem('theme', newMode ? 'dark' : 'light');
          return newMode;
        }, );
      };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkmodeSelected(true);
            document.body.classList.add('dark');
        }
    }, []);  

  return (
    <div>
    <button onClick={handleThemeClick} className={DarkmodeStyle.DarkmodeBtn}>
        <span
          className={isDarkmodeSelected ? DarkmodeStyle.fadeIn : DarkmodeStyle.fadeOut}
        >
            <Sun stroke="white"/>

        </span>
        <span
          className={!isDarkmodeSelected ? DarkmodeStyle.fadeIn : DarkmodeStyle.fadeOut}
        >
            <Moon/>
        </span>
      </button>
    </div>
  )
}

export default DarkMode
