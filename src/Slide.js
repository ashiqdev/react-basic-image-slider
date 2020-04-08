import React from "react";

const Slide = props => {
  return (
    <div className="slide">
      <img
        onMouseOver={props.onMouseHandler}
        onMouseLeave={props.onMouseOut}
        src={props.url}
        alt="Imaging"
      />
      <div className="actions">
        <button onClick={props.onPrev}>Prev</button>
        <span>{props.title}</span>
        <button onClick={props.onNext}>Next</button>
      </div>
    </div>
  );
};

module.exports = Slide;
