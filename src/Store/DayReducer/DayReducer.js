import { DAY_MODE } from "./TypeDay"

let dayState = {
    isDay : false
}

const dayReducer = (state = dayState,action) => {
    switch(action.type){
        case DAY_MODE : 
        return{
            ...state,
            isDay : action.payload
        }
        default : 
        return state
    }
}

export { dayReducer }