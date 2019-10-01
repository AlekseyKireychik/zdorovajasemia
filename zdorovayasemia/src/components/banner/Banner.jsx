import React, { Component } from "react";
import style from "./Banner.module.css";
import Slideshow from "./slide/Slide.jsx";

let Background = "..//images/detsky-massag-bg.jpg";

const Banner = (props) => {
//   let slideElems = [
//     "Мы хотим и можем Вам помочь",
//     "Более 5 лет работаем для Вас",
//     "Высококлассные специалисты",
//     "Современные методики",
//     "Пн-Пт: 9.00-21.00  Сб: 9.00-15.00"
//   ];

  return (
    <div
      className={style.banner}
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className={style.bannerCaption}>
        <div className={style.bannerSlide}>
          <Slideshow />
        </div>
      </div>
    </div>
  );
};

export default Banner;
