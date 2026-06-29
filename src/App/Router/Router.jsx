import { createBrowserRouter } from "react-router-dom";
import { Layout, Lent, Profile } from "../../Components";


const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Lent />
            },
            {
                path : '/sigup',
                element : <Profile /> 
            }
        ]
    }
])


export { Router }