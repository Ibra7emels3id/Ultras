import React from 'react';
import Header from './Components/Header';
import Mainheader from './Components/Mainheader';
import AddProduct from './Components/AddProduct';
import Tabledata from './Components/Tabledata';
import TableData from './Components/Tabledata';

const Dashbord = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Mainheader />
                <div className="menu m-4">
                    <AddProduct />
                </div>
                <TableData/>
            </div>
        </>
    );
}

export default Dashbord;
