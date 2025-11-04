import React from 'react'
import homeStyle from "../styles/home.module.scss";
import LogoLarge from './LogoLarge';
import LargeHeart from "../assets/LargeHeart.svg";
import LargeHeart6 from "../assets/LargeHeart6.svg";
import HeartShadow from '../assets/shadow.svg';
import PinkHearts from "../assets/PinkHearts.svg";

interface HomeSectionProps {
    isDarkmodeSelected: boolean;
};

const HomeSection: React.FC<HomeSectionProps> = ({ isDarkmodeSelected }) => {
  console.log("HomeSection isDarkmodeSelected:", isDarkmodeSelected);

  return (
    <section className={`${homeStyle.homeSection} ${isDarkmodeSelected ? homeStyle.dark : ''}`}>
        <div   className={homeStyle.circle}></div>

        <div  className={homeStyle.textContent}>
          <div className={homeStyle.heading}>
          <span className={homeStyle.name}>Alva Jonsson</span>
          <h1>Web-developer <br/> & Graphics</h1>
          </div>
              <p>Curious at heart. I build immersive web 
               experiences that blend design, code, 
               and creative tech – from playful interfaces 
               to web3 interactions. 
               <br />
              <span>/* Just exploring what the web can be */</span>
              </p>
        </div>

      { isDarkmodeSelected ? ( 
        <div  className={homeStyle.hearts}>
            <img className={` ${homeStyle.heart1} ${homeStyle.heart} `} src={LargeHeart6} alt="heart A" />
            <img className={` ${homeStyle.heart2} ${homeStyle.heart} `} src={LargeHeart6} alt="heart L" />
            <img className={` ${homeStyle.heart3} ${homeStyle.heart} `} src={LargeHeart6} alt="heart V" />
            <img className={`${homeStyle.heart4} ${homeStyle.heart} `} src={LargeHeart6} alt="heart A" />
        </div>
) : ( 
        <div  className={homeStyle.hearts}>
            <img className={` ${homeStyle.heart1} ${homeStyle.heart} `} src={PinkHearts} alt="heart A" />
            <img className={` ${homeStyle.heart2} ${homeStyle.heart} `} src={PinkHearts} alt="heart L" />
            <img className={` ${homeStyle.heart3} ${homeStyle.heart} `} src={PinkHearts} alt="heart V" />
            <img className={`${homeStyle.heart4} ${homeStyle.heart} `} src={PinkHearts} alt="heart A" />
        </div>
        )  }
         
        {/* <div  className={homeStyle.heartShadows}>
            <img src={HeartShadow} className={`${homeStyle.shadow1} ${homeStyle.shadow}`} alt="Shadow A" />
            <img src={HeartShadow} className={`${homeStyle.shadow2} ${homeStyle.shadow}`} alt="Shadow A" />
            <img src={HeartShadow} className={`${homeStyle.shadow3} ${homeStyle.shadow}`} alt="Shadow A" />
            <img src={HeartShadow} className={`${homeStyle.shadow4} ${homeStyle.shadow}`} alt="Shadow A" />
        </div> */}
      
    </section>
  )
}

export default HomeSection
