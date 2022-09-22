import styled from "styled-components";

// import ToDoLogo from "/images/TODO.svg";
export const Title = styled.h1`
  margin: 0;
  height: 20px;
  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  appearance: none;
  padding: 1rem 0.5rem;
  border: none;
  font-size: 1.6rem;
  transform: translateY(0.25rem);
  content: "test";
  &:hover {
    cursor: pointer;
  }

  &:after {
    content: "";
    display: block;
    position: relative;
    bottom: -3px;
    left: 50%;
    width: 125%;
    height: 1px;
    border-bottom: ${(props) => `2px solid ${props.theme.colors.white}`};
    transform: translate(-50%) scale(0, 1);
    transition: transform ease-in 100ms;
  }
  &:hover {
    &:after {
      transform: translate(-50%) scale(1, 1);
    }
  }
  /* &:nth-child(2):after { */
  /*   content: "|"; */
  /*   margin-left: 0.5rem; */
  /* } */
`;
