import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  margin-top: 2.4rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.listItem.background};
`;

const ToDoList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default ToDoList;
