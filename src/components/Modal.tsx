import React from 'react'
import modalStyle from '../styles/modal.module.scss';
import { CircleX } from 'lucide-react';
import ReactDOM from 'react-dom';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

    return ReactDOM.createPortal (
    <div className={modalStyle.modalBackground} onClick={onClose}>
    <div className={modalStyle.modalContent} onClick={(e) => e.stopPropagation()}>
    <button className={modalStyle.exitBtn} onClick={onClose}><CircleX/></button>
    {children}
    </div>
    </div>,
    document.body
  )
}

export default Modal
