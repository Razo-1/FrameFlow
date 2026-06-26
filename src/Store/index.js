import { createStore,combineReducers, applyMiddleware } from "redux";
import {  dataReducer } from './DataReducer/DataReducer.js';
import { thunk } from "redux-thunk";
import { dayReducer } from "./DayReducer/DayReducer.js";


const rootReducer = combineReducers({
    userInfo : dataReducer,
    nightMode : dayReducer
})


const Store = createStore(rootReducer,applyMiddleware(thunk))

export { Store }
