import {
  LocalStorageKeys,
  removeDataFormLocal,
  setDataToLocal,
} from '@/utils/localStorage.helper';
import { UserType } from '@/lib/types/data.types';
import { getUserFormToken } from '@/utils/token.helper';
import { createSlice } from '@reduxjs/toolkit';

type UserSliceType = {
  user: Omit<UserType, 'password'> | null;
};
const initialState: UserSliceType = {
  user: getUserFormToken(),
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = getUserFormToken();
      setDataToLocal(LocalStorageKeys.USER, action.payload);
    },

    removeUser: (state) => {
      state.user = null;
      removeDataFormLocal(LocalStorageKeys.USER);
    },
  },
});

export const { updateUser, removeUser } = UserSlice.actions;
