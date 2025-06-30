// ButtonBubble.jsx
import React, { ReactNode } from "react";

type BubbleButtonProps = {
    children: ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isSelected: boolean;
}

export default function ButtonBubble({ children, onClick, isSelected }: BubbleButtonProps) {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  );
}
