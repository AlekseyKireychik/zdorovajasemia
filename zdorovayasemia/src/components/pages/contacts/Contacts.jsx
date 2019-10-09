import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import ContactsForm from "./contactsForm/ContactsForm";
import style from "./Contacts.module.css";

const Contacts = (props) => {
  return (
    <div className={style.contacts}>      
      <InnerBanner bgimage="..//images/mainpic-contacts.411999d7.jpg" children="Контакты" />
      <div className={style.container}> 
        <ContactsForm />    
      </div>
    </div>
  );
};

export default Contacts;
