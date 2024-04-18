import React from 'react';
import { Link } from 'react-router-dom';

// import style css
import './css/Footer.css'

// import imges Payment options :
import Payment1 from '../../images/visa-icon.jpg'
import Payment2 from '../../images/mastercard.png'
import Payment3 from '../../images/american-express.jpg'

// import icons content
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    return (
        <>
            <div className="Footer p-5 row w-100 row-gap-5 m-auto">
                <div className="footer-liks d-flex flex-column col-lg-3 gap-3 ">
                    <h5 className='fs-3 fw-bold mb-3'>Ultras</h5>
                    <Link className='brg' >About us</Link>
                    <Link className='brg' >Conditions</Link>
                    <Link className='brg' >Our Journals</Link>
                    <Link className='brg' >Careers</Link>
                    <Link className='brg' >Affiliate Programme</Link>
                    <Link className='brg' >Ultras Press</Link>
                </div>
                <div className="footer-Service d-flex flex-column col-lg-3 gap-3">
                    <h5 className='fs-3 fw-bold mb-3'>Customer Service</h5>
                    <Link className='brg' >FAQ</Link>
                    <Link className='brg' >Contact</Link>
                    <Link className='brg' >Privacy Policy</Link>
                    <Link className='brg' >Returns & Refunds</Link>
                    <Link className='brg' >Cookie Guidelines</Link>
                    <Link className='brg' >Delivery Information</Link>
                </div>
                <div className="footer-Contact d-flex flex-column col-lg-3 gap-2">
                    <h5 className='fs-3 fw-bold mb-3'>Contact Us</h5>
                    <p className='brg fs-4'>Do you have any questions or suggestions?</p>
                    <Link className='brg fs-4' >ourservices@ultras.com</Link>
                    <p className='brg'>Do you need assistance? Give us a call.</p>
                    <Link className='brg'>+57 444 11 00 35</Link>
                </div>
                <div className="footer-Forever d-flex flex-column col-lg-3">
                    <h5 className='fs-3 fw-bold mb-3'>Forever 2024</h5>
                    <p className='brg fs-5' >Cras mattis sit ornare in metus eu amet adipiscing enim. Ullamcorper in orci, ultrices integer eget arcu. Consectetur leo dignissim lacus, lacus sagittis dictumst.</p>
                    <div className="icons d-flex align-items-center ">
                        <FacebookIcon className='btn-icon mx-3 fs-3 '/>
                        <InstagramIcon className='btn-icon mx-3 fs-3 '/>
                        <TwitterIcon className='btn-icon mx-3 fs-3 '/>
                        <YouTubeIcon className='btn-icon mx-3 fs-3 '/>
                    </div>
                </div>
            </div>
            <div className="main-footer d-flex align-items-center justify-content-between border-top p-5">
                <h5 className='brg fs-5'>Freebies by Templates Jungle Distributed by ThemeWagon</h5>
                <div className="Payment d-flex align-items-center">
                    <p className='p-0 m-0'>Payment options :</p>
                    <div className="imges">
                        <img src={Payment1} alt="" />
                        <img src={Payment2} alt="" />
                        <img src={Payment3} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
