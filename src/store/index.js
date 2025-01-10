import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from './productSlice.js'
import CartReducer from './cartSlice.js'
import ThemeReducer from './themeSlice.js'
import WishListReducer from './wishListSlice.js'

export const store = configureStore({
    reducer:{
        products:ProductsReducer,
        cartItems:CartReducer,
        wishList:WishListReducer,
        theme:ThemeReducer

    }
})

