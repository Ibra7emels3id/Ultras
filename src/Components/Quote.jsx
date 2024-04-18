import React from 'react';

// import style
import './css/Quote.css'

const Quote = () => {
    return (
        <>
            <div className="Quote text-center p-5">
                <h4 className='fw-bold pb-5'>Quote Of The Day</h4>
                <p className='brg fs-3 w-50 m-auto pt-5 pb-5'>It's true, I don't like the whole cutoff-shorts-and-T-shirt look, but I think you can look fantastic in casual clothes.</p>
                <span className='brg fs-3 fw-bold'>-- Dr. Seuss</span>
            </div>
        </>
    );
}

export default Quote;
