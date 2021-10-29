import React from "react";

import { ListItemStyle, CheckButton } from "../styles/ListItemStyles";

import { ReactComponent as CrossIcon } from "../assets/icon-cross.svg";

const ToDoItem = () => {
  return (
    <ListItemStyle>
      <CheckButton />
      <span>Complete online JavaScript course</span>
      <CrossIcon />
    </ListItemStyle>
  );
};

export default ToDoItem;
