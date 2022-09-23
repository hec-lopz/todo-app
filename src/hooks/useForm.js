import { useState } from "react";

export const useForm = (initialState) => {
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return {
    data,
    handleChange,
  };
};
