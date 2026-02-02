import React from 'react';
import styles from '../styles/about.module.scss';
import profileImg from '../assets/profile.jpg'; 
import selfie from '../assets/Selfie.jpg';
import { Download, ArrowRight  } from 'lucide-react';
import { NodeIcon, ReIcon, Sass, Solana, TScript } from './Icons';

function About() {
  return (
    <section className={styles.aboutSection}>

<div className={styles.imageContainer}>
<img className={styles.image} src={selfie} alt="Portrait of Alva" />

</div>

      <div className={styles.textWrapper}>
        <h2>HI! I’M <span>ALVA</span>  </h2>
        <p>
        I’m a front-end developer blending design and technology.
        Based in London, I build modern web applications using React,
        TypeScript, and Next.js, with a focus on creating interactive,
        user-centered experiences. I also explore Web3 development on Solana, 
        integrating wallets like Phantom to craft projects that combine
         creative design with blockchain functionality.
        </p>
        <div className={styles.iconRow}>
           <ReIcon className={styles.Icon}/>
           <TScript className={styles.Icon}/>
           <Solana className={styles.Icon}/>
           <Sass className={styles.Icon}/>
           <NodeIcon className={styles.Icon}/>
        </div>
        <div className={styles.btnDiv}>
        <div className={styles.downloadRing}>
        <button className={styles.downloadBtn}>
          <span>Download CV</span>
          <Download />
        </button>
      </div>
      <div className={styles.downloadRing}>
      <button className={styles.downloadBtn}>
          <span>View Projects</span>
          <ArrowRight />
        </button>
      </div>
  
      </div>
        </div>
    </section>
  );
}

export default About;

