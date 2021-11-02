import styled from "styled-components";

import { ReactComponent as CrossIcon } from "../assets/icon-cross.svg";

export const StyledIcon = styled(CrossIcon)`
  cursor: pointer;
  padding: 0.5rem;
  box-sizing: content-box;
  transition: opacity 100ms ease-out;

  @media screen and (min-width: 1200px) {
    opacity: 0;
  }
`;
export const ListItemStyle = styled.div`
  min-height: 4.8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  gap: 1.2rem;
  align-items: center;
  padding: 1rem 2rem;

  @media screen and (min-width: 600px) {
    min-height: 6.4rem;
  }

  @media screen and (min-width: 1200px) {
    &:hover ${StyledIcon} {
      opacity: 1;
    }
  }
`;

export const CheckButton = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  appearance: none;
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.listItem.border};
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: 90%;
    height: 90%;
    background: ${(props) => props.theme.listItem.background};
    border-radius: 50%;
    transition: none;
    position: relative;
    z-index: 2;
  }
  &::after {
    content: "";
    background-image: url("/images/icon-check.svg");
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    width: 90%;
    height: 90%;
  }

  &:checked {
    background: ${(props) => props.theme.colors.gradient};
    &::before {
      transform: scale(0);
    }
  }

  /** Min Desktop */
  @media screen and (min-width: 1200px) {
    &:hover {
      background: ${(props) => props.theme.colors.gradient};
    }
  }
`;
