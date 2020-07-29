import React from "react";
import ServicesItemContent from "../servicesItemContent/ServicesItemContent";
import storeDate from "date";



const ValServiceItemContent = storeDate.date.pageServices.servicesDate.map(
    (item) => {
        return (
            <ServicesItemContent
                key={`0${item.id}`}
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
    }
);

const ServicesItemValues = (props) => {
    return (
        <section>
            {ValServiceItemContent}
        </section>
    );
};

export default ServicesItemValues;
