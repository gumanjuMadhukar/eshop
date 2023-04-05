import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import SearchBox from "../Search/searchBox";
import { useSelector } from "react-redux";
import './header.css'

const Header = () => {
  const navData = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Shop", link: "/about" },

  ];
  const state = useSelector((state)=> state.handleCart)
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to={'/'}>EShop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              {navData.map((item) => {
                return (
                  <Nav key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                  </Nav>
                );
              })}
            </Nav>
            <Nav>
              <SearchBox/>
            </Nav>
            <Nav>
              <Link to={"/login"}>
                <Button variant="outline-danger">Login</Button>{" "}
              </Link>
              <Link to={"/register"}>
                <Button variant="outline-success">Register</Button>{" "}
              </Link>
              <Link to={"/cart"}>
                <Button variant="outline-info" className="cart"><img src="/shopping-cart-icon.png" alt="cart-icon" /><span>{state.length}</span></Button>{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
