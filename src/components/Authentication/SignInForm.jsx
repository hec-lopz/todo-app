import { Form, FormGroup, Input, Button, SignUpLink } from "../../styles/Form";
import { useForm } from "../../hooks";

export const SignInForm = ({ switchForm }) => {
  const { data, handleChange } = useForm({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <h3>Sign in with email</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            value={data.email}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            value={data.password}
            type="password"
            name="password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Sign In</Button>
      </Form>
      <span>
        Don't have an account?{" "}
        <SignUpLink onClick={switchForm}>Sign up</SignUpLink>
      </span>
    </>
  );
};

export default SignInForm;