import { createStore,combineReducers } from "redux";
import {  dataReducer } from './DataReducer/DataReducer.js';

const rootReducer = combineReducers({
    userInfo : dataReducer,
})


const Store = createStore(rootReducer)

export { Store }
