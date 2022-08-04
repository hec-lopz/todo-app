import { useState, useEffect } from "react";

const getTasksData = async () => {
  const API = process.env.REACT_APP_API_URL;
  const res = await fetch(`${API}/tasks`);
  const data = res.json();
  return data;
};
export const useLocalStorage = (storageName, initialState) => {
  const [items, setItems] = useState(initialState);

  useEffect(() => {
    const storageData = localStorage.getItem(storageName);

    if (!storageData) {
      getTasksData().then((data) => {
        localStorage.setItem(storageName, JSON.stringify(data));
        setItems(data);
      });
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
