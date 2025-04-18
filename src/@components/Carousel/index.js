import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

import styles from "./index.module.css";

const Carousel = ({ images, autoPlay = false, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (autoPlay) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(nextSlide, autoPlayInterval);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, autoPlay]);

  return (
    <div className={styles.Carousel}>
      <div className={styles.Carousel_background} />
      <div className={styles.Carousel_imageWrapper}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={styles.Carousel_image}
        />
      </div>
      <div className={styles.Carousel_controls}>
        <button
          className={clsx(styles.Carousel_button, styles.prev)}
          onClick={prevSlide}
        >
          ‹
        </button>
        <button
          className={clsx(styles.Carousel_button, styles.next)}
          onClick={nextSlide}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel;
