import { AUTH, L_PAGE } from './authType.js'

const authTask = (id) => ({ type : AUTH, payload : id})
const leftTask = (bool) => ({ type : L_PAGE, payload : bool })

export { authTask,leftTask }