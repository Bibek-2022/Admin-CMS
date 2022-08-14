import React from "react";
import { Table } from "react-bootstrap";
import AdminLayout from "../../layout/AdminLayout";

const User = () => {
  return (
    <AdminLayout>
      <h4 className="py-5">Customer Management</h4>

      <Table striped hover bordered>
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Action</td>
          </tr>
        </thead>
      </Table>
    </AdminLayout>
  );
};

export default User;
