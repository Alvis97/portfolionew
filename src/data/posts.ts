//Valborg images
import valborgMain from "../assets/valborg-main.jpg";
import valborgIphone from "../assets/valborg-phone.png";
import valborgPoster from "../assets/valborg-info.png";

//FuneralProgram images

//Import post types
import { Cards } from "./types";

export const posts: Cards[] = [
  {
    index: 0,
    category: "graphics",
    title: "Valborg Poster",
    subTitle: "-a Cheerfull poster design for a local spring celebration",
    desc: "Every year in Sweden, we celebrate Valborg with large bonfires to mark the arrival of spring and say goodbye to winter. In 2025, I had the honor of designing the official poster for a local family-friendly Valborg event hosted by nearby churches. This event is aimed at children and families, so I created a simple yet playful visual style that would appeal to both younger and older audiences.",
    tool: "Figma",
    role: "Designer",
    mainImage: valborgIphone,
    cardImage: valborgMain,
    sections: [
      { heading: "Process & Design", text: "I reviewed materials from previous years to maintain continuity, then created a moodboard around spring, fire symbolism, and a child-friendly tone. The layout and illustrations were developed in Figma with a focus on clarity, balance, and a clean information hierarchy. A soft spring palette was paired with warmer fire tones to reflect the Valborg theme. The typography follows previous years’ styles to ensure familiarity for returning visitors, while the illustrated fire character adds warmth and approachability.", img: valborgPoster },
      { heading: "Outcome", text: "The final design was used both as a printed A4 poster and adapted for social media. It reached the intended audience successfully, received positive feedback, and the illustrated fire character became a memorable element for many children. The project strengthened my ability to combine clear communication with approachable, family-friendly visuals across different formats.", img: valborgPoster },
    ],
  },
  {
    index: 0,
    category: "graphics",
    title: "Funeral Programs",
    subTitle: "With a lot of losses over the past year have i got the honor to create the funeral programs",
    desc: "Every year in Sweden, we celebrate Valborg with large bonfires to mark the arrival of spring and say goodbye to winter. In 2025, I had the honor of designing the official poster for a local family-friendly Valborg event hosted by nearby churches. This event is aimed at children and families, so I created a simple yet playful visual style that would appeal to both younger and older audiences.",
    tool: "Figma",
    role: "Designer",
    mainImage: valborgMain,
    cardImage: valborgIphone,
    sections: [
      { heading: "Process & Design", text: "I reviewed materials from previous years to maintain continuity, then created a moodboard around spring, fire symbolism, and a child-friendly tone. The layout and illustrations were developed in Figma with a focus on clarity, balance, and a clean information hierarchy. A soft spring palette was paired with warmer fire tones to reflect the Valborg theme. The typography follows previous years’ styles to ensure familiarity for returning visitors, while the illustrated fire character adds warmth and approachability.", img: valborgPoster },
      { heading: "Outcome", text: "The final design was used both as a printed A4 poster and adapted for social media. It reached the intended audience successfully, received positive feedback, and the illustrated fire character became a memorable element for many children. The project strengthened my ability to combine clear communication with approachable, family-friendly visuals across different formats.", img: valborgPoster },
    ],
  }
]