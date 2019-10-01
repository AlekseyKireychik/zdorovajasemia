import React from "react";
import { Slide } from "react-slideshow-image";
import SlideItem from "./slideItems/SlideItem";
import style from "./Slide.module.css";

const proprieties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
};

const Slideshow = props => {
  let slideContent = [
    "Мы хотим и можем Вам помочь",
    "Более 5 лет работаем для Вас",
    "Высококлассные специалисты",
    "Современные методики",
    "Пн-Пт: 9.00-21.00  Сб: 9.00-15.00"
  ];
//   let slideElem = slideContent.map((item) =>{
//     <SlideItem text={item} />
//   });
  return (
    <div className={style.containerSlide}>
      <Slide {...proprieties}>
        <SlideItem text="Мы хотим и можем Вам помочь" />
        <SlideItem text="Мы хотим и можем Вам помочь" />
      </Slide>
    </div>
  );
};

export default Slideshow;
