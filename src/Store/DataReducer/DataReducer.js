import { DATA_BASE } from "./typeReducer"

const defultState = {
    data : []
}

const dataReducer = (state = defultState,action) => {
    switch(action.type){
        case DATA_BASE : 
        return {
            ...state,
            data : action.payload
        }
        default :
        return state
    }
}

export { dataReducer }