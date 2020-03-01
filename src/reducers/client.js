import guest from "./client/guest";
import user from "./client/user";
import userAccess from "./client/userAccess";
import population from "./client/population";
import member from "./client/member";
import {combineReducers} from "redux";

const client = combineReducers({
    guest,
    user,
    userAccess,
    population,
    member,
});

export default client;

