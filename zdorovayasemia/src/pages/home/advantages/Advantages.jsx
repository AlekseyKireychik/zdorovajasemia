import React from "react";
import AdvantagesItem from "./advantagesItem/AdvantagesItem";
import style from "./Advantages.module.css";
import storeDate from "date";

const mySlideElems = storeDate.date.pageHome.advantages.advantagesItems.map(
    (item, index) => (
        <AdvantagesItem title={item.title} text={item.text} key={index}/>
    )
);
const Advantages = (props) => {
    return (
        <section className={style.advantages}>
            <div className={style.container}>
                <div className={style.content}>
                    <h2 className={style.title}>
                        {storeDate.date.pageHome.advantages.title}
                    </h2>
                    <ul className={style.list}>{mySlideElems}</ul>
                </div>
                <div className={style.bgimg}></div>
            </div>
        </section>
    );
};

export default Advantages;
