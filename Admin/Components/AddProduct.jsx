import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    return (
        <>
            <Link className='btn btn-primary w-100' to='/addProduct' sx={{width: '100%'}} variant="contained" disableElevation>
                Add New Product
            </Link>
        </>
    );
}

export default AddProduct;
