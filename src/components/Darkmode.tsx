import React, { useState } from 'react'
import DarkmodeStyle from "../styles/darkmode.module.scss"

function DarkMode() {
    const [isDarkmodeSelected, setIsDarkmodeSelected] = useState(false);

    const handleThemeClick = () => {
        setIsDarkmodeSelected (prev => !prev);
    }

  return (
    <div>
    <button onClick={handleThemeClick} className={DarkmodeStyle.DarkmodeBtn}>
        <span
          className={isDarkmodeSelected ? DarkmodeStyle.fadeIn : DarkmodeStyle.fadeOut}
        >
          🌙
        </span>
        <span
          className={!isDarkmodeSelected ? DarkmodeStyle.fadeIn : DarkmodeStyle.fadeOut}
        >
          ☀️
        </span>
      </button>
    </div>
  )
}

export default DarkMode
