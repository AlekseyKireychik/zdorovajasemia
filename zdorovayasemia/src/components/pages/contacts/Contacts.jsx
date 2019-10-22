import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Form from "./form/Form";
import Phone from "../../phone/Phone";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import style from "./Contacts.module.css";

const mapState = {
  center: [52.100818, 23.6914],
  zoom: 17,
  controls: ["zoomControl"]
};
const contactPageInfo = {
  title: "Свяжитесь с нами",
  subTitle:
    "Если вы хотите связаться с нами, воспользуйтесь формой. Если вы предпочитаете телефонный разговор, вы можете позвонить сейчас по номерам:",
  text: "Мы всегда стремимся ответить на ваши вопросы быстро и эффективно."
};

const Contacts = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage="..//images/mainpic-contacts.411999d7.jpg"
        children="Контакты"
      />
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.textWraper}>
            <h2 className={style.Subtitle}>{contactPageInfo.title}</h2>
            <p>{contactPageInfo.subTitle}</p>
            <Phone numberhref="+375298296956" number="+375 (29) 829 69 56" />
            <Phone numberhref="+375162534895" number="+375 (16) 253 48 95" />
            <p>{contactPageInfo.text}</p>
          </div>
          <Form />
        </div>
        <div className={style.bootom}>
          <YMaps query={{ load: "control.ZoomControl" }}>
            <Map className={style.map} state={mapState}>
              <Placemark defaultGeometry={mapState.center} />
            </Map>
          </YMaps>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
