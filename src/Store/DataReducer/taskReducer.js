import { DATA_BASE,TEMP_DATA,NEXT_PAGE } from "./typeReducer";

const taskData = (data) => ({ type : DATA_BASE , payload : data}) 
const taskTemp = (bool) => ({type : TEMP_DATA , payload : bool})
const taskPage = (page) => ({type : NEXT_PAGE , payload : page})

export { taskData,taskTemp,taskPage }