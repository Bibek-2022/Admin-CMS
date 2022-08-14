import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewsAction } from "../../pages/review/ReviewAction";

export const ReviewTable = () => {
  const dispatch = useDispatch();
  const [displayReviews, setDisplayReview] = useState([]);
  const { review } = useSelector((state) => state.review);
  useEffect(() => {
    dispatch(fetchReviewsAction());
    setDisplayReview(review);
  }, [dispatch]);
  console.log(displayReviews);
  return (
    <Row className="mt-5">
      <Col>
        <p>{displayReviews.length} Rating Found</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>review</th>
              <th>ProductId</th>
              <th>ProductName</th>
              <th>rating</th>
              <th>reviewedBy</th>
              <th>reviewed By ID</th>
            </tr>
          </thead>
          {review.map((x, i) => (
            <tbody>
              <tr>
                <td>{x._id}</td>
                <td>{x.reviews}</td>
                <td>{x.productId}</td>
                <td>{x.productName}</td>
                <td>{x.rating}</td>
                <td>{x.reviewedBy}</td>
                <td>{x.reviewedById}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Col>
    </Row>
  );
};
