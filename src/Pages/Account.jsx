import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../Components/Header';


// import style css
import './css/Account.css'

const Account = () => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth)
    return (
        <>
            <Header />
            <div className='Account'>
                {user ? <div className="acc">
                    <h1>{user.email}</h1>
                    <h1>{user.displayName}</h1>
                </div> : null}
            </div>
        </>
    );
}

export default Account;
