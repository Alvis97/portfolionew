// ButtonBubble.jsx
import React, { ReactNode } from "react";
import style from "../styles/bubbleButton.module.scss";

type BubbleButtonProps = {
    children: ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isSelected: boolean;
}

export default function ButtonBubble({ children, onClick, isSelected }: BubbleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${style.buttonBubble} ${isSelected ? style.selected : ''}`}

    >
      {children}
    </button>
  );
}
