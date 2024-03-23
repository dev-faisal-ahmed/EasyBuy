import { jwtDecode } from 'jwt-decode';
import { LocalStorageKeys, getDataFromLocal } from './localStorage.helper';
import { UserType } from '@/lib/types/data.types';

export function getUserFormToken() {
  const token = getDataFromLocal<string>(LocalStorageKeys.USER);
  if (!token) return null;

  const user = jwtDecode(token);
  if (!user) return null;

  return user as Omit<UserType, 'password'>;
}
