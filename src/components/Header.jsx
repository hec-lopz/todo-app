import React from "react";

import { HeaderWrapper, Title, SwitchButton } from "../styles/HeaderStyles";

const Header = ({ darkMode, handleClick, children }) => {
  return (
    <HeaderWrapper>
      <Title>
        <img src="/images/TODO.svg" alt="To Do app logo" />
      </Title>
      <SwitchButton onClick={handleClick}>
        <img
          src={darkMode ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
          alt={darkMode ? "Switch dark mode off" : "Switch dark mode on"}
        />
      </SwitchButton>
      {children}
    </HeaderWrapper>
  );
};

export default Header;
