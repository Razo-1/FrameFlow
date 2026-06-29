import { Outlet } from "react-router-dom";
import  Headers  from '../Headers/Headers.jsx'
import { OutlinedAlerts } from "../../molecules";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Layout(){
    let {userId} = useSelector(state => state.auth)
    let [show,setShow] = useState(false)
    useEffect(() => {
        if(userId){  
            setShow(true)
            let timer = setTimeout(() => {
                setShow(false)
            },1000)
        }
    },[userId])

    return(
        <>
            <Headers/>
            {show && <OutlinedAlerts/>}
            <Outlet/>
        </>
    )
}

export { Layout }