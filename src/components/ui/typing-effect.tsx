import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  delay?: number;
  className?: string;
}

export function TypingEffect({
  text,
  typingSpeed = 50,
  delay = 0,
  className = "",
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDelaying, setIsDelaying] = useState(true);

  useEffect(() => {
    if (isDelaying) {
      const delayTimer = setTimeout(() => {
        setIsDelaying(false);
      }, delay);

      return () => clearTimeout(delayTimer);
    }

    if (currentIndex < text.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimer);
    }
  }, [currentIndex, delay, isDelaying, text, typingSpeed]);

  return <span className={className}>{displayText}</span>;
}
