import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Components/Header';

// import Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { IconButton } from '@mui/material';



    // get Data Details Product
const Detalsproduct = () => {
    const [Products, setProducts] = useState({});
    const { DetailsId } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/Products/${DetailsId}`)
            .then((Res) => Res.json())
            .then((Data) => {
                // console.log(Data);
                setProducts(Data)
            })
    }, []);

    
    return (
        <>
            <Header />
            <div className="Detales-Card">
                <div style={{ height: '100vh' }} className="row w-100 m-auto">
                    <div className="col-lg-6">
                        <div className="pt-3">
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
                            <div className="cleck d-flex align-items-center justify-content-around">
                                <Link to={`/update/${Products.id}`} color="secondary"><EditNoteIcon sx={{ fontSize: '50px' }} /></Link>
                                <Link className='' to=''>
                                    <IconButton onClick={() => {
                                        // handleDeleteproduce(`${item.id}`)
                                    }} aria-label="delete" size="large">
                                        <DeleteIcon fontSize="inherit" sx={{ fontSize: '40px' }} />
                                    </IconButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalsproduct;
