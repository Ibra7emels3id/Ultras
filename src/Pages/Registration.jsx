import React, { useState } from 'react';

// import Bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from '../Components/Header';


// import icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

// import Firebase 
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


// import style css
import './css/Login.css'
import { Link, useNavigate } from 'react-router-dom';




const registration = () => {
    const [formdata, setformdata] = useState({
        Email: '',
        Password: null,
        name: ''
    })

    // Handle Naveget Home 
    const Naveget = useNavigate()


    // handel Registration
    const handelSendData = (e) => {
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, formdata.Email, formdata.Password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: formdata.name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    console.log(error);
                    // An error occurred
                    // ...
                });
                Naveget('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }




    // handle Facebook
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();
    auth.languageCode = 'it';
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });

    const handleSigninGoogle = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }





    return (
        <>
            <Header />

            <div className="container form-login">
                <div className="title-form text-center">
                    <h3 className='fs-1 fw-bold'>Registration</h3>
                </div>
                <button onClick={() => {
                    handleSigninGoogle()
                }} className='btn fs-1'><FacebookIcon className='fs-1' /></button>
                <button onClick={() => {
                    handleSigninGoogle()
                }} className='btn fs-1'><GoogleIcon className='fs-1' /></button>
                <form >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Name
                        </label>
                        <input onChange={(e) => {
                            setformdata({ ...formdata, name: e.target.value })
                        }}
                            value={formdata.name}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3 mt-5">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input onChange={(e) => {
                            setformdata({ ...formdata, Email: e.target.value })
                        }}
                            value={formdata.Email}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3 mt-5">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input onChange={(e) => {
                            setformdata({ ...formdata, Password: e.target.value })
                        }}
                            value={formdata.Password}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3 form-check ">
                        {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <div className="submit text-center">
                        <button onClick={(e) => {
                            handelSendData(e)
                        }} type="submit" className="btn btn-primary  w-100 m-auto text-center mt-5">
                            Submit
                        </button>
                    </div>
                    <div className="submit text-center">
                        <Link to='/Login' type="submit" className="btn btn-primary  m-auto text-center mt-5">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default registration;
