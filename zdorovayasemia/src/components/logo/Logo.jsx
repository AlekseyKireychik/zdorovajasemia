import React, {Component} from 'react';
import style from  './Logo.module.css';

const Logo = () => {
    
    return (
        <div className={style.logoWrap}>
            <a className={style.logoLink} src="/">
                <img className={style.logoImg} src='..//images/logo.jpg'></img>
            </a>
        </div>        
    );

}
export default Logo;