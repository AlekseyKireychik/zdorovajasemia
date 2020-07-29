import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "./banner/Banner";
import Advantages from "./advantages/Advantages";
import TypesMassage from "../home/typesmassage/TypesMassage";
import Specialists from "../../components/specialists/Specialists";
import News from "../../components/news/News";
import HomeGreeting from './homeGreeting/HomeGreeting';
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Home = (props) => {

    const {status, profile} = props;

    return (
        <React.Fragment>
            <Header/>
            <main>
                <div>{status} -- {profile}</div>
                <Banner/>
                <HomeGreeting/>
                <Advantages />
                <Specialists blok_id="specialist-home" />
                <TypesMassage />
                <News />
            </main>
            <Footer />
        </React.Fragment>
    );
};


Home.propTypes = {
    status: PropTypes.string,
    profile: PropTypes.string
};

Home.defaultProps = {
    status: "",
    profile: ""
};

const mapStateToProps = state => ({
    status: state.auth.status,
    profile: state.auth.profile.value
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home)