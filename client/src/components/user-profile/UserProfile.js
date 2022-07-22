import React, { useState } from "react";
import { Form } from "react-bootstrap";

import { CustomInput } from "../../custom-input/CustomInput";

const initialState = {
  fName: "",
  lName: "",
  phone: "",
  email: "",
  dob: "",
  address: "",
};
export const UserProfile = () => {
  const [form, setForm] = useState(initialState);

  const hadleOnChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      placeholder: "Sam",
      required: true,
      type: "text",
      value: form.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      placeholder: "Smith",
      required: true,
      type: "text",
      value: form.lName,
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "0411111111",
      required: false,
      type: "numnber",
      value: form.phone,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "your@email.com",
      required: true,
      disabled: true,
      type: "email",
      value: form.email,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      value: form.dob,
    },
    {
      label: "Address",
      name: "address",
      placeholder: "3 Sydney",
      type: "text",
      value: form.address,
    },
    {
      className: "btn btn-warning",
      type: "submit",
      value: "Update Profile",
    },
  ];
  return (
    <div>
      <h4>Update your profile</h4>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={hadleOnChange} />
        ))}
      </Form>
    </div>
  );
};
