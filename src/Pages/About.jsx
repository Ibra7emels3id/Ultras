import React from 'react';
import Header from '../Components/Header';
import Services from '../Components/Services';
import { Link } from 'react-router-dom';

// import style css
import './css/About.css'



// import imges About
import Aboutimg from '../../images/single-image1.jpg'


// import icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Description from '../Components/description';
import Articles from '../Components/Articles';
import BrandCollection from '../Components/BrandCollection';
import Ourteam from '../Components/Ourteam';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <>
            <Header />
            <div className="About position-relative">
                <div className="bg-img d-flex align-items-center ">
                </div>

                <div className="links d-flex align-items-center justify-content-center flex-column">
                    <h3 className='fw-bold text-black   '>About Us</h3>
                    <div className='d-flex align-items-center'>
                        <Link to='/' className='btn fs-5'>Home</Link>/ <span className='fs-5'> About</span>
                    </div>
                </div>
                <div className="content-About w-100 m-auto">
                    <Services />
                    <div className="desc-about row w-100 m-auto ">
                        <div className="col-lg-6 col-xl-6 m-auto">
                            <div className="imges">
                                <img className='w-100' src={Aboutimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 d-flex align-items-center">
                            <div className="d-flex flex-column text-black ">
                                <h4 className='fw-bold'>How Was Ultras Store Started?</h4>
                                <p className='p-0 m-0 brg pt-3 mb-3'>Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at.
                                    Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et.</p>
                                <Link className='btn btn-Shop ' to='/'>Shop our Store <ArrowForwardIcon className='Icon' /></Link>
                            </div>
                        </div>
                    </div>
                    <Description />
                    <div className="border-top">
                        <Articles />
                    </div>
                    <BrandCollection/>
                    <Ourteam/>
                    <Footer/>
                </div>
            </div>

        </>
    );
}

export default About;
