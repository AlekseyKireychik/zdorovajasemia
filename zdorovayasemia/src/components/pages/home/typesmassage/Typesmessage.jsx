import React from "react";
import style from "./Typesmassage.module.css";

const Typesmassage = props => {
  return (
    <section className={style.typesmassage}>
      <div className={style.container}>
        <h2 className={style.title}>Виды массажа</h2>
      </div>
      <ul className={style.list}>
        <li className={style.item}>
          <h3 className={style.subtitle}>Лечебный массаж</h3>
          <p className={style.description}>
            Его целью является лечение заболеваний. Он может быть рекомендован
            врачом.
          </p>
          <a className={style.link} href="#">
            Подробнее
          </a>
        </li>
        <li className={style.item}>
          <h3 className={style.subtitle}>Антицеллюлитный массаж</h3>
          <p className={style.description}>
            Позволяет сохранить и восстановить красоту и молодость.
          </p>
          <a className={style.link} href="#">
            Подробнее
          </a>
        </li>
        <li className={style.item}>
          <h3 className={style.subtitle}>Детский массаж</h3>
          <p className={style.description}>
            При дисплазии тазобедренного сустава, врожденном вывихе бедра.
            Сколиоз, кифоз, лордозы. Массаж после травм и переломов. Заболевания
            бронхо-лёгочной системы. Плоскостопие. При кривошее.
          </p>
          <a className={style.link} href="#">
            Подробнее
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Typesmassage;
