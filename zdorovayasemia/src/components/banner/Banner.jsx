import React, {Component} from 'react';
import './Banner.css';
import Slideshow from '../slide/Slide';

let Background = "..//images/detsky-massag-bg.jpg";

const Banner = () => {
    return (
        <div className="banner" style={{backgroundImage: `url(${Background})`}}>
            <div className="bannerCaption">
                <div className="bannerSlide">                
                    <Slideshow />
                </div>
            </div>
        </div>
    );
}

export default Banner; 