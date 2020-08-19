import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./Home/homepage";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Jordan Miles",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Modern Web Design & Development",
        subTitle: "UI/UX Focused",
        body: ""
      },
      about: {
        title: "About Me",
        subTitle: "",
        body: ""
      },
      contact: {
        title: "Contact Me"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid>
          <Navbar className="border-bottom">
            <Navbar.Brand>Jordan Miles</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
