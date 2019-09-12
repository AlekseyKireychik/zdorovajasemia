import React, {Component} from 'react';
import style from './Main.module.css';
import Banner from '../banner/Banner';
import Greeting from '../greeting/Greeting'

const Main = () => {
    return (
        <div className="">
            <Banner />
            <Greeting />
        </div>
    );
}

export default Main;