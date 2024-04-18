import React from 'react';

// import style
import './css/Offersimg.css'

// import material
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


// import Imges
import collection1 from '../../images/collection-item1.jpg';
import collection2 from '../../images/collection-item2.jpg';
import collection3 from '../../images/collection-item3.jpg';
import { Link } from 'react-router-dom';

const Offersimg = () => {
    return (
        <>
            <div className="imges w-100 m-auto mb-5">
                <div className="row w-100 h-100 m-auto row-gap-4">
                    <div className="collection-right col-lg-7 position-relative">
                        <img className='w-100 h-100 rounded' src={collection1} alt="" />
                        <div className="collection-text position-absolute ">
                            <p className='CASUAL'>CASUAL COLLECTION</p>
                            <h6 className='collection-text_title fw-bold text-black'>Street Wear.</h6>
                            <p className='brg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                            <Link className='btn .collection-text_btn fs-4 bg-white' to='/'>Shop Collection <ArrowForwardIcon className='Icon' /></Link>
                        </div>
                    </div>
                    <div className="collection-left col-lg-5     gap-4 d-flex flex-column">
                        <div className='w-100 position-relative '>
                            <img className='w-100 h-100' src={collection2} alt="" />
                            <div className="collection-text position-absolute">
                                <p className='CASUAL brg fs-5'>BASIC COLLECTION</p>
                                <h6 className='collection-text_title fw-bold text-black fs-1'>Basic Shoes.</h6>
                                <Link className='btn .collection-text_btn fs-5 ' to='/'>Shop Collection <ArrowForwardIcon className='Icon' /></Link>
                            </div>
                        </div>
                        <div className='w-100 position-relative'>
                            <img className='w-100 h-100' src={collection3} alt="" />
                            <div className="collection-text position-absolute">
                                <p className='CASUAL brg fs-5'>BEST SELLING PRODUCT</p>
                                <h6 className='collection-text_title fw-bold text-black fs-1'>Woolen Hat.</h6>
                                <Link className='btn .collection-text_btn fs-5' to='/'>Shop Collection <ArrowForwardIcon className='Icon' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offersimg;
