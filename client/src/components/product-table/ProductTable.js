import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../../pages/products/productAction";
import { CustomModal } from "../custom-modal/CustomModal";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const [displayProducts, setDisplayProduct] = useState([]);
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    !displayProducts.length && dispatch(fetchProductsAction());
    setDisplayProduct(products);
  }, [products]);

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
