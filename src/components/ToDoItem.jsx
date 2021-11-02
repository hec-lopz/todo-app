import React from "react";

import {
  ListItemStyle,
  CheckButton,
  StyledIcon,
} from "../styles/ListItemStyles";

import { StyledLi, StyledSpan } from "../styles/ToDoListStyles";

// const StyledListItem = styled.li(ListItemStyle);

const ToDoItem = ({ text, checked }) => {
  return (
    <StyledLi>
      <ListItemStyle>
        <CheckButton />
        <StyledSpan checked={checked}>{text}</StyledSpan>
        <StyledIcon />
      </ListItemStyle>
    </StyledLi>
  );
};

export default ToDoItem;
