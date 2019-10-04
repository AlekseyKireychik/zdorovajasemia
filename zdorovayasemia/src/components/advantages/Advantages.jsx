import React from "react";
import style from "./Advantages.module.css";

const Advantages = props => {
  return (
    <section className={style.advantages}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Почему люди выбирают нас</h2>
          <ul className={style.list}>
            <li className={style.item}>
              <h3 className={style.subtitle}>Авторские методики</h3>Мы
              используем наши знания и уникальные возможности для лечебного
              воздействия на ваш организм.
            </li>
            <li className={style.item}>
              <h3 className={style.subtitle}>Профессионализм</h3>Дипломированные
              специалисты.
            </li>
            <li className={style.item}>
              <h3 className={style.subtitle}>Индивидуальный подход</h3>
              Постепенное , поэтапное лечение, без химии.
            </li>
            <li className={style.item}>
              <h3 className={style.subtitle}>Комфорт</h3>Возможность получать
              услугу в удобное для пациента время.
            </li>
          </ul>
        </div>
        <div className={style.bgimg}></div>
      </div>
    </section>
  );
};

export default Advantages;
