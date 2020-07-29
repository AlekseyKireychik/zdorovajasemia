// import React from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import InnerBanner from "../../components/innerBanner/InnerBanner";
// import Specialist from "../../components/specialists/specialist/Specialist";
// // import SpecialistsItems from "../../components/specialists/SpecialistItems";
// import Store from "store";
// import style from "./Team.module.css";

// const ValTeamItemConten = Store.initialState._state.pageTeam.teamData.map(
//   (item) => {
//     return (
//       <Specialist
//         key={"0" + item.id}
//         name={item.name}
//         src={item.img}
//         width="270"
//         height="inherit"
//         position={item.position}
//         description={item.description}
//       />
//     );
//   }
// );

// const Team = (props) => {
//   return (
//     <React.Fragment>
//       <Header />
//       <main>
//         <InnerBanner
//           bgimage={Store.initialState._state.pageTeam.info.background}
//           children={Store.initialState._state.pageTeam.info.title}
//         />
//         <div className={style.container}>
//           <ul className={style.list}>{ValTeamItemConten}</ul>
//         </div>
//       </main>
//       <Footer />
//     </React.Fragment>
//   );
// };
// export default Team;
