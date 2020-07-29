import React from "react";
import InnerBanner from "../../../components/innerBanner/InnerBanner";
import storeDate from "date";

const ServicesBanner = () => {
    return (
        <InnerBanner
            bgimage={storeDate.date.pageServices.info.background}
            children={storeDate.date.pageServices.info.title}/>
    );
};

export default ServicesBanner;