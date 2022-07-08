import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleShowSideMenu } from "../pages/system-state/SystemSlice";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          {" "}
          <i
            class="fa-solid fa-bars"
            onClick={() => dispatch(toggleShowSideMenu())}
          ></i>{" "}
          CMS admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Log In
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
