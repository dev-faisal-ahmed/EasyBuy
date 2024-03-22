import { configureStore } from '@reduxjs/toolkit';
import { ProductSlice } from './features/product.slice';
import { CartSlice } from './features/cart.slice';

// ...

export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    cart: CartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
