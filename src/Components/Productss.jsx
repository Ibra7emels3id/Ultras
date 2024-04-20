import React, { useEffect, useState } from 'react';
import Cards from './Cards';

// import style
import './css/Productss.css'
import Items from './Items';






const Productss = () => {

    


    return (
        <>
            <div className="Products p-3 m-auto pt-5 pb-5">
                <div className="Product-title text-center">
                    <h2 >Best Selling Products</h2>
                    
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
                <Items/>
            </div>
        </>
    );
}

export default Productss;
