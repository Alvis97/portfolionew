import React from 'react'

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
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
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, img, title, desc, role, tool, text1, heading2, text2, img2, heading3, text3, img3, heading4, text4, img4, lastWord }) => {
  if (!isOpen) return null;

    return (
    <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 1000
      }}>
      
   
    <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
        <div>
        <img src={img} alt={title} style={{ width: '100%' }} />
        </div>
        <h2>{title}</h2>
        <h3>{role}</h3>
        <h3>{tool}</h3>
        <p>{text1}</p>
        <h2>{heading2}</h2>
        <p>{text2}</p>
        <img src={img2} alt="" />
        <h2>{heading3}</h2>
        <p>{text3}</p>
        <img src={img3} alt="" />
        <p>{lastWord}</p>
        <button onClick={onClose}>Close</button>
    </div>
    </div>
  )
}

export default Modal
