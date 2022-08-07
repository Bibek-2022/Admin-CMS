import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../custom-input/CustomInput";

export const ProductForm = () => {
  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter product Name",
      required: true,
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      placeholder: "Unique Product Key",
      required: true,
    },
    {
      label: "QTY",
      name: "qty",
      type: "number",
      placeholder: "Enter Quantity",
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
      label: "SalePrice",
      name: "salePrice",
      type: "number",
      placeholder: "Enter Sale Price",
      required: true,
    },
    {
      label: "Sale Start Date",
      name: "saleStartDate",
      type: "date",
    },
    {
      label: "Sale End Date",
      name: "saleEndDate",
      type: "date",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Enter Description",
      row: 5,
    },
    {
      label: "Upload Images",
      name: "images",
      type: "file",
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
