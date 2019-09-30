import React from 'react'
import Map from '../map/Map';
import Phone from '../phone/Phone';
import './Footer.css'

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <ul>
                    <li>
                        <Map />   
                    </li>
                    <li>                        
                        <Phone />
                    </li>
                    <li>seti</li>
                </ul>
                <span>Массажно-оздоровительный центр «Здоровая семья»</span>
            </div>
        </footer>
    );
}

export default Footer; 