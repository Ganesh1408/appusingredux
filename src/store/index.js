import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slice/productSlice";
import CartReducer from "./slice/cartSlice";
import ThemeReducer from "./slice/themeSlice";
import WishListReducer from "./slice/wishListSlice";
// import { apiMiddleware } from "../Middleware/api"; 

// 


export const store = configureStore({
  reducer: {
    products : ProductsReducer,
    cartItems: CartReducer,
    wishList: WishListReducer,
    theme: ThemeReducer,
  },

  // middleware:  (getDefaultMiddleware)=>[...getDefaultMiddleware(),apiMiddleware],
})
