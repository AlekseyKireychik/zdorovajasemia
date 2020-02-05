import React from "react";
import Store from "../../store";
import AdvantagesItem from "./advantagesItem/AdvantagesItem";
import style from "./Advantages.module.css";
let mySlideElems = Store.pageHome.advantages.advantagesItems.map(item => (
  <AdvantagesItem title={item.title} text={item.text} />
));
const Advantages = props => {
  return (
    <section className={style.advantages}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>{Store.pageHome.advantages.title}</h2>
          <ul className={style.list}>{mySlideElems}</ul>
        </div>
        <div className={style.bgimg}></div>
      </div>
    </section>
  );
};

export default Advantages;
