import React from "react";

import { StyledInput, Wrapper } from "../styles/CreateToDoStyles";
import { CheckButton } from "../styles/ListItemStyles";

const CreateToDo = () => {
  return (
    <Wrapper>
      <CheckButton disabled />
      <StyledInput placeholder="Create new to do..." />
    </Wrapper>
  );
};

export default CreateToDo;
