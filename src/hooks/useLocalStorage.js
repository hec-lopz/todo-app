import { useState, useEffect } from "react";

const getTasksData = async () => {
  try {
    const API = process.env.REACT_APP_API_URL;
    const res = await fetch(`${API}/tasks`);
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const useLocalStorage = (storageName, initialState) => {
  const [items, setItems] = useState(initialState);

  useEffect(() => {
    const storageData = localStorage.getItem(storageName);

    if (!storageData) {
      getTasksData()
        .then((data) => {
          localStorage.setItem(storageName, JSON.stringify(data));
          setItems(data);
        })
        .catch((err) => {
          console.error(err);
          setItems([]);
        });
    } else {
      try {
        const parsedData = JSON.parse(storageData);
        setItems(parsedData);
      } catch (error) {
        console.error(error);
      }
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
