import React from "react";
import ItemType from "./itemType/ItemType";
import storeDate from "../../../date";
import style from "./TypesMassage.module.css";
let massageInfoElems = storeDate.date.pageHome.massageInfo.items.map(
  (item, index) => (
    <ItemType subtitle={item.title} description={item.text} key={index} />
  )
);
const TypesMassage = (props) => {
  return (
    <section className={style.typesMassage}>
      <div className={style.container}>
        <h2 className={style.title}>
          {storeDate.date.pageHome.massageInfo.title}
        </h2>
      </div>
      <ul className={style.list}>{massageInfoElems}</ul>
    </section>
  );
};

export default TypesMassage;
