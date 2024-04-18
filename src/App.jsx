import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from './Components/Header';
import './Lips/all.min.css'
import Mainheaders from './Components/Mainheaders';
import { useContext, useEffect, useState } from 'react';
import { ContextProduct } from './Context/Context';
import axios from 'axios';
import Featuredproducts from './Components/Featuredproducts';
import Offersimg from './Components/Offersimg';
import SendEmail from './Components/SendEmail';
import Productss from './Components/Productss';
import Description from './Components/description';
import Flashsales from './Components/Flashsales';
import Shoppifybanner from './Components/Shoppifybanner';
import Quote from './Components/Quote';
import Articles from './Components/Articles';
import BrandCollection from './Components/BrandCollection';
import Ourteam from './Components/Ourteam';
import Services from './Components/Services';
import Footer from './Components/Footer';

// import React tost
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux';
import { gettotal } from './features/CartSlice';


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';



import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from './firebase/FIrebase';


function App() {
    const [Products , setProducts] = useState([]);

    console.log(Products.length);

    const auth = getAuth();
    const [user, loading] = useAuthState(auth)

    console.log(user);
    useEffect(()=>{
        axios.get('http://localhost:3000/Featured')
        .then(function(response){
            setProducts(response.data) 
        })
    },[])

    
    

    return (
        <>
            <Header />
            {/* {user ? <h1>{user.email}</h1> || console.log(user.displayName) : null} */}
            <ToastContainer/>
            <ContextProduct.Provider value={{setProducts , Products}}>
                <Mainheaders />
                <Featuredproducts />
                <Offersimg />
                <SendEmail />
                <Productss />
                <Description />
                <Flashsales />
                <Shoppifybanner/>
                <Quote />
                <Articles />
                <BrandCollection/>
                <Ourteam />
                <Services />
                <Footer />
            </ContextProduct.Provider>
            
        </>
    )
}

export default App;
