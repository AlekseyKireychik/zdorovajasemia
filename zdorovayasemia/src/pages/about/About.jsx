// import React from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import InnerBanner from "../../components/innerBanner/InnerBanner";
// import Store from "store";
// import AboutItem from "./aboutItem/AboutItem";
// import AboutItemLi from "./aboutItem/aboutItemLi/AboutItemLi";
// import style from "./About.module.css";

// let description = Store.initialState._state.pageAbout.services.map((item) => {
//   let elemList = item.list.map((elem) => {
//     return elem;
//   });
//   let elemListLi = elemList.map((elem, index) => {
//     return <AboutItemLi key={index} text={elem} />;
//   });
//   return (
//     <AboutItem
//       key={`${item.id}`}
//       title={item.title}
//       img={item.img}
//       text={elemListLi}
//     />
//   );
// });
// const About = () => {
//   return (
//     <React.Fragment>
//       <Header />
//       <main>
//         <InnerBanner
//           bgimage={Store.initialState._state.pageAbout.info.background}
//           children={Store.initialState._state.pageAbout.info.title}
//         />
//         <div className={style.container}>
//           <h2>{Store.initialState._state.pageAbout.greeting.title}</h2>
//           <p>{Store.initialState._state.pageAbout.greeting.subTitle}</p>
//           {description}
//           <p>
//             <b>{Store.initialState._state.pageAbout.greeting.resume}</b>
//           </p>
//         </div>
//       </main>
//       <Footer />
//     </React.Fragment>
//   );
// };
// export default About;
