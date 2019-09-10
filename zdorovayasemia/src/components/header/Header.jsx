import React, {Component} from 'react';
import './Header.css';
import Logo from '../logo/Logo';
import Map from '../map/Map';
import Phone from '../phone/Phone';
import Banner from '../banner/Banner';

const Header = () => {
    return (
        <header className="header">
            <nav className="headerNav">
                <div className="headerLogo">
                    <Logo />
                </div>
                <div className="headerRight"> 
                    <div className="headerContacts"> 
                        <Map />   
                        <Phone />
                    </div>            
                    <ul>
                        <li>пункт1</li>
                        <li>пункт1</li>
                        <li>пункт1</li>
                        <li>пункт1</li>
                    </ul>
                </div>  
            </nav>
            <Banner />
        </header>
    );
}

export default Header;