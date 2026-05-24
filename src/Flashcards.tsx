import { useEffect, useState } from "react";

import { romanization, tamilWords, images } from "./data.ts";
import Flashcard from "./Flashcard.tsx";

import { useSwipeable } from "react-swipeable";

export const Flashcards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === tamilWords.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? tamilWords.length - 1 : prevIndex - 1,
    );
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Left") {
        prev();
      } else if (eventData.dir === "Right") {
        next();
      }
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event);
    if (event.key === "ArrowLeft") {
      prev();
    } else if (event.key === "ArrowRight") {
      next();
    }
  };

  useEffect(() => {
    document.getElementById("flashcard-container")?.focus();
  }, []);

  return (
    <div
      {...handlers}
      id="flashcard-container"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      style={{
        outline: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        overflow: "none",
        position: "relative",
      }}
    >
      <div
        id="left-touch-area"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "50%",
        }}
        onClick={prev}
      />
      <div
        id="right-touch-area"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "50%",
        }}
        onClick={next}
      />
      <Flashcard
        word={tamilWords[activeIndex]}
        romanizedWord={romanization[activeIndex]}
        image={images[activeIndex]}
      />
    </div>
  );
};

export default Flashcards;
