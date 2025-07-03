import React from 'react'
import modalStyle from '../styles/modal.module.scss';
import { CircleX } from 'lucide-react';

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
    <div className={modalStyle.modalBackground}>
      
   
    <div className={modalStyle.modal}>
    <button className={modalStyle.exitBtn} onClick={onClose}><CircleX/></button>
        <div className={modalStyle.scrollDiv}>
        <div className={modalStyle.imgContainer}>
        <img src={img} alt={title} style={{ width: '100%' }} />
        </div>
        <div className={modalStyle.textContent}>
        <h1>{title}</h1>
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
        <br />
        <br />
        <br />
        <br />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Modal
