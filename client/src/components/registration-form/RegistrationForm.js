import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { postAdminUser } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

export const RegistrationForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // if (form.password !== form.confirmPassword) {
    //   return toast.error("Passwords do not match");
    // }
    const { confirmPassword, ...rest } = form;
    console.log(rest);
    //const response = updateAdminPassword({ ...rest, email: user.email });

    //    toast.promise(response, { pending: "Please wait ..." });
    // const { status, message } = await response;
    // toast[status](message);
    const response = postAdminUser(rest);
    toast.promise(response, { pending: "Please wait ..." });
    const { status, message } = await response;
    toast[status](message);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h3>Registration Form</h3>
      <hr />
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="fName"
          placeholder="First Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="lName"
          placeholder="Last Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="phone"
          placeholder="Phone Number"
        />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>DOB</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="date"
          name="dob"
          placeholder="Date of Birth"
        />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="Address"
          placeholder="Address"
        />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="password"
          name="password"
          placeholder="*********"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="password"
          name="confirmPassword"
          placeholder="***********"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
      <div className="text-end">
        Already Registered
        <Link to="/">
          {" "}
          Login <br />
        </Link>
        Now
      </div>
    </Form>
  );
};
