import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../form.css";

const LoginForm = () => {
    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log('hello')
        const token ='123'
        console.log(token)
        localStorage.setItem('token',token)

    }
    const token = localStorage.getItem('token')
    console.log(token,'token from app')
    
    const handleRemoveToken = () =>{
      localStorage.removeItem('token')
    }

  return (
    <div>
      <div className="title">
        <h1>Login Here</h1>
      </div>
      <button onClick={handleRemoveToken}> Remove</button>
      <div className="login-form">
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter Email"
              className="me-2"
              aria-label="Search"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              className="me-2"
              aria-label="Search"
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button type='submit' variant="outline-success">Login</Button>
        </Form>
</div>      
    </div>
  );
};

export default LoginForm;
