'use client';

import {
  LocalStorageKeys,
  getDataFromLocal,
} from '@/utils/localStorage.helper';
import { ProductType, UserType } from '@/lib/types/data.types';
import { WrapperType } from '@/lib/types/props.types';
import { Dispatch, createContext, useContext, useReducer } from 'react';

type AppStateType = {
  products: ProductType[];
  allProducts: ProductType[];
  user: UserType | null;
  isFiltered: boolean;
};

// initial state
const initialState: AppStateType = {
  products: [],
  allProducts: [],
  user: getDataFromLocal(LocalStorageKeys.USER),
  isFiltered: false,
};

// action types
type ActionType =
  | { type: 'LOGIN_USER'; payload: UserType }
  | { type: 'LOG_OUT_USER' }
  | { type: 'UPDATE_PRODUCTS'; payload: ProductType[] }
  | {
      type: 'FILTER';
      payload: { min: number; max: number; keyWord: string };
    }
  | { type: 'RESET_FILTER' };

function reducer(state: AppStateType, action: ActionType) {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.payload };

    case 'UPDATE_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        isFiltered: false,
      };

    case 'FILTER': {
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
      console.log(tempProducts);
      return { ...state, products: tempProducts, isFiltered: true };
    }

    case 'RESET_FILTER':
      return { ...state, products: state.allProducts };

    default:
      return { ...state };
  }
}

const AppContext = createContext<{
  state: AppStateType;
  dispatch: Dispatch<ActionType>;
} | null>(null);

export function AppProvider({ children }: WrapperType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const appContext = useContext(AppContext);
  if (!appContext) throw new Error('Out of scope');

  return appContext;
}
