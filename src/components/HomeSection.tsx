import React from 'react'
import homeStyle from "../styles/home.module.scss";
import LogoLarge from './LogoLarge';

interface HomeSectionProps {
    isDarkmodeSelected: boolean;
};

const HomeSection: React.FC<HomeSectionProps> = ({ isDarkmodeSelected }) => {
  return (
    <section className={`${homeStyle.homeSection} ${isDarkmodeSelected ? homeStyle.dark : ''}`}>
        <div   className={homeStyle.circle}></div>
        <div  className={homeStyle.textContent}>
            <span   className={homeStyle.name}>Alva Jonsson</span>
            <span  className={homeStyle.topic}>WEB & GRAPHICS</span>
            <div  className={homeStyle.category}>
                <span>Web2</span>
                <span>Graphics</span>
                <span>Web3</span>
            </div>
            <div  className={homeStyle.hearts}>
            <LogoLarge className={`${homeStyle.heart1} ${homeStyle.heart}`} />
            <LogoLarge className={`${homeStyle.heart2} ${homeStyle.heart}`} />
            <LogoLarge className={`${homeStyle.heart3} ${homeStyle.heart}`} />
            <LogoLarge className={`${homeStyle.heart2} ${homeStyle.heart}`} />
            </div>
            <div  className={homeStyle.cities}>
                <span className={homeStyle.town}>London</span>
                <span className={homeStyle.town}>Örebro</span>
            </div>

        </div>
      
    </section>
  )
}

export default HomeSection
