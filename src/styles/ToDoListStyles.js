import styled from "styled-components";

export const StyledSpan = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) =>
    props.checked ? props.theme.fontColors.grayed : "inherit"};
`;
export const StyledLi = styled.li`
  & + & {
    border-top: 1px solid ${(props) => props.theme.listItem.border};
  }
`;
