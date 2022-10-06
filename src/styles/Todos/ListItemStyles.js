import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  transition: opacity 100ms ease-out;
  position: absolute;
  right: 2rem;
  @media screen and (min-width: 1200px) {
    opacity: 0;
  }
`;
export const Icon = styled.span`
  display: grid;
  place-items: center;
  cursor: pointer;
  padding: 0.5rem;
  box-sizing: content-box;
  color: ${(props) => props.theme.fontColors.secondary};
`;
export const ListItemStyle = styled.div`
  min-height: 4.8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 2rem 1fr 4rem;
  position: relative;
  /* grid-template-columns: 1fr 6fr 1fr; */
  gap: 1.2rem;
  align-items: center;
  padding: 1rem 2rem;

  @media screen and (min-width: 600px) {
    min-height: 6.4rem;
  }

  @media screen and (min-width: 1200px) {
    &:hover ${Options} {
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
  &:disabled {
    pointer-events: none;
    cursor: none;
  }

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
