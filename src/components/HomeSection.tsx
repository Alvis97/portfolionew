import React from 'react'
import homeStyle from "../styles/home.module.scss";
import LogoLarge from './LogoLarge';
import LargeHeart from "../assets/LargeHeart.svg";
import LargeHeart6 from "../assets/LargeHeart6.svg";
import HeartShadow from '../assets/shadow.svg';

interface HomeSectionProps {
    isDarkmodeSelected: boolean;
};

const HomeSection: React.FC<HomeSectionProps> = ({ isDarkmodeSelected }) => {
  return (
    <section className={`${homeStyle.homeSection} ${isDarkmodeSelected ? homeStyle.dark : ''}`}>
        <div   className={homeStyle.circle}></div>

        <div  className={homeStyle.textContent}>
            <h1>Web-developer / graphics</h1>
              <p>Curious at heart. I design, develop and dive deep into creative technologies - from web2 layouts to web3 experiments. <br>
              </br> 
              <span>/* Just exploring what the web can be */</span>
              </p>
        </div>

        <div  className={homeStyle.hearts}>
            <img className={` ${homeStyle.heart1} ${homeStyle.heart} `} src={LargeHeart6} alt="heart A" />
            <img className={` ${homeStyle.heart2} ${homeStyle.heart} `} src={LargeHeart6} alt="heart L" />
            <img className={` ${homeStyle.heart3} ${homeStyle.heart} `} src={LargeHeart6} alt="heart V" />
            <img className={`${homeStyle.heart4} ${homeStyle.heart} `} src={LargeHeart6} alt="heart A" />
        </div>
         
        <div  className={homeStyle.heartShadows}>
            <img src={HeartShadow} className={`${homeStyle.shadow1} ${homeStyle.shadow}`} alt="Shadow A" />
            <img src={HeartShadow} className={`${homeStyle.shadow2} ${homeStyle.shadow}`} alt="Shadow A" />
            <img src={HeartShadow} className={`${homeStyle.shadow3} ${homeStyle.shadow}`} alt="Shadow A" />
            <img src={HeartShadow} className={`${homeStyle.shadow4} ${homeStyle.shadow}`} alt="Shadow A" />
        </div>
      
    </section>
  )
}

export default HomeSection
