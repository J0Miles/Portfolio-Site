import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/homepage";
import About from "./components/About/aboutpage";
import Contact from "./components/Contact/contactpage";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "./MJ.png";

import Footer from "./components/footer";

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
          <Navbar className="border-bottom" id="nav">
            <img className="logo" src={logo} />
            <Navbar.Brand id="header-text">Jordan Miles</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" id="header-text" to="/">
                  Home
                </Link>
                <Link className="nav-link" id="header-text" to="/about">
                  About
                </Link>
                <Link className="nav-link" id="header-text" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                body={this.state.home.body}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <About
                title={this.state.about.title}
                subTitle={this.state.about.subTitle}
                body={this.state.about.body}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => <Contact title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
