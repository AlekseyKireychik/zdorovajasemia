import React from "react";
import style from "./Newspost.module.css";

const Newspost = props => {
    return (
        <li className={style.item}>
            <a className={style.link} href={props.link}>
                <img
                    src={props.image}
                    className={style.img}
                    alt={props.description}
                ></img>
                <div className={style.overlay}></div>
                <div className={style.info}>
                    <p className={style.description}>{props.description}</p>
                    <span className={style.source}>{props.source}</span>
                </div>
            </a>
        </li>
    );
};

export default Newspost;
