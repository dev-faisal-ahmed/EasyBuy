import { ProductType } from '@/lib/types/data.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ProductSliceType = {
  products: ProductType[];
  allProducts: ProductType[];
  isFiltered: boolean;
};

const initialState: ProductSliceType = {
  products: [],
  allProducts: [],
  isFiltered: false,
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProducts: (
      state: ProductSliceType,
      action: PayloadAction<ProductType[]>,
    ) => {
      state.allProducts = action.payload;
      state.products = action.payload;
      state.isFiltered = false;
    },

    filterProducts: (
      state: ProductSliceType,
      action: PayloadAction<{ min: number; max: number; keyWord: string }>,
    ) => {
      const { keyWord, max, min } = action.payload;
      const searchRegex = new RegExp(
        keyWord
          .split(' ')
          .filter((key) => key.length >= 2)
          .join('|'),
        'i',
      );

      const tempProducts = state.allProducts.filter(
        (product) =>
          searchRegex.test(product.name) &&
          product.price >= min &&
          product.price <= max,
      );

      state.products = tempProducts;
      state.isFiltered = true;
    },

    filterReset: (state: ProductSliceType) => {
      state.products = state.allProducts;
      state.isFiltered = false;
    },
  },
});

export const { updateProducts, filterProducts, filterReset } =
  ProductSlice.actions;
