import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import ServiceItemBtn from "./serviceItemBtn/ServiceItemBtn";
import ServicesItemConten from "./servicesItemContent/ServicesItemContent";
import Store from "../../store";
import ServicesItemValues from "./serviceItemValues/serviceItemValues";
import style from "./Services.module.css";

const itemServiceTile = Store.pageServices.servicesDate.map(item => {
  return (
    <ServiceItemBtn
      id={item.id}
      key={item.id}
      children={item.title}
    />
  );
});

const ValServiceItemConten = Store.pageServices.servicesDate.map(item => {
  return (
    <ServicesItemConten
      key={"0" + item.id}
      data_id={item.id}
      title={item.title}
      description={item.description}
      subTitle={item.subTitle}
      list={item.list}
      text={item.text}
      subTitleTwo={item.subTitleTwo}
      listTwo={item.listTwo}
      textTwo={item.textTwo}
    />
  );
});

const Services = props => {
  return (
    <React.Fragment>
      <InnerBanner bgimage="..//images/services.jpg" children="Услуги" />
      <div className={style.container}>
        <ul className={style.list}>{itemServiceTile}</ul>
        {ValServiceItemConten}
      </div>
    </React.Fragment>
  );
};

export default Services;
