import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I am Shivnarayan",
    "Hi, I am Shivnarayan",
    "Hi, I am Shivnarayan",
  ];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fullText = texts[index];
      setCurrentText(fullText.substring(0, endValue));

      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }

      if (endValue > fullText.length + 10) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  // Split the string into "Hi" and the rest
  const highlightText = () => {
    if (!currentText.startsWith("Hi")) return currentText;
    const [hi, ...rest] = currentText.split(" ");
    const restText = rest.join(" ");
    return (
      <>
        <span className="text-yellow-400">{hi}</span>
        {currentText.length > hi.length && (
          <span className="text-white"> {restText}</span>
        )}
      </>
    );
  };

  return (
    <div className="transition ease duration-300 text-3xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg font-poppins">
      {highlightText()}
    </div>
  );
};

export default TextChange;
