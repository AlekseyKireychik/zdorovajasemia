import React from "react";
import PropTypes from "prop-types";

const SlideItem = (props) => {

    const {text} = props;

    return (
        <div className="each-slide">
            <span>{text}</span>
        </div>
    );
};


SlideItem.propTypes = {
    text: PropTypes.string
};

SlideItem.defaultProps = {
    text: ""
};

export default SlideItem;
