import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const RegistrationForm = () => {
  const [form, setForm] = useState({});

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
          name="fname"
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
          name="address"
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
    </Form>
  );
};
