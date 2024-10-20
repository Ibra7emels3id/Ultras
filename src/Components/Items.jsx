import React, { useEffect, useState } from 'react';

// import Get Data Api redux 
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/ProductsSlice';
import { Login } from '@mui/icons-material';
import Cards from './Cards';

// import style
import './css/Productss.css'

const Items = () => {

    const [alignment, setAlignment] = useState('All');
    const [CountPrice, setCountPrice] = useState({
        min:null,
        max:null
    });
    const [flterPrice , setflterPrice] = useState('');
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

    const handleFilterPrice = (e) =>{
        e.preventDefault()
        const FilterPrice = Products.filter((it) => {
            return it.price >= CountPrice.min && it.price <= CountPrice.max;
        })
        setflterPrice(FilterPrice)
        CountPrice.min = ''
        CountPrice.max = ''
    }

    let AllProductsCatgory = Products

    if (alignment !== 'All') {
        AllProductsCatgory = CatgoryShoes
    }else if(flterPrice !== ''){
        AllProductsCatgory = flterPrice
    }else if(flterPrice == ''){
        AllProductsCatgory = Products
    }else {
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
            <ToggleButtonGroup
            className=''
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{ margin: '50px auto',overflow: 'auto', padding: '0', width: '100%', display: 'flex' }}
            >
                <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="All">All</ToggleButton>
                <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="Shoes">Shoes</ToggleButton>
                <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="Tshirts">Tshirts</ToggleButton>
                <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="Pants">Pants</ToggleButton>
                <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="Hoodie">Hoodie</ToggleButton>
                <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="Outer">Outer</ToggleButton>
                <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="Jackets">Jackets</ToggleButton>
                <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="Accessories">Accessories</ToggleButton>
            </ToggleButtonGroup>
            <div className="select text-start px-5 pb-5">
                <form action="" className='d-flex '>
                    <input onChange={(e)=>{
                        setCountPrice({...CountPrice ,min: e.target.value})
                    }} value={CountPrice.min} className='px-3' type="text" placeholder='Min - Price'  />
                    <input onChange={(e)=>{
                        setCountPrice({...CountPrice ,max: e.target.value})
                    }} value={CountPrice.max}  className=' px-3' type="text" placeholder='Max - Price'  />
                    <button onClick={(e)=>{
                        handleFilterPrice(e)
                    }} className="">Submit</button>
                </form>
            </div>
            <div className="row w-100 m-auto row-gap-4">
                {product}
            </div>
            <div className="box d-flex align-items-center"></div>
        </>
    );
}

export default Items;
