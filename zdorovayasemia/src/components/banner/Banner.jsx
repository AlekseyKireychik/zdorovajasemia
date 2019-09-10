import React, {Component} from 'react';
import './Banner.css';

let Background = "..//images/detsky-massag-bg.jpg";

const Banner = () => {
    return (
        <div className="mainBanner" style={{backgroundImage: `url(${Background})`}}></div>
    );
}

export default Banner; 