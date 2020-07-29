import React from "react";
import style from "./ServicesItemContent.module.css";
import PropTypes from "prop-types";

const ServicesItemContent = props => {

    const {data_id, title, description, subTitle, list, text, subTitleTwo, listTwo, textTwo} = props;

    return (
        <section className={style.servicesItem} id={data_id} data-attr={data_id}>
            {title !== "" ? <h2 className={style.title}>{title}</h2> : ""}

            {description !== "" ? <p>{description}</p> : ""}

            {subTitle !== "" ? (
                <h3 className={style.subTitle}>{subTitle}</h3>
            ) : (
                ""
            )}

            {list !== "" ? (
                <ul className={style.list}>
                    {list.map((elem, index) => {
                        return <li key={index}>{elem}</li>;
                    })}
                </ul>
            ) : (
                ""
            )}

            {text !== "" ? <p>{text}</p> : ""}

            {subTitleTwo !== "" ? (
                <h3 className={style.subTitle}>{subTitleTwo}</h3>
            ) : (
                ""
            )}

            {listTwo !== undefined ? (
                <ul className={style.listTwo}>
                    {listTwo.map((elem, index) => {
                        return <li key={index}>{elem}</li>;
                    })}
                </ul>
            ) : (
                ""
            )}

            {textTwo !== "" ? <p>{textTwo}</p> : ""}
        </section>
    );
};


// ServicesItemContent.propTypes = {
//
//     data_id: PropTypes.number,
//     title: PropTypes.string,
//     description: PropTypes.string,
//     subTitle: PropTypes.string,
//     list: PropTypes.array,
//     text: PropTypes.string,
//     subTitleTwo: PropTypes.string,
//     listTwo: PropTypes.array,
//     textTwo: PropTypes.string
// };

// ServicesItemContent.defaultProps = {
//     data_id: null,
//     title: "",
//     description: "",
//     subTitle: "",
//     list: [],
//     text: undefined,
//     subTitleTwo: "",
//     listTwo: undefined,
//     textTwo: ""
// };

export default ServicesItemContent;
