// Import Swiper React components
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , Autoplay  } from 'swiper/modules';

import './css/Description.css';


// import Icons
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';



const Description = () => {
    return (
        <>
            <div className="description d-flex align-items-center pb-5  ">
                <div className="icons-description">
                    <FormatQuoteIcon className='icon' sx={{fontSize: '400px', color: '#8d8d8d', width: '100%'}} />
                </div>
                <Swiper
                style={{width: '90%'}}
                    spaceBetween={30}
                    loop={true}
                    // autoplay={{
                    //     delay: 2000
                    // }}
                    // navigation={true}
                    modules={[Pagination  , Autoplay ]}
                    className="mySwiper"
                >
                    <SwiperSlide className='Description-slider'>
                        <p className='brg fs-4'>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                        <h4 className='Description-title fs-1 fw-bold'>By John Smith</h4>
                    </SwiperSlide>
                    <SwiperSlide className='Description-slider'>
                        <p className='brg fs-4'>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                        <h4 className='Description-title fs-1 fw-bold'>By John Smith</h4>
                    </SwiperSlide>
                    <SwiperSlide className='Description-slider'>
                        <p className='brg fs-4'>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                        <h4 className='Description-title fs-1 fw-bold'>By John Smith</h4>
                    </SwiperSlide>
                    <SwiperSlide className='Description-slider'>
                        <p className='brg fs-4'>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                        <h4 className='Description-title fs-1 fw-bold'>By John Smith</h4>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Description;
