import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { requestOTP } from "../../components/helpers/axiosHelper";
import { CustomInput } from "../../custom-input/CustomInput";
import { MainLayout } from "../../layout/MainLayout";

export const ResetPassword = () => {
  const [showForm, setShowForm] = useState("otp");
  const [email, setEmail] = useState("");

  const handleOnOTPRequest = async (e) => {
    e.preventDefault();
    const responsePromise = requestOTP({ email });
    toast.promise(responsePromise, { pending: "Please wait" });
    const { status, message } = await responsePromise;
    console.log(status, message);
    toast[status](message);
    status === "success" && setShowForm("password");
  };

  const otpRequest = {
    label: "Request OTP",
    name: "email",
    type: "email",
    placeholder: "Email",
  };
  const fields = [
    {
      label: "OTP",
      name: "otp",
      placeholder: "123456",
      required: true,
      type: "number",
    },

    {
      label: "New Password",
      name: "password",
      placeholder: "******",
      required: true,
      type: "password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      placeholder: "******",
      required: true,
      type: "password",
    },
  ];
  return (
    <div>
      <MainLayout>
        <div className="reg-form d-flex justify-content-center mt-5">
          {showForm === "otp" && (
            <Form onSubmit={handleOnOTPRequest}>
              <h3>Forget Password</h3>
              <hr />
              <div className="py-3">Request an OTP to reset your password</div>
              <CustomInput
                {...otpRequest}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <CustomInput
                type="submit"
                className="btn btn-outline-primary"
                value="Request OTP"
              />
            </Form>
          )}

          {showForm === "password" && (
            <Form>
              <h3>Reset Password</h3>
              <hr />
              <div className="py-3">Request an OTP to reset your password</div>
              {fields.map((field, i) => (
                <CustomInput key={i} {...field} />
              ))}

              <CustomInput
                type="submit"
                className="btn btn-outline-primary"
                value="updatePassword"
              />
              <div className="text-right" onClick={() => setShowForm("otp")}>
                Request OTP again
              </div>
            </Form>
          )}
        </div>
      </MainLayout>
    </div>
  );
};
