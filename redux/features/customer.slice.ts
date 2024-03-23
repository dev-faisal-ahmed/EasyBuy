import { CustomerType } from '@/lib/types/data.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CustomerSliceType = {
  customers: CustomerType[];
};

const initialState: CustomerSliceType = {
  customers: [],
};

export const CustomerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    updateCustomers: (state, action: PayloadAction<CustomerType[]>) => {
      state.customers = action.payload;
    },
  },
});

export const { updateCustomers } = CustomerSlice.actions;
