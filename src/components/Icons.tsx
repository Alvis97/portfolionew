import React from 'react'

type Props = {
    className?: string;
}

const Menu: React.FC<Props> = ({ className }) => {
  return (
    <svg className={className} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.08526 3.52579C2.08526 3.52579 25.0396 -3.57038 27.0853 6.02579C29.131 15.622 3.07836 3.82322 2.08526 14.0258C1.09216 24.2284 27.9678 6.66499 30.5 18C33.0322 29.335 -0.914817 16.0258 1.08508 27.0259C2.72667 36.0552 25.5855 27.0259 25.5855 27.0259" stroke-width="2" stroke-linecap="round"/>
</svg>
  )
}

export {
   Menu
} 
