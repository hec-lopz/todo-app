import { useState, useEffect } from "react";

export const useLocalStorage = (storageName, initialState) => {
  const [items, setItems] = useState(initialState);

  useEffect(() => {
    const storageData = localStorage.getItem(storageName);

    if (!storageData) {
      localStorage.setItem(storageName, JSON.stringify(initialState));
      setItems(initialState);
    } else {
      const parsedData = JSON.parse(storageData);
      setItems(parsedData);
    }
    // eslint-disable-next-line
  }, []);

  const saveData = (newItems) => {
    const stringifiedItem = JSON.stringify(newItems);
    localStorage.setItem(storageName, stringifiedItem);
    setItems(newItems);
  };

  return [items, saveData];
};
