import { createBrowserRouter } from "react-router-dom";
import { Layout, Lent, Profile,Search } from "../../Components";


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
            },
            {
                path : '/search',
                element : <Search />
            }
        ]
    }
])


export { Router }