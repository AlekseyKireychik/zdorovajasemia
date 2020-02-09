import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import Form from "./form/Form";
import Phone from "../../components/phone/Phone";
import Store from "../../store";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import style from "./Contacts.module.css";

const Contacts = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage={Store._state.pageContacts.info.background}
        children={Store._state.pageContacts.info.title}
      />
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.textWraper}>
            <h2 className={style.Subtitle}>{Store._state.pageContacts.contactPageInfo.title}</h2>
            <p>{Store._state.pageContacts.contactPageInfo.subTitle}</p>
            <Phone numberhref="+375298296956" number="+375 (29) 829 69 56" />
            <Phone numberhref="+375162534895" number="+375 (16) 253 48 95" />
            <p>{Store._state.pageContacts.contactPageInfo.text}</p>
          </div>
          <Form />
        </div>
        <div className={style.bootom}>
          <YMaps query={{ load: "control.ZoomControl" }}>
            <Map className={style.map} state={Store._state.pageContacts.mapState}>
              <Placemark defaultGeometry={Store._state.pageContacts.mapState.center} />
            </Map>
          </YMaps>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
