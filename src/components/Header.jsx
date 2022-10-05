import React from "react";
import styled, { useTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

import {
  HeaderWrapper,
  Title,
  SwitchButton,
  Button,
} from "../styles/HeaderStyles";
import { toast } from "react-toastify";

export const Header = ({ handleClick, children }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleLogout = () => {
    toast(`Bye, ${user.name}`);
    dispatch(logout());
    dispatch(reset());
  };
  return (
    <HeaderWrapper>
      <Title>
        <img src="/images/TODO.svg" alt="To Do app logo" />
      </Title>
      <Nav>
        {user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <Button to="/login">Login</Button> |
            <Button to="/register">Register</Button>
          </>
        )}
        <SwitchButton onClick={handleClick}>
          <img
            src={theme.icons.themeSwitch}
            alt={
              theme.theme === "dark"
                ? "Switch dark mode off"
                : "Switch dark mode on"
            }
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
