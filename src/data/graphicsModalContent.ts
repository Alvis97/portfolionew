import valborgImg from '../assets/valborg.jpg';
import valborgColor from '../assets/colors.jpg';
import FuneralFront from '../assets/BegravningFram.jpg';
import FuneralInside from '../assets/BegravningInsida.jpg';
import portrait from '../assets/Pappa.jpg';
import motherText from '../assets/text.jpg';
import songLyrics from '../assets/pappaLåt.jpg';

export type GraphicsPostItem = {
    index: number;
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
  
  export const graphicsModalContent: GraphicsPostItem[] = [
    {
      index: 1,  
      img: valborgImg,
      title: "Valborg Poster",
      desc: "A cheerful poster design for a local spring celebration.",
      role: "Role: Graphic design, illustration, layout, typography",
      tool: "Tools: Figma",
      text1: `Every year in Sweden, we celebrate "Valborg" with large bonfires to mark the arrival of spring and say goodbye to winter. In 2025, I had the honor of designing the official poster for a local family-friendly Valborg event hosted by nearby churches. This event is especially aimed at children and families, so I created a simple yet playful visual style that would appeal to both younger and older audiences.`,
      heading2: "Color Palet:",
      text2: "Inspired by spring and fire – warmth, light, and renewal.",
      img2: valborgColor,
      heading3: "Fonts:",
      text3: "Montserrat Alternates - light & regular Montserrat - medium & regular Inter - black",
      img3: "",
      heading4: "",
      text4: "",
      img4: "",
      lastWord: "",
    },
    {
      index: 2,  
      img: FuneralFront,
      title: "Funeral Program",
      desc: "A personal farewell: designed a non-traditional funeral program to honor my dad.",
      role: "Role: Graphic Design, Illustration, Typography, Layout",
      tool: "Tools: Figma",
      text1: `This is a very personal project: the funeral program I designed for my dad, who passed away suddenly at the age of 56. It’s not a traditional funeral program, but the goal was to make it as personal and meaningful as possible. My dad worked at a printing house for over 30 years and was incredibly talented in his craft. Would he have designed it this way? Probably not. But those who received it appreciated its personal touches deeply.`,
      heading2: "The portrait:",
      text2: `Instead of a photo, I chose to draw him. I’ve always drawn people, and he was my biggest critic—so when I sketched this portrait and captured his essence, it felt right.`,
      img2: portrait,
      heading3: "The cursive text:",
      text3: `The handwritten note is from my mom, reading: "You left us – we never leave you. Thanks for everything." These were also his last wish: that he didn’t want to be left alone. And he never was.`,
      img3: motherText,
      heading4: "Personal note & lyric:",
      text4: `My dad wrote music privately throughout his life. These are some of his final lyrics, written during cancer treatment: "The journey has begun, it’s not a straight line, it’s a war of life and death, and my body is aching. I see you at home." We also included personal stories explaining the songs we performed, allowing the guests to follow along with his life story.`,
      img4: FuneralInside,
      lastWord: `I designed this not just as a visual piece, but as a reflection of who he was—and the impact he had on us.`,
    },
  ];