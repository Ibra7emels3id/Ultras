
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/Mainheaders.css';

// import required modules
import { Pagination, Navigation , Autoplay } from 'swiper/modules';

// icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';



const Mainheaders = () => {


    return (
        <>
            <Swiper
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                simulateTouch={false}
                modules={[Pagination, Navigation , Autoplay]}
                className="mySwiperr"
            >
                <SwiperSlide className='img1 d-flex align-items-center'>
                    <div className="text-Bg container">
                        <h2 className='head-Title text-black'>Casual<br /> Collection</h2>
                        <p className='brg w-50 fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                        <Link className='btn btn-Shop' to='/'>Shop It Now <ArrowForwardIcon className='Icon' /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='img2 d-flex align-items-center '>
                    <div className="text-Bg container">
                        <h2 className='head-Title text-black'>Casual<br /> Collection</h2>
                        <p className='brg w-50 fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                        <Link className='btn btn-Shop' to='/'>Shop It Now <ArrowForwardIcon className='Icon' /></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Mainheaders;
