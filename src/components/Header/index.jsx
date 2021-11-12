import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Typography } from "@mui/material";

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Typography>ADMIN</Typography>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Link to="/product" className="text-decoration-none px-3">
              Sản phẩm
            </Link>
            <Link to="/order" className="text-decoration-none px-3">
              Đặt hàng
            </Link>
            <Link to="/synthetic" className="text-decoration-none px-3">
              Tổng hợp
            </Link>

            <Link to="/accountant" className="text-decoration-none px-3">
              Kế toán
            </Link>

            <Link to="/media" className="text-decoration-none px-3">
              Truyền thông
            </Link>

            <Link to="/analysis" className="text-decoration-none px-3">
              Phân tích
            </Link>

            <Link to="/master" className="text-decoration-none px-3">
              Quản lý Master
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
