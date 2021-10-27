import React from "react";
import styled from "styled-components";

const Title = styled.h1``;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Header = () => {
  return (
    <Wrapper>
      <Title>TODO</Title>
    </Wrapper>
  );
};
