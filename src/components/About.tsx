import React from 'react';
import styles from '../styles/about.module.scss';
import profileImg from '../assets/profile.jpg'; 
import { NodeIcon, ReIcon, Sass, Solana, TScript } from './Icons';

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={profileImg} alt="Portrait of Alva" />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.circleBackground}></div>
        <div className={styles.textContent}>
        <h2>Hi! I’m Alva</h2>
        <p>
          I'm a 27-year-old who moved to London to learn how to code. I've always been
          interested in logic and art, and wanted to explore the digital world. That
          curiosity led me into Web3 – I’m fascinated by the technical side of how it
          all works.
        </p>
        <p>
          Right now I'm mainly working with React and TypeScript, but I’ve also used
          JavaScript, SCSS, PHP, SQL, Node, and Next.js.
        </p>
        <div className={styles.iconRow}>
           <ReIcon className={styles.Icon}/>
           <TScript className={styles.Icon}/>
           <Solana className={styles.Icon}/>
           <Sass className={styles.Icon}/>
           <NodeIcon className={styles.Icon}/>
        </div>

        <button className={styles.projectBtn}>Check out my projects</button>

        </div>

      </div>
    </section>
  );
}

export default About;

