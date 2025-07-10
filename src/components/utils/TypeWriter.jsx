import { useState, useEffect, useCallback } from "react";

const TypeWriter = ({ text, speed = 120, loop = true, delay = 2000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const resetAnimation = useCallback(() => {
    setDisplayText("");
    setIsTyping(true);
    setIsDeleting(false);
  }, []);

  useEffect(() => {
    let timeout;

    if (isTyping && !isDeleting) {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, speed);
      } else {
        setIsTyping(false);
        if (loop) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delay);
        }
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting, text, speed, delay, loop]);

  return (
    <>
      {displayText}
      <span className="cursor"></span>
    </>
  );
};

export default TypeWriter;