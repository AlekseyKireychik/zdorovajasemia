import React, { Fragment } from "react";
import style from "./Admin.module.css";

const Admin = () => {
  return (
    <Fragment>
      <header className={style.header}> 
        <h2 className={style.title}>Cистема управления контентом</h2>
        <div className="">Выйти</div>
      </header>
      <main className={style.adminMain}>
        <nav className={style.nav}>
          <ul>
            <li>Страницы</li>
            <li>Библиотека изображений</li>
            <li>Сообщения</li>
            <li>Отзывы</li>
            <li>Редиректы</li>
            <li>Настройки</li>
          </ul>
        </nav>
        <article>Admin</article>
      </main>
    </Fragment>
  );
};
export default Admin;
