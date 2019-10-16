import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import style from "./Form.module.css";

const Form = () => {
  return (
    <form className={style.form}>
      <Input id="name" error="Ваше имя" label="Ваше имя" type="text" />
      <Input id="email" error="Ваш email" label="Ваш email" type="email" />
      <Input id="tel" error="Ваш телефон" label="Ваш телефон" type="tel" />
      <Textarea id="message" rows="5" label="Ваше сообщение" />
      <Input id="checkbox" onChange={() => {}} type="checkbox" />
      <Button
        className="btnPrimary"
        children="Отправить"
        type="submit"
        onClick={() => {
          alert(`шмяк!!!!`);
        }}
      />
    </form>
  );
};

export default Form;
