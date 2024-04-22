import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import Bootstrap
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'



// import style css
// import './css/Login.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


// import icons


const Admin = () => {
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
                naveget('/dashbord')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
            });
    }


    return (
        <>
            {/* <Header /> */}
            <div className="container form-login">
                <div className="title-form text-center">
                    <h3 className='fs-1 fw-bold'>Login</h3>
                </div>
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

export default Admin;
