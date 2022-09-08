import { Form, FormGroup, Input, Button, SignUpLink } from "../styles/Form";

export const SignUpForm = () => {
  return (
    <>
      <h3>Sign up with email</h3>
      <Form>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <Input type="text" name="name" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input type="password" name="password" />
        </FormGroup>
        <Button>Sign up</Button>
      </Form>
      <span>
        Already have an account? <SignUpLink href="">Sign in</SignUpLink>
      </span>
    </>
  );
};

export default SignUpForm;
