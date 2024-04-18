import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import Bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from '../Components/Header';


// import style css
import './css/Login.css'

import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';


// import icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
    const [ErrorEmail, setErrorEmail] = useState('')
    const [formdata, setformdata] = useState({
        Email: '',
        Password: ''
    })

    // Naveget Dayrect User

    const naveget = useNavigate()

    // handle Login
    const handelSendData = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, formdata.Email, formdata.Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                naveget('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
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
                const token = credential.accessToken; const user = result.user;
                console.log(user);
                naveget('/')
            }).catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                setErrorEmail(email)
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    // handle Login Facebook
    provider.addScope('user_birthday');
    auth.languageCode = 'it';
    provider.setCustomParameters({
        'display': 'popup'
    });

    const handleSigninFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
            });
    }


    return (
        <>
            <Header />
            <div className="container form-login">
                <div className="title-form text-center">
                    <h3 className='fs-1 fw-bold'>Login</h3>
                </div>
                <button onClick={() => {
                    handleSigninFacebook()
                }} className='btn fs-1'><FacebookIcon className='fs-1' /></button>
                <button onClick={() => {
                    handleSigninGoogle()
                }} className='btn fs-1'><GoogleIcon className='fs-1' /></button>
                <form onSubmit={(e) => {
                    handelSendData(e)
                }}>
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
                        <p>{ErrorEmail}</p>
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
                        <button type="submit" className="btn btn-primary  w-100 m-auto text-center mt-5">
                            Submit
                        </button>
                    </div>
                    <div className="submit text-center">
                        <Link to='/registration' type="submit" className="btn btn-primary  m-auto text-center mt-5">
                            Registration
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
