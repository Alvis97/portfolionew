import React from 'react';
import styles from '../styles/about.module.scss';
import profileImg from '../assets/profile.jpg'; 
import selfie from '../assets/Selfie.jpg';
import { NodeIcon, ReIcon, Sass, Solana, TScript } from './Icons';

function About() {
  return (
    <section className={styles.aboutSection}>

      <img className={styles.image} src={selfie} alt="Portrait of Alva" />

      <div className={styles.textWrapper}>
        <h2>Hi! I’m Alva </h2>
        <p>
            I’m a front-end developer blending art and tech. 
            Based in London with a background in design,
            I build modern web apps using React, 
            TypeScript & Next.js — and love exploring what the web can be, 
            from Web2 layouts to Web3 experiments.
        </p>
        <div className={styles.iconRow}>
           <ReIcon className={styles.Icon}/>
           <TScript className={styles.Icon}/>
           <Solana className={styles.Icon}/>
           <Sass className={styles.Icon}/>
           <NodeIcon className={styles.Icon}/>
        </div>

        <div className={styles.btnDiv}>
          <button className={styles.projectBtn}>DownloadCV</button>
          <button className={styles.projectBtn}>Check out my projects</button>
        </div>
      </div>
    </section>
  );
}

export default About;

