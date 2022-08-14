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
  }, [review, dispatch, displayReviews]);
  console.log(displayReviews);
  return (
    <Row className="mt-5">
      <Col>
        <p>Rating Found</p>
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
          <tbody>
            <tr>
              <td>23</td>
              <td>asdf</td>
              <td>asdf</td>
              <td>asdf</td>
              <td>asdf</td>
              <td>asdf</td>
              <td>asdf</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
