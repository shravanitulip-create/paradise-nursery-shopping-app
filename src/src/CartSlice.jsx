
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    // Add a plant to the cart
    addToCart: (state, action) => {
      const plant = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...plant,
          quantity: 1
        });
      }
    },

    // Remove a plant from the cart
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increase plant quantity
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease plant quantity
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Empty the shopping cart
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

// Export selectors
export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemCount = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

export const selectCartTotal = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

// Export reducer
export default cartSlice.reducer;
