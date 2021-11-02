import React from "react";

import { ListItemStyle, CheckButton } from "../styles/ListItemStyles";

import { ReactComponent as CrossIcon } from "../assets/icon-cross.svg";
import { StyledLi, StyledSpan } from "../styles/ToDoListStyles";

// const StyledListItem = styled.li(ListItemStyle);

const ToDoItem = ({ text, checked }) => {
  return (
    <StyledLi>
      <ListItemStyle>
        <CheckButton />
        <StyledSpan checked={checked}>{text}</StyledSpan>
        <CrossIcon />
      </ListItemStyle>
    </StyledLi>
  );
};

export default ToDoItem;
