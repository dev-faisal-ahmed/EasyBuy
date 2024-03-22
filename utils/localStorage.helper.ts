import { LocalStorageKeys } from '@/lib/data/localStorageKeys.data';

export function getDataFromLocal<DataType>(key: LocalStorageKeys) {
  if (typeof window === 'undefined') return null;
  const dataFromLocal = window.localStorage.getItem(key);
  if (!dataFromLocal) return null;

  return JSON.parse(dataFromLocal) as DataType;
}

export function setDataToLocal(key: LocalStorageKeys, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}
