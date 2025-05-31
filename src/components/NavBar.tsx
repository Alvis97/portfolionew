import React, { useState } from 'react'
import Navstyle from "../styles/navigation.module.scss"
import LogoSmall from "../components/LogoSmall"
import DarkMode from '../components/Darkmode';
import LogoLarge from './LogoLarge';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(prev => !prev);
    };

  return (
    <div className={Navstyle.parent}> 

            <LogoSmall/>

            <span className={Navstyle.links}>
            <div className={Navstyle.linkWrapper}>
                <a href="">Home</a>
                <span className={Navstyle.underline}></span>
            </div>
            <div className={Navstyle.linkWrapper}>
                <a href="">About</a>
                <span className={Navstyle.underline}></span>
            </div>
            <div className={Navstyle.linkWrapper}>
                <a href="">Projects</a>
                <span className={Navstyle.underline}></span>
            </div>
            </span>

            <DarkMode/>

            <button onClick={handleMenuClick} className={Navstyle.menuButton}>
            ☰
            </button>
            {isMenuOpen && (
            <div className={Navstyle.hamburger}>
            <span className={Navstyle.hamburgerLinks}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Projects</a>
            </span>
            </div>
            )}
         

    </div>
  )
}

export default NavBar
