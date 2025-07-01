import React, { useState } from 'react'
import navStyle from "../styles/navigation.module.scss"
import LogoSmall from "../components/LogoSmall"
import DarkMode from '../components/Darkmode';
import LogoLarge from './LogoLarge';
import { Menu } from './Icons';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(prev => !prev);
    };

  return (
    <div className={navStyle.parent}> 

            <LogoSmall/>

            <span className={navStyle.links}>
            <div className={navStyle.linkWrapper}>
                <a href="" className={navStyle.link}>Home</a>
                <span className={navStyle.underline}></span>
            </div>
            <div className={navStyle.linkWrapper}>
                <a href="" className={navStyle.link}>About</a>
                <span className={navStyle.underline}></span>
            </div>
            <div className={navStyle.linkWrapper}>
                <a className={navStyle.link} href="">Projects</a>
                <span className={navStyle.underline}></span>
            </div>
            </span>

            <DarkMode/>

            <button 
            onClick={handleMenuClick} 
            className={`${navStyle.menuButton} ${isMenuOpen ? navStyle.open : ''}`}>
             <Menu className={navStyle.menuIcon}/>
            </button>
        
            <div className={`${navStyle.hamburger} ${isMenuOpen ? navStyle.open : ''}`}>
           <div className={navStyle.hamburgerLinks}>
            
            <span className={navStyle.hoverIcon}>
                <LogoSmall className={navStyle.selector}/>
                 <a href="">Home</a>
            </span> 
            <span className={navStyle.hoverIcon}>
                <LogoSmall className={navStyle.selector}/> 
                <a href="">About</a>
            </span> 

            <span className={navStyle.hoverIcon}>
                <LogoSmall className={navStyle.selector}/>
                <a href="">Projects</a>
            </span> 
           
            </div>

            </div>
         

    </div>
  )
}

export default NavBar
