import React from 'react';
import styles from '../styles/graphicCard.module.scss'; 

type GraphicsCardProps = {
    img: string;
    title: string;
    desc: string;
    onClick: () => void;
}

function GraphicsCard({img, title, desc, onClick }: GraphicsCardProps) {

  return (
    <div className={styles.card} onClick={onClick} style={{ cursor: 'pointer' }}>
        <div className={styles.visibleContainer}>
        <img className={styles.image} src={img} alt={title} />
        <h4>{title}</h4>
        </div>
        <div className={styles.hiddenContainer}>
        <p>{desc}</p>
        </div>
    </div>
  )
}

export default GraphicsCard
