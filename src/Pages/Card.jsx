import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';

// import style
import './css/Card.css'

// import Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import migs1 from '../../images/selling-products15.jpg'
import { addtoCard } from '../features/CartSlice';
import { useDispatch } from 'react-redux';
const Card = () => {
    const [Products, setProducts] = useState({});
    const { DetailsId } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/Products/${DetailsId}`)
            // const data = await fetch('https://fakestoreapi.com/products')
            .then((Res) => Res.json())
            .then((Data)=>{
                // console.log(Data);
                setProducts(Data)
            })
    },[]);

    const dispatch = useDispatch()

console.log(DetailsId);
return (
    <>
        <Header />
        <div className="Detales-Card pt-5">
            <div style={{height: '100vh'}} className="row w-100 m-auto">
                <div className="col-lg-6">
                    <div className="pt-5">
                        <img className='w-100 ' src={Products.image} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 detals-text ">
                    <div className="p-5 d-flex flex-column justify-content-center h-100 gap-2">
                        <h3 className='fs-1 fw-bold'>{Products.title}</h3>
                        <p className='brg brg-text fs-4'>{Products.description}</p>
                        <div className="colors d-flex gap-5">
                            <span className='Black'></span>
                            <span className='Red'></span>
                            <span className='White'></span>
                        </div>
                        <p className='fs-4 mt-2 mb-2'>Rrice: {Products.price}$</p>
                        <h6 onClick={()=>{
                                dispatch(addtoCard(Products))
                        }} className='m-0 p-0 btn-Add-to-card'>Add To Cart <ArrowForwardIcon className='Icon' /></h6>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}

export default Card;
