import React from 'react'
import { Cards } from '../data/types';

type modalProps = {
  post: Cards;
  onClose: () => void;
}

function Modal({ post, onClose}: modalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button onClick={onClose}>Close</button>
      <h2>{post.title}</h2>
      <img src={post.mainImage} alt={post.title} />
      <p>{post.desc}</p>

      {post.sections?.map((section, i) => (
        <div key={i}>
          <h3>{section.heading}</h3>
          <p>{section.text}</p>
          {section.img && <img src={section.img} alt={section.heading} />}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Modal

