import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CustomInput } from "../../custom-input/CustomInput";
export const AddCatForm = () => {
  const inputFileds = [{}];
  return (
    <div>
      <h4>Add New Category</h4>
      <Form>
        <Row className="g-2 mt-3">
          <Col md="2">
            <Form.Group controlId="formGridState">
              {" "}
              <Form.Check label="status" type="switch"></Form.Check>
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group controlId="formGridState">
              <Form.Select defaultValue="Choose...">
                <option>Select Parent Category...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="4">
            {" "}
            <CustomInput name="name" placeholder="Category Name" />
          </Col>
          <Col md="3">
            {" "}
            <Button type="submit">Add Category</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
