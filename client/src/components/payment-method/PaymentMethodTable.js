import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentMethodsAction } from "../../pages/paymentMethod/paymentMethodAction";
export const PaymentMethodTable = () => {
  const { paymentMethods } = useSelector((state) => state.paymentMethod);
  useEffect(() => {
    dispatch(getPaymentMethodsAction());
  }, []);

  console.log(paymentMethods);
  const dispatch = useDispatch();
  return (
    <div className="table">
      <div>Payment Method Found</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
