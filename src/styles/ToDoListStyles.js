import styled from "styled-components";

export const StyledSpan = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) =>
    props.checked ? props.theme.fontColors.grayed : "inherit"};
  padding: 4% 0;
  cursor: pointer;
`;
export const StyledLi = styled.li`
  border-bottom: 1px solid
    ${(props) =>
      props.darkMode
        ? props.theme.listItem.border
        : props.theme.listItem.border};
`;
