import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { userGet } from '../../../Store/DataReducer/DataReducer.js'
import { MediaCard, UpHeader } from '../../organisms'
import { MediaCardSkeleton } from '../../templates'
import { taskPage } from '../../../Store/DataReducer/taskReducer';
import Pagination from '@mui/material/Pagination';
import './Lent.css'


function Lent(){

    const [searchParams, setSearchParams] = useSearchParams();
    let dispatch = useDispatch()
    let {data,isHeare,myPage} = useSelector(state => state.userInfo)
    let {isDay} = useSelector(state => state.nightMode)

    let totalPage = Math.ceil(data.totalCount / 100)
    
    useEffect(() => {
        dispatch(userGet(10))
        setSearchParams((searchParams) => {
            searchParams.set("page", myPage.toString());
            return searchParams;
        });
    },[myPage])
    

   
     return(
        <div className={`lent ${isDay ? 'nightMode' : ''}`}>
            <UpHeader/>
            <div className="post">
                {isHeare ? data.map(el => <div className="media" key={el.id}><MediaCard item={el}/></div>) : Array(100).fill(0).map((_,ind) => <MediaCardSkeleton key={ind}/>)}     
            </div>
                <Pagination sx={{margin : '50px 0 100px 0',"& .MuiPaginationItem-root": {color: isDay ? 'white' : '',},}} onChange={(_,p) => dispatch(taskPage(p))} count={totalPage} size="large" />
        </div>
    )
}   

export default Lent