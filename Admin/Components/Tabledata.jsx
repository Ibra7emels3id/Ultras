import React, { useContext, useEffect, useState } from 'react';

// import imes
import imgefor from '../../images/selling-products1.jpg'


// import table 
import { Button, IconButton, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const TableData = () => {
    const [Products, setProducts] = useState([])

    const GetData = async () => {
        const res = await fetch('http://localhost:3000/Products')
        const Data = await res.json()
        setProducts(Data)
    }
    useEffect(() => {
        GetData()
    }, [])

    const handleDeleteproduce = async(id)=>{
        const Res = await fetch(`http://localhost:3000/Products/${id}`,{
            method:'delete'
        })
        const Data = await Res.json()
        console.log(Data);
        GetData()
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ width: '100px', textAlign: 'center' }}># id</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: 'center' }} align="right">Imge</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: 'center' }} align="right">Title</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: 'center' }} align="right">Description</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: 'center' }} align="right">Price</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: 'center' }} align="right">View</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: 'center' }} align="right">Update</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: 'center' }} align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Products.map((item) => {
                            return (
                                <>
                                    <StyledTableRow key={item.id}>
                                        <StyledTableCell sx={{ width: '100px', textAlign: 'center' }}># {item.id}</StyledTableCell>
                                        <StyledTableCell sx={{ textAlign: 'center', width: '120px',height: '120px' }} align="right"><img className='w-100 h-100 rounded-circle' src={item.image} alt="" /></StyledTableCell>
                                        <StyledTableCell sx={{ textAlign: 'center' }} align="right">{item.title}</StyledTableCell>
                                        <StyledTableCell sx={{ textAlign: 'center' }} align="right">{item.description.slice(0 , 70)}...</StyledTableCell>
                                        <StyledTableCell sx={{ textAlign: 'center' }} align="right">{item.price}$   </StyledTableCell>
                                        <StyledTableCell sx={{ width: '120px', textAlign: 'center' }} align="right"><Link to={`/detals/${item.id}`} ><IconButton aria-label="fingerprint" color="success">
                                            <RemoveRedEyeIcon sx={{ fontSize: '40px' }} />
                                        </IconButton></Link></StyledTableCell>
                                        <StyledTableCell sx={{ width: '120px', textAlign: 'center' }} align="right"><Link to={`/update/${item.id}`} color="secondary"><EditNoteIcon sx={{ fontSize: '40px' }} /></Link></StyledTableCell>
                                        <StyledTableCell sx={{ width: '120px', textAlign: 'center' }} align="right"><Link className='' to=''>
                                            <IconButton onClick={()=>{
                                                handleDeleteproduce(`${item.id}`)
                                            }} aria-label="delete" size="large">
                                                <DeleteIcon fontSize="inherit" sx={{ fontSize: '40px' }} />
                                            </IconButton></Link>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default TableData;
