import React from 'react';
import { Link } from 'react-router-dom';



// import style
import './css/Ourteam.css'

// import icons
import InstagramIcon from '@mui/icons-material/Instagram';

// import imges team
import team1 from '../../images/insta-image1.jpg'
import team2 from '../../images/insta-image2.jpg'
import team3 from '../../images/insta-image3.jpg'
import team4 from '../../images/insta-image4.jpg'
import team5 from '../../images/insta-image5.jpg'
import team6 from '../../images/insta-image6.jpg'


const Ourteam = () => {
    return (
        <>
            <section>
                <div className="Ourteam p-5 mb-5">
                    <div className="titles pb-5 pt-5 d-flex mt-5 align-items-start flex-column">
                        <h3 className='fw-bold fs-1'>Follow Our Instagram</h3>
                        <p className='mt-3 brg fs-5'>Our official Instagram account<Link className='btn fs-5' to='/'>@ultras</Link>or <Link className='btn fs-5 ' to='/'>#ultras_clothing</Link></p>
                    </div>
                    <div className="Ourteam-imges d-flex align-items-center w-100 gap-3 justify-content-around flex-wrap">
                        <div className="imge position-relative">
                            <img className=' rounded' src={team1} alt="" />
                            <div className="text d-flex align-items-center justify-content-center">
                                <InstagramIcon  className='fs-1' />
                            </div>
                        </div>
                        <div className="imge position-relative">
                            <img className=' rounded' src={team2} alt="" />
                            <div className="text d-flex align-items-center justify-content-center">
                                <InstagramIcon  className='fs-1' />
                            </div>
                        </div>
                        <div className="imge position-relative">
                            <img className=' rounded' src={team3} alt="" />
                            <div className="text d-flex align-items-center justify-content-center">
                                <InstagramIcon  className='fs-1' />
                            </div>
                        </div>
                        <div className="imge position-relative">
                            <img className=' rounded' src={team4} alt="" />
                            <div className="text d-flex align-items-center justify-content-center">
                                <InstagramIcon  className='fs-1' />
                            </div>
                        </div>
                        <div className="imge position-relative">
                            <img className=' rounded' src={team5} alt="" />
                            <div className="text d-flex align-items-center justify-content-center">
                                <InstagramIcon  className='fs-1' />
                            </div>
                        </div>
                        <div className="imge position-relative">
                            <img className=' rounded' src={team6} alt="" />
                            <div className="text d-flex align-items-center justify-content-center">
                                <InstagramIcon  className='fs-1' />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Ourteam;
