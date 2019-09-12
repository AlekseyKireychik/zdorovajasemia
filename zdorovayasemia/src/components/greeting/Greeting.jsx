import React from 'react'
import style from  './Greeting.module.css'

const Greeting = (props) => {
    return(
        <section className={style.greeting}>
            <h1>Массажно-оздоровительный центр «Здоровая семья»!</h1>
            <p>Мы рады приветствовать Вас</p>
        </section>
    );
}

export default Greeting;