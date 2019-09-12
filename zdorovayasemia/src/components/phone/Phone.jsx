import React, {Component} from 'react';
import style from  './Phone.module.css';

const Phone = () => {
    return (
        <div className ={style.phoneWrap}>
            <ul className ={style.phoneList}>
                <li className ={style.phoneItem}><a className ={style.phoneLink} href="tel:+375298296956">+375 (29) 829 69 56</a></li>
                <li className ={style.phoneItem}><a className ={style.phoneLink} href="tel:+375162534895">+375 (16) 253 48 95</a></li>
            </ul>   
        </div>
    );
}

export default Phone;