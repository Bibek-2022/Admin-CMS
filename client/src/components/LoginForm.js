import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAction } from "../pages/login-registration/loginRegisterAction";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const { user } = useSelector((state) => state.adminUser);

  const location = useLocation();
  const origin =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/dashboard";

  useEffect(() => {
    user._id && navigate(origin);
  }, [user, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(loginAction(form));
    // setForm({});
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="*********"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log In
      </Button>

      <div className="text-end">
        Forgot Password <a href="/password-reset">Reset </a>Now
      </div>
    </Form>
  );
};

export default LoginForm;
