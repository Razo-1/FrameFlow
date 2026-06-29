import { AUTH,L_PAGE } from './authType.js'
import { authTask } from './authTask.js'
import { API } from "../../API"

const authState = {
    userId : null,
    loginPage : false
}

export const authReducer = (state = authState, action) => {
    switch(action.type){
        case AUTH : 
        return {
            ...state,
            userId : action.payload
        }
        case L_PAGE :
        return {
            ...state,
            loginPage : action.payload
        }
        default :
        return state
    }
}

export const login = (email,password) => {
    
    
    return async (dispatch) => {
        const respons = await API.postAuth(email,password)
        dispatch(authTask(respons.userId))
    }
}