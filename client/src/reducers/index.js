import { combineReducers } from "redux";
import users from './users';
import estates from "./estates";

export default combineReducers({
    users, estates
});