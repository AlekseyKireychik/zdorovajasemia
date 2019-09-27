import React, {Component} from 'react';
import Logo from '../logo/Logo';
import Map from '../map/Map';
import Phone from '../phone/Phone';
import Navigation from '../navigation/Navigation';
import style from  './Header.module.css';
import { Router } from 'react-router-dom'

const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.headerNav}>
                <div className={style.headerLogo}>
                    <Logo />
                </div>
                <div className={style.headerRight}> 
                    <div className={style.headerContacts}> 
                        <Map />   
                        <Phone />
                    </div> 
                    <div className={style.headerContacts}>                     
                        <Navigation /> 
                    </div> 
                </div>  
            </nav>            
        </header>
    );
}

export default Header;