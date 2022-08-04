import React from "react";

import {
  ListItemStyle,
  CheckButton,
  StyledIcon,
} from "../styles/ListItemStyles";

import { StyledLi, StyledSpan } from "../styles/ToDoListStyles";

// const StyledListItem = styled.li(ListItemStyle);

export const ToDoItem = ({ id, text, checked, state }) => {
  const { deleteItem, completeItem } = state;

  const handleComplete = (e) => completeItem(id, checked);
  const handleDelete = (e) => deleteItem(id);
  return (
    <StyledLi>
      <ListItemStyle>
        <CheckButton onClick={handleComplete} checked={checked} readOnly />
        <StyledSpan onClick={handleComplete} checked={checked}>
          {text}
        </StyledSpan>
        <StyledIcon onClick={handleDelete} />
      </ListItemStyle>
    </StyledLi>
  );
};

export default ToDoItem;
