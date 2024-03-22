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
    addToCart: (state: CartSliceType, action: PayloadAction<CartType>) => {
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

      if (!doesExist) state.cart = [...state.cart, { product, count }];

      setDataToLocal(LocalStorageKeys.CART, state.cart);
    },
  },
});

export const { addToCart } = CartSlice.actions;
