import React, { useEffect, useState } from 'react'
import Web2 from './Web2';
import Graphics from './Graphics';
import Web3 from './Web3';
import {graphicsModalContent} from '../data/graphicsModalContent';
import GraphicsCard from './GraphicsCard';
import ButtonBubble from './BubbleBtn';
import Modal from './Modal';

//Style
import style from "../styles/project.module.scss"

function Projects() {
    const [modalContent, setModalContent]=useState<React.ReactNode>(null);
    const [selected, setSelected] = useState("Web2");

    useEffect( () => {
        console.log(`Selected category ${selected}`);

    }, [selected])
  return (
    <section className={style.projectSection}>
      <Modal
      isOpen={modalContent !== null}
      onClose={() => setModalContent(null)}>
        {modalContent}
      </Modal>

        <div className={style.menu}> 
         <ButtonBubble
          isSelected={selected === "Web2"}
          onClick={() => {
            setSelected("Web2");
          }}
        >
          Web2
        </ButtonBubble>

        <ButtonBubble
          isSelected={selected === "Graphics"}
          onClick={() => setSelected("Graphics")}
        >
          Graphics
        </ButtonBubble>

        <ButtonBubble
          isSelected={selected === "Web3"}
          onClick={() => setSelected("Web3")}
        >
          Web3
        </ButtonBubble>
        </div>

        <div className={style.projectContainer}>
          <div className={style.projects}>
            {selected === "Web2" && <Web2 setModalContent={setModalContent}/>}
            {selected === "Graphics" && <Graphics setModalContent={setModalContent}/>}
            {selected === "Web3" && <Web3 setModalContent={setModalContent}/>}
          </div>
        </div>
      
    </section>
  )
}

export default Projects
