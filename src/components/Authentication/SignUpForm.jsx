import { Form, FormGroup, Input, Button, SignUpLink } from "../../styles/Form";
import { useForm } from "../../hooks";

export const SignUpForm = ({ switchForm }) => {
  const { data, handleChange } = useForm({ email: "", password: "", name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <h3>Sign up with email</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <Input
            value={data.name}
            onChange={handleChange}
            type="text"
            name="name"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            value={data.email}
            onChange={handleChange}
            type="email"
            name="email"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            value={data.password}
            onChange={handleChange}
            type="password"
            name="password"
          />
        </FormGroup>
        <Button>Sign up</Button>
      </Form>
      <span>
        Already have an account?{" "}
        <SignUpLink onClick={switchForm}>Sign in</SignUpLink>
      </span>
    </>
  );
};

export default SignUpForm;
