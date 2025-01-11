import { createSlice } from '@reduxjs/toolkit';

// Utility function to find item in the cart
const findItemIndex = (state, action) =>
  state.findIndex((cartItem) => cartItem.id === action.payload.id); // Make sure the product has a unique 'id'

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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
