import stickToIt from '../assets/stickToIt.jpg';
import valborgColor from '../assets/colors.jpg';
import FuneralFront from '../assets/BegravningFram.jpg';
import FuneralInside from '../assets/BegravningInsida.jpg';
import portrait from '../assets/Pappa.jpg';
import motherText from '../assets/text.jpg';

export type WebPostItem = {
    index: number;
    imgMain: string;
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

export const webModalContent: WebPostItem[] = [
    {
        index: 1,  
        imgMain: stickToIt,
        title: "Stick to it",
        desc: "Stick To It is a simple, collaborative space to create digital post-it notes, set tasks, share memos, and stay organized—solo or with your team.",
        role: "Role: Graphic design, illustration, layout, typography",
        tool: "Figma",
        text1: `Stick to It is a productivity app that helps users stay on track with their design goals. Built for designers who want structure but creative freedom.`,
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
];

