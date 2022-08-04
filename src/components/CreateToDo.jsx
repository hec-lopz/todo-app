import React from "react";

import { StyledInput, Wrapper } from "../styles/CreateToDoStyles";
import { CheckButton } from "../styles/ListItemStyles";

export const CreateToDo = ({ state }) => {
  const { createNewItem } = state;
  console.log(state);

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    const input = e.target;
    createNewItem(input.value);
    input.value = "";
  };
  return (
    <Wrapper>
      <CheckButton disabled />
      <StyledInput
        placeholder="Create new to do..."
        onKeyPress={handleKeyPress}
      />
    </Wrapper>
  );
};

export default CreateToDo;
