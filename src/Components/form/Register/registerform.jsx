import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../form.css";

const RegisterForm = () => {
  return (
    <div>
    <div className="title">
      <h1>Register Here</h1>
    </div>
    <div className="login-form">
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="search"
            placeholder="Enter Email"
            className="me-2"
            aria-label="Search"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="me-2"
              aria-label="Search"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="search"
              placeholder="Enter Email"
              className="me-2"
              aria-label="Search"
            />
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  </div>
  )
}

export default RegisterForm