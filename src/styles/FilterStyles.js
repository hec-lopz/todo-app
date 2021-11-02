import styled from "styled-components";
import { ListItemStyle } from "./ListItemStyles";

export const Wrapper = styled(ListItemStyle)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: ${(props) => props.theme.fontColors.secondary};

  @media screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;
export const ClearButton = styled.button`
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media screen and (min-width: 1200px) {
    &:hover {
      color: ${(props) => props.theme.fontColors.primary};
    }
  }
`;
export const Counter = styled.span`
  pointer-events: none;
`;
export const FilterButton = styled.input.attrs({
  type: "radio",
  name: "filter",
})`
  border: none;
  background-color: transparent;
  appearance: none;
  &:checked + label {
    color: ${(props) => props.theme.colors.selectedText};
    pointer-events: none;
  }
`;
export const FilterContainer = styled.div`
  background-color: ${(props) => props.theme.listItem.background};
  border-radius: 5px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(-4.8rem - 1.6rem);
  min-height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    padding: 0.5rem 0.5rem;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    position: static;
    width: initial;
  }

  @media screen and (min-width: 1200px) {
    label:hover {
      color: ${(props) => props.theme.fontColors.primary};
    }
  }
`;
