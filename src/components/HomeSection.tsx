import React from 'react'
import homeStyle from "../styles/home.module.scss";
import LogoLarge from './LogoLarge';
import LargeHeart from "../assets/LargeHeart.svg";
import LargeHeart6 from "../assets/LargeHeart6.svg";
import HeartShadow from './HeartShadow';

interface HomeSectionProps {
    isDarkmodeSelected: boolean;
};

const HomeSection: React.FC<HomeSectionProps> = ({ isDarkmodeSelected }) => {
  return (
    <section className={`${homeStyle.homeSection} ${isDarkmodeSelected ? homeStyle.dark : ''}`}>
        <div   className={homeStyle.circle}></div>

        <div  className={homeStyle.textContent}>
            <div className={homeStyle.heading}>
            <h1>Web-developer / graphics</h1>
            </div>
            <div  className={homeStyle.description}>
              <p>Curious at heart. I design, develop and dive deep into creative technologies - from web2 layouts to web3 experiments. <br>
              </br> 
              <span>/* Just exploring what the web can be */</span>
              </p>
            </div>
        </div>

        <div  className={homeStyle.hearts}>
            <LogoLarge className={`${homeStyle.heart1} ${homeStyle.heart}`} />
            <LogoLarge className={`${homeStyle.heart2} ${homeStyle.heart}`} />
            <LogoLarge className={`${homeStyle.heart3} ${homeStyle.heart}`} />
            <LogoLarge className={`${homeStyle.heart4} ${homeStyle.heart}`} />
        </div>
         
        <div  className={homeStyle.heartShadows}>
            <HeartShadow className={`${homeStyle.shadow1} ${homeStyle.shadow}`} />
            <HeartShadow className={`${homeStyle.shadow2} ${homeStyle.shadow}`} />
            <HeartShadow className={`${homeStyle.shadow3} ${homeStyle.shadow}`} />
            <HeartShadow className={`${homeStyle.shadow4} ${homeStyle.shadow}`} />
        </div>
      
    </section>
  )
}

export default HomeSection
