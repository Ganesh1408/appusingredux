import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from './slice/productSlice'
import CartReducer from './slice/cartSlice'
import ThemeReducer from './slice/themeSlice'
import WishListReducer from './slice/wishListSlice'

export const store = configureStore({
    reducer:{
        products:ProductsReducer,
        cartItems:CartReducer,
        wishList:WishListReducer,
        theme:ThemeReducer

    },
    

})

