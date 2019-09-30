import React from 'react';
import style from  './Home.module.css';
import Banner from '../../banner/Banner';
import Greeting from '../../greeting/Greeting';
import Advantages from '../../advantages/Advantages';


const Home = (props) => {
    return(
        <main className={style.home}>            
            <Banner />
            <Greeting 
                title="Массажно-оздоровительный центр «Здоровая семья»!" 
                text="Мы рады приветствовать Вас.
                Специалисты центра «Здоровая Семья» владеют современными методиками реабилитации детей первого года жизни и старше (терапия Войта, Бобат, кинезиотейпирование, мягкие мануальные техники и т. д.),
                 совершенствуют своё мастерство, посещают курсы и семинары по Беларуси, России, Польше . Записавшись на детский массаж, Вы получите ценные советы как заниматься с ребёнком на поверхности и на мяче дома" />
            <Advantages />
            

            <p>секция - Наши услуги и направления - подробнее</p>
            

            <p>наши специолисты - увидеть всех</p>
           
            <p>события- увидеть все</p>
        </main>
    );
}

export default Home;