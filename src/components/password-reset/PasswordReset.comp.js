import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
export const ResetPassword = ({
  handleOnchange,
  email,
  handleOnResetSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Password Reset</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={handleOnchange}
                required
              />
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a
            href="#!"
            className="text-info text-decoration-none"
            onClick={() => formSwitcher("login")}
          >
            Login Now?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.prototype = {
  handleOnchange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,

  email: PropTypes.string.isRequired,
};
