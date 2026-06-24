import { createBrowserRouter } from "react-router-dom";
import { Layout, Lent } from "../../Components";



const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Lent />
            }
        ]
    }
])


export { Router }