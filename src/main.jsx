import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import React Router
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

// import Pages
import Shop from './Pages/Shop.jsx'
import About from './Pages/About.jsx'
import Cards from './Pages/Ceackout.jsx'
import Registration from './Pages/Registration.jsx'


// import store
import {store} from './app/store.jsx'
import { Provider } from 'react-redux';
import Login from './Pages/Login.jsx'
import Acount from './Pages/Account.jsx'
import Account from './Pages/Account.jsx'
import Error404 from './Pages/Error404.jsx'




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />
    },
    {
        path: "/Shop",
        element: <Shop />,
    },
    {
        path: "/About",
        element: <About />,
    },
    {
        path: "/Cards",
        element: <Cards />,
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/registration",
        element: <Registration />,
    },
    {
        path: "/Account",
        element: <Account />,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
