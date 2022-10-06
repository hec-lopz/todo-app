import React, { useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import { StyledInput, Wrapper } from "../../styles/Todos/CreateToDoStyles";
import { CheckButton } from "../../styles/Todos/ListItemStyles";

const Add = styled.i`
  color: ${(props) => props.theme.fontColors.secondary};
  cursor: pointer;
  user-select: none;
  width: 100%;
`;
export const CreateToDo = ({ state }) => {
  const textInput = useRef();
  const { createNewItem } = state;

  const onCreateItem = () => {
    const input = textInput.current;

    if (!input.value) {
      toast.error("Please enter a value");
      return;
    }
    createNewItem(input.value);
    input.value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onCreateItem();
    }
  };
  return (
    <Wrapper>
      <CheckButton disabled />
      <StyledInput
        ref={textInput}
        placeholder="Create new to do..."
        onKeyPress={handleKeyPress}
      />
      <Add onClick={onCreateItem} className="material-symbols-outlined">
        add
      </Add>
    </Wrapper>
  );
};

export default CreateToDo;
