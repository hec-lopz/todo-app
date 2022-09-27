import { Form, FormGroup, Input, Button, SignUpLink } from "../../styles/Form";
import { useForm } from "../../hooks";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { useEffect } from "react";

export const SignInForm = ({ switchForm, closeModal }) => {
  const { data: formData, handleChange } = useForm({ email: "", password: "" });

  const { email, password } = formData;

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) toast.error(message, { autoClose: 1800 });
    if (isSuccess) {
      toast.success(`Welcome ${user.name}`);
      closeModal();
    }

    dispatch(reset());
  }, [user, isError, isSuccess, dispatch, message, closeModal]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/@/.test(formData.email)) {
      toast.error("Email not valid");
      return;
    }

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };
  return (
    <>
      <h3>Sign in with email</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            value={formData.email}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            value={formData.password}
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
