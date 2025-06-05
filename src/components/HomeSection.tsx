import React from 'react'
import HomeStyle from "../styles/homeStyle.module.scss";
import LogoLarge from './LogoLarge';

function HomeSection() {
  return (
    <div className={HomeStyle.parent}>
        <div className={HomeStyle.cirkle}></div>
        <div className={HomeStyle.textContent}>
            <h2>Alva Jonsson</h2>
            <h1>WEB & GRAPHICS</h1>
            <span className={HomeStyle.category}>
                <h3>Web2</h3>
                <h3>Graphics</h3>
                <h3>Web3</h3>
            </span>
            <span className={HomeStyle.hearts}>
                <LogoLarge className={HomeStyle.heart1}/>
                <LogoLarge className={HomeStyle.heart2}/>
                <LogoLarge className={HomeStyle.heart3}/>
                <LogoLarge className={HomeStyle.heart1}/>
            </span>
            <span className={HomeStyle.cities}>
                <h4>London</h4>
                <h4>Örebro</h4>
            </span>

        </div>
      
    </div>
  )
}

export default HomeSection
