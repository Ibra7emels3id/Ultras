import React from 'react';
import Header from '../Components/Header';
import Services from '../Components/Services';
import { Link } from 'react-router-dom';

// import style css
import './css/Contact.css'



// import imges About
import Aboutimg from '../../images/single-image1.jpg'


// import icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Description from '../Components/description';
import Articles from '../Components/Articles';
import BrandCollection from '../Components/BrandCollection';
import Ourteam from '../Components/Ourteam';
import Footer from '../Components/Footer';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="About position-relative">
                <div className="bg-img d-flex align-items-center ">
                </div>
                <div className="links d-flex align-items-center justify-content-center flex-column">
                    <h3 className='fw-bold text-black   '>Contact Us</h3>
                    <div className='d-flex align-items-center'>
                        <Link to='/' className='btn fs-5'>Home</Link>/ <span className='fs-5'> contact</span>
                    </div>
                </div>
                <div className="content-About w-100 pt-5">
                    <div className="desc-about row w-100  ">
                        <div className="col-lg-6 m-auto p-5 d-flex flex-column gap-3">
                            <h3 className="text fs-1">Get In Touch</h3>
                            <p className='brg'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <h6 style={{ color: '#777' }}><LocalPhoneIcon sx={{ mr: '10px', color: '#777', fontSize: '30px' }} />+1650-243-0000</h6>
                            <h6 style={{ color: '#777' }}><EmailIcon sx={{ mr: '10px', color: '#777', fontSize: '30px' }} />info@yourcompany.com</h6>
                            <h6 style={{ color: '#777' }}><PlaceIcon sx={{ mr: '10px', color: '#777', fontSize: '30px' }} />North Melbourne VIC 3051, Australia</h6>
                            <p className='fs-2 fw-bold'>Social Links</p>
                            <div className="icons-Contact">
                                <FacebookIcon sx={{ mr: '10px', color: '#1877f2', fontSize: '30px' }} />
                                <InstagramIcon sx={{ mr: '10px', color: '#e90420', fontSize: '30px' }} />
                                <XIcon sx={{ mr: '10px', fontSize: '30px' }} />
                                <YouTubeIcon sx={{ mr: '10px', color: 'red', fontSize: '30px' }} />
                                <WhatsAppIcon sx={{ mr: '10px', color: '#00e676', fontSize: '30px' }} />
                            </div>
                        </div>
                        <div className="form-contact col-ls-6 w-50 d-flex flex-column p-5 gap-3 m-auto">
                            <h3 className='fs-1'>Send Us A Message</h3>
                            <form className='d-flex flex-column gap-3' action="">
                                <input type="text" name="" id="" placeholder='Name' />
                                <input type="email" name="" id="" placeholder='Email' />
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <div className="label d-flex align-items-center">
                                    <input className='text-black bg-black' type='checkbox' name="" id="" />
                                    <label className='mx-2' htmlFor="">I agree all the <Link className='text-black' to='/'>terms and conditions</Link></label>
                                </div>
                                <button type="button" name="" id="" className="btn bg-black p-3 text-white fs-3">Submit</button>
                            </form>
                        </div>
                        <div className="maps w-100 mt-5">
                            <iframe
                                className='w-100'
                                height={600}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13707.68159370657!2d31.24838950151116!3d30.804866523258504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bfbf3771fd09%3A0x432f8e65fe8a1efe!2z2YXZitiqINij2LTZhtin2Iwg2YXYsdmD2LIg2KPYrNin2Iwg2YXYrdin2YHYuNipINin2YTYr9mC2YfZhNmK2Kk!5e0!3m2!1sar!2seg!4v1713643606912!5m2!1sar!2seg"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
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

export default Contact;
