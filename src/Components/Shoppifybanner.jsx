import React from 'react';

// import style 
import './css/Shoppifybanner.css'

// import icon 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import imges bg modell
import bgmodell from '../../images/model.jpg'
import { Link } from 'react-router-dom';

const Shoppifybanner = () => {
    return (
        <>
            <section className='shop-modell w-100 pb-5'>
                <div className="modell position-relative">
                    <img className='rounded-5' src={bgmodell} alt="" />
                    <div className="modell-text position-absolute">
                        <span className='brg'>DENIM COLLECTION</span>
                        <h3 className='text-black'>The Casual Selection.</h3>
                        <p className='brg fs-5 pt-2 pb-2'>Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio.</p>
                        <Link className='btn btn-Shop' to='/'>Shop It Now <ArrowForwardIcon className='Icon' /></Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shoppifybanner;
