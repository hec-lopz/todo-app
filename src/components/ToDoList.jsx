import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  margin-top: 2.4rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.listItem.background};
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
`;

const ToDoList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default ToDoList;
