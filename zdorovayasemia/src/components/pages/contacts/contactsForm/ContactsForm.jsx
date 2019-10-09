import React, { Component } from "react";
import Button from "../../../button/Button";
import Input from '../../../input/Input';
import style from "./ContactsForm.module.css";

const ContactsForm = () => {
  
    return (
      <form action="#" className={style.form}>
        <Input id="email" error="wrong email" label="email" type="email" />

        <Input id="tel" error="wrong text" label="tel" type="tel" />

        <Input id="checkbox" onChange={() => {}} type="checkbox" />

        <Button
            children="Отправить"
            type="submit"
            onClick={() => {
            console.log(`шмяк!!!!`);
            }}
        />
      </form>
    );
  };
  
  export default ContactsForm;