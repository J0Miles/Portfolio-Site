import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "./App.css";
import logo from "./MJ.png";
import Footer from "./components/footer";
import Home from "./components/Home/homepage";
import About from "./components/About/aboutpage";
import Contact from "./components/Contact/contactpage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Jordan Miles",
      showNavLogo: false,
      isHalfway: false,
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

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const halfway = window.scrollY > window.innerHeight / 2;
    if (halfway) {
      this.setState({
        isHalfway: true
      });
    }
  };

  render() {
    return (
      <Router>
        <Container className="p-0" fluid>
          <Navbar className="border-bottom" id="nav" sticky="top">
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
                isHalfway={this.state.isHalfway}
                onScroll={this.handleScroll}
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
