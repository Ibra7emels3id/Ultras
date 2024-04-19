import React, { useEffect, useState } from 'react';
import Cards from './Cards';

// import style
import './css/Productss.css'

// import Get Data Api redux 
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/ProductsSlice';
import { Login } from '@mui/icons-material';




const Productss = () => {
    const [alignment, setAlignment] = useState('All');
    const [MinPrice, setMinPrice] = useState(20);
    const [MaxPrice, setMaxPrice] = useState(50);
    const dispatch = useDispatch()
    const Products = useSelector((state) => state.products.data)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    // ======================
    //  filter Products 
    // ======================

    const CatgoryShoes = Products.filter((it) => {
        return it.category === alignment
    })

    const FilterPrice = Products.filter((it) => {
        return it.price >= MinPrice && it.price <= MaxPrice;
    })

    console.log(FilterPrice);


    let AllProductsCatgory = Products

    if (alignment !== 'All') {
        AllProductsCatgory = CatgoryShoes
    } else {
        AllProductsCatgory = Products
    }

    // Get Card Data 
    const product = AllProductsCatgory.map((itme) => {
        return <Cards title={itme.title} id={itme.id} key={itme.id} price={itme.price} imgs={itme.image} />
    })


    // handel Change
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };



    return (
        <>
            <div className="Products p-3 m-auto pt-5 pb-5">
                <div className="Product-title text-center">
                    <h2 >Best Selling Products</h2>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        sx={{ margin: '50px auto', flexWrap: 'wrap',textAlign: 'center', padding: '0', width: '100%', display: 'flex', justifyContent:'center' }}
                    >
                        <ToggleButton sx={{ border: 'none', width: '130px', margin: '0', textAlign: 'center' }} value="All">All</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '130px', margin: '0', textAlign: 'center' }} value="Shoes">Shoes</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '130px', margin: '0', textAlign: 'center' }} value="Tshirts">Tshirts</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '130px', margin: '0', textAlign: 'center' }} value="Pants">Pants</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '130px', margin: '0', textAlign: 'center' }} value="Hoodie">Hoodie</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '130px', margin: '0', textAlign: 'center' }} value="Outer">Outer</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '130px', margin: '0', textAlign: 'center' }} value="Jackets">Jackets</ToggleButton>
                        <ToggleButton sx={{ border: 'none', width: '130px', margin: '0', textAlign: 'center' }} value="Accessories">Accessories</ToggleButton>
                    </ToggleButtonGroup>
                    {/* <div>
                        <button onClick={() => handleMinPriceClick(0)}>All</button>
                        <button onClick={() => handleMinPriceClick(0)}>Under $50</button>
                        <button onClick={() => handleMinPriceClick(50)}>$50 - $100</button>
                        <button onClick={() => handleMinPriceClick(100)}>Over $100</button>
                    </div>
                    <div>
                        <button onClick={() => handleMaxPriceClick(50)}>Under $50</button>
                        <button onClick={() => handleMaxPriceClick(100)}>$50 - $100</button>
                        <button onClick={() => handleMaxPriceClick(1000)}>Over $100</button>
                        <button onClick={() => handleMaxPriceClick(Infinity)}>All</button>
                    </div> */}
                </div>
                <div className="row w-100 m-auto row-gap-4">
                    {product}
                </div>
            </div>
        </>
    );
}

export default Productss;
