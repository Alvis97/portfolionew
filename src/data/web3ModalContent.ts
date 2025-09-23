import solanaMain from '../assets/solna-main.jpg';
import FuneralFront from '../assets/BegravningFram.jpg';
import FuneralMain from '../assets/funeral-main.jpg'
import FuneralInside from '../assets/BegravningInsida.jpg';
import portrait from '../assets/Pappa.jpg';
import motherText from '../assets/text.jpg';
import songLyrics from '../assets/pappaLåt.jpg';

export type Web3PostItem = {
    index: number;
    imgMain: string;
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
  }
  
  export const web3ModalContent: Web3PostItem[] = [
    {
      index: 1,  
      imgMain: solanaMain,
      img: solanaMain,
      title: "Web 3 Project",
      desc: "A cheerful poster design for a local spring celebration.",
      role: "Role: Graphic design, illustration, layout, typography",
      tool: "Tools: Figma",
      text1: `Every year in Sweden, we celebrate "Valborg" with large bonfires to mark the arrival of spring and say goodbye to winter. In 2025, I had the honor of designing the official poster for a local family-friendly Valborg event hosted by nearby churches. This event is especially aimed at children and families, so I created a simple yet playful visual style that would appeal to both younger and older audiences.`,
      heading2: "Color Palet:",
      text2: "Inspired by spring and fire – warmth, light, and renewal.",
      img2: solanaMain,
      heading3: "Fonts:",
      text3: "Montserrat Alternates - light & regular Montserrat - medium & regular Inter - black",
      img3: "",
      heading4: "",
      text4: "",
      img4: "",
      lastWord: "",
    },
  ];