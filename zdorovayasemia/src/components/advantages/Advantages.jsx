import React from "react";
import Store from "../../store";
import AdvantagesItem from "./advantagesItem/AdvantagesItem";
import style from "./Advantages.module.css";
let mySlideElems = Store._state.pageHome.advantages.advantagesItems.map((item, index) => (
  <AdvantagesItem title={item.title} text={item.text} key={index} />
));
const Advantages = props => {
  return (
    <section className={style.advantages}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>{Store._state.pageHome.advantages.title}</h2>
          <ul className={style.list}>{mySlideElems}</ul>
        </div>
        <div className={style.bgimg}></div>
      </div>
    </section>
  );
};

export default Advantages;
