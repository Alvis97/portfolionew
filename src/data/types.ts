import valborgPhone from "../assets/valborg-phone.png";
import valborgInfo from "../assets/valborg-info.png";
import valborgPhoneSize from "../assets/valborg-phone.jpg";
import valborgPoster from "../assets/valborgPoster.jpg"
import valborgMain from "../assets/valborg-main.jpg";

export type CardCategory = "web2" | "web3" | "graphics";

export type CardSection = {
  heading: string;
  text: string;
  img?: string;
}

export type Cards = {
  index: number;
  category: CardCategory;
  cardImage: string;
  title: string;
  subTitle: string;
  desc: string;
  tool: string;
  role: string;
  mainImage: string;
  sections?: CardSection[]; // alla extra headings & texts här
};


