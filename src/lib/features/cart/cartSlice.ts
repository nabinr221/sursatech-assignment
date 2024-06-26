import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{ product: Product }>
    ) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        // Product already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // Product doesn't exist, add as new item
        const newItem: CartItem = {
          id: nanoid(),
          product: action.payload.product,
          quantity: 1,
        };
        state.cart.push(newItem);
      }
    },
    removeFromCart: (
      state: CartState,
      action: PayloadAction<{ itemId: string }>
    ) => {
      // Remove item from cart
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.itemId
      );

      if (index !== -1) {
        // Check if index is not equal to -1
        state.cart.splice(index, 1); // Remove the item from the cart array
      }
    },

    checkout: (
      state: CartState,
      action: PayloadAction<{ product: Product | null }>
    ) => {
      // Clear cart
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, checkout } = cartSlice.actions;
export default cartSlice.reducer;
