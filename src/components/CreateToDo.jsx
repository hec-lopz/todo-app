import React from "react";

import { StyledInput } from "../styles/CreateToDoStyles";
import {
  ListItemStyle as Wrapper,
  CheckButton,
} from "../styles/ListItemStyles";

const CreateToDo = () => {
  return (
    <Wrapper>
      <CheckButton disabled />
      <StyledInput placeholder="Create new to do..." />
    </Wrapper>
  );
};

export default CreateToDo;
