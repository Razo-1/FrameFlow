import { useEffect } from "react"
import { API } from "../../../API"
import { useDispatch, useSelector } from "react-redux"
import { taskData } from '../../../Store/DataReducer/taskReducer.js'
import Post from "../../organisms/Post/Post.jsx"

function Lent(){

    let dispatch = useDispatch()
    let {data} = useSelector(state => state.userInfo)

    useEffect(() => {
        API.getData()
        .then(res => dispatch(taskData(res)))
    },[])
    console.log(data);
    let count = Array.from({length : 10}, (_,ind) => ind)
    return(
        <div>
            {data ? data.map(el => <div key={el.id}><img src={el.photos.small} /><p>{el.name}</p></div>) : count.map(el => <div key={el}><Post loading={true}/></div> )}
            
        </div>
    )
}   

export default Lent