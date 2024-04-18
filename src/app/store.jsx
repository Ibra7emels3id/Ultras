import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from '../features/ProductsSlice'
import CartSlice from '../features/CartSlice'


export const store = configureStore({
    reducer: {
        products : ProductsSlice,
        cart : CartSlice
    },
})