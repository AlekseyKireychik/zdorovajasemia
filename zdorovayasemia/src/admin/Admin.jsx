import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import Pages from "./pages/Pages";
import Library from "./library/Library";
import Enquiries from "./enquiries/Enquiries";
import Reviews from "./reviews/Reviews";
import Setings from "./setings/Setings";
import {NavLink} from "react-router-dom";
import style from "./Admin.module.css";

const Admin = () => {
    return (
        <Fragment>
            <header className={style.header}>
                <h2 className={style.title}>Cистема управления контентом</h2>
                <div className={style.navbarProfile}>
                    <div className={style.navbarProfileIcon}>
                          <span>
                              <svg width="25" height="26" viewBox="0 0 35 36" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="18" r="17" fill="#f2f2f2" stroke="#fff"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M18.4178 7.5C18.48 7.5 18.5422 7.5 18.6044 7.5C18.5733 7.61814 18.5733 7.70675 18.5422 7.82489C18.3867 8.17932 18.5111 8.44515 18.8533 8.59283C19.0089 8.6519 19.1644 8.71097 19.32 8.77004C19.7556 8.88819 20.2222 8.97679 20.6578 9.15401C21.6533 9.50844 22.2756 10.1582 22.3689 11.192C22.4311 11.6646 22.4 12.1371 22.4 12.6097C22.4 13.2595 22.4 13.9093 22.4 14.5591C22.4 14.7363 22.4311 14.884 22.6178 14.9726C22.7422 15.0316 22.8044 15.1793 22.7733 15.2975C22.6489 15.9768 22.4933 16.6561 22.3378 17.3354C22.3067 17.5422 20.5022 20.0823 20.5333 20.23C20.5644 20.6435 20.8133 20.9979 20.8756 21.4114C20.9067 21.5591 21.4667 21.6772 21.6222 21.7363C21.8089 21.8249 21.9333 21.9726 21.9956 22.1498C22.0889 22.3861 22.1511 22.6519 22.2444 22.8882C22.2756 22.9768 22.3689 23.0654 22.4622 23.1245C23.1156 23.4789 23.8 23.8038 24.4533 24.1287C25.5111 24.6603 26.5689 25.192 27.6267 25.7236C27.9067 25.8418 28 26.019 28 26.3143C28 26.846 28 27.4072 28 27.9388C28 28.1751 27.9378 28.3819 27.6889 28.5C23.8933 28.5 20.0978 28.5 16.2711 28.5C13.2844 28.5 10.2978 28.5 7.31111 28.5C7.06222 28.3819 7 28.1751 7 27.9388C7 27.3776 7 26.846 7 26.2848C7 26.019 7.09333 25.8418 7.34222 25.7236C8.12 25.3397 8.89778 24.9557 9.70667 24.5422C10.64 24.0696 11.6044 23.597 12.5378 23.1245C12.6311 23.0949 12.6933 22.9768 12.7556 22.8882C12.8489 22.6519 12.9111 22.3861 13.0356 22.1203C13.0978 21.9726 13.6889 21.8249 13.8444 21.7363C14 21.6181 14.28 21.5295 14.3111 21.3523C14.3422 20.9979 14.5911 20.7321 14.6533 20.3776C14.7156 20.0823 12.9111 18.0148 12.8178 17.6899C12.6933 17.3059 12.5689 16.8924 12.4756 16.5084C12.3822 16.1245 12.32 15.711 12.2578 15.2975C12.2267 15.1498 12.2267 15.0021 12.3822 14.943C12.6 14.8544 12.6311 14.6772 12.6311 14.4705C12.6311 13.4367 12.6311 12.4325 12.6311 11.3987C12.6311 11.1329 12.6933 10.8671 12.7867 10.6013C13.0356 9.92194 13.5333 9.44937 14.2178 9.18354C15.1511 8.77004 16.0844 8.41561 17.0178 8.03165C17.4222 7.85443 17.92 7.67722 18.4178 7.5Z"
                                      fill="white"/>
                              </svg>
                          </span>
                        <span>Profile</span>
                    </div>
                    <ul>
                        <li>My Account</li>
                        <li>Messages</li>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </header>
            <main className={style.adminMain}>
                <nav className={style.nav}>
                    <ul>
                        <li><NavLink to="/admin/pages" activeClassName={style.active}>Страницы</NavLink></li>
                        <li><NavLink to="/admin/library" activeClassName={style.active}>Библиотека изображений</NavLink>
                        </li>
                        <li><NavLink to="/admin/enquiries" activeClassName={style.active}>Сообщения</NavLink></li>
                        <li><NavLink to="/admin/reviews" activeClassName={style.active}>Отзывы</NavLink></li>
                        <li><NavLink to="/admin/setings" activeClassName={style.active}>Настройки</NavLink></li>
                    </ul>
                </nav>
                <article>
                    <Route path="/admin/pages" component={Pages}/>
                    <Route path="/admin/library" component={Library}/>
                    <Route path="/admin/enquiries" component={Enquiries}/>
                    <Route path="/admin/reviews" component={Reviews}/>
                    <Route path="/admin/setings" component={Setings}/>
                </article>
            </main>
        </Fragment>
    );
};
export default Admin;
