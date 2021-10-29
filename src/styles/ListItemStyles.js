import styled from "styled-components";

export const ListItemStyle = styled.div`
  background-color: ${(props) => props.theme.listItem.background};
  height: 4.8rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
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
