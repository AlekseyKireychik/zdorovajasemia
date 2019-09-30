import React, {Component} from 'react';
import Logo from '../logo/Logo';
import Map from '../map/Map';
import Phone from '../phone/Phone';
import Navigation from '../navigation/Navigation';
import './Header.css';
import { Router } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav className='headerNav'>
                <div className='headerTop'> 
                    <Logo />    
                    <div className='headerContacts'> 
                        <Map />   
                        <Phone />
                    </div> 
                </div>                     
                <Navigation /> 
            </nav>            
        </header>
    );
}

export default Header;