"use client";
import React, { useState, useEffect } from "react";

const DreamAnimation: React.FC = () => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const textArray = ["", "", "A", "D", "R", "E", "A", "M"];

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const addLetters = () => {
      let index = 0;
      intervalId = setInterval(() => {
        if (index < textArray.length) {
          setDisplayText((prev) => [...prev, textArray[index]]);
          index++;
        } else {
          clearInterval(intervalId);
          timeoutId = setTimeout(removeLetters, 300); // Thời gian chờ trước khi xóa
        }
      }, 100);
    };

    const removeLetters = () => {
      let index = textArray.length;
      intervalId = setInterval(() => {
        if (index > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          index--;
        } else {
          clearInterval(intervalId);
          timeoutId = setTimeout(addLetters, 300); // Thời gian chờ trước khi thêm lại
        }
      }, 100);
    };

    addLetters();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {displayText.map((char, index) => {
        return (
          <span key={index} className={` ${index === 1 && "mr-10"}`}>
            {char}
          </span>
        );
      })}
    </>
  );
};

export default DreamAnimation;

