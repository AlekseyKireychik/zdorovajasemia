import React from "react";
import PropTypes from "prop-types";
import style from "./Textarea.module.css";

const Textarea = ({ id, label, ...attrs }) => {
  return (
    <div className={style.textareaWrapper}>
      <div className={style.labelsWrapper}>
        {label && (
          <label className={style.textareaLabel} htmlFor={id}>
            {label}
          </label>
        )}
        {attrs.required && (
          <span className={style.textareaRequired}>Required</span>
        )}
      </div>
      <textarea name={id} id={id} {...attrs} />
    </div>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string
};

Textarea.defaultProps = {
  label: ""
};

export default Textarea;
