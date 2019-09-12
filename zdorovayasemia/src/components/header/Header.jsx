import React, {Component} from 'react';
import style from  './Header.module.css';
import Logo from '../logo/Logo';
import Map from '../map/Map';
import Phone from '../phone/Phone';

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
                </div>  
            </nav>            
        </header>
    );
}

export default Header;