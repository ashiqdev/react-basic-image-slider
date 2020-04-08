import React, { useState, useEffect } from "react";
import "./styles.css";
import { slides } from "./slides";

import Slide from "./Slide";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverState, setHoverState] = useState(false);

  useEffect(() => {
    if (!hoverState) {
      const job = setInterval(() => {
        setCurrentSlide(current => (current + 1) % slides.length);
      }, 5000);
      return () => {
        clearInterval(job);
      };
    }
  }, [hoverState]);

  const onNext = () => {
    setCurrentSlide(current => (current + 1) % slides.length);
  };

  const onPrev = () => {
    setCurrentSlide(current => (slides.length + current - 1) % slides.length);
  };

  const onMouseHandler = () => {
    console.log("Mouse upore ache");
    setHoverState(true);
  };

  const onMouseOutHandler = () => {
    console.log("Mouse sorano ache");
    setHoverState(false);
  };

  return (
    <div className="App">
      <Slide
        url={slides[currentSlide].url}
        title={slides[currentSlide].title}
        onNext={onNext}
        onPrev={onPrev}
        onMouseHandler={onMouseHandler}
        onMouseOut={onMouseOutHandler}
      />
    </div>
  );
}
