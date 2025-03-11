import { useEffect, useState, useRef } from "react";

const Typewriter = ({ text, className, delay = 0}) => {
  const typewriterRef = useRef(null);
  const [animationStyle, setAnimationStyle] = useState({});

  useEffect(() => {
    if(typewriterRef.current) {
      // Width of text
      const textWidth = typewriterRef.current.scrollWidth; 
      console.log("TW >>", textWidth)
      // Characters in text
      const steps = text.length;
      setAnimationStyle ({
        animation: `typing ${steps * .3}s, blink 0.75s step-end infinite`,
        maxWidth: `${textWidth}px`,
        animationDelay: `${delay}s`
      });
    }
  }, [text, delay])


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

export default Typewriter