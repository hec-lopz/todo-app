import styled from "styled-components";

// import ToDoLogo from "/images/TODO.svg";
export const Title = styled.h1`
  margin: 0;
  height: 20px;

  & img {
    height: 100%;
  }
`;
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const SwitchButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  width: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;

  & img {
    /* width: 20px; */
    height: 100%;
  }
`;
