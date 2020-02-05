import React from "react";
import { Slide } from "react-slideshow-image";
import SlideItem from "./slideItems/SlideItem";
import Store from "../../../store";
import style from "./Slide.module.css";

const proprieties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
};

const Slideshow = props => {
  let mySlideElems = Store.pageHome.banner.slideElems.map(el => (
    <SlideItem text={el} />
  ));

  return (
    <div className={style.containerSlide}>
      <Slide {...proprieties}>{mySlideElems}</Slide>
    </div>
  );
};

export default Slideshow;
