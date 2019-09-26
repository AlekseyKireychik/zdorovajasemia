import React from 'react'
import style from  './Home.module.css'
import Banner from '../../banner/Banner';
import Greeting from '../../greeting/Greeting'

const Home = (props) => {
    return(
        <div className={style.home}>
            
            <Banner />
            <Greeting 
                title="Массажно-оздоровительный центр «Здоровая семья»!" 
                text="Мы рады приветствовать Вас
                Мы рады приветствовать Вас dfdsf" />

        </div>
    );
}

export default Home;