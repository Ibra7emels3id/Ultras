import React, { useEffect, useState } from 'react';
import iconLogo from '../../images/main-logo.png'
import { Link, useNavigate } from 'react-router-dom'

// import Style css
import './css/Header.css'

// import imges user
import imguser from '../../images/user.jpg'

// import Icons material Ui 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { gettotal } from '../features/CartSlice';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import NavSearch from './NavSearch';


// style Icons Shop
const StyledBadgeCount = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

// style Icons User
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(3)',
            opacity: 0,
        },
    },
}));



const Header = () => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth)
    const [Headerscroll, setHeaderscroll] = useState('')
    const [search, setsearch] = useState('')

    const { cartquantity } = useSelector((state) => state.cart)







    const card = useSelector((state) =>
        state.cart
    )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(gettotal())
    }, [card, dispatch])


    window.onscroll = () => {
        if (scrollY > 100) {
            // console.log('text');
            setHeaderscroll('scrollbg')
            setsearch('d-none')
        } else {
            setHeaderscroll('')
            setsearch('d-flex align-items-center justufy-content-between')
        }
    }

    // Naveget Sine Out
    const Naveget = useNavigate()


    // handle SineOut
    const handleSineOut = () => {
        signOut(auth).then(() => {
            console.log(auth);
            Naveget('/')
        }).catch((error) => {
            console.log(error);
        });
    }



    return (
        <>

            <div className="NavBarHd position-relative">
                <nav className={`navbar bg-white navbar-expand-lg  flex-column w-100 ${Headerscroll}`}>
                    <div className={`border-bottom NavSearch w-100 m-auto ${search}`}>
                        <NavSearch />
                    </div>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img className='w-100' src={iconLogo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                <li className="nav-item mx-3">
                                    <Link className=" fs-5 text-black nav-link active" to='/'>Home</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className=" fs-5 text-black nav-link" to="/About">About</Link>
                                </li>
                                <li className="nav-item mx-3 dropdown position-relative">
                                    <a className=" fs-5 text-black nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/shop">Shop</Link></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item mx-3">
                                    <a className=" fs-5 text-black nav-link " role="button" aria-disabled="true">Pages</a>
                                </li> */}
                                <li className="nav-item mx-3">
                                    <Link to='/blog' className=" fs-5 text-black nav-link " role="button" aria-disabled="true">Plog</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link to='/contact' className=" fs-5 text-black nav-link " role="button" aria-disabled="true">Contact</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link to='/Cards' className=" fs-5 text-black nav-link  Gred" role="button" aria-disabled="true">
                                        <IconButton aria-label="cart">
                                            <StyledBadgeCount badgeContent={cartquantity} color="secondary">
                                                <ShoppingCartIcon />
                                            </StyledBadgeCount>
                                        </IconButton>
                                    </Link>
                                </li>
                                <li className="nav-item mx-3 d-flex align-items-center  justify-content-enter">
                                    {user ? <Stack className='m-auto'>
                                        <StyledBadge
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            variant="dot"
                                        >
                                            <Avatar alt="Remy Sharp" src={imguser} />
                                        </StyledBadge>
                                    </Stack> :
                                        <Link to='/Login' className=" fs-5 text-black nav-link  Gred m-auto" role="button" aria-disabled="true"><PersonIcon className='fs-2' /></Link>
                                    }
                                </li>
                                <li className="nav-item mx-3 d-flex align-items-center">
                                    {user ? <button onClick={() => {
                                        handleSineOut()
                                    }} to='/Cards' className=" fs-5 text-black nav-link  Gred" role="button" aria-disabled="true">
                                        <LogoutIcon />
                                    </button> : null}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
