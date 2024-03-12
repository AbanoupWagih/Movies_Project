import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png";

const NavBar = ({ search }) => {
  const onSearch = (word) => {
    search(word);
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 d-flex align-items-center justify-content-center">
          <Col className="hide-on-mobile" sm="2" lg="2">
            <a href="/">
              <img
                className="logo hide-on-mobile"
                src={logo}
                alt="img for card"
              />
            </a>
          </Col>
          <Col
            xs="12"
            sm="10"
            lg="10"
            
          >
            <div className="search w-100">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
