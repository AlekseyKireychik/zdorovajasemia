import React from "react";
import Button from "../../../button/Button";
import Input from "../../../input/Input";
import Textarea from "../../../textarea/Textarea";
import style from "./Form.module.css";

const Form = () => {
  return (
    <form className={style.form}>
      <Input id="name" error="Ваше имя" placeholder="Ваше имя" type="text" />
      <Input
        id="email"
        error="Ваш email"
        placeholder="Ваш email"
        type="email"
      />
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
          label="1"
          type="radio"
        />
        <Input
          id="star03"
          name="radio"
          onChange={() => {}}
          value="3"
          label="1"
          type="radio"
        />
        <Input
          id="star04"
          name="radio"
          onChange={() => {}}
          value="4"
          label="1"
          type="radio"
        />
        <Input
          id="starx05"
          name="radio"
          onChange={() => {}}
          value="5"
          label="1"
          type="radio"
        />
      </div>
      <Textarea id="message" rows="5" placeholder="Ваш отзыв" />
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
