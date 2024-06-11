"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: any;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  // useEffect(() => {
  //   animate(
  //     "span",
  //     {
  //       opacity: 1,
  //     },
  //     {
  //       duration: 0.4,
  //       delay: stagger(0.5),
  //     }
  //   );
  // }, [scope.current]);

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        // Show words one by one from left to right by translating them into view
        await animate(
          "span",
          { x: 0 },
          {
            duration: 0.4,
            delay: stagger(0.5),
          }
        );
        // Hide words one by one from right to left by translating them out of view
        await animate(
          "span",
          { x: -100 }, // Adjust this value based on your layout to move the words out of view
          {
            duration: 0.4,
            delay: stagger(0.5),
          }
        );
      }
    };

    loopAnimation();
  }, [scope, animate]);

  const renderWords = () => {
    return (
      <>
        <motion.div ref={scope}>
          WITH{" "}
          <span className="dark:text-white text-black transform -translate-x-full">
            A
          </span>{" "}
          {words.map((word: any, idx: any) => {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-white text-black transform -translate-x-full"
              >
                {word}
              </motion.span>
            );
          })}
        </motion.div>
      </>
    );
  };

  return <>{renderWords()}</>;
};

