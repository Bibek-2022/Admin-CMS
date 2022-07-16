import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePaymentMethodAction,
  getPaymentMethodsAction,
} from "../../pages/paymentMethod/paymentMethodAction";
import Button from "react-bootstrap/Button";
import { deletePaymentMethod } from "../helpers/axiosHelper";
export const PaymentMethodTable = () => {
  const { paymentMethods } = useSelector((state) => state.paymentMethod);
  useEffect(() => {
    dispatch(getPaymentMethodsAction());
  }, []);

  console.log(paymentMethods);
  const dispatch = useDispatch();

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      console.log(_id);
      dispatch(deletePaymentMethodAction(_id));
    }
  };
  return (
    <div className="table">
      <div>Payment Method Found</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Status</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
