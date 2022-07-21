import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import Table from "react-bootstrap/Table";
import { PaymentMethodTable } from "../../components/payment-method/PaymentMethodTable";
import { Button } from "react-bootstrap";
import { AddPaymentMethodForm } from "../../components/payment-method/AddPaymentMethodForm";

const PaymentMethod = () => {
  return (
    <AdminLayout>
      <h3 className="p-3">Payment Methods</h3>
      <div className="text-end">
        <Button varient="primary">
          <i class="fa-solid fa-plus"></i> Add Payment Method
        </Button>
      </div>
      <AddPaymentMethodForm />
      <PaymentMethodTable />
    </AdminLayout>
  );
};

export default PaymentMethod;
