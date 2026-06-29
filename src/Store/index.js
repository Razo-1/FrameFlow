import { createStore,combineReducers, applyMiddleware } from "redux";
import {  dataReducer } from './DataReducer/DataReducer.js';
import { thunk } from "redux-thunk";
import { dayReducer } from "./DayReducer/DayReducer.js";
import { authReducer } from "./AuthReducer/authReducer.js";


const rootReducer = combineReducers({
    userInfo : dataReducer,
    nightMode : dayReducer,
    auth : authReducer
})


const Store = createStore(rootReducer,applyMiddleware(thunk))

export { Store }
