import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Button from "../../button/Button";
import Image from "../../image/Image";
import style from "./Contacts.module.css";

const Contacts = props => {
  return (
    <div className={style.contacts}>
      <InnerBanner bgimage="..//images/mainpic-contacts.411999d7.jpg" children="Контакты" />
      <Button
        children="Отправить"
        type="submit"
        onClick={() => {
          console.log(`шмяк!!!!`);
        }}
      />
    </div>
  );
};

export default Contacts;
