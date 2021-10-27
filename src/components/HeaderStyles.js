import styled from "styled-components";

// import ToDoLogo from "/images/TODO.svg";
export const Title = styled.h1`
  margin: 0;
  height: 20px;

  & img {
    height: 100%;
  }
`;
export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  /* background-color: ${(props) => props.theme.colors.white}; */
  max-width: ${() => `${(324 / 375) * 100}%`};
  margin: 0 auto;
  margin-top: 50px;
`;
export const SwitchButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  width: 20px;
  margin: 0;
  padding: 0;

  & img {
    /* width: 20px; */
    height: 100%;
  }
`;
