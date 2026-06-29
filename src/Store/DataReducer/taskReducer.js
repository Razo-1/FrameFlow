import { DATA_BASE,TEMP_DATA,NEXT_PAGE,SEARCH_USER } from "./typeReducer";

const taskData = (data) => ({ type : DATA_BASE , payload : data}) 
const taskTemp = (bool) => ({type : TEMP_DATA , payload : bool})
const taskPage = (page) => ({type : NEXT_PAGE , payload : page})
const taskSeach = (str) => ({ type : SEARCH_USER, payload : str })

export { taskData,taskTemp,taskPage,taskSeach }