import React from "react";
import {NavLink} from "react-router-dom";
import Newspost from "./newspost/Newspost";
import style from "./News.module.css";

const News = props => {
    return (
        <section className={style.news}>
            <div className="container">
                <div className="row">
                    <h2 className={style.title}>Наши новости</h2>
                </div>
                <div className="row">
                    <ul className={style.list}>
                        <Newspost
                            link="/"
                            image="../../images/massaz_osteopat.jpg"
                            description="новость  текст текст текст текст текст текст текст 01"
                            source="19.06.2019"
                        />
                        <Newspost
                            link="/"
                            image="../../images/massaz_osteopat.jpg"
                            description="новость  текст текст текст текст текст текст текст 01"
                            source="19.06.2019"
                        />
                        <Newspost
                            link="/"
                            image="../../images/massaz_osteopat.jpg"
                            description="новость  текст текст текст текст текст текст текст 01"
                            source="19.06.2019"
                        />
                        <Newspost
                            link="/"
                            image="../../images/massaz_osteopat.jpg"
                            description="новость текст текст текст 02"
                            source="19.06.2019"

                        />
                        <Newspost
                            link="/"
                            image="../../images/massaz_osteopat.jpg"
                            description="Rновость текст03"
                            source="19.06.2019"
                        />
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className={style.wrapBtn}>
                        <NavLink className="btn" to="blog">
                            Посмотреть все
                        </NavLink>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default News;
