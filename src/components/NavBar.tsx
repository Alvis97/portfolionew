import React, { useState } from 'react'
import navStyle from "../styles/navigation.module.scss"
import LogoSmall from "../components/LogoSmall"
import DarkMode from '../components/Darkmode';
import LogoLarge from './LogoLarge';
import { Menu } from './Icons';
import PinkHeart from '../assets/PinkHearts.svg';

interface NavbarProps {
    isDarkmodeSelected: boolean;
    handleThemeClick: () => void;
}

function NavBar({ isDarkmodeSelected, handleThemeClick }: NavbarProps ) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(prev => !prev);
    };

  return (
    <div className={navStyle.parent}> 

    { isDarkmodeSelected ? (
 <LogoSmall/>
    ):(
        <img src={PinkHeart} className={navStyle.pinkHeartLogo} alt="pink little heart logo" />
    )}
           

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

            <DarkMode 
            isDarkmodeSelected={isDarkmodeSelected} 
            handleThemeClick={handleThemeClick}
            />

            <button 
            onClick={handleMenuClick} 
            className={`${navStyle.menuButton} ${isMenuOpen ? navStyle.open : ''}`}>
             <Menu className={navStyle.menuIcon}/>
            </button>
        
            <div className={`${navStyle.hamburger} ${isMenuOpen ? navStyle.open : ''}`}>
           <div className={navStyle.hamburgerLinks}>
            
            <span className={navStyle.hoverIcon}>
                { isDarkmodeSelected ? (
                    <LogoSmall className={navStyle.selector}/>
                ):(
                    <img src={PinkHeart} className={navStyle.selectorPink} alt="pink heart" />
                )}
                 <a href="">Home</a>
            </span> 
            <span className={navStyle.hoverIcon}>
            { isDarkmodeSelected ? (
                    <LogoSmall className={navStyle.selector}/>
                ):(
                    <img src={PinkHeart} className={navStyle.selectorPink} alt="pink heart" />
                )}
                <a href="">About</a>
            </span> 

            <span className={navStyle.hoverIcon}>
            { isDarkmodeSelected ? (
                    <LogoSmall className={navStyle.selector}/>
                ):(
                    <img src={PinkHeart} className={navStyle.selectorPink} alt="pink heart" />
                )}
                <a href="">Projects</a>
            </span> 
           
            </div>

            </div>
         

    </div>
  )
}

export default NavBar
