import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div
      className="scroll-indicator"
      style={{
        width: `${scrollProgress}%`,
        background: `linear-gradient(to right, #0099ff, #00ccff ${scrollProgress}%, transparent ${scrollProgress}%)`,
        boxShadow: "0 0 10px rgba(0, 153, 255, 0.5)",
      }}
    />
  );
}
