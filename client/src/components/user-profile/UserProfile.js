import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { CustomInput } from "../../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminProfileAction } from "../../pages/admin-profile/adminAction";

const initialState = {
  fName: "",
  lName: "",
  phone: "",
  email: "",
  dob: "",
  Address: "",
  currentPassword: "",
};
export const UserProfile = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const { user } = useSelector((state) => state.adminUser);

  useEffect(() => {
    setForm(user);
  }, []);

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
    const { fName, lName, email, phone, Address, currentPassword, dob } = form;
    dispatch(
      updateAdminProfileAction({
        fName,
        lName,
        email,
        phone,
        Address,
        currentPassword,
        dob,
      })
    );
  };

  console.log(form);
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
      name: "Address",
      placeholder: "3 Sydney",
      type: "text",
      value: form.Address,
    },
    {
      label: "Current Password",
      name: "currentPassword",
      placeholder: "Current Password",
      type: "password",
      value: form.currentPassword,
      required: true,
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
