import styled from "styled-components";
import { ListItemStyle } from "./ListItemStyles";

export const Wrapper = styled(ListItemStyle)`
  margin-top: 40px;
`;

export const StyledInput = styled.input.attrs((props) => ({
  type: "text",
  autocomplete: "off",
}))`
  border: none;
  width: 85%;
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
