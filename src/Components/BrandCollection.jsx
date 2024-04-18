import React from 'react';

// import imges brand
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import brand5 from '../../images/brand5.png'


// import style
import './css/BrandCollection.css'

const BrandCollection = () => {
    return (
        <>
            <div className="brand-collection">
                <div className="collection d-flex flex-wrap align-items-center justify-content-center gap-5">
                    <img className='' src={brand1} alt="" />
                    <img className='' src={brand2} alt="" />
                    <img className='' src={brand3} alt="" />
                    <img className='' src={brand4} alt="" />
                    <img className='' src={brand5} alt="" />
                </div>
            </div>
        </>
    );
}

export default BrandCollection;
