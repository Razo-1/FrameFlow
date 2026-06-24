import { Outlet } from "react-router-dom";
import  Headers  from '../Headers/Headers.jsx'


function Layout(){
        
    return(
        <>
            <Headers/>
            <Outlet/>
        </>
    )
}

export { Layout }