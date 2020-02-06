import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import Store from "../../store";
import AboutItem from "./aboutItem/AboutItem";
import style from "./About.module.css";
let description = Store.pageAbout.services.map(item => {
  let elemList = item.list.map((elem, index) => {
    return elem;
  });
  console.log(elemList);
  return (
    <AboutItem
      key={`${item.id}`}
      title={item.title}
      img={item.img}
      text={`${elemList}`}
    />
  );
});
const About = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage={Store.pageAbout.info.background}
        children={Store.pageAbout.info.title}
      />
      <div className={style.container}>
        <h2>{Store.pageAbout.greeting.title}</h2>
        <p>{Store.pageAbout.greeting.subTitle}</p>
        {description}
        <p>
          <b>{Store.pageAbout.greeting.resume}</b>
        </p>
      </div>
    </React.Fragment>
  );
};
export default About;
