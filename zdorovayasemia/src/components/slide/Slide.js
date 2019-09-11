import React from 'react'
import { Slide } from 'react-slideshow-image'
import './Slide.css'

const proprieties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprieties}>
                <div className="each-slide">
                    <span>Мы хотим и можем Вам помочь</span>
                </div>
                <div className="each-slide">
                    <span>Более 5 лет работаем для Вас</span>
                </div>
                <div className="each-slide">
                    <span>Высококлассные специалисты</span>
                </div>
                <div className="each-slide">
                    <span>Современные методики</span>
                </div>
                <div className="each-slide">
                    <span>Пн-Пт: 9.00-21.00  Сб: 9.00-15.00</span>
                </div>
            </Slide>
        </div>
    );
}

export default Slideshow;