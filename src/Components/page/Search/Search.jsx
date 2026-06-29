import { useEffect } from "react";
import BasicTextFields from "../../molecules/SearchUser/SearchUser";
import { useDispatch, useSelector } from "react-redux";
import { userGet } from "../../../Store/DataReducer/DataReducer";
import { MediaCard } from "../../organisms";
import { MediaCardSkeleton } from "../../templates";
import './Search.css'

function Search(){
    
    let {allData,isHeare,myPage} = useSelector(state => state.userInfo)
    let {isDay} = useSelector(state => state.nightMode)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(userGet(100,1))
    },[])
    

    return(
        <div className={`${isDay ? 'ngt' : ''}`}>
            <BasicTextFields />
            <div className={`search ${isDay ? 'nightMode' : ''}`}>
                {isHeare ? allData?.map(el => <div className="media" key={el.id}><MediaCard item={el}/></div>) : Array(10).fill(0).map((_,ind) => <MediaCardSkeleton key={ind}/>)}     
            </div>
        </div>
    )
}

export { Search }