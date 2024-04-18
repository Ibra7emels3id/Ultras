import React from 'react';
import { useContext } from 'react';
import { ContextProduct } from '../Context/Context';
import { Link } from 'react-router-dom';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


// import style
import './css/Flashsales.css'


// import icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Checkbox } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Favorite, FavoriteBorder } from '@mui/icons-material';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Flashsales = () => {
    const { Products, setProducts } = useContext(ContextProduct);

    // console.log(Products);
    return (
        <>
            <div className="titles p-5 d-flex mt-5 align-items-center justify-content-between">
                <h3 className='fw-bold fs-1'>Flash Sales</h3>
            </div>
            <div className="row Flashsales mb-5 w-100 p-1 m-auto">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        100: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        500: {
                            slidesPerView: 1,
                            spaceBetween: 100,
                        },
                        670: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1300: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {Products.map((product) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div key={product.id} className="">
                                <SwiperSlide key={product.id} className="box p-3 h-100 rounded position-relative">
                                    <div className="imge h-100 p-2 border rounded">
                                        <img className='w-100 h-100 rounded' src={product.image} alt="" />
                                    </div>
                                    <div className="box-title p-2">
                                        <h4 className='fw-bold p-1'>{product.title}</h4>
                                        <p className='fs-4 fw-semibold'>$ {product.price}</p>
                                    </div>
                                    <div className="Icons d-flex align-items-center  w-100 position-absolute justify-content-around     rounded ">
                                        <h6 className='m-0 p-0'>Add To Cart <ArrowForwardIcon className='Icon' /></h6>
                                        <FullscreenIcon className='text-black fs-3 screen' />
                                        <div>
                                            <Checkbox {...label} icon={<FavoriteBorder className='text-black' />} checkedIcon={<Favorite />} />
                                            <Checkbox
                                                {...label}
                                                icon={<BookmarkBorderIcon className='text-black' />}
                                                checkedIcon={<BookmarkIcon  />}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })}
                </Swiper>
            </div>
        </>
    );
}

export default Flashsales;
