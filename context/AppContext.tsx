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
  user: UserType | null;
  isFiltered: boolean;
};

// initial state
const initialState: AppStateType = {
  products: [] as ProductType[],
  user: getDataFromLocal(LocalStorageKeys.USER),
  isFiltered: false,
};

// action types
type ActionType =
  | { type: 'LOGIN_USER'; payload: UserType }
  | { type: 'LOG_OUT_USER' }
  | { type: 'UPDATE_PRODUCTS'; payload: ProductType[] };

function reducer(state: AppStateType, action: ActionType) {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.payload };

    case 'UPDATE_PRODUCTS':
      return { ...state, products: action.payload };

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
