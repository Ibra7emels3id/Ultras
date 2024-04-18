import React from 'react';
import { Link } from 'react-router-dom';

// import css style
import './css/Articles.css'

// import imges Articles
import Articles1 from '../../images/post-img1.jpg'
import Articles2 from '../../images/post-img2.jpg'
import Articles3 from '../../images/post-img3.jpg'
import Articles4 from '../../images/post-img4.jpg'


// import icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Articles = () => {
    return (
        <>
            <div className="Articles p-5">
                <div className="titles pb-5 pt-5 d-flex mt-5 align-items-center justify-content-between">
                    <h3 className='fw-bold fs-1'>Our Journal</h3>
                    <Link className='btn fs-5 fw-bold' to='/'>Read All Articles <ArrowForwardIcon className='Icon' /></Link>
                </div>
                <div className="row w-100 m-auto row-gap-5">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="img">
                                <img src={Articles1} alt="" className="w-100" />
                            </div>
                            <div className="Card-text d-flex align-items-center pt-3">
                                <div className="Date ">
                                    <span className='fs-2'>22</span>
                                    <p className='fs-5'>Aug-2021</p>
                                </div>
                                <div className="Card-title">
                                    <h4 className='fw-bold fs-4 mx-2'>Top 10 Casual Look Ideas To Dress Up Your Kids</h4>
                                    <span className='brg fw-bold mx-2'>FASHION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="img">
                                <img src={Articles2} alt="" className="w-100" />
                            </div>
                            <div className="Card-text d-flex align-items-center pt-3">
                                <div className="Date">
                                    <span className='fs-2'>22</span>
                                    <p className='fs-5'>Aug-2021</p>
                                </div>
                                <div className="Card-title">
                                    <h4 className='fw-bold fs-4 mx-2'>Top 10 Casual Look Ideas To Dress Up Your Kids</h4>
                                    <span className='brg fw-bold mx-2'>FASHION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="img">
                                <img src={Articles3} alt="" className="w-100" />
                            </div>
                            <div className="Card-text d-flex align-items-center pt-3">
                                <div className="Date">
                                    <span className='fs-2'>22</span>
                                    <p className='fs-5'>Aug-2021</p>
                                </div>
                                <div className="Card-title">
                                    <h4 className='fw-bold fs-4 mx-2'>Top 10 Casual Look Ideas To Dress Up Your Kids</h4>
                                    <span className='brg fw-bold mx-2'>FASHION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Articles;
