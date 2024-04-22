import React from 'react';

// import style
import './css/Cards.css'

// import icons
import { Checkbox } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addtoCard } from '../features/CartSlice';
import { Link } from 'react-router-dom';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Cards = ({ title, id, price, imgs }) => {


    const dispatch = useDispatch()
    



    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
                <div className="card  p-2 position-relative">
                    <div className="imge border rounded p-2 bg-white">
                        {/* <img style={{height: '230px'}} className='w-100 rounded' src={imgs} alt="" /> */}
                        <img className='w-100 rounded' src={imgs} alt="" />
                    </div>
                    <div className="text-box d-flex flex-column">
                        <h5 className='pt-3 px-3 fw-bold fs-4'>{title.slice(0, 20)}...</h5>
                        <p className='pt-2 px-3 fs-4'>${price}</p>
                    </div>
                    <div className="Icons d-flex align-items-center  w-100 position-absolute justify-content-around     rounded ">
                        <h6 onClick={()=>{
                            dispatch(addtoCard({ title, id, price, imgs }))
                        }} className='m-0 p-0'>Add To Cart <ArrowForwardIcon className='Icon' /></h6>
                        <Link to={`/Card/${id}`}><FullscreenIcon className='text-black fs-3 screen' /></Link>
                        <div>
                            <Checkbox {...label} icon={<FavoriteBorder className='text-black' />} checkedIcon={<Favorite />} />
                            <Checkbox
                                {...label}
                                icon={<BookmarkBorderIcon className='text-black' />}
                                checkedIcon={<BookmarkIcon />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Cards;
