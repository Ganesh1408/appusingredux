import { createSlice } from '@reduxjs/toolkit';

// Utility function to find item in the cart
const findItemIndex = (state, action) =>
  state.findIndex((cartItem) => cartItem.productId === action.payload.productId); // Make sure the product has a unique 'id'

const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    list: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    addToCart(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      // Check if the product already exists in the cart
      if (existingItemIndex !== -1) {
        // If exists, increase the quantity
        state.list[existingItemIndex].quantity += 1;
      } else {
        // If not, add the new product with quantity 1
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity(state,action){
      const existingItemIndex = findItemIndex(state.list,action);
      if (existingItemIndex !== -1) {
        // If exists, increase the quantity
        state.list[existingItemIndex].quantity += 1;
      }

    },
    decrementQuantity(state,action){
      const existingItemIndex = findItemIndex(state.list,action);
      console.log(existingItemIndex)
      state.list[existingItemIndex].quantity -=1;
      if (state.list[existingItemIndex].quantity ===0  ){
        
          state.list.splice(existingItemIndex , 1)
        
      }
    },
    removeFromCartList(state,action){      
      state.list=state.list.filter((item)=>action.payload.productId !== item.productId )
    }
  },
});

export const { addToCart,removeFromCartList,incrementQuantity,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
