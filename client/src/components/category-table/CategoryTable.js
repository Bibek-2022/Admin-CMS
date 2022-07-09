import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoriesAction,
} from "../../pages/Categories/catAction";
import { setCategories } from "../../pages/Categories/catSlice";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const [catToDelete, setCatToDelete] = useState([]);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    // alle categories that are checked
    if (value === "all") {
      // add or remove all categories

      checked
        ? setCatToDelete(categories.map((item) => item._id))
        : setCatToDelete([]);
      return;
    }
    // individual category
    if (checked) {
      // add value to the list
      setCatToDelete([...catToDelete, value]);
    } else {
      // remove value from the list

      setCatToDelete(catToDelete.filter((id) => id !== value));
    }
  };
  const handleOnDelete = () => {
    if (window.confirm("Do you want to delete category")) {
      dispatch(deleteCategoryAction({ ids: catToDelete }));
      setCatToDelete([]);
    }
  };
  return (
    <Row className="mt-5">
      <Col>
        <p>Product Found</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Check value="all" onChange={handleOnSelect} />
              </th>
              <th>Status</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr key={item._id}>
                <td>
                  <Form.Check
                    value={item._id}
                    onChange={handleOnSelect}
                    checked={catToDelete.includes(item._id)}
                  />
                </td>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>
                  <Button variant="warning"> Edit </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {catToDelete.length && (
          <Button variant="danger" onClick={handleOnDelete}>
            {" "}
            Delete Selected {catToDelete.length}
          </Button>
        )}
      </Col>
    </Row>
  );
};
