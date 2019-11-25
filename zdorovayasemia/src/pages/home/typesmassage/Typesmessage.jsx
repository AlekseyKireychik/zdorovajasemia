import React from "react";
import ItemType from "./itemType/ItemType";
import style from "./Typesmassage.module.css";

let typesmassage = {};

const Typesmassage = props => {
  return (
    <section className={style.typesmassage}>
      <div className={style.container}>
        <h2 className={style.title}>Виды массажа</h2>
      </div>
      <ul className={style.list}>
        <ItemType
          subtitle="Лечебный массаж"
          description="Его целью является лечение заболеваний. Он может быть рекомендован
            врачом."
          link=""
          valueLink="Подробнее"
        />
        <ItemType
          subtitle="Антицеллюлитный массаж"
          description="Позволяет сохранить и восстановить красоту и молодость."
          link=""
          valueLink="Подробнее"
        />
        <ItemType
          subtitle="Детский массаж"
          description="При дисплазии тазобедренного сустава, врожденном вывихе бедра.
          Сколиоз, кифоз, лордозы. Массаж после травм и переломов. Заболевания
          бронхо-лёгочной системы. Плоскостопие. При кривошее."
          link=""
          valueLink="Подробнее"
        />
      </ul>
    </section>
  );
};

export default Typesmassage;
