import React from "react";
import { Card } from "react-bootstrap";
import "./customCard.style.css";

export const CustomCard = ({ title, count }) => {
  return (
    <Card style={{ minWidth: "18rem" }}>
      <Card.Body className="py-3 text-light">
        <Card.Title className="mt-5">{count}</Card.Title>
        <Card.Text className="mt-5 fw-bolder fs-2">{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};
