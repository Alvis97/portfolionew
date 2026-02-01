import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import { CardCategory, Cards } from "../data/types"
import Card from "../components/Card";

//Style
import style from "../styles/project.module.scss"
//import style from "../styles/bubbleButton.module.scss";

function Projects() {
  //UseState för att tracka vilket knapp/Pjorekt typ som har valts för att visa
  const [selectedCategory, setSelectedCategory] = useState<"web2" | "graphics" | "web3">("web2");


  return (
    <section className={style.projectSection}>

        <div className={style.menu}> 

          <div className={style.downloadRing}>
            <button
              onClick={() => setSelectedCategory("web2")}    
             >
              <span> Web2</span>
            </button>
          </div>

          <div className={style.downloadRing}>
            <button
              onClick={() => setSelectedCategory("graphics")}        
              >
                <span>
                Graphics
                </span>
         
            </button>
          </div>

          <div className={style.downloadRing}>
            <button
              onClick={() => setSelectedCategory("web3")}        
              >
              <span>
                Web3
              </span>
            </button>
          </div>

        </div>

        <div className={style.projectContainer}>
          <div className={style.projects}>
            <Card category={selectedCategory}/>
          </div>
        </div>
        
      
    </section>
  )
}

export default Projects
