import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Form from "../../form/Form";
import Image from "../../image/Image";
import Phone from "../../phone/Phone";
import style from "./Contacts.module.css";

const Contacts = props => {
  return (
    <div className={style.contacts}>
      <InnerBanner
        bgimage="..//images/mainpic-contacts.411999d7.jpg"
        children="Контакты"
      />
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.textWraper}>
            <h2 className={style.Subtitle}>Свяжитесь с нами</h2>
            <p>
              Если вы хотите связаться с нами, воспользуйтесь формой. Если вы
              предпочитаете телефонный разговор, вы можете позвонить сейчас по
              номерам:
            </p>
            <Phone numberhref="+375298296956" number="+375 (29) 829 69 56" />
            <Phone numberhref="+375162534895" number="+375 (16) 253 48 95" />
            <p>
              Мы всегда стремимся ответить на ваши вопросы быстро и эффективно.
            </p>
          </div>
          <Form />
        </div>
        <div className={style.right}>
          <Image width="600" alt="map"/>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
