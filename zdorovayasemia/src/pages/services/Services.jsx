import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServicesBanner from "./banner/ServicesBanner";
import ServicesSelect from "./servicesSelect/ServicesSelect"
import ServicesItemValues from "./serviceItemValues/serviceItemValues";
import style from "./Services.module.css";

const Services = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <main>
                <ServicesBanner/>
                <div className={style.container}>
                    <ServicesSelect />
                    <ServicesItemValues/>
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default Services;
