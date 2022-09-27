import React from "react";
import styled from "styled-components";
import { FORM } from "../hooks";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

import {
  HeaderWrapper,
  Title,
  SwitchButton,
  Button,
} from "../styles/HeaderStyles";
import { toast } from "react-toastify";

export const Header = ({ darkMode, handleClick, children, onOpen }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
            <Button onClick={() => onOpen(FORM.SIGN_IN)}>Sign in</Button> |
            <Button onClick={() => onOpen(FORM.SIGN_UP)}>Sign up</Button>
          </>
        )}
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
