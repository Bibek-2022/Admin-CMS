import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePaymentMethodAction,
  getPaymentMethodsAction,
} from "../../pages/paymentMethod/paymentMethodAction";
import Button from "react-bootstrap/Button";
import { deletePaymentMethod } from "../helpers/axiosHelper";
import { toggleShowModal } from "../../pages/system-state/SystemSlice";
import { AddPaymentMethodForm } from "./AddPaymentMethodForm";
import { EditPaymentMethodForm } from "./EditPaymentMethodForm";

export const PaymentMethodTable = ({ showForm, setShowForm }) => {
  const dispatch = useDispatch();
  // const [showForm, setShowForm] = useState(false);
  const [selectedPayamentMethod, setSelectedPaymentMethod] = useState({});

  const { paymentMethods } = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    dispatch(getPaymentMethodsAction());
  }, []);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      //dispach aciton
      dispatch(deletePaymentMethodAction(_id));
    }
  };

  const handleOnEdit = (item) => {
    setSelectedPaymentMethod(item);
    setShowForm("edit");
    dispatch(toggleShowModal(true));
  };

  const whichForm = {
    add: <AddPaymentMethodForm />,
    edit: (
      <EditPaymentMethodForm selectedPayamentMethod={selectedPayamentMethod} />
    ),
  };

  console.log(showForm);
  return (
    <div className="table">
      {whichForm[showForm]}

      <div>{paymentMethods.length} Payment Methods found!</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="warning" onClick={() => handleOnEdit(item)}>
                  Edit
                </Button>{" "}
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
