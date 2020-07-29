import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "../store";
import MainPage from "../containers/MainPage";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
