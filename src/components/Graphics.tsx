import React, { useState } from 'react'
import { graphicsModalContent, GraphicsPostItem } from '../data/graphicsModalContent';
import GraphicsCard from './GraphicsCard';
import Modal from './Modal';
import style from "../styles/card.module.scss";

type GraphicProps = {
  setModalContent: (content: React.ReactNode) => void;
};

function Graphics({setModalContent }: GraphicProps) {
 
  return (
    <div className={style.cardContainer}>
        {graphicsModalContent.map((item: GraphicsPostItem, index: number) => (

                <GraphicsCard
                key={index}
                img={item.imgMain}
                title={item.title}
                desc={item.desc}
                tool={item.tool}
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
               
               
          
                </>)}
                />
        ))}
  
    </div>
  )
}

export default Graphics
