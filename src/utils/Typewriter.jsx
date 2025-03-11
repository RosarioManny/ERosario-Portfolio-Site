import { useEffect, useState, useRef } from "react";

const Typewriter = ({ text, className}) => {
  const typewriterRef = useRef(null);
  const [animationStyle, setAnimationStyle] = useState({});

  useEffect(() => {
    if(typewriterRef.current) {
      // Width of text
      const textWidth = typewriterRef.current.scrollWidth; 
      // Characters in text
      const steps = text.length;

      setAnimationStyle ({
        animtion: `typing ${steps * 0.1}s steps(${steps}, end), blink 0.75s step-end infinite`,
        width: `${textWidth}px`,
      });
    }
  }, [text])


  return (
    <h1 
    ref={typewriterRef}
    className={`typewriter ${className}`}
    style={animationStyle}
    >
      {text}
    </h1>
  )
}