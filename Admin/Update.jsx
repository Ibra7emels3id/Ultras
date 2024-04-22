import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


// import btn ui
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});




const updata = () => {
    // get id Params
    const {UpdateId} = useParams()
    // get Naveget
    const Naveget = useNavigate()
    console.log(UpdateId);
    const [Products, setProducts] = useState({
        title: '',
        description: '',
        price: null,
        category: '',
        image: null
    })


    const GetDataProduct = async()=>{
        const Res = await fetch(`http://localhost:3000/Products/${UpdateId}`)
        const Data = await Res.json()
        console.log(Data);
        setProducts({...Products , title:Data.title,description: Data.description, price: Data.price,category: Data.category,image: Data.image})
    }

    useEffect(() => {
        GetDataProduct()
    }, []);



    


    // updata Product Data
    const handleUpdataProduct = async (e) => {
        e.preventDefault()
        const Res = await fetch(`http://localhost:3000/Products/${UpdateId}`, {
            method: "PUT",
            body: JSON.stringify({
                title: Products.title,
                description: Products.description,
                price: Products.price,
                category: Products.category,
                image: Products.image
            })
            
        })
        const Data = await Res.json()
        console.log(Data);
        Naveget('/dashbord')
    }

    // console.log(Products);
    return (
        <>
            <div className="container p-5">
                <h1 className='text-center fw-bold mb-5'>Add Product</h1>
                <form className=' mt-5'>
                    <div className="mb-3">
                        <input onChange={(e) => {
                            setProducts({ ...Products, title: e.target.value })
                        }} value={Products.title} type="text" className="form-control" placeholder='Enter you Title' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => {
                            setProducts({ ...Products, description: e.target.value })
                        }} value={Products.description} type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter you description' />
                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => {
                            setProducts({ ...Products, price: e.target.value })
                        }} value={Products.price} type="number" className="form-control" id="exampleInputPassword1" placeholder='Enter you Price' />
                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => {
                            setProducts({ ...Products, category: e.target.value })
                        }} value={Products.category} type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter you category' />
                    </div>
                    <div className="mb-3">
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput onChange={(e) => {
                                setProducts({ ...Products, image: URL.createObjectURL((e.target.files[0])) })
                            }} type="file" />
                        </Button>
                    </div>
                    <button onClick={(e) => {
                        handleUpdataProduct(e)
                    }} type="submit" className="btn btn-primary w-100 mt-3 fs-4">Submit</button>
                </form>
            </div>
        </>
    );
}

export default updata;
