import { RouterProvider } from "react-router-dom"
import { Router } from "./Router/Router.jsx"
import { Provider } from "react-redux"
import { Store } from '../Store'
import './App.css'

function App(){
    return(
        <Provider store={Store}>
            <RouterProvider router={Router}/>
        </Provider>
    )
}

export { App }