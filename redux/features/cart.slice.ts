import {
  LocalStorageKeys,
  getDataFromLocal,
  setDataToLocal,
} from '@/utils/localStorage.helper';
import { CartType } from '@/lib/types/data.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartSliceType = {
  cart: CartType[];
};

const initialState: CartSliceType = {
  cart: getDataFromLocal(LocalStorageKeys.CART) || [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      const { product, count } = action.payload;
      const { productId } = product;
      let doesExist = false;

      // checking if product is already added in the cart if it is added to cart
      state.cart = state.cart.map((el) => {
        if (el.product.productId === productId) {
          el.count += count;
          doesExist = true;
        }
        return el;
      });
      // removing any element which count is zero

      if (!doesExist) state.cart = [...state.cart, action.payload];
      state.cart = state.cart.filter((cart) => cart.count > 0);

      setDataToLocal(LocalStorageKeys.CART, state.cart);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (cart) => cart.product.productId !== action.payload,
      );

      setDataToLocal(LocalStorageKeys.CART, state.cart);
    },

    addToCartAndReplaceCount: (state, action: PayloadAction<CartType>) => {
      const { count, product } = action.payload;
      let doesExist = false;

      state.cart.map((cart) => {
        if (cart.product.productId === product.productId) {
          cart.count = count;
          doesExist = true;
        }
        return cart;
      });

      if (!doesExist) state.cart = [...state.cart, action.payload];
      // removing items
      state.cart = state.cart.filter((cart) => cart.count > 0);
      setDataToLocal(LocalStorageKeys.CART, state.cart);
    },

    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToCartAndReplaceCount,
  emptyCart,
} = CartSlice.actions;
