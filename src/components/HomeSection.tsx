import React from 'react'
import GreenHeart from "../assets/GreenGlassHeart.svg";
import HeartShadow from '../assets/shadow.svg';
import PinkHearts from "../assets/PinkGlassHeart.svg";

//Styles
import homeStyle from "../styles/home.module.scss";

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
          <span className={homeStyle.name}>ALVA JONSSON</span>
          <h1>WEB-DEVELOPER <br/> & GRAPHICS</h1>
          </div>
              <p>Curious at heart. I design, develop and dive deep
                 into creative technologies - from web2 layouts to
                  web3 experiments.  
           
              </p>
        </div>

      { isDarkmodeSelected ? ( 
        <div  className={homeStyle.hearts}>
          <div className={homeStyle.heartWrapper}>
            <img className={` ${homeStyle.heart1} ${homeStyle.heart} `} src={GreenHeart} alt="heart A" />
            <img src={HeartShadow} className={`${homeStyle.shadow1} ${homeStyle.shadow}`} alt="Shadow A" />
          </div>

          <div className={homeStyle.heartWrapper}>
            <img className={` ${homeStyle.heart2} ${homeStyle.heart} `} src={GreenHeart} alt="heart L" />
            <img src={HeartShadow} className={`${homeStyle.shadow2} ${homeStyle.shadow}`} alt="Shadow L" />
          </div>

          <div className={homeStyle.heartWrapper}>
            <img className={` ${homeStyle.heart3} ${homeStyle.heart} `} src={GreenHeart} alt="heart V" />
            <img src={HeartShadow} className={`${homeStyle.shadow3} ${homeStyle.shadow}`} alt="Shadow V" />
          </div>

          <div className={homeStyle.heartWrapper}>
            <img className={`${homeStyle.heart4} ${homeStyle.heart} `} src={GreenHeart} alt="heart A" />
            <img src={HeartShadow} className={`${homeStyle.shadow4} ${homeStyle.shadow}`} alt="Shadow A" />
          </div>
        </div>
) : ( 
        <div  className={homeStyle.hearts}>
          <div className={homeStyle.heartWrapper}>
            <img className={` ${homeStyle.heart1} ${homeStyle.heart} `} src={PinkHearts} alt="heart A" />
            <img src={HeartShadow} className={`${homeStyle.shadow1} ${homeStyle.shadow}`} alt="Shadow A" />
          </div>

          <div className={homeStyle.heartWrapper}>
            <img className={` ${homeStyle.heart2} ${homeStyle.heart} `} src={PinkHearts} alt="heart L" />
            <img src={HeartShadow} className={`${homeStyle.shadow2} ${homeStyle.shadow}`} alt="Shadow A" />
          </div>

          <div className={homeStyle.heartWrapper}>
            <img className={` ${homeStyle.heart3} ${homeStyle.heart} `} src={PinkHearts} alt="heart V" />
            <img src={HeartShadow} className={`${homeStyle.shadow3} ${homeStyle.shadow}`} alt="Shadow A" />
          </div>

          <div className={homeStyle.heartWrapper}>
            <img className={`${homeStyle.heart4} ${homeStyle.heart} `} src={PinkHearts} alt="heart A" />
            <img src={HeartShadow} className={`${homeStyle.shadow4} ${homeStyle.shadow}`} alt="Shadow A" />
          </div>
        </div>
        )  }
    </section>
  )
}

export default HomeSection
