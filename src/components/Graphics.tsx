import React, { useState } from 'react'
import { graphicsModalContent, GraphicsPostItem } from '../data/graphicsModalContent';
import GraphicsCard from './GraphicsCard';
import Modal from './Modal';
import style from "../styles/graphicCard.module.scss";

function Graphics() {
    const [selectedCard, setSelectedCard] = useState<null | {
        index: number,
        img: string;
        title: string;
        desc: string;
        role: string;
        tool: string;
        text1: string;
        heading2: string;
        text2: string;
        img2: string;
        heading3: string;
        text3: string;
        img3: string;
        heading4: string;
        text4: string;
        img4: string;
        lastWord: string;
    }>(null);

  return (
    <div className={style.cardContainer}>
        {graphicsModalContent.map((item: GraphicsPostItem, index: number) => (

                <GraphicsCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                onClick={() => setSelectedCard(item)}
                />
        ))}
      <Modal 
      isOpen={selectedCard !==null}
      onClose={() => setSelectedCard(null)}
      img={selectedCard?.img || ''}
      title={selectedCard?.title || ''}
      desc={selectedCard?.desc || ''}
      role={selectedCard?.role || ''}
      tool={selectedCard?.tool || ''}
      text1={selectedCard?.text1 || ''}
      heading2={selectedCard?.heading2 || ''}
      text2={selectedCard?.text2 || ''}
      img2={selectedCard?.img2 || ''}
      heading3={selectedCard?.heading3 || ''}
      text3={selectedCard?.text3 || ''}
      img3={selectedCard?.img3 || ''}
      heading4={selectedCard?.heading4 || ''}
      text4={selectedCard?.text4 || ''}
      img4={selectedCard?.img4 || ''}
      lastWord={selectedCard?.lastWord || ''}
      />
    </div>
  )
}

export default Graphics
