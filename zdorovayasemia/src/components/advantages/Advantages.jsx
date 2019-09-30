import React from 'react'
import style from  './Advantages.module.css'

const Advantages = (props) => {
    return(
        <section className={style.advantages}>
            <h2>Почему люди выбирают нас</h2>
            <ul className={style.list}>
                <li className={style.item}>1 работаем столько то лет</li>
                <li className={style.item}>2 Опытные специалисты</li>
                <li className={style.item}>3 лучшие методики</li>
            </ul>
        </section>
    );
}

export default Advantages;