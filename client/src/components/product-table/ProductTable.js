import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../../pages/products/productAction";
import { CustomModal } from "../custom-modal/CustomModal";
import { Link } from "react-router-dom";
const API_ROOT_URL = "http://localhost:8000/";
export const ProductTable = () => {
  const dispatch = useDispatch();
  const [displayProducts, setDisplayProduct] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    !displayProducts.length && dispatch(fetchProductsAction());
    products.length && setDisplayProduct(products);
  }, [products, dispatch, displayProducts]);

  return (
    <div>
      <Row className="mt-5">
        <Col>
          <p>{displayProducts.length} Products found </p>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th> #</th>
                <th> Thumbnail</th>
                <th> Status</th>
                <th> Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Sales Price</th>
                <th>Sales Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayProducts.length > 0 &&
                displayProducts.map((item, i) => (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>
                      {console.log(item.thumbnail)}
                      <img
                        src={API_ROOT_URL + item.thumbnail}
                        width="100px"
                        crossOrigin="anonymous"
                      />
                    </td>
                    <td>{item.status}</td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>${item.price}</td>
                    <td>${item.salePrice}</td>
                    <td>
                      {item.salesStartDate && item.salesStartDate.slice(0, 10)}{" "}
                      {" To "}
                      {item.salesEndDate && item.salesEndDate.slice(0, 10)}
                    </td>
                    <td>
                      <Link to={`/products/edit/${item._id}`}>
                        <Button variant="warning">Edit</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
