import {createStore,applyMiddleware} from "redux";
import createLogger from "redux-logger";
import thunkWrap from "./customMiddleware/thunkWrap";
import flareWrap from "./customMiddleware/flareWrap";
import reducers from "./reducers";

const middlewares = [flareWrap,thunkWrap];
if (process.env.NODE_ENV !== "PRODUCTION") {
    middlewares.push(createLogger);
}

const thrubiApp = () => createStore(reducers,applyMiddleware(...middlewares));

export default thrubiApp;

