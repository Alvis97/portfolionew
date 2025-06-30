import React, { useEffect, useState } from 'react'
import style from "../styles/project.module.scss"
import Web2 from './Web2';
import Graphics from './Graphics';
import Web3 from './Web3';
import {graphicsModalContent} from '../data/graphicsModalContent';
import GraphicsCard from './GraphicsCard';
import ButtonBubble from './BubbleBtn';

function Projects() {
    const [selected, setSelected] = useState("Web2");

    useEffect( () => {
        console.log(`Selected category ${selected}`);

    }, [selected])
  return (
    <section className={style.projectSection}>
        <div className={style.menu}> 
         <ButtonBubble
          isSelected={selected === "Web2"}
          onClick={() => {
            console.log("Web2 button clicked");
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
            <div className={style.projectFolder}>
            {selected === "Web2" && <div>Web2</div>}
            {selected === "Graphics" && <Graphics/>}
            {selected === "Web3" && <div>Web3 Content</div>}

            </div>

        </div>
      
    </section>
  )
}

export default Projects
