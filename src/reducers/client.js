import user from "./client/user";
import userAccess from "./client/userAccess";
import population from "./client/population";
import member from "./client/member";
import {combineReducers} from "redux";

const client = combineReducers({
    user,
    userAccess,
    population,
    member,
});

export default client;

