import React from "react";
import About from "../pages/about/About";
import Admin from "../admin/Admin";
import Login from "../admin/login/Login";
import Services from "../pages/services/Services";
// import Products from "../pages/products/Products";
// import Team from "../pages/team/Team";
// import Blog from "../pages/blog/Blog";
// import Reviews from "../pages/reviews/Reviews";
// import Contacts from "../pages/contacts/Contacts";
import {Route} from "react-router-dom";
import Home from "../pages/home/Home";

const MainPage = (props) => {

    return (
        <div className="App">
            {/*{status}--{profile}*/ /*для редакса*/}
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={Admin}/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            {/*<Route path="/products" component={Products}/>*/}
            {/*<Route path="/team" component={Team}/>*/}
            {/*<Route path="/blog" component={Blog}/>*/}
            {/*<Route path="/reviews" component={Reviews}/>*/}
            {/*<Route path="/contacts" component={Contacts}/>*/}
        </div>
    );
};

export default MainPage;
