import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import { CardCategory, Cards } from "../data/types"
import Card from "../components/Card";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


//Style
import style from "../styles/project.module.scss"
//import style from "../styles/bubbleButton.module.scss";

function Projects() {
  //UseState för att tracka vilket knapp/Pjorekt typ som har valts för att visa
  const [selectedCategory, setSelectedCategory] = useState<"web2" | "graphics" | "web3">("web2");

  const { connected } = useWallet();

  return (
    <section className={style.projectSection}>

        <div className={style.menu}> 

          <div className={style.downloadRing}>
            <button
              onClick={() => setSelectedCategory("web2")}    
             >
              <span>Web Apps </span>
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
                Blockchain/ Solana
              </span>
            </button>
          </div>

        </div>

        <div className={style.projectContainer}>
          <div className={style.projects}>
            <Card category={selectedCategory}/>
            { selectedCategory === "web3" && !connected && (
        
             <div className={style.web3Wrapper}>
                <div className={style.lockContainer}>
                <h2>Connect a Solana wallet to access my Web3 projects</h2>
                <p>(This is free - no charges will be made.)</p>
                <WalletMultiButton/>
                  <div className={style.noWallet}>
                    <p>
                    Don't have a wallet? <br />
                      You can preview my projects 
                      <span>
                      <button>here</button>
                      </span>
                    </p>

                  </div>
              </div>

             </div>
            
     
            )}
          </div>
        </div>
        
      
    </section>
  )
}

export default Projects
