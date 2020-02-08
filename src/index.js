import React from "react";
import ReactDOM from "react-dom";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import thrubiApp from "./reducers/thrubiApp"
import App from "./components/App";
import LinkedInRedirect from "./components/redirect/LinkedInRedirect";
import GoogleRedirect from "./components/redirect/GoogleRedirect";
import "./styles/customBootstrap.scss";

const store = thrubiApp();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="thrubi-client">
            <Route exact path="/" component={App} />
            <Route       path="/linkedInRedirect" component={LinkedInRedirect} />
            <Route       path="/googleRedirect" component={GoogleRedirect} />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);