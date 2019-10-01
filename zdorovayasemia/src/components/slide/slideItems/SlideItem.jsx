import React from "react";
import style from "./SlideItem.module.css";

const SlideItem = (props) => {
  return (
    <div className="each-slide">
      <span>{props.text}</span>
    </div>
  );
};

export default SlideItem;
