import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { CustomTable } from "../../components/custom-table/CustomTable";
import AdminLayout from "../../layout/AdminLayout";
import { fetchProductsAction } from "../products/productAction";

// ====fake data
//client
const clientHead = ["First Name", "Last Name", "Joined Date"];
const clientInfo = [
  {
    fName: "prem",
    lName: "Acharya",
    joinedAt: "2020-2-10",
  },
  {
    fName: "Jon",
    lName: "Doe",
    joinedAt: "2020-2-10",
  },
  {
    fName: "prem",
    lName: "Acharya",
    joinedAt: "2020-2-10",
  },
];

// order
const orderHeader = ["status", "name", "Order Date", "Order Total"];
const orderData = [
  {
    status: "Processing",
    name: "Prem Acharya",
    orderDate: "2022-10-10",
    orderTotal: 456,
  },
  {
    status: "Processing",
    name: "Prem Acharya",
    orderDate: "2022-10-10",
    orderTotal: 456,
  },
  {
    status: "Processing",
    name: "Prem Acharya",
    orderDate: "2022-10-10",
    orderTotal: 456,
  },
  {
    status: "Processing",
    name: "Prem Acharya",
    orderDate: "2022-10-10",
    orderTotal: 456,
  },
  {
    status: "Processing",
    name: "Prem Acharya",
    orderDate: "2022-10-10",
    orderTotal: 456,
  },
];

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  const totalProduct = products.length;
  const activeProduct = products.filter(
    (item) => item.status === "active"
  ).length;
  const inActiveProduct = totalProduct - activeProduct;

  return (
    <AdminLayout>
      <h4 className="pt-4">DASHBORAD</h4>
      <hr />
      <div className="products mb-3">
        <h5>Product summary</h5>
        <Row className="g-3 mt-4">
          <Col>
            <CustomCard title="Total Products" count={totalProduct} />
          </Col>
          <Col>
            <CustomCard title="Active Products" count={activeProduct} />
          </Col>
          <Col>
            <CustomCard title="Inactive Products" count={inActiveProduct} />
          </Col>
        </Row>
      </div>
      <div className="user-info mb-3">
        <h5>Clients summary</h5>
        <CustomTable tableHeader={clientHead} tableData={clientInfo} />
      </div>
      <div className="latest-orders-info mb-3">
        <h5>Latest 5 orders</h5>
        <CustomTable tableHeader={orderHeader} tableData={orderData} />
      </div>
      <div className="top selling-products mb-3">
        <h5>Top selling Products</h5>
      </div>
    </AdminLayout>
  );
};
