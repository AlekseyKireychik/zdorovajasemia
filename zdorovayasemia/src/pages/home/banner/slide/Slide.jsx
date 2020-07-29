import React from "react";
import {Slide} from "react-slideshow-image";
import SlideItem from "./slideItems/SlideItem";
import storeDate from "date";
import style from "./Slide.module.css";

const proprieties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
};

const Slideshow = (props) => {

    const mySlideElems = storeDate.date.pageHome.banner.slideElems.map(
        (el, index) => <SlideItem text={el} key={index}/>
    );

    return (
        <div className={style.containerSlide}>
            <Slide {...proprieties}>{mySlideElems}</Slide>
        </div>
    );
};

export default Slideshow;
