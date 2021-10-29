import styled from "styled-components";

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
  margin-left: 1.2rem;

  &::placeholder {
    color: ${(props) => props.theme.fontColors.secondary};
  }

  &:focus,
  &:focus-visible,
  &:active {
    outline: none;
  }
`;
