import { useEffect, useState } from "react";

import { data } from "./data.ts";
import { Flashcard } from "./Flashcard.tsx";

import { useSwipeable } from "react-swipeable";

export const Flashcards = ({
  selectedLanguages,
}: {
  selectedLanguages?: string[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "90vh",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        {...handlers}
        id="flashcard-container"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        style={{ outline: "none" }}
      >
        <Flashcard
          key={data[activeIndex].imageKey}
          {...data[activeIndex]}
          selectedLanguages={selectedLanguages}
        />
      </div>
    </div>
  );
};

export default Flashcards;
