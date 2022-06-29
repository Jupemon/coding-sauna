import React, { useEffect, useState } from "react";

import styles from "./Carousel.module.css";
import LeftArrow from "../assests/LeftArrow.png";
import RightArrow from "../assests/RightArrow.png";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        className={styles.arrows}
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <img src={LeftArrow} alt="Left Arrow" />
      </button>

      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "50%" });
        })}
      </div>

      <button
        className={styles.arrows}
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <img src={RightArrow} alt="Right Arrow" />
      </button>
    </div>
  );
};

export default Carousel;
