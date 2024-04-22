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
import About from './Pages/About.jsx'
import Cards from './Pages/Ceackout.jsx'
import Registration from './Pages/Registration.jsx'
import Login from './Pages/Login.jsx'
import Account from './Pages/Account.jsx'
import Error404 from './Pages/Error404.jsx'
import Shop from './Pages/Shop.jsx'
import Card from './Pages/Card.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'


// import store
import {store} from './app/store.jsx'
import { Provider } from 'react-redux';
import Admin from '../Admin/admin.jsx'
import Dashbord from '../Admin/Dashbord.jsx'
import AddProduct from '../Admin/AddProduct.jsx'
import Update from '../Admin/Update.jsx'
import Detalsproduct from '../Admin/Detalsproduct.jsx'







const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />
    },
    {
        path: "/shop",
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
    {
        path: "Card/:DetailsId",
        element: <Card />,
    },
    {
        path: "blog",
        element: <Blog />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    // Control Admin 
    {
        path: "admin",
        element: <Admin />,
    },
    {
        path: "dashbord",
        element: <Dashbord />,
    },
    {
        path: "addProduct",
        element: <AddProduct />,
    },
    {
        path: "update/:UpdateId",
        element: <Update/>,
    },
    {
        path: "detals/:DetailsId",
        element: <Detalsproduct/>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
