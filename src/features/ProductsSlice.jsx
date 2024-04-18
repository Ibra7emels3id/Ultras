import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchProducts = createAsyncThunk('fetchProducts', async ()=>{
    // const data = await fetch('http://localhost:3000/Products')
    const data = await fetch('https://fakestoreapi.com/products')
    return data.json()
} ) 

const ProductsSlice = createSlice({
    name:'ProductsSlice',
    initialState:{
        isLoading: false ,
        data:[] ,
        error: false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.error = true;
        })
    }
})

// export const {} = ProductsSlice.actions

export default ProductsSlice.reducer ;