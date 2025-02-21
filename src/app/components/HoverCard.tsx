'use client';
import { useState } from 'react';

export default function HoverCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        p-6 rounded-lg transition-all duration-300 cursor-pointer
        ${isHovered 
          ? 'bg-foreground text-background scale-105 shadow-lg' 
          : 'bg-foreground/[.06] text-foreground'
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-semibold mb-2">
        {isHovered ? '🌟 Hover Active!' : '✨ Hover Me!'}
      </h3>
      <p className="text-sm">
        {isHovered 
          ? 'This card is now in its hover state' 
          : 'Move your mouse over this card to see it change'
        }
      </p>
    </div>
  );
}
