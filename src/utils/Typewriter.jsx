import { useEffect, useState, useRef } from "react";

const Typewriter = ({ text, className, isMobile, delay = 0}) => {
  const typewriterRef = useRef(null);
  const [animationStyle, setAnimationStyle] = useState({});

  useEffect(() => {
    if(typewriterRef.current) {
      // Width of text
      const textWidth = typewriterRef.current.scrollWidth + 200; 
      // Characters in text
      let steps = text.length;
      if (steps <= 10) {
        steps = 1
      } else {
        steps = steps * 0.2
      }
      console.log("TW >>", steps)
      setAnimationStyle ({
        animation: `typing ${steps}s, blink 0.75s step-end`,
        maxWidth: `${textWidth}px`,
        animationDelay: `${delay}s`
      });
    }
  }, [text, delay])


  return (
    <h1 
    ref={typewriterRef}
    className={`typewriter ${className} ${isMobile}`}
    style={{animationStyle }}
    >
      {text}
    </h1>
  )
}

export default Typewriter