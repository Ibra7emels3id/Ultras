import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Components/Services';


// import imges About
import Aboutimg from '../../images/single-image1.jpg'
import Header from '../Components/Header';


// import icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Description from '../Components/description';
import Articles from '../Components/Articles';
import BrandCollection from '../Components/BrandCollection';
import Ourteam from '../Components/Ourteam';
import Footer from '../Components/Footer';
import Productss from '../Components/Productss';
import Items from '../Components/Items';



const shop = () => {
    return (
        <>
            <Header />
            <div className="About position-relative">
                <div className="bg-img d-flex align-items-center ">
                </div>
                <div className="links d-flex align-items-center justify-content-center flex-column">
                    <h3 className='fw-bold text-black'>Shop Page</h3>
                    <div className='d-flex align-items-center'>
                        <Link to='/' className='btn fs-5'>Home</Link>/ <span className='fs-5'> Shop</span>
                    </div>
                </div>
                <div className="content-About w-100 pt-5">
                    <Items />
                    <Description />
                    <div className="border-top">
                        <Articles />
                    </div>
                    <BrandCollection />
                    <Ourteam />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default shop;
