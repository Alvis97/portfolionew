import React, { useEffect, useState } from 'react';
import styles from '../styles/about.module.scss';
import profileImg from '../assets/profile.jpg'; 
import selfie from '../assets/Selfie.jpg';
import { Download, ArrowRight, ChevronsDown, ChevronsDownUp, ChevronDown  } from 'lucide-react';
import { NodeIcon, ReIcon, Sass, Solana, TScript } from './Icons';

function About() {
 const [viewMore, setViewMore] = useState(false);
 const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    setIsVisible(true);
 }, [])


  return (
    <section id="about" className={styles.aboutSection}>

<div className={`${styles.imageContainer} ${isVisible ? styles.visibleImage : ""}`}>
<img className={styles.image} src={selfie} alt="Portrait of Alva" />

</div>

      <div className={`${styles.textWrapper} ${isVisible ? styles.visibleText : ""} `}>
        <h1>ABOUT</h1>
        <h2>DRAWN TO THE SPACE WHERE DESIGN MEETS CODE.</h2>
        <p>
         I’m a front-end developer with a strong eye for design
         building thoughtful, interactive web experiences. I enjoy
         shaping interfaces that feel intuitive, human and slightly
         playful — where visuals and functionality move together.
        </p>
          <p className={ `${styles.moreText} ${viewMore ? styles.open : ""}`}>
            I work mainly with React, TypeScript and Next.js, and I’m
             especially interested in creative technologies and Web3.
            Lately, that means exploring Solana, integrating wallets
            like Phantom, and experimenting with how blockchain can
              blend naturally into modern interfaces.

            <span>
              <div className={styles.iconRow}>
                <ReIcon className={styles.Icon}/>
                <TScript className={styles.Icon}/>
                <Solana className={styles.Icon}/>
                <Sass className={styles.Icon}/>
                <NodeIcon className={styles.Icon}/>
              </div>
            </span>

            Curiosity drives my process — from refining small UI
            details to diving deep into new tools and ideas. I 
            like building things that feel calm, intentional and
              a little unexpected.

          </p>
        
            <button
             className={styles.toggleBtn}
             onClick={() => setViewMore( prev => !prev)}>
              { viewMore ? ( "Show less"): ("Read more") }
          <span>
            { viewMore ? ( <ChevronsDownUp/> ) : ( <ChevronDown/> )}
          </span>
        </button>
      
    
      </div>
    </section>
  );
}

export default About;

