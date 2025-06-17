import React, { useEffect, useState } from 'react'
import style from "../styles/project.module.scss"
import Web2 from './Web2';
import Graphics from './Graphics';
import Web3 from './Web3';

function Projects() {
    const [selected, setSelected] = useState("Web2");

    useEffect( () => {
        console.log(`Selected category ${selected}`);

    }, [selected])
  return (
    <section className={style.projectSection}>
        <div className={style.menu}>
         <p>Projects:</p>   
        <button onClick={() => {
  console.log("Web2 button clicked");
  setSelected("Web2");
}}>Web2</button>
            <button onClick={() => setSelected("Graphics")}>Graphics</button>
            <button onClick={() => setSelected("Web3")}>Web3</button>
        </div>
        <div className={style.projectContainer}>
        {selected === "Web2" && <div>Web2 Content</div>}
{selected === "Graphics" && <div>Graphics Content</div>}
{selected === "Web3" && <div>Web3 Content</div>}
        </div>
      
    </section>
  )
}

export default Projects
