'use client';
import { useState } from "react";

export default function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button
        onClick={toggleVisibility}
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {isVisible && (
        <div className="p-4 bg-foreground/[.06] rounded-lg">
          <p className="text-foreground">This is the toggled content!</p>
        </div>
      )}
    </>
  );
}
