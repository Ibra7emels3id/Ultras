import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header';
import { ClearCards, DeleteCart, addtoCard, gettotal, miunsToCart } from '../features/CartSlice';


// import icons Ceack Out
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

// import style css
import './css/Ceackout.css'

// import React tost
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// import tables 
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));





const Ceackout = () => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth)

    const CardProduct = useSelector((state) => state.cart.cardItems)
    const dicpatch = useDispatch()

    const card = useSelector((state) =>
        state.cart
    )
    // console.log(card);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(gettotal())
    }, [card , dispatch])


    return (
        <>
            <Header />
            <ToastContainer />
            <div style={{ paddingTop: '150px' }} className="cards">
                {CardProduct.length === 0 ? <div className="durectShop text-center">
                    <h4 className='fs-2 fw-bold'>Shopping Cart</h4>
                    <p className='fs-1 p-4'>your is currentiy empty</p>
                    <Link to='/Products' className='btn fs-4'><ArrowBackIcon className='fs-3' /> start Shopping</Link>
                </div> : <div className="Cart-itmes">
                    <h4 className='fs-1 fw-bold text-center'>Shopping Cart</h4>
                    <TableContainer sx={{ width: '90%', margin: 'auto' }} className='mt-5 mb-5' component={Paper}>
                        <Table sx={{ minWidth: 100 }} aria-label="customized table">
                            <TableHead sx={{ width: '200px' }}>
                                <TableRow sx={{ width: '200px' }}>
                                    <StyledTableCell align="center" sx={{ width: '150px' }}>Cart Imge</StyledTableCell>
                                    <StyledTableCell align="center">Title</StyledTableCell>
                                    <StyledTableCell align="center">Price</StyledTableCell>
                                    <StyledTableCell align="center">Quantity</StyledTableCell>
                                    <StyledTableCell align="center">Item Total Price</StyledTableCell>
                                    <StyledTableCell align="center">Delete Product</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {CardProduct.map((itme) => (
                                    <StyledTableRow className='d-fle align-items-center justify-content-beween w-100' key={itme.id}>
                                        <StyledTableCell component="" scope="">
                                            <img className='w-100' src={itme.imgs} alt="" />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{itme.title}</StyledTableCell>
                                        <StyledTableCell align="center">{itme.price}</StyledTableCell>
                                        <StyledTableCell align="rigth"><span className='d-flex text-center justify-content-center '><p onClick={() => {
                                            dicpatch(addtoCard(itme))
                                        }} className='plus m-0 p-0 border p-3 fs-4'><AddIcon /></p><span className='m-0 px-5 d-flex align-items-center'>{itme.cardQuantity}</span><p onClick={() => {
                                            dicpatch(miunsToCart(itme))
                                        }} className='m-0 p-0 border p-3 fs-4 miuns'><RemoveIcon /></p></span></StyledTableCell>
                                        <StyledTableCell className='fs-5' align="center">{Math.round(itme.price * itme.cardQuantity)}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Tooltip title="Delete">
                                                <IconButton onClick={() => {
                                                    dicpatch(DeleteCart(itme))
                                                }}>
                                                    <DeleteIcon className='fs-2' />
                                                </IconButton>
                                            </Tooltip>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="CrackPayoment p-5 d-flex align-items-center justify-content-between">
                        <button onClick={() => {
                            dicpatch(ClearCards())
                        }} className='btn btn-danger'>Clear items</button>
                        <div className="payument d-flex flex-column">
                            <div className="total d-flex align-items-center justify-content-between">
                                <h3 className='fw-bold'>SubTotal: </h3>
                                <span className='fs-4'>{Math.round(card.CartTotal)}</span>
                            </div>
                            <p className='mt-3 brg'>Taxes and shipping Calceuated at CheakOut </p>
                            {user ? <button className='btn btn-primary mt-3 mb-3'>Cheak out</button> : <button className='btn btn-primary mt-3 mb-3'>Login</button>}
                            <Link to='/Products' className='btn fs-4'><ArrowBackIcon className='fs-3' /> start Shopping</Link>
                        </div>
                    </div>
                </div>}

            </div>
        </>
    );
}

export default Ceackout;
