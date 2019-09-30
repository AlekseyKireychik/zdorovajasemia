import React, {Component} from 'react';
import style from './Map.module.css';

const Map = () => {

    return (
        <div className={style.adressWrap}>
            <span className={style.adress}>г.Брест, ул.Орджоникидзе, 39</span>
        </div>        
    );
    
}

export default Map;
