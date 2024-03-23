import { customers } from '@/lib/data/customers.data';
import { CustomerType } from '@/lib/types/data.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CustomerSliceType = {
  customers: CustomerType[];
};

const initialState: CustomerSliceType = {
  customers: customers,
};

export const CustomerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    updateCustomers: (state, action: PayloadAction<CustomerType[]>) => {
      state.customers = action.payload;
    },

    addCustomer: (state, action: PayloadAction<CustomerType>) => {
      const [isCustomerExist] = state.customers.filter(
        (customer) => customer.phone === action.payload.phone,
      );

      if (!isCustomerExist)
        state.customers = [action.payload, ...state.customers];
    },
  },
});

export const { updateCustomers, addCustomer } = CustomerSlice.actions;
