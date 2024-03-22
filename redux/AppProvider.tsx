'use client';

import { WrapperType } from '@/lib/types/props.types';
import { Provider } from 'react-redux';
import { store } from './store';

export function AppProvider({ children }: WrapperType) {
  return <Provider store={store}>{children}</Provider>;
}
