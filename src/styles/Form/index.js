import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 2.5rem;
  }
`;
export const Input = styled.input`
  padding: 1rem;
  /* background: red; */
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;
export const Button = styled.button`
  border-radius: 0.5rem;
  width: 100%;
  border: none;
  padding: 1rem 0;
  background: ${(props) => props.theme.colors.selectedText};
  color: ${(props) => props.theme.colors.white};
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    background: #5a8cf2;
  }
`;
export const Form = styled.form`
  margin: 5rem 0;
`;
export const SignUpLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  cursor: default;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
