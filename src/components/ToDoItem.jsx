import React from "react";
import styled from "styled-components";

import { ListItemStyle, CheckButton } from "../styles/ListItemStyles";

import { ReactComponent as CrossIcon } from "../assets/icon-cross.svg";

const StyledSpan = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) =>
    props.checked ? props.theme.fontColors.grayed : "inherit"};
`;

const ToDoItem = () => {
  return (
    <ListItemStyle>
      <CheckButton />
      <StyledSpan>Complete online JavaScript course</StyledSpan>
      <CrossIcon />
    </ListItemStyle>
  );
};

export default ToDoItem;
