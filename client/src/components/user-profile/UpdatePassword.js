import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";

import { CustomInput } from "../../custom-input/CustomInput";

const initialState = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};
export const UpdatePassword = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);

  const hadleOnChage = (e) => {
    let { name, value } = e.target;
    if (name === "password" || name === "confirmPassword") {
      setError("");
      !disableBtn && setDisableBtn(true);
    }
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "confirmPassword") {
      const { password } = form;
      password !== value && setError("Password do not match");
      password.length < 6 &&
        setError("Password must be longer than 6 character");
      !/[a-z]/.test(password) && setError("Password must contain lower case");
      !/[A-Z]/.test(password) && setError("Password must contain upper case");
      !/[0-9]/.test(password) && setError("Password must contain Number");

      !password && setError("New Password must be provided");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const disabledBtn = () => {
    !error && setDisableBtn(false);
  };

  const inputFields = [
    {
      label: "Current Password",
      name: "currentPassword",
      required: true,
      type: "password",
      value: form.currentPassword,
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      value: form.password,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      type: "password",
      value: form.confirmPassword,
      onBlur: disabledBtn,
    },
  ];
  return (
    <div className="mt-5 mb-5">
      <h4>Update your Password</h4>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={hadleOnChage} />
        ))}

        <Form.Text muted>
          New Password Should Contain at least one uppercase , lowercase and
          your card number
        </Form.Text>

        <Form.Group>
          <Form.Text className="text-danger fs-6 fw-bolder">
            {" "}
            {error}{" "}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Control
            type="submit"
            value="Update Password"
            className="btn btn-danger"
            disabled={disableBtn}
          />
        </Form.Group>
      </Form>
    </div>
  );
};
