import React, { useState } from 'react'
import { posts, } from "../data/posts";
import { Cards } from '../data/types';
import Modal from './Modal';

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
    <div>

        { filterCards.map(posts=> (

            <div
            key={posts.index}
            className='card'
            onClick={()=> setSelectedCard(posts)}
            >
                    <img src={posts.cardImage} alt={posts.title} />
          <h3>{posts.title}</h3>
          <p>{posts.subTitle}</p>

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
