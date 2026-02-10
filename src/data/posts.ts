//Valborg images
import valborgMain from "../assets/valborg-main.jpg";
import valborgIphone from "../assets/valborg-phone.png";
import valborgPoster from "../assets/valborg-info.png";

import funeralMain from "../assets/funeral-main.jpg";
import funeralIphone from "../assets/Program front.png";
import funeralPrograms from "../assets/Programs.png";
import funeralProgram1 from "../assets/Program1.png";
import funeralProgram2 from "../assets/Program2.png";
import funeralProgram3 from "../assets/Program3.png";
import funeralProgram4 from "../assets/Program4.png";

import stickToItMain from "../assets/stickToIt.jpg";

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
    subTitle: "With a lot of losses over the past year have i got the honor to create some the funeral programs",
    desc: "Over the past year, I had the honor of designing several funeral programs following unfortunate losses. All names, images, dates, and locations shown here have been altered or anonymized to protect the privacy of the individuals and their families.",
    tool: "Figma",
    role: "Designer",
    mainImage: funeralIphone,
    cardImage: funeralMain,
    sections: [
      { heading: "Process & Design", text: "In this project, it was very important to listen closely to the clients’ wishes and translate them into thoughtful designs. The programs share a similar structure but include small personalized details for each individual. The goal was not to create something radically unique, but to present each program in a clean, respectful, and carefully considered way.", img: funeralPrograms },
      { heading: "Project One", text: "The first project was my most time-consuming, as it was my first funeral program and the one where I had the most creative freedom. The client wanted a deeply personal and respectful program with subtle creative touches. I illustrated a portrait, recreated the wife’s handwriting as a font, included handwritten song lyrics in the background, and drew a small coffee cup as a personal element. They also provided explanations for the song choices, which allowed me to create a design that felt intimate and warm, while remaining tasteful and respectful.", img: funeralProgram1 },
      { heading: "Project Two", text: "This project had the most constraints, as the client requested a very traditional design. The only personal element was the blueberries, which subtly added a meaningful touch while maintaining a classic and respectful layout.", img: funeralProgram2 },
      { heading: "Project Three", text: "For this project, I was able to meet with the clients face-to-face to fully understand their vision. They requested a blurred image, some subtle planks and a saw in the frame, and handwritten fonts. My goal was to incorporate these elements thoughtfully while keeping the design respectful and visually balanced.", img: funeralProgram3 },
      { heading: "Project Four", text: "This client reviewed my previous programs and shared what she liked and disliked. Since this program had more content, I designed it as a three-fold layout to improve readability and reduce clutter. The biggest task was making all the elements melt together visually and refining the boat icon. The client wanted to use the same icon as printed in the newspaper, but it didn’t scale well to larger sizes. I redrew the icon, smoothing the lines and moving the birds to the right to better blend with the frame, while keeping the original design recognizable. The icon was also used in a very light color inside the program to fill whitespace and balance the layout. Clear client feedback allowed me to implement these adjustments efficiently and create a clean, polished, and visually cohesive design.", img: funeralProgram4 },
    ],
  },
  {
    index: 0,
    category: "web2",
    title: "Stick to it",
    subTitle: "-a Freemium, Productivity and Collaborative Web App",
    desc: "Stick to It is a freemium productivity and collaborative all-in-one workspace where you can organise, manage and track to-dos and notes. By inviting other users to your workspace, you can write, plan and share ideas simultaneously.",
    tool: "Figma",
    role: "",
    mainImage: stickToItMain,
    cardImage: stickToItMain,
    sections: [
      { heading: "Roles:", text: "Since this was my first project using React, Next.js, and Node.js, the development process naturally included a strong learning component for me. As a result, our roles overlapped at times, as we collaborated closely on various parts of the application to ensure I could gain hands-on experience without becoming overwhelmed. While my primary responsibility was the frontend—building reusable components, implementing UI designs, and handling styling—I also contributed to smaller backend tasks, such as integrating basic API functionality and pushing data to the database. With the skills and experience I have now, the division of responsibilities would be more defined. However, for this project, the overlapping roles were intentional and beneficial, enabling me to build a solid understanding of the full development process while still maintaining clear ownership of the frontend implementation.", img: valborgPoster },
      { heading: "Tech Stack:", text: "", img: valborgPoster },
      { heading: "Goals:", text: "The primary goal of Stick To It is to provide users with an intuitive, unified workspace where they can organize, manage, and track their tasks and notes efficiently. We aim to reduce reliance on paper-based workflows, support better organization, and enable seamless collaboration for both individuals and teams. By offering customizable features, real-time syncing, and cross-device accessibility, the project strives to enhance productivity, promote transparency, and help users maintain a clear overview of their responsibilities. Ultimately, our goal is to build a tool that simplifies everyday workflows and empowers users to stay focused, connected, and in control of their work.", img: valborgPoster },
      { heading: "Design Process:", text: "The design phase of Stick To It is well underway, with significant progress made toward establishing a cohesive and intuitive user experience. The overall visual identity has been defined, including the colour palette, typography, and layout principles that will guide the final interface. Wireframes for key pages—such as authentication, workspace dashboards, boards, and note views—have been created to outline the structure of the app and ensure a smooth, user-friendly flow. Interactive prototypes are currently being developed to test navigation, responsiveness, and usability across different devices. Early design iterations have focused on clarity, simplicity, and maintaining a calm, pastel-inspired environment that supports focus and productivity. Components such as sticky notes, draggable elements, workspace menus, and role-based features are being refined to ensure they remain functional, visually consistent, and easy to use.", img: valborgPoster },
      { heading: "Design Improvements:", text: "Make your reflection more concrete and actionable Show that you’re thinking critically about the project’s future Provide clear takeaways for viewers/readers", img: valborgPoster },
      { heading: "Reflection:", text: "This project was my first experience working with frameworks such as React, Next.js, and Node.js, which meant that a significant part of the process involved learning new tools, workflows, and development practices. Because of this, many tasks were approached collaboratively rather than strictly divided. Although a clearer separation of responsibilities would have been more efficient, the overlap made sense in this context and allowed me to develop confidence across both frontend and backend areas without becoming overwhelmed. From a design perspective, I believe the concept has strong potential, but there are several areas where the visual structure and user experience could be further refined. With more time and experience, I would revisit certain design decisions to strengthen consistency, hierarchy, and usability. Overall, this was a highly valuable and challenging first project. I learned a great deal—not only about coding and design, but also about planning, collaboration, and navigating unfamiliar technologies. The experience has given me a solid foundation, and with the skills I have now, future projects would benefit from a more defined division of work and a more mature design workflow.", img: valborgPoster },
    ],
  }
]