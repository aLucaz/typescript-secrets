export const deserializeStorageAny = (key: string) => {
  const storageItem = localStorage.getItem(key);

  if (storageItem === null) {
    throw new Error("Storage item is not set");
  }

  return JSON.parse(storageItem);
};