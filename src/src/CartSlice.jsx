
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const plant = action.payload;

      const existingItem = state.cartItems.find(
        item => item.id === plant.id
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

    // Remove an item from the cart
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    // Update item quantity
    updateQuantity: (state, action) => {
      const { id, change } = action.payload;

      const item = state.cartItems.find(
        item => item.id === id
      );

      if (item) {
        item.quantity += change;

        // Remove item when quantity reaches zero
        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            cartItem => cartItem.id !== id
          );
        }
      }
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

// Export required Redux actions
export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart
} = cartSlice.actions;

// Backward-compatible action names for other components
export const addToCart = addItem;
export const removeFromCart = removeItem;

export const increaseQuantity = (id) =>
  updateQuantity({ id, change: 1 });

export const decreaseQuantity = (id) =>
  updateQuantity({ id, change: -1 });

// Cart selectors
export const selectCartItems = (state) =>
  state.cart.cartItems;

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

export default cartSlice.reducer;
