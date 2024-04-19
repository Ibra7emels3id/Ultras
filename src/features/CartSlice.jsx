import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { json } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';




const initialState = {
    cardItems: localStorage.getItem('CartSlice') ? JSON.parse(localStorage.getItem('CartSlice')) : [],
    CartTotal: 0,
    cartquantity: 0,
}

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        addtoCard: (state, action) => {
            const itempproduct = state.cardItems.findIndex((product) => product.id == action.payload.id)
            if (itempproduct >= 0) {
                state.cardItems[itempproduct].cardQuantity += 1
                toast.info(`The number of products has been increased: ${state.cardItems[itempproduct].title.slice(0, 10)}...`, {
                    position: 'bottom-left'
                })
            } else {
                const tempProduct = { ...action.payload, cardQuantity: 1 }
                state.cardItems.push(tempProduct)
                toast.success(`A new product has been added to the cart: ${action.payload.title.slice(0, 20)}...`, {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem('CartSlice', JSON.stringify(state.cardItems))
        },
        miunsToCart: (state, action) => {
            const itempproduct = state.cardItems.findIndex((product) => product.id == action.payload.id)
            if (itempproduct >= 0) {
                state.cardItems[itempproduct].cardQuantity -= 1
                if (state.cardItems[itempproduct].cardQuantity <= 0) {
                    state.cardItems.splice(itempproduct, 1)
                }
                toast.error(`Remove the product from the basket: ${action.payload.title.slice(0, 20)}...`, {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem('CartSlice', JSON.stringify(state.cardItems))
        },
        DeleteCart: (state, action) => {
            const Delat = state.cardItems.filter((itme) => itme.id !== action.payload.id)
            state.cardItems = Delat
            localStorage.setItem('CartSlice', JSON.stringify(state.cardItems))
            toast.error(`Delete the product: ${action.payload.title.slice(0, 20)}...`, {
                position: 'bottom-left'
            })
        },
        ClearCards: (state, action) => {
            state.cardItems = [];
            localStorage.setItem('CartSlice', JSON.stringify(state.cardItems))
            toast.error(`Clear Products`, {
                position: 'bottom-left'
            })
        },
        gettotal: (state, action) => {
            const { total, quantity } = state.cardItems.reduce(
                (cardTotal, cardItem) => {
                    const { price, cardQuantity } = cardItem;
                    const itemTotal = price * cardQuantity;
                    cardTotal.total += itemTotal;
                    cardTotal.quantity += cardQuantity;
                    return cardTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.CartTotal = total;
            state.cartquantity = quantity;
        }
    }
})

export const { addtoCard, DeleteCart, ClearCards, miunsToCart, gettotal } = CartSlice.actions;
export default CartSlice.reducer;