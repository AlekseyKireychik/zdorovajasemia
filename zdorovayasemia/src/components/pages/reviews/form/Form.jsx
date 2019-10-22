import React from "react";
import Button from "../../../button/Button";
import Input from "../../../input/Input";
import Textarea from "../../../textarea/Textarea";
import style from "./Form.module.css";

const Form = () => {
  return (
    <form className={style.form}>
      <Input id="name" error="Ваше имя" label="Ваше имя" type="text" />
      <Input id="email" error="Ваш email" label="Ваш email" type="email" />
      <div>
        Оцените нас
        <Input id="star01" onChange={() => {}} label="1" type="radio" />
        <Input id="star02" onChange={() => {}} label="2" type="radio" />
        <Input id="star03" onChange={() => {}} label="3" type="radio" />
        <Input id="star04" onChange={() => {}} label="4" type="radio" />
        <Input id="starx05" onChange={() => {}} label="5" type="radio" />
      </div>
      <Textarea id="message" rows="5" label="Ваш отзыв" />
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
