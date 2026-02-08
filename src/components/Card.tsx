import React, { useState } from 'react'
import { posts, } from "../data/posts";
import { Cards } from '../data/types';
import Modal from './Modal';

//Style
import cardStyle from "../styles/card.module.scss";

type CardProps = {
 category: "web2" | "graphics" | "web3";
}

function Card({category}: CardProps) {

    //track what card gets picked 
    const [selectedCard, setSelectedCard] = useState<Cards | null>(null);

    //grab all projects from category
    const filterCards = posts.filter(post => post.category === category )
  return (
    //Card container
    <div className={cardStyle.cardContainer}>

        { filterCards.map(posts=> (

            <div
            key={posts.index}
            className={cardStyle.card}
            tabIndex={0}
            onClick={()=> setSelectedCard(posts)}
            >

              <div className={cardStyle.visibleContainer}>
              <img src={posts.cardImage} alt={posts.title} />
              <h4>{posts.title}</h4>
              <p>{posts.tool}</p>
              </div>

              <div className={cardStyle.hiddenContainer}>
               <p>{posts.subTitle}</p>
              </div>

            </div>

        ))}

  {/* Modal for full project info */}
      {selectedCard && (
        <Modal post={selectedCard} onClose={() => setSelectedCard(null)} />
      )}

      
    </div>
  )
}

export default Card
