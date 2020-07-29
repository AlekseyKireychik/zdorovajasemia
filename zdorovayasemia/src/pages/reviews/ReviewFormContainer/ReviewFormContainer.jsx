import React from "react";
import GiveFetback from "./giveFetback/GiveFetback";
import Form from "./form/Form";
import Store from "../../../store";
import style from "./ReviewFormContainer.module.css";

class ReviewFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormCallState: false,
      FormCallStateHide: true,
    };
  }
  onSchowReviewsForm = () => {
    this.setState({ FormCallState: true });
    this.setState({ FormCallStateHide: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.FormCallStateHide ? (
          <GiveFetback
            title={Store.initialState._state.pageReviews.giveFetback.title}
            subTitle={
              Store.initialState._state.pageReviews.giveFetback.subTitle
            }
            children={
              Store.initialState._state.pageReviews.giveFetback.buttonName
            }
            onClick={this.onSchowReviewsForm}
          />
        ) : null}

        {this.state.FormCallState ? (
          <div className={style.wrapForm}>
            <Form />
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default ReviewFormContainer;
