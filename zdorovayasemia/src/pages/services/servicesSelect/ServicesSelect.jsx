import React, {useState} from 'react';
import storeDate from "date";
import PropTypes from 'prop-types'
import style from "./ServicesSelect.module.css";

function ServicesSelect ({items, chilldren}) {
    const [open, setOpen] = useState(false);
    const [acceptance, setСhange] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <div className={style.select}>
            {open ? (
                <div className={style.select__headOpen}
                     role="button"
                     onKeyPress={() => toggle(!open)}
                     onClick={() => toggle(!open)}>
                    <p>title</p>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8L0.803848 0.500001L11.1962 0.5L6 8Z" fill="#C4C4C4"/>
                    </svg>

                </div>
            ) : (<div className={style.select__head}
                      role="button"
                      onKeyPress={() => toggle(!open)}
                      onClick={() => toggle(!open)}>
                <p>title</p>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8L0.803848 0.500001L11.1962 0.5L6 8Z" fill="#C4C4C4"/>
                </svg>
            </div>)}
            {open && (
                <ul className={style.select__list}>
                    {items.map(item => (
                        <li className={style.select__item} key={item.id}>
                            <button selected={acceptance} onChange={setСhange}>{item.value}</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

ServicesSelect.propTypes = {
    items: PropTypes.array.isRequired,
    chilldren: PropTypes.number.isRequired,
};
ServicesSelect.defaultProps = {
    items: [],
    chilldren: '',
}

export default ServicesSelect;