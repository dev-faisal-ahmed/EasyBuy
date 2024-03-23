import { configureStore } from '@reduxjs/toolkit';
import { ProductSlice } from './features/product.slice';
import { CartSlice } from './features/cart.slice';
import { UserSlice } from './features/user.slice';
import { CustomerSlice } from './features/customer.slice';

// ...

export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    cart: CartSlice.reducer,
    user: UserSlice.reducer,
    customers: CustomerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
