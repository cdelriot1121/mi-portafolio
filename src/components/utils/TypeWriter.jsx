import { useState, useEffect } from "react";

const TypeWriter = ({ text, speed = 150 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, text, speed]);

  return (
    <>
      {displayText}
      <span className="cursor"></span>
    </>
  );
};

export default TypeWriter;