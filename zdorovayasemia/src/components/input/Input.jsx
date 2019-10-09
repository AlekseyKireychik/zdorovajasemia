import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from './Input.module.css';

const Input = ({
  id, label, error, ...attrs
}) => {  

  return (
    <div className={style.inputWrapper}>
      <div className={style.labelsWrapper}>
        {label
          && <label className={style.inputLabel} htmlFor={id}>{label}</label>
        }
        {attrs.required
          && <span className={style.inputRequired}>Required</span>
        }
      </div>
      <input
        name={id}
        id={id}
        {...attrs}
      />
      {error
        && <span className={style.inputError}>{error}</span>
      }
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  error: '',
};

export default Input;
