import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../custom-input/CustomInput";

const initialState = {
  status: "inactive",
  catID: null,
  name: "",
  sku: "",
  description: "",
  price: 0,
  qty: 0,
  salesPrice: 0,
  salesStartDate: null,
  salesEndDate: null,
};

export const ProductForm = () => {
  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter product name",
      required: true,
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      placeholder: "Unique product key",
      required: true,
    },
    {
      label: "QTY",
      name: "qty",
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "100",
      required: true,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      placeholder: "80",
    },
    {
      label: "Sales start date",
      name: "salesStartDate",
      type: "date",
    },
    {
      label: "Sales end date",
      name: "salesEndDate",
      type: "date",
    },
    {
      label: "Description",
      name: "description",
      as: "textarea",
      placeholder: "Write product details",
      required: true,
      rows: 5,
    },
    {
      label: "Upoad Images",
      name: "images",
      type: "file",
      required: true,
      rows: 5,
      multiple: true,
      accept: "image/*",
    },
  ];
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Check type="switch" label="status" name="status" />
        </Form.Group>

        <Form.Select defaultValue="" name="parentCatId">
          <option value="">==Select Category==</option>
        </Form.Select>
        {fields.map((field, i) => (
          <CustomInput {...field} />
        ))}
        <Button variant="primary" type="submit">
          Submit Product
        </Button>
      </Form>
    </div>
  );
};
