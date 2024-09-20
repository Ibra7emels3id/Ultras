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


    return (
        <>
            <div className="from mt-5">
                <div className="logo text-center">
                    <h1>Welcome Ultras</h1>
                </div>
                <form className='mt-5' onSubmit={handelSendData}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="name">
                            Enter Your Name
                        </label>
                        <input type="text" onChange={(e) => {
                            setformdata({ ...formdata, name: e.target.value })
                        }} placeholder='Enter Your Name' id="name" className="form-control" />
                    </div>
                    {/* Email input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">
                            Enter Your Email address
                        </label>
                        <input type="email" onChange={(e) => {
                            setformdata({ ...formdata, Email: e.target.value })
                        }} placeholder='Enter Your Email' id="form3Example3" className="form-control" />
                    </div>
                    {/* Password input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">
                            Enter Your Password
                        </label>
                        <input type="password" onChange={(e) => {
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
                    <div className="login ">
                        <p>Already have an account?</p>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default registration;
