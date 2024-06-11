"use client";
import React, { useState, useEffect } from "react";

const DreamAnimation: React.FC = () => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const phrases = [
    "  A DREAM",
    " AN IMAGINATION",
    " A PLAN",
    " A MISTAKE",
    " AN IDEA",
    " A NETWORK",
  ];

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const addLetters = () => {
      let index = 0;
      intervalId = setInterval(() => {
        if (index < phrases[phraseIndex].length) {
          setDisplayText((prev) => [...prev, phrases[phraseIndex][index]]);
          index++;
        } else {
          clearInterval(intervalId);
          timeoutId = setTimeout(removeLetters, 300); // Thời gian chờ trước khi xóa
        }
      }, 100);
    };

    const removeLetters = () => {
      let index = phrases[phraseIndex].length;
      intervalId = setInterval(() => {
        if (index > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          index--;
        } else {
          clearInterval(intervalId);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          timeoutId = setTimeout(addLetters, 300); // Thời gian chờ trước khi thêm lại
        }
      }, 100);
    };

    addLetters();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [phraseIndex]);

  return (
    <>
      {displayText.map((char, index) => {
        return <span key={index}>{char}</span>;
      })}
    </>
  );
};

export default DreamAnimation;

