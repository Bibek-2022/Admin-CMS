import React from "react";
import { Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const Orders = () => {
  return (
    <AdminLayout>
      <h4>Order Management</h4>
      <div className="d-flex justify-content-between mb-2">
        <div className="">50 FOUND</div>
        <div className="">
          <Form.Control placeholder="Search By Buyer Name" />
        </div>

        <div className="">
          <Form.Select defaultValue="">
            <option value=""></option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="cancelled">Cancelled</option>
          </Form.Select>
        </div>
      </div>
      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Buyer Name</th>
            <th>Order Total</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Active</td>
            <td>Bla</td>
            <td>Bla</td>
            <td>Bla</td>
            <td>
              <Link to={`/orders/${2}`}></Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </AdminLayout>
  );
};

export default Orders;
