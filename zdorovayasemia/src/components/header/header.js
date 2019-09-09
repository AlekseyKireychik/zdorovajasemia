import React, {Component} from 'react';
import './header.css';
import Logo from '../logo/logo';
import Map from '../map/map';
import Phone from '../phone/phone';

const Header = () => {
    return (
        <header className="header">
            <div className="headerTop">
                <Map />
                <Logo />      
                <Phone />
            </div>
            <nav>
                <ul>
                    <li>пункт1</li>
                    <li>пункт1</li>
                    <li>пункт1</li>
                    <li>пункт1</li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;