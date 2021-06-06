import React from "react";
import { Nav, Navbar } from "react-bootstrap";
export const Header = () => {
  return (
    <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
      <Navbar.Brand>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/Dashboard">Tickets</Nav.Link>
          <Nav.Link href="/Dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
