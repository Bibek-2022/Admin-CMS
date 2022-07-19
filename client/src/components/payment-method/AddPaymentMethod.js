import React from "react";
import { Form } from "react-bootstrap";
import { CustomInput } from "../../custom-input/CustomInput";
export const AddPaymentMethod = () => {
  const inputFields = [
    {
      name: "name",
    },
  ];
  return (
    <div>
      <Form>
        <CustomInput
          label="Name"
          name="name"
          type="text"
          placeholder="Enter payment method"
        />
        <CustomInput
          label="Description"
          name="Description"
          type="text"
          as="textarea"
          placeholder="Enter details method"
        />
      </Form>
    </div>
  );
};
