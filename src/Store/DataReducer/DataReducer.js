import { API } from "../../API"
import { DATA_BASE,NEXT_PAGE,TEMP_DATA,SEARCH_USER } from "./typeReducer"
import { taskData, taskTemp } from './taskReducer.js'
import { thisElement } from '../../Utils'

const defultState = {
    data : [],
    isHeare : false,
    allData : [],
    myPage : 1,
    srch : ''
}

const dataReducer = (state = defultState,action) => {
    switch(action.type){
        case DATA_BASE : 
        return {
            ...state,
            data : action.payload.items,
            allData : action.payload.items
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
        case SEARCH_USER:
        return {
            ...state,
            allData: thisElement(state.allData, action.payload,state.data,state.srch),
            srch : action.payload,
        }
        default :
        return state
    }
}

export function userGet(count){
    return (dispatch,getState) => {
        let { userInfo } = getState()
        dispatch(taskTemp(false))
        API.getData(count,userInfo.myPage)
        .then(res => {
            dispatch(taskTemp(true))
            dispatch(taskData(res))
        })
    }
}

export { dataReducer }