import { Button, Col, Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const CategoryTable = () => {
  return (
    <Row className="mt-5">
      <Col>
        <p>Product Found</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Check />
              </th>
              <th>Status</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>Active</td>
              <td>Furniture</td>
              <td>
                <Button variant="warning"> Edit </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
