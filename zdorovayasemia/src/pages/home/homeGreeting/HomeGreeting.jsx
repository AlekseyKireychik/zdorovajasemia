import React from "react";
import Greeting from "./greeting/Greeting";
import storeDate from "date";

const HomeGreeting = () => {

    return (
        <Greeting
            title={storeDate.date.pageHome.greeting.title}
            text={storeDate.date.pageHome.greeting.text}
        />
    );

};

export default HomeGreeting;
