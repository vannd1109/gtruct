import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";

function Header(props) {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="position-fixed w-100"
      style={{ zIndex: "12" }}
    >
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-decoration-none">
            ERP
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <NavLink to="/product" className="text-decoration-none px-3">
              Sản phẩm
            </NavLink>
            <NavLink to="/order" className="text-decoration-none px-3">
              Đặt hàng
            </NavLink>
            <NavLink to="/synthetic" className="text-decoration-none px-3">
              Tổng hợp
            </NavLink>

            <NavLink to="/account" className="text-decoration-none px-3">
              Kế toán
            </NavLink>

            <NavLink to="/media" className="text-decoration-none px-3">
              Truyền thông
            </NavLink>

            <NavLink to="/analysis" className="text-decoration-none px-3">
              Phân tích
            </NavLink>

            <NavLink to="/master" className="text-decoration-none px-3">
              Quản lý Master
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
