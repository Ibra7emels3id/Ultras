import React from 'react';



// import style css
import './css/Services.css' 

// import icons services
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';
import StyleIcon from '@mui/icons-material/Style';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Services = () => {
    return (
        <>
            <div className="Services p-5 flex-wrap gap-4 d-flex align-items-center justify-content-around border mb-5 mt-5 ">
                <div className="Services-box d-flex align-items-center">
                    <LocalShippingIcon className='p-0 m-0 fs-1 icon' />
                    <h6 className='p-0 m-0 fs-4 fw-bold mx-2'>Free shipping </h6>
                    <p className='p-0 m-0'>Over $200</p>
                </div>
                <div className="Services-box d-flex align-items-center">
                    <LogoutIcon className='p-0 m-0 fs-1 icon' />
                    <h6 className='p-0 m-0 fs-4 fw-bold mx-2'>Money back  </h6>
                    <p className='p-0 m-0'>Return within 7 days</p>
                </div>
                <div className="Services-box d-flex align-items-center">
                    <StyleIcon className='p-0 m-0 fs-1 icon' />
                    <h6 className='p-0 m-0 fs-4 fw-bold mx-2'>Buy 4 get 5th </h6>
                    <p className='p-0 m-0'>50% off</p>
                </div>
                <div className="Services-box d-flex align-items-center">
                    <HelpOutlineIcon className='p-0 m-0 fs-1 icon' />
                    <h6 className='p-0 m-0 fs-4 fw-bold mx-2'>Any questions?  </h6>
                    <p className='p-0 m-0'>experts are ready</p>
                </div>
            </div>
        </>
    );
}

export default Services;
