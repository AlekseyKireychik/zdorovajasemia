import React, {Component} from 'react';
import './Phone.css';

const Phone = () => {
    return (
        <div className ='phoneWrap'>
            <ul className ='phoneList'>
                <li className ='phoneItem'><a className ='phoneLink' href="tel:+375298296956">+375 (29) 829 69 56</a></li>
                <li className ='phoneItem'><a className ='phoneLink' href="tel:+375162534895">+375 (16) 253 48 95</a></li>
            </ul>   
        </div>
    );
}

export default Phone;