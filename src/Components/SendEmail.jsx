import React from 'react';

// import style css
import './css/SendEmail.css'

const SendEmail = () => {
    return (
        <>
            <div className="getOffers p-5 mb-5 mt-5 w-100">
                <h3 className='fw-bold fs-1 text-black'>Get 25% Off Discount Coupons</h3>
                <p className='brg fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
                <div className='d-flex align-itmes-center'>
                    <input className='getOffers-input' type="text" name="" id="" />
                    <button className='btn btn-Subscribe fw-bold'>Subscribe Now</button>
                </div>
            </div>
        </>
    );
}

export default SendEmail;
