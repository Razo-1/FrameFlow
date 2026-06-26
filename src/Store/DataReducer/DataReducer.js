import { API } from "../../API"
import { DATA_BASE,NEXT_PAGE,TEMP_DATA } from "./typeReducer"
import { taskData, taskTemp } from './taskReducer.js'
const defultState = {
    data : [],
    isHeare : false,
    myPage : 1,
}

const dataReducer = (state = defultState,action) => {
    switch(action.type){
        case DATA_BASE : 
        return {
            ...state,
            data : action.payload
        }
        case TEMP_DATA : 
        return {
            ...state,
            isHeare : action.payload
        }
        case NEXT_PAGE :
        return {
            ...state,
            myPage : action.payload
        }
        default :
        return state
    }
}

export function userGet(){
    return (dispatch,getState) => {
        let { userInfo } = getState()
        dispatch(taskTemp(false))
        API.getData(userInfo.myPage)
        .then(res => {
            dispatch(taskTemp(true))
            dispatch(taskData(res))
        })
    }
}

export { dataReducer }