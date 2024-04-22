import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import css
import './css/NavSearch.css'


// import icons
import SearchIcon from '@mui/icons-material/Search';

const NavSearch = () => {
    const [DataSearch, setDataSearch] = useState('')
    const [Products, setProducts] = useState([])
    const naveget = useNavigate()



    const getDataSEarch = async () => {
        const Res = await fetch('http://localhost:3000/Products')
        const Data = await Res.json()
        // console.log(Data);
        setProducts(Data)
    }

    useEffect(() => {
        getDataSEarch()
        
    }, []);

    const handleDataSearch = Products.filter((item) => {
        return item.title.toLowerCase().includes(DataSearch.toLowerCase())
    })

    return (
        <>
            <div className="container-fluid position-relative">
                <div className="context text-center d-flex align-items-center justify-content-between p-2 w-100 m-auto">
                    <p className='p-0 m-0 tellConect'>Let's talk! <Link to=''>+57 444 11 00 35</Link></p>
                    <div className="search d-flex align-items-center justify-content-center  m-auto text-center">
                        <input onChange={(e) => {
                            setDataSearch(e.target.value)
                        }} className='w-100' type="search" name="" id="" />
                        <SearchIcon className='icon' sx={{ fontSize: '35px', margin: '0 -45px' }} />
                    </div>
                    <h6 className='Free-shipping p-0 m-0'>Free shipping on a purchase value of $200</h6>
                </div>
                <div className={`container  getDataShow position-absolute text-center`}>
                        {DataSearch == '' ? null : handleDataSearch.map((item)=>{
                            return(
                                <>
                                    <Link to={`/Card/${item.id}`} className='my-5 d-block fs-4'>{item.title}</Link>
                                </>
                            )
                        })}
                </div>
            </div>
        </>
    );
}

export default NavSearch;
