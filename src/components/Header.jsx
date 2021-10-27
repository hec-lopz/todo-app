import React from "react";

import { Wrapper, Title, SwitchButton } from "./HeaderStyles";

export const Header = ({ darkMode, handleClick }) => {
  return (
    <Wrapper>
      <Title>
        <img src="/images/TODO.svg" alt="To Do app logo" />
      </Title>
      <SwitchButton onClick={handleClick}>
        <img
          src={darkMode ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
          alt={darkMode ? "Switch dark mode off" : "Switch dark mode on"}
        />
      </SwitchButton>
    </Wrapper>
  );
};
