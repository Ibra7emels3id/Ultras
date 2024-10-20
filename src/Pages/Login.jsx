import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import Bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

// import style css
import './css/Login.css'
import { GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

// import icons
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../Components/Loader';
import { toast, ToastContainer } from 'react-toastify';



const Login = () => {
    const app = getAuth();
    const [user, loading] = useAuthState(app)
    const [Loading, setLoading] = useState(false)
    const [formdata, setformdata] = useState({
        Email: '',
        Password: ''
    })

    // Naveget Dayrect User
    const naveget = useNavigate()

    // handle Login
    const handelSendData = (e) => {
        e.preventDefault()
        setLoading(true);
        const auth = getAuth();
        try {

            signInWithEmailAndPassword(auth, formdata.Email, formdata.Password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    toast.success('Login successful!')
                    naveget('/')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage, errorCode);
                    toast.error('Error Email')
                    setLoading(false);
                })
        } catch (error) {
            console.error(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    // handle Facebook
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();
    auth.languageCode = 'it';
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });


    // handle Login Facebook
    provider.addScope('user_birthday');
    auth.languageCode = 'it';
    provider.setCustomParameters({
        'display': 'popup'
    });

    if (loading) {
        return <Loader />
    }


    if (!user) {
        return (
            <>
                <ToastContainer />
                <Header />
                <div className="form-login py-5">
                    <div className="forms">
                        <div className="logo text-center py-5">
                            <h1>Welcome <Link to={'/'}>Ultras</Link></h1>
                        </div>
                        <form className='w-100 p-5' onSubmit={handelSendData}>
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
                            {/* Submit button */}
                            {Loading ? <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button> : <button
                                type="submit"
                                data-mdb-ripple-init=""
                                className="btn btn-primary btn-block mb-3"
                            >
                                Sign In
                            </button>}
                        </form>
                        <div className="text-center">
                            <div className="register pb-4">
                                <p>Don't have an account?</p>
                                <Link to='/registration'>Register Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    } else {
        naveget('/')
    }
}

export default Login;
