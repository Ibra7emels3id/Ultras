import React, { useEffect } from 'react';
import Cards from './Cards';

// import style
import './css/Productss.css'

// import Get Data Api redux 
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/ProductsSlice';




const Productss = () => {
    const [alignment, setAlignment] = React.useState('web');
    const dispatch = useDispatch()
    const Products = useSelector((state) => state.products.data)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    // Get Card Data 
    const product = Products.map((itme) => {
        return <Cards title={itme.title} id={itme.id} key={itme.id} price={itme.price} imgs={itme.image} />
    })


    // handel Change
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };



    return (
        <>
            <div className="Products p-3 m-auto pt-5 pb-5">
                <div className="Product-title">
                    <h2 >Best Selling Products</h2>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        sx={{ margin: '50px 0' ,  flexWrap: 'wrap'}}
                    >
                        <ToggleButton sx={{ border: 'none', width: '120px' }} value="All">All</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '120px' }} value="Shoes">Shoes</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '120px' }} value="Tshirts">Tshirts</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '120px' }} value="Pants">Pants</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '120px' }} value="Hoodie">Hoodie</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '120px' }} value="Outer">Outer</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '120px' }} value="Jackets">Jackets</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '120px' }} value="Accessories">Accessories</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className="row w-100 m-auto row-gap-4">
                    {product}
                </div>
            </div>
        </>
    );
}

export default Productss;
