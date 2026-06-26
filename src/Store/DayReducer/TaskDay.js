import { DAY_MODE } from "./TypeDay";


const taskView = (bool) => ({ type : DAY_MODE, payload : bool })

export { taskView }