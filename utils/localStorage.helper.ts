export enum LocalStorageKeys {
  USER = 'USER',
  CART = 'CART',
}

export function getDataFromLocal<DataType>(key: LocalStorageKeys) {
  if (typeof window === 'undefined') return null;
  const dataFromLocal = window.localStorage.getItem(key);
  if (!dataFromLocal) return null;

  return JSON.parse(dataFromLocal) as DataType;
}

export function setDataToLocal(key: LocalStorageKeys, data: unknown) {
  console.log({ key, data });
  localStorage.setItem(key, JSON.stringify(data));
}
