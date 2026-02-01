import React from 'react'
import { Cards } from '../data/types';

//Style
import modalStyle from '../styles/modal.module.scss';
import { X } from 'lucide-react';

type modalProps = {
  post: Cards;
  onClose: () => void;
}

function Modal({ post, onClose}: modalProps) {
  return (
    <div className={modalStyle.modalBackground} onClick={onClose}>
    <div className={modalStyle.modalContent} onClick={e => e.stopPropagation()}>
      <div className={modalStyle.modalTopBar}>
      <button className={modalStyle.exitBtn} onClick={onClose}><X/></button>
      </div>

     <div className={modalStyle.scrollDiv}>
      <div className={modalStyle.topSection}>
        <div className={modalStyle.textContainer}>
        <h2>{post.title}</h2>
        <h3>{post.subTitle}</h3>
        <p>{post.desc}</p>
        <span>Tools: {post.tool}</span>
        </div>
        <div className={modalStyle.imgContainer}>
        <img src={post.mainImage} alt={post.title} />
        </div>
      </div>
 
    
     

      {post.sections?.map((section, i) => (
        <div className={modalStyle.repeatedSection} key={i}>
          <h3>{section.heading}</h3>
          <p>{section.text}</p>
          {section.img && <img src={section.img} alt={section.heading} />}
        </div>
      ))}
    </div>
     </div>
     
    
  </div>
  )
}

export default Modal

