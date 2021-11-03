import React, { useContext } from "react";

import {
  ListItemStyle,
  CheckButton,
  StyledIcon,
} from "../styles/ListItemStyles";

import { StyledLi, StyledSpan } from "../styles/ToDoListStyles";
import { ToDoContext } from "./ToDoContext";

// const StyledListItem = styled.li(ListItemStyle);

const ToDoItem = ({ text, checked }) => {
  const { deleteItem, completeItem } = useContext(ToDoContext);

  const handleComplete = (e) => completeItem(text);
  const handleDelete = (e) => deleteItem(text);
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
