import React, { useMemo } from 'react'
import { Web3PostItem, web3ModalContent } from '../data/web3ModalContent';
import style from '../styles/graphicCard.module.scss'
import WebCard from './WebCard';
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import '@solana/wallet-adapter-react-ui/styles.css';


type Web3Props = {
  setModalContent: (content: React.ReactNode) => void;
}

function Web3({setModalContent }: Web3Props) {

  const endpoint = clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets}>
    <WalletModalProvider>
  
      <div>
      <div className={style.lockContainer}>
        <h2>Please add your wallet to acces my web3 projects</h2>
        <p>You wont be charged anything</p>
      
      <WalletMultiButton/>
      </div>
      {web3ModalContent.map((item: Web3PostItem, index: number) => (

        <WebCard
        key={index}
        img={item.imgMain}
        title={item.title}
        desc={item.desc}
        onClick={() => setModalContent(
          <>
                <div className={style.moduleContainer}>
                <div className={style.textContainer}>
                <h1>{item.title}</h1>
                <div className={style.roleContainer}>
                <p>{item.role}</p>
                <p>{item.tool}</p>
                </div>
                <p>{item.text1}</p>
                <h2>{item.heading2}</h2>
                <p>{item.text2}</p>
                {item.img2 && <img src={item.img2} alt="" />}
                <h2>{item.heading3}</h2>
                <p>{item.text3}</p>
                {item.img3 && <img src={item.img3} alt="" />}
                <h2>{item.heading4}</h2>
                <p>{item.text4}</p>
                {item.img4 && <img src={item.img4} alt="" />}
                <p>{item.lastWord}</p>
                </div>
                <div className={style.imgContainer}>
                <img className={style.image} src={item.img} alt="" />
                </div>
                </div>
          </>
        )}
        
        />
      ))}
    </div> 

    </WalletModalProvider>
    </WalletProvider>
    </ConnectionProvider>
  )
}

export default Web3

