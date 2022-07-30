import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  requestOTP,
  resetPassword,
} from "../../components/helpers/axiosHelper";
import { CustomInput } from "../../custom-input/CustomInput";
import { MainLayout } from "../../layout/MainLayout";
const initialState = {
  otp: "",
  password: "",
  confirmPassword: "",
};
export const ResetPassword = () => {
  const [showForm, setShowForm] = useState("otp"); // otp || password
  const [email, setEmail] = useState("");

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    let hasError = "";

    if (name === "password" || name === "confirmPassword") {
      !disableBtn && setDisableBtn(true);
    }

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "confirmPassword") {
      const { password } = form;

      if (password !== value) {
        hasError = "Password do not match";
      }

      if (password.length < 6) {
        hasError = "Password must be longer than 6 characters";
      }

      if (!/[a-z]/.test(password)) {
        hasError = "Password must contain Lowercase";
      }

      if (!/[A-Z]/.test(password)) {
        hasError = "Password must contain Uppercase";
      }

      if (!/[0-9]/.test(password)) {
        hasError = "Password must contain number";
      }

      if (!password) {
        hasError = "New password must be provided";
      }

      setError(hasError);
      !hasError && setDisableBtn(false);
    }
  };

  const handleOnOTPRequest = async (e) => {
    e.preventDefault();

    const responsePromise = requestOTP({ email });
    toast.promise(responsePromise, { pending: "Please wiat...." });

    const { status, message } = await responsePromise;
    toast[status](message);
    status === "success" && setShowForm("password");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmPassword, ...rest } = form;
    const responsePromise = resetPassword({ email, ...rest });

    toast.promise(responsePromise, { pending: "Please wait ..." });
    const { status, message } = await responsePromise;
    toast[status](message);
    status === "success" && setForm(initialState);
  };

  const otpRequest = {
    label: "Request OTP",
    name: "email",
    type: "email",
    placeholder: "eamil@your.co",
    required: true,
  };

  const fields = [
    {
      label: "OTP",
      name: "otp",
      placeholder: "123456",
      type: "number",
      required: true,
      value: form.otp,
    },
    {
      label: "New Password",
      name: "password",
      placeholder: "******",
      required: true,
      type: "password",
      value: form.password,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      placeholder: "******",
      required: true,
      type: "password",
      value: form.confirmPassword,
    },
  ];
  console.log(form);
  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center mt-5">
        {showForm === "otp" && (
          <Form onSubmit={handleOnOTPRequest}>
            <h3>Forget Password?</h3>
            <hr />
            <div className="py-3">Request an OTP to reset your password</div>
            <CustomInput
              {...otpRequest}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              type="submit"
              className="btn btn-outline-danger"
              value="Request OTP"
            />
          </Form>
        )}

        {showForm === "password" && (
          <Form onSubmit={handleOnSubmit}>
            <h3>Reset Password</h3>
            <hr />
            <div className="py-3">Reset you new password</div>

            {fields.map((field, i) => (
              <CustomInput key={i} {...field} onChange={handleOnChange} />
            ))}

            <Form.Group>
              <Form.Text muted>
                New Password should contain atleaset one uppdercase, one
                lowercase, a number and minimun of 6 characters
              </Form.Text>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Text className="text-danger fs-3 fw-bolder">
                {error}
              </Form.Text>
            </Form.Group>

            <CustomInput
              type="submit"
              className="btn btn-danger"
              value="Update password"
              disabled={disableBtn}
            />
            <div
              className="text-right mt-5"
              onClick={() => setShowForm("otp")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              Request OTP again
            </div>
            <div className="text-end">
              <a href="/">Login</a>Now
            </div>
          </Form>
        )}
      </div>
    </MainLayout>
  );
};
