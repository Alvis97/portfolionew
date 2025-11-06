import React from 'react';
import styles from '../styles/card.module.scss';

type WebCardProps = {
   img: string;
   title: string;
   desc: string;
   tool: string;
   onClick: () => void; 
}

function WebCard({ img, title, desc, tool, onClick }: WebCardProps) {
  return (
    <div className={styles.card} onClick={onClick} style={{ cursor: 'pointer' }}>
     <div className={styles.visibleContainer}>
     <img className={styles.image} src={img} alt={title} />
    <h4>{title}</h4>
    <p>{tool}</p>
     </div>
     <div className={styles.hiddenContainer}>
     <p>{desc}</p>
     </div>
    
</div>
  )
}

export default WebCard
