import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Library from "./library/Library";
import Enquiries from "./enquiries/Enquiries";
import Reviews from "./reviews/Reviews";
import Setings from "./setings/Setings";
import { NavLink } from "react-router-dom";
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
            <li><NavLink to="/admin/pages">Страницы</NavLink></li>
            <li><NavLink to="/admin/library">Библиотека изображений</NavLink></li>
            <li><NavLink to="/admin/enquiries">Сообщения</NavLink></li>
            <li><NavLink to="/admin/reviews">Отзывы</NavLink></li>
            <li><NavLink to="/admin/setings" activeClassName={style.active}>Настройки</NavLink></li>
          </ul>
        </nav>
        <BrowserRouter>
          <article>
            <Route path="/admin/pages" component={Pages} />
            <Route path="/admin/library" component={Library} />
            <Route path="/admin/enquiries" component={Enquiries} />
            <Route path="/admin/reviews" component={Reviews} />
            <Route path="/admin/setings" component={Setings} />
          </article>
        </BrowserRouter>
      </main>
    </Fragment>
  );
};
export default Admin;
