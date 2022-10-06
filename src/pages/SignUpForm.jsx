import { Form, FormGroup, Input, Button, SignUpLink } from "../styles/Form";
import { useForm } from "../hooks";
import { useSelector, useDispatch } from "react-redux";
import { reset, register } from "../features/auth/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import { useNavigate } from "react-router";

export const SignUpForm = () => {
  const { data: formData, handleChange } = useForm({
    email: "",
    password: "",
    password2: "",
    name: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/");
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = formData;

    if (password !== password2) {
      toast.error("Passwords don't match");
      return;
    }

    const userData = {
      name,
      email,
      password,
    };
    dispatch(register(userData));
  };
  return (
    <Modal>
      <h3>Sign up with email</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <Input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password2">Confirm your password</label>
          <Input
            value={formData.password2}
            onChange={handleChange}
            type="password"
            name="password2"
          />
        </FormGroup>
        <Button>Sign up</Button>
      </Form>
      <span>
        Already have an account? <SignUpLink to="/login">Sign in</SignUpLink>
      </span>
    </Modal>
  );
};

export default SignUpForm;
