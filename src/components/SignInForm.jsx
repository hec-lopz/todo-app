import { Form, FormGroup, Input, Button, SignUpLink } from "../styles/Form";

export const SignInForm = () => {
  return (
    <>
      <h3>Sign in with email</h3>
      <Form>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input type="password" name="password" />
        </FormGroup>
        <Button>Sign In</Button>
      </Form>
      <span>
        Don't have an account? <SignUpLink href="">Sign up</SignUpLink>
      </span>
    </>
  );
};

export default SignInForm;
