import React, { useContext } from "react";
import styled from "styled-components";
import { ToDoContext } from "./ToDoContext";
import ToDoItem from "./ToDoItem";

const StyledList = styled.ul`
  margin-top: 2.4rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.listItem.background};
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
`;

const ToDoList = ({ children }) => {
  const { filteredItems } = useContext(ToDoContext);

  return (
    <StyledList>
      {filteredItems.map((item) => (
        <ToDoItem text={item.text} key={item.text} checked={item.checked} />
      ))}
      {children}
    </StyledList>
  );
};

export default ToDoList;
