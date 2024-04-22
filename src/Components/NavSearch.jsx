import React from 'react';
import { Link } from 'react-router-dom';

// import css
import './css/NavSearch.css'


// import icons
import SearchIcon from '@mui/icons-material/Search';

const NavSearch = () => {
    return (
        <>
            <div className="context d-flex align-items-center justify-content-between p-2 w-100">
                <p className='p-0 m-0'>Let's talk! <Link to=''>+57 444 11 00 35</Link></p>
                <div className="search d-flex align-items-center">
                    <input type="search" name="" id="" />
                    <SearchIcon className='icon' sx={{fontSize: '35px' , margin: '0 -45px'}} />
                </div>
                <h6 className='p-0 m-0'>Free shipping on a purchase value of $200</h6>
            </div>
        </>
    );
}

export default NavSearch;
