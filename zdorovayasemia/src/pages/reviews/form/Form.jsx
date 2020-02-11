import React from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Textarea from "../../../components/textarea/Textarea";
import style from "./Form.module.css";
let addNewReview = () => {
  alert(`Спасибо за Ваш отзыв!`);
};
const Form = () => {
  return (
    <form className={style.form}>
      <div className={style.left}>
        <Input id="name" error="Ваше имя" placeholder="Ваше имя" type="text" />
        <Input
          id="email"
          error="Ваш email"
          placeholder="Ваш email"
          type="email"
        />
        <span className={style.radioGroupTitle}>Оцените нас</span>
        <div className={style.radioGroup}>
          <Input
            id="star01"
            name="radio"
            onChange={() => {}}
            value="1"
            label="1"
            type="radio"
          />
          <Input
            id="star02"
            name="radio"
            onChange={() => {}}
            value="2"
            label="2"
            type="radio"
          />
          <Input
            id="star03"
            name="radio"
            onChange={() => {}}
            value="3"
            label="3"
            type="radio"
          />
          <Input
            id="star04"
            name="radio"
            onChange={() => {}}
            value="4"
            label="4"
            type="radio"
          />
          <Input
            id="star05"
            name="radio"
            onChange={() => {}}
            value="5"
            label="5"
            type="radio"
          />
        </div>
      </div>
      <div className={style.right}>
        <Input id="title" placeholder="Тема отзыва" type="text" />
        <Textarea id="message" rows="5" placeholder="Ваш отзыв" />
        <Button
          className="btnPrimary"
          children="Отправить"
          type="submit"
          onClick={addNewReview}
        />
      </div>
    </form>
  );
};

export default Form;
