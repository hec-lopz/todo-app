import styled from "styled-components";
import { ListItemStyle } from "./ListItemStyles";

export const Wrapper = styled(ListItemStyle)`
  margin-top: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.listItem.background};
`;

export const StyledInput = styled.input.attrs((props) => ({
  type: "text",
  autocomplete: "off",
}))`
  border: none;
  width: 85%;
  height: 80%;
  font-size: 1em;
  line-height: 1;
  background: transparent;
  caret-color: ${(props) => props.theme.colors.selectedText};

  &::placeholder {
    color: ${(props) => props.theme.fontColors.secondary};
  }

  &:focus,
  &:focus-visible,
  &:active {
    outline: none;
  }
`;
