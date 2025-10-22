import React, { useEffect, useState } from 'react'
import DarkmodeStyle from "../styles/darkmode.module.scss"
import { Moon, Sun} from "lucide-react";

interface DarkModeProps {
  isDarkmodeSelected: boolean;
  handleThemeClick: () => void;
}

function DarkMode({ isDarkmodeSelected, handleThemeClick }: DarkModeProps) {
  return(
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
