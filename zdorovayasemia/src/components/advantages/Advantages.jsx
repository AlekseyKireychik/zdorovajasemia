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
              <h3 className={style.subtitle}>Авторские методики</h3>
              <p>
                Мы предоставляем квалифицированный массаж для детей и взрослых,
                а также другие услуги.
              </p>
            </li>
            <li className={style.item}>
              <h3 className={style.subtitle}>Профессионализм</h3>
              <p>
                Команда центра состоит из высококвалифицированных
                профессионалов, главное правило которых - не навредить и
                работать на результат.
              </p>
            </li>
            <li className={style.item}>
              <h3 className={style.subtitle}>Индивидуальный подход</h3>
              <p>
                К каждому клиенту осуществляется индивидуальный подход. Важные
                момент - это контакт с детьми и родителями, что способствует
                достижению лучшего результата и динамике развития ребенка.
              </p>
            </li>
            <li className={style.item}>
              <h3 className={style.subtitle}>Комфорт</h3>
              <p>
                Всегда идем на встречу нашим клиентам и подбираем удобное для
                них время.
              </p>
            </li>
          </ul>
        </div>
        <div className={style.bgimg}></div>
      </div>
    </section>
  );
};

export default Advantages;
