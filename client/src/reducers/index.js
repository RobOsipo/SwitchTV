import { combineReducers } from "redux";
import authReducer from './AuthReducer.js'

export default combineReducers({
    auth: authReducer
})