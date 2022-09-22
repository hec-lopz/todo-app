import React from "react";
import styled from "styled-components";

import {
  HeaderWrapper,
  Title,
  SwitchButton,
  Button,
} from "../styles/HeaderStyles";

export const Header = ({ darkMode, handleClick, children }) => {
  return (
    <HeaderWrapper>
      <Title>
        <img src="/images/TODO.svg" alt="To Do app logo" />
      </Title>
      <Nav>
        <Button>Sign in</Button>|<Button>Sign up</Button>
        <SwitchButton onClick={handleClick}>
          <img
            src={darkMode ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
            alt={darkMode ? "Switch dark mode off" : "Switch dark mode on"}
          />
        </SwitchButton>
      </Nav>
      {children}
    </HeaderWrapper>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
export default Header;
