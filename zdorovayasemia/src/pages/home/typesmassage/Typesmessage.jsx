import React from "react";
import ItemType from "./itemType/ItemType";
import Store from "../../../store";
import style from "./Typesmassage.module.css";
let TypesmassageElems = Store._state.pageHome.typesmassage.items.map((item, index) => (
  <ItemType subtitle={item.title} description={item.text} key={index} />
));
const Typesmassage = props => {
  return (
    <section className={style.typesmassage}>
      <div className={style.container}>
        <h2 className={style.title}>{Store._state.pageHome.typesmassage.title}</h2>
      </div>
      <ul className={style.list}>{TypesmassageElems}</ul>
    </section>
  );
};

export default Typesmassage;
