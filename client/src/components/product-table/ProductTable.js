import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { CustomModal } from "../custom-modal/CustomModal";

export const ProductTable = () => {
  return (
    <Row className="mt-5">
      <Col>
        <p>Product Found</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
