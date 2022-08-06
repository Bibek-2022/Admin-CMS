import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../../pages/products/productAction";
import { CustomModal } from "../custom-modal/CustomModal";
import { Link } from "react-router-dom";
export const ProductTable = () => {
  const dispatch = useDispatch();
  const [displayProducts, setDisplayProduct] = useState([]);
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    !displayProducts.length && dispatch(fetchProductsAction());
    products.length && setDisplayProduct(products);
  }, [products, dispatch, displayProducts]);

  return (
    <Row className="mt-5">
      <Col>
        <p>{displayProducts.length}Product Found</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>~#</th>
              <th>Status</th>
              <th>Name</th>
              <th>Quanitity</th>
              <th>Price</th>
              <th>Sales Price</th>
              <th>Sales Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts.length > 0 &&
              displayProducts.map((item, i) => {
                return (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>
                      <img src={item.thumbnail} alt="" width="150px" />
                    </td>
                    <td>{item.status}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.salesPrice}</td>
                    <td>
                      {item.saleStartDate.slice(0, 10)}-
                      {item.saleEndDate.slice(0, 10)}
                    </td>

                    <td>
                      <Link to={`/product/edit/${item._id}`}>
                        <Button varient="warning">Edit</Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
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
