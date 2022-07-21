import React, { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import Table from "react-bootstrap/Table";
import { PaymentMethodTable } from "../../components/payment-method/PaymentMethodTable";
import { Button } from "react-bootstrap";
import { AddPaymentMethodForm } from "../../components/payment-method/AddPaymentMethodForm";
import { useDispatch } from "react-redux";
import { toggleShowModal } from "../system-state/SystemSlice";
import { EditPaymentMethodForm } from "../../components/payment-method/EditPaymentMethodForm";

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState("");

  const handleOnShowForm = () => {
    setShowForm("add");
    dispatch(toggleShowModal(true));
  };
  return (
    <AdminLayout>
      <h3 className="p-3">Payment Methods</h3>
      <div className="text-end">
        <Button varient="primary" onClick={handleOnShowForm}>
          <i class="fa-solid fa-plus"></i> Add Payment Method
        </Button>
      </div>
      <AddPaymentMethodForm />

      <PaymentMethodTable showForm={showForm} setShowForm={setShowForm} />
    </AdminLayout>
  );
};

export default PaymentMethod;
