import React from 'react'
import Map from '../map/Map';
import Phone from '../phone/Phone';
import style from './Footer.module.css'

const Footer = (props) => {

    return (
        <footer>
            <div className={style.container}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <Map />
                    </li>
                    <li className={style.item}>
                        <Phone />
                    </li>
                    <li className={style.item}>seti</li>
                </ul>
                <span>Массажно-оздоровительный центр «Здоровая семья»</span>
            </div>
        </footer>
    );
}

export default Footer; 