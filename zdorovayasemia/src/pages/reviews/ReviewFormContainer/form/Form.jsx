import React from "react";
import { connect } from "react-redux";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import Textarea from "../../../../components/textarea/Textarea";
import style from "./Form.module.css";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormCallStateHide: true,
      inputName: "",
      inputEmail: "",
      inputTitle: "",
      // inputRadio: "",
      textareaMessage: "",
      receivedData: {
        name: "",
        email: "",
        title: "",
        // stars: "",
        text: ""
      }
    };
  }
  handleInputNameChange = ({ target: { value } }) => {
    this.setState({
      inputName: value
    });
  };
  handleInputEmailChange = ({ target: { value } }) => {
    this.setState({
      inputEmail: value
    });
  };
  handleInputTitleChange = ({ target: { value } }) => {
    this.setState({
      inputTitle: value
    });
  };
  handleTextareaChange = ({ target: { value } }) => {
    this.setState({
      textareaMessage: value
    });
  };
  handleData = e => {
    e.preventDefalt();
    const { inputName, inputEmail, inputTitle, textareaMessage } = this.state;
    this.state = {
      inputName: "",
      inputEmail: "",
      inputTitle: "",
      textareaMessage: "",
      receivedData: {
        name: "",
        email: "",
        title: "",
        text: ""
      }
    };
  };
  submitFormData = e => {
    e.preventDefalt();
  };
  render() {
    const {
      inputName,
      inputEmail,
      inputTitle,
      textareaMessage,
      receivedData
    } = this.state;
    // const { name, email, title, text } = receivedData;
    return (
      <form className={style.form}>
        <div className={style.left}>
          <Input
            id="name"
            error="Ваше имя"
            placeholder="Ваше имя"
            type="text"
            name="name"
            value={inputName}
          />
          <Input
            id="email"
            error="Ваш email"
            placeholder="Ваш email"
            type="email"
            name="email"
            value={inputEmail}
          />
          {/* <span className={style.radioGroupTitle}>Оцените нас</span>
          <div className={style.radioGroup}>
            <Input
              id="star01"
              name="radio"
              onChange={() => {}}
              value="1"
              label="1"
              type="radio"
            />
            <Input
              id="star02"
              name="radio"
              onChange={() => {}}
              value="2"
              label="2"
              type="radio"
            />
            <Input
              id="star03"
              name="radio"
              onChange={() => {}}
              value="3"
              label="3"
              type="radio"
            />
            <Input
              id="star04"
              name="radio"
              onChange={() => {}}
              value="4"
              label="4"
              type="radio"
            />
            <Input
              id="star05"
              name="radio"
              onChange={() => {}}
              value="5"
              label="5"
              type="radio"
            />
          </div> */}
        </div>
        <div className={style.right}>
          <Input
            id="title"
            placeholder="Тема отзыва"
            type="text"
            name="title"
            value={inputTitle}
          />
          <Textarea
            id="message"
            rows="5"
            placeholder="Ваш отзыв"
            name="message"
            value={textareaMessage}
            onChange={() => {}}
          />
          <Button
            className="btnPrimary"
            children="Отправить"
            type="submit"
            onClick={this.submitFormData}
          />
        </div>
      </form>
    );
  }
}

export default Form;
