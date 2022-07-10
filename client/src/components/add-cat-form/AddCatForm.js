import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { CustomInput } from "../../custom-input/CustomInput";
import { postCategoryAction } from "../../pages/Categories/catAction";
const initialState = {
  status: "inactive",
  name: "",
  parentCatId: null,
};
export const AddCatForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const { categories } = useSelector((state) => state.categories);
  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postCategoryAction(form));
  };

  return (
    <div>
      <h4>Add New Category</h4>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2 mt-3">
          <Col md="2">
            <Form.Group controlId="formGridState">
              {" "}
              <Form.Check
                name="status"
                label="status"
                type="switch"
                onChange={handleOnChange}
              ></Form.Check>
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group controlId="formGridState">
              <Form.Select
                name="parentCatId"
                defaultValue=""
                onChange={handleOnChange}
              >
                <option>Select Parent Category...</option>
                {categories.map((item) => {
                  return (
                    item.parentCatId === null && (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    )
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="4">
            {" "}
            <CustomInput
              name="name"
              placeholder="Category Name"
              onChange={handleOnChange}
              required
            />
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
