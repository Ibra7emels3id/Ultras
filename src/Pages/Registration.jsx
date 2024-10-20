import React, { useState } from 'react';

// import Bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

// import Firebase 
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


// import style css
import './css/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { toast, ToastContainer } from 'react-toastify';




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
                toast.success('Registration successful')
                updateProfile(auth.currentUser, {
                    displayName: formdata.name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {

                });
                Naveget('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error('Email already exists')
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


    return (
        <>
            <ToastContainer />
            <Header />
            <div className="form-login py-5">
                <div className="forms">
                    <div className="logo text-center py-5">
                        <h1>Welcome <Link to={'/'}>Ultras</Link></h1>
                    </div>
                    <form className=' w-100 p-3' onSubmit={handelSendData}>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="name">
                                Enter Your Name
                            </label>
                            <input type="text" required={true} onChange={(e) => {
                                setformdata({ ...formdata, name: e.target.value })
                            }} placeholder='Enter Your Name' id="name" className="form-control" />
                        </div>
                        {/* Email input */}
                        <div data-mdb-input-init="" className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3">
                                Enter Your Email address
                            </label>
                            <input type="email" required={true} onChange={(e) => {
                                setformdata({ ...formdata, Email: e.target.value })
                            }} placeholder='Enter Your Email' id="form3Example3" className="form-control" />
                        </div>
                        {/* Password input */}
                        <div data-mdb-input-init="" className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example4">
                                Enter Your Password
                            </label>
                            <input type="password" required={true} onChange={(e) => {
                                setformdata({ ...formdata, Password: e.target.value })
                            }} placeholder='Enter Your Password' id="form3Example4" className="form-control" />
                        </div>
                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-center align-items-center mb-4">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="form2Example33"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="form2Example33">
                                Subscribe to our newsletter
                            </label>
                        </div>
                        {/* Submit button */}
                        <button
                            type="submit"
                            data-mdb-ripple-init=""
                            className="btn btn-primary btn-block mb-4"
                        >
                            Sign up
                        </button>
                    </form>
                    <div className="text-center">
                        <div className="register pb-4">
                            <p>Don't have an account?</p>
                            <Link to='/login'>Login Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default registration;
