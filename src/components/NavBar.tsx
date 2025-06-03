import React, { useState } from 'react'
import  "../styles/globals.scss"
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
    <div className="parent"> 

            <LogoSmall/>

            <span className="links">
            <div className="linkWrapper">
                <a href="" className="link">Home</a>
                <span className="underline"></span>
            </div>
            <div className="linkWrapper">
                <a href="" className="link">About</a>
                <span className="underline"></span>
            </div>
            <div className="linkWrapper">
                <a className="link" href="">Projects</a>
                <span className="underline"></span>
            </div>
            </span>

            <DarkMode/>

            <button onClick={handleMenuClick} className={`menuButton ${isMenuOpen ? 'open' : ''}`}>
             <Menu className='menuIcon'/>
            </button>
        
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}` }>
           <div className="hamburgerLinks">
            
            <span className="hoverIcon">
                <LogoSmall className="selector"/>
                 <a href="">Home</a>
            </span> 
            <span className="hoverIcon">
                <LogoSmall className='selector'/> 
                <a href="">About</a>
            </span> 

            <span className="hoverIcon">
                <LogoSmall className='selector'/>
                <a href="">Projects</a>
            </span> 
           
            </div>

            </div>
         
    </div>
  )
}

export default NavBar
