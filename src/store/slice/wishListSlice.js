import {createSlice} from '@reduxjs/toolkit'


const findItemIndex = (state, action) =>
    state.findIndex((WishListItem) => WishListItem.productId === action.payload.productId); 

const wishListSlice = createSlice({
    name:"wishList",
    initialState:{  
        list:[],
        isLoading:false,
        error:''
    },
    reducers:{
        addToWishList(state, action) {
              const existingItemIndex = findItemIndex(state.list, action);
              // (existingItemIndex)
              // Check if the product already exists in the cart
              if (existingItemIndex !== -1) {
                return 
                
              }
              else{
                state.list.push(action.payload);
              }
              
            },
             removeFromWishList(state, action){
              state.list=state.list.filter((item)=>action.payload.productId !== item.productId)
              
            }
    }
})


export const {addToWishList,removeFromWishList} = wishListSlice.actions;
export default wishListSlice.reducer